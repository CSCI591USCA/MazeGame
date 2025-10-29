import { CELL_SIZE, ENEMY_SPEED } from '../config.js';

export default class Enemy {
  constructor(scene, worldX, worldY, getPlayerCellFn, isOpenFn) {
    this.scene = scene;
    this.sprite = scene.physics.add.image(worldX, worldY, 'enemyBox')
      .setOrigin(0.5)
      .setDepth(4)
      .setImmovable(false);

    this.dir = pickRandom(['left','right','up','down']);
    this.getPlayerCell = getPlayerCellFn;
    this.isOpen = isOpenFn;

    this.setVelocityByDir();
  }

  update() {
    const body = this.sprite.body;

    // If we're blocked by a wall or basically stopped, force a re-plan at cell center
    const blocked = body.blocked.left || body.blocked.right || body.blocked.up || body.blocked.down;
    const almostStopped = Math.abs(body.velocity.x) + Math.abs(body.velocity.y) < 1;

    if (blocked || almostStopped || isAtCenter(this.sprite)) {
      // Snap to center to avoid grazing-corner lockups
      snapToCenter(this.sprite);

      const here = worldToGrid(this.sprite.x, this.sprite.y);
      let options = openDirs(here.cx, here.cy, this.isOpen);

      if (options.length === 0) {
        this.sprite.setVelocity(0, 0);
        return;
      }

      // Prefer not reversing unless no alternative
      const rev = reverse(this.dir);
      const viable = options.filter(d => d !== rev);
      if (viable.length) options = viable;

      
      const player = this.getPlayerCell();
      let best = options[0], bestScore = Infinity;
      for (const d of options) {
        const nx = here.cx + dxOf(d);
        const ny = here.cy + dyOf(d);
        const score = manhattan(nx, ny, player.cx, player.cy);
        if (score < bestScore) { bestScore = score; best = d; }
      }

      this.dir = best;
      this.setVelocityByDir();
    }
  }

  setVelocityByDir() {
    const S = ENEMY_SPEED;
    const vx = dxOf(this.dir) * S;
    const vy = dyOf(this.dir) * S;
    this.sprite.setVelocity(vx, vy);
  }
}

/* helpers */
function worldToGrid(x,y){ return { cx: Math.floor(x / CELL_SIZE), cy: Math.floor(y / CELL_SIZE) }; }
function cellCenter(c){ return { x: c.cx * CELL_SIZE + CELL_SIZE/2, y: c.cy * CELL_SIZE + CELL_SIZE/2 }; }
function snapToCenter(sp){
  const c = worldToGrid(sp.x, sp.y);
  const cc = cellCenter(c);
  if (Math.abs(sp.x - cc.x) > 0.5 || Math.abs(sp.y - cc.y) > 0.5) {
    sp.setPosition(cc.x, cc.y);
  }
}
function isAtCenter(sp){
  const ccx = Math.round(sp.x / CELL_SIZE) * CELL_SIZE;
  const ccy = Math.round(sp.y / CELL_SIZE) * CELL_SIZE;
  return Math.abs(sp.x - ccx) <= 1.5 && Math.abs(sp.y - ccy) <= 1.5;
}
function reverse(d){ return d==='left'?'right':d==='right'?'left':d==='up'?'down':'up'; }
function manhattan(ax,ay,bx,by){ return Math.abs(ax-bx)+Math.abs(ay-by); }
function dxOf(d){ return d==='left'?-1:d==='right'?1:0; }
function dyOf(d){ return d==='up'?-1:d==='down'?1:0; }
function openDirs(cx,cy,isOpen){
  const dirs=[];
  if(isOpen(cx-1,cy)) dirs.push('left');
  if(isOpen(cx+1,cy)) dirs.push('right');
  if(isOpen(cx,cy-1)) dirs.push('up');
  if(isOpen(cx,cy+1)) dirs.push('down');
  return dirs;
}
function pickRandom(a){ return a[(Math.random()*a.length)|0]; }
