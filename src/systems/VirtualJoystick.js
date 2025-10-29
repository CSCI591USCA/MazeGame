export default class VirtualJoystick {
 
  constructor(scene) {
    this.scene = scene;
    this.active = false;
    this.vec = { x: 0, y: 0 };

    const pad = 12;
    this.base = scene.add.image(0, 0, 'joyBase').setScrollFactor(0).setDepth(10000).setInteractive();
    this.knob = scene.add.image(0, 0, 'joyKnob').setScrollFactor(0).setDepth(10001).setInteractive();
    this.radius = this.base.displayWidth / 2;
    this.knobMax = this.radius - (this.knob.displayWidth / 2);

    const position = (w, h) => {
      const x = pad + this.base.displayWidth / 2;
      const y = h - pad - this.base.displayHeight / 2;
      this.base.setPosition(x, y);
      this.knob.setPosition(x, y);
      this.center = new Phaser.Math.Vector2(x, y);
    };

    position(scene.scale.width, scene.scale.height);
    scene.scale.on('resize', (sz) => position(sz.width, sz.height));

    // Pointer handling
    let activeId = null;
    const onDown = (p) => {
      // Only start joystick when finger begins on or near the joystick base
      const d = Phaser.Math.Distance.Between(p.x, p.y, this.center.x, this.center.y);
      const maxTouchDist = this.base.displayWidth; 
      if (d > maxTouchDist) return;

      if (activeId !== null) return;
      activeId = p.id;
      this.active = true;
      this.updateKnob(p.x, p.y);
    };
    const onMove = (p) => {
      if (p.id !== activeId) return;
      this.updateKnob(p.x, p.y);
    };
    const onUp = (p) => {
      if (p.id !== activeId) return;
      activeId = null;
      this.active = false;
      this.vec.x = this.vec.y = 0;
      this.knob.setPosition(this.center.x, this.center.y);
    };

    scene.input.on('pointerdown', onDown);
    scene.input.on('pointermove', onMove);
    scene.input.on('pointerup', onUp);
    scene.input.on('pointerupoutside', onUp);
  }

  updateKnob(px, py) {
    const v = new Phaser.Math.Vector2(px - this.center.x, py - this.center.y);
    const len = Math.min(this.knobMax, v.length());
    if (v.length() > 0) v.normalize().scale(len);
    this.knob.setPosition(this.center.x + v.x, this.center.y + v.y);

    const n = new Phaser.Math.Vector2(v.x, v.y);
    if (this.knobMax > 0) n.scale(1 / this.knobMax);
    this.vec.x = Phaser.Math.Clamp(n.x, -1, 1);
    this.vec.y = Phaser.Math.Clamp(n.y, -1, 1); // +down (screen y grows downward)
  }

  /** Returns {x,y} in [-1..1]. Deadzone applied at 0.2. */
  getVector() {
    const dz = 0.2;
    const out = { x: 0, y: 0 };
    const ax = Math.abs(this.vec.x), ay = Math.abs(this.vec.y);
    out.x = ax < dz ? 0 : this.vec.x;
    out.y = ay < dz ? 0 : this.vec.y;
    return out;
  }

  destroy() {
    this.base.destroy();
    this.knob.destroy();
  }
}
