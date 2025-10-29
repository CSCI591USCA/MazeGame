import { CELL_SIZE, CENTER_EPSILON, PLAYER_SPEED } from '../config.js';

export default class Player {
  constructor(scene, worldX, worldY) {
    this.scene = scene;

    this.sprite = scene.physics.add.image(worldX, worldY, 'playerBox')
      .setOrigin(0.5)
      .setDepth(5)
      .setCollideWorldBounds(true);

    this.currentDirection = null;  // 'left'|'right'|'up'|'down'
    this.queuedDirection = null;
  }

  
  requestDirection(dir, isOpenFn) {
    if (this.isAtCellCenter()) {
      const next = neighborCell(this.sprite.x, this.sprite.y, dir);
      if (isOpenFn(next.cx, next.cy)) {
        this.snapToCellCenter();
        this.currentDirection = dir;
        this.queuedDirection = null;
        this.updateVelocity();
        return;
      }
    }
    
    this.queuedDirection = dir;
  }

  setDirection(dir) { this.queuedDirection = dir; }

  snapToCellCenter() {
    const { x, y } = this.sprite;
    const cx = Math.round(x / CELL_SIZE) * CELL_SIZE;
    const cy = Math.round(y / CELL_SIZE) * CELL_SIZE;
    this.sprite.setPosition(cx, cy);
  }

  isAtCellCenter() {
    const { x, y } = this.sprite;
    const cx = Math.round(x / CELL_SIZE) * CELL_SIZE;
    const cy = Math.round(y / CELL_SIZE) * CELL_SIZE;
    return Math.abs(x - cx) <= CENTER_EPSILON && Math.abs(y - cy) <= CENTER_EPSILON;
  }

  updateVelocity() {
    const S = PLAYER_SPEED;
    const dir = this.currentDirection;
    const vx = dir === 'left' ? -S : dir === 'right' ? S : 0;
    const vy = dir === 'up' ? -S : dir === 'down' ? S : 0;
    this.sprite.setVelocity(vx, vy);
  }

  tryApplyQueuedTurn(isOpenFn) {
    if (!this.queuedDirection) return;
    if (!this.isAtCellCenter()) return;

    const next = neighborCell(this.sprite.x, this.sprite.y, this.queuedDirection);
    if (isOpenFn(next.cx, next.cy)) {
      this.snapToCellCenter();
      this.currentDirection = this.queuedDirection;
      this.queuedDirection = null;
      this.updateVelocity();
    }
  }

  nudgeIntoCorridor(isOpenFn) {
    // If heading into a wall, stop at center and wait for a valid input
    if (!this.currentDirection) return;
    const next = neighborCell(this.sprite.x, this.sprite.y, this.currentDirection);
    if (!isOpenFn(next.cx, next.cy)) {
      if (this.isAtCellCenter()) {
        this.currentDirection = null;
        this.sprite.setVelocity(0, 0);
      }
    }
  }
}

/* helpers */
function neighborCell(worldX, worldY, dir) {
  // Use floor so 1.5 cells → 1 (correct current cell)
  const gx = Math.floor(worldX / CELL_SIZE);
  const gy = Math.floor(worldY / CELL_SIZE);
  const dx = dir === 'left' ? -1 : dir === 'right' ? 1 : 0;
  const dy = dir === 'up' ? -1 : dir === 'down' ? 1 : 0;
  return { cx: gx + dx, cy: gy + dy };
}
