import VirtualJoystick from './VirtualJoystick.js';

export default class InputManager {
  constructor(scene, { isTouchDevice, onDirection, onShoot }) {
    this.scene = scene;
    this.isTouch = !!isTouchDevice;
    this.onDirection = onDirection;
    this.onShoot = onShoot;

    this.joystick = null;

    if (this.isTouch) {
      // Mobile: joystick + shoot button
      this.joystick = new VirtualJoystick(scene);
      this.setupShootButton();
    } else {
      // Desktop: keyboard + mouse click shoot
      this.setupKeyboard();
      this.setupDesktopPointerShoot();
    }
  }

  /* ===================== DESKTOP ===================== */
  setupKeyboard() {
    const k = this.scene.input.keyboard;
    this.cursors = k.createCursorKeys();
    const keys = k.addKeys('W,A,S,D,SPACE,CTRL');

    this.keys = {
      up:    [this.cursors.up,    keys.W],
      down:  [this.cursors.down,  keys.S],
      left:  [this.cursors.left,  keys.A],
      right: [this.cursors.right, keys.D],
    };

    // Shoot with Space or Ctrl
    keys.SPACE.on('down', () => this.onShoot());
    keys.CTRL.on('down',  () => this.onShoot());

    // Prevent browser from stealing keys
    this.scene.input.keyboard?.addCapture([
      Phaser.Input.Keyboard.KeyCodes.LEFT,
      Phaser.Input.Keyboard.KeyCodes.RIGHT,
      Phaser.Input.Keyboard.KeyCodes.UP,
      Phaser.Input.Keyboard.KeyCodes.DOWN,
      Phaser.Input.Keyboard.KeyCodes.SPACE,
      Phaser.Input.Keyboard.KeyCodes.CONTROL,
    ]);
  }

  getKeyDirection() {
    if (this.isTouch) return null;
    const down = (arr) => arr && arr.some(k => k?.isDown);
    if (down(this.keys.left))  return 'left';
    if (down(this.keys.right)) return 'right';
    if (down(this.keys.up))    return 'up';
    if (down(this.keys.down))  return 'down';
    return null;
  }

  // Robust desktop shooting: mouse/trackpad primary click anywhere
  setupDesktopPointerShoot() {
    this.scene.input.mouse?.disableContextMenu();
    this.scene.input.on('pointerdown', (p) => {
      const looksLikeMouse = (p.pointerType === 'mouse') || (p.buttons === 1 && !this.isTouch);
      if (looksLikeMouse) this.onShoot();
    });
  }

  /* ===================== MOBILE (joystick + shoot btn) ===================== */
  setupShootButton() {
    const pad = 12;
    const size = 76;
    const btn = this.scene.add.image(
      this.scene.scale.width - size - pad,
      this.scene.scale.height - size - pad,
      'shootBtn'
    ).setScrollFactor(0)
     .setDepth(10000)
     .setInteractive({ useHandCursor: true });

    // Tap = shoot. Stop propagation to avoid starting joystick when pressing the button.
    btn.on('pointerdown', (p) => {
      p.event?.stopPropagation();
      this.onShoot();
    });

    this.scene.scale.on('resize', (sz) => {
      btn.setPosition(sz.width - size - pad, sz.height - size - pad);
    });
  }

  /** Returns a normalized vector from the joystick when on mobile. */
  getJoystickVector() {
    return this.joystick ? this.joystick.getVector() : { x: 0, y: 0 };
  }

  destroy() {
    this.joystick?.destroy();
  }
}

