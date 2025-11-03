import { CELL_SIZE, CENTER_EPSILON, PLAYER_SPEED } from '../config.js';

export default class Player {
  constructor(scene, worldX, worldY) {
    this.scene = scene;

    // Start with south idle (frame 0); use a sprite so we can play animations
    this.sprite = scene.physics.add.sprite(worldX, worldY, 'idle_s', 0)
      .setOrigin(0.5)
      .setDepth(5)
      .setCollideWorldBounds(true)
      // Fit the 40x40 frames into your 24px grid so collisions & centering still work
      .setDisplaySize(CELL_SIZE, CELL_SIZE);

    // Nicer collision body (adjust if you want tighter)
    this.sprite.body.setSize(Math.floor(CELL_SIZE * 0.6), Math.floor(CELL_SIZE * 0.8), true);

    // Facing & input state
    this.currentDirection = null;   // 'left'|'right'|'up'|'down'
    this.queuedDirection = null;
    this._lastFacing = 'down';

    // Idle at start
    this._playIdle('down');
  }

  // Optional: used by InputManager-based turning systems
  requestDirection(dir /* 'left'|'right'|'up'|'down' */, /* isOpenFn */) {
    // In your current GameScene you set velocity directly each frame,
    // so we just remember the intent so shooting knows which way to aim.
    this.currentDirection = dir;
  }
  setDirection(dir) { this.currentDirection = dir; }

  // Called every frame by the scene (after velocity is set) to update animation
  tickAnimFromVelocity() {
    const vx = this.sprite.body?.velocity?.x || 0;
    const vy = this.sprite.body?.velocity?.y || 0;
    const moving = Math.abs(vx) > 1 || Math.abs(vy) > 1;

    // derive facing from the dominant axis if moving
    if (moving) {
      if (Math.abs(vx) >= Math.abs(vy)) {
        this._lastFacing = vx > 0 ? 'right' : 'left';
      } else {
        this._lastFacing = vy > 0 ? 'down' : 'up';
      }
      switch (this._lastFacing) {
        case 'left':  this._play('walk-w'); break;
        case 'right': this._play('walk-e'); break;
        case 'up':    this._play('walk-n'); break;
        case 'down':  this._play('walk-s'); break;
      }
    } else {
      this._playIdle(this._lastFacing || 'down');
    }
  }

  // Helpers if you ever need center checks again
  isAtCellCenter() {
    const { x, y } = this.sprite;
    const cx = Math.round(x / CELL_SIZE) * CELL_SIZE;
    const cy = Math.round(y / CELL_SIZE) * CELL_SIZE;
    return Math.abs(x - cx) <= CENTER_EPSILON && Math.abs(y - cy) <= CENTER_EPSILON;
  }

  /* === Private animation helpers === */
  _playIdle(faceDir) {
    switch (faceDir) {
      case 'left':  this._play('idle-w'); break;
      case 'right': this._play('idle-e'); break;
      case 'up':    this._play('idle-n'); break;
      case 'down':  this._play('idle-s'); break;
      default:      this._play('idle-s'); break;
    }
  }

  _play(key) {
    if (this.sprite.anims.currentAnim?.key === key) return;
    this.sprite.anims.play(key, true);
  }
}
