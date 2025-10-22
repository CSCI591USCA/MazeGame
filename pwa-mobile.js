(() => {
  const ensureCanvas = () => {
    const cnv = document.querySelector('canvas');
    if (cnv && !cnv.hasAttribute('tabindex')) cnv.setAttribute('tabindex', '0');
    return cnv;
  };

  const focusCanvas = () => {
    const cnv = ensureCanvas();
    try { cnv && cnv.focus({ preventScroll: true }); } catch {}
    try { window.focus(); } catch {}
  };

  const makeKeyEvent = (type, { key, code, keyCode }) => {
    let e;
    try {
      e = document.createEvent('KeyboardEvent');
      e.initKeyboardEvent(
        type, true, true, window,
        key, 0, '', false, '', false
      );
    } catch {
      e = new KeyboardEvent(type, { key, code, bubbles: true, cancelable: true });
    }

    const setRO = (obj, prop, val) => {
      try { Object.defineProperty(obj, prop, { get: () => val }); } catch {}
    };
    setRO(e, 'key', key);
    setRO(e, 'code', code);
    setRO(e, 'keyCode', keyCode);
    setRO(e, 'which', keyCode);
    return e;
  };

  const sendKey = (type, info) => {
    const ev = makeKeyEvent(type, info);
    window.dispatchEvent(ev);
    document.dispatchEvent(ev);
    const cnv = document.querySelector('canvas');
    if (cnv) cnv.dispatchEvent(ev);
  };

  const CODES = {
    up:    { key: 'ArrowUp',    code: 'ArrowUp',    keyCode: 38 },
    down:  { key: 'ArrowDown',  code: 'ArrowDown',  keyCode: 40 },
    left:  { key: 'ArrowLeft',  code: 'ArrowLeft',  keyCode: 37 },
    right: { key: 'ArrowRight', code: 'ArrowRight', keyCode: 39 },
    space: { key: ' ',          code: 'Space',      keyCode: 32 },
  };

  const pressSpaceOnce = () => {
    focusCanvas();
    sendKey('keydown', CODES.space);
    setTimeout(() => sendKey('keyup', CODES.space), 60);
  };

  // ---------- D-pad (on-screen buttons) ----------
  // This will usually do nothing in iframe, but keeping it causes no harm.
  const dpad = document.getElementById('dpad');
  if (dpad) {
    const held = new Set();
    const press = dir => { if (!held.has(dir)) { held.add(dir); sendKey('keydown', CODES[dir]); } };
    const release = dir => { if (held.delete(dir)) sendKey('keyup', CODES[dir]); };

    dpad.querySelectorAll('button[data-dir]').forEach(btn => {
      const dir = btn.dataset.dir;
      btn.addEventListener('pointerdown', e => { e.preventDefault(); focusCanvas(); press(dir); });
      btn.addEventListener('pointerup',   e => { e.preventDefault(); release(dir); });
      btn.addEventListener('pointercancel', () => release(dir));
      btn.addEventListener('pointerleave',  () => release(dir));
    });

    window.addEventListener('pointerup', () => { [...held].forEach(release); });
  }

  // ---------- Tap-to-Start overlay (sends Space) ----------
  (function tapToStart() {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouch) return;

    const css = `
      #tapToStart{position:fixed;inset:0;background:rgba(0,0,0,.55);
        display:flex;align-items:center;justify-content:center;z-index:9998}
      #tapToStart button{background:#1c8c2c;color:#fff;border:0;padding:14px 20px;
        font-size:18px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.35)}
    `;
    const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);

    const overlay = document.createElement('div'); overlay.id = 'tapToStart';
    const btn = document.createElement('button'); btn.textContent = 'Tap to Start';
    overlay.appendChild(btn); document.body.appendChild(overlay);

    const start = () => { overlay.remove(); pressSpaceOnce(); };
    overlay.addEventListener('pointerdown', (e) => { e.preventDefault(); start(); }, { once: true });

    const cnv = ensureCanvas();
    cnv && cnv.addEventListener('pointerdown', () => pressSpaceOnce());
  })();

  // ---------- NEW: Listen for messages from outer page d-pad ----------
  window.addEventListener('message', (event) => {
    const { type, dir } = event.data || {};
    if (type && dir && CODES[dir]) {
      focusCanvas();
      sendKey(type, CODES[dir]);
    }
  });
})();
