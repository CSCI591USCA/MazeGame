import { CELL_SIZE, MAX_LEVELS, PLAYER_SPEED } from '../config.js';
import { generateMaze } from '../maze/mazeGen.js';
import Player from '../entities/Player.js';
import Enemy from '../entities/Enemy.js';
import BulletPool from '../entities/BulletPool.js';
import InputManager from '../systems/InputManager.js';

const START_ENEMIES = 3;                 // spawn near exit at level start
const ENEMY_SPAWN_INTERVAL = 20000;      // new enemy every 20s
const NEAR_EXIT_RADIUS = 6;              // cells around exit for initial spawns
const RANDOM_MIN_DIST_FROM_PLAYER = 10;  // fairness for random spawns
const MAX_SPAWN_ATTEMPTS = 40;           // safety loop cap

export default class GameScene extends Phaser.Scene {
  constructor() { super('Game'); }

  init(data) {
    // Auto-detect touch if not explicitly passed
    const touchCapable = this.sys.game.device?.input?.touch;
    this.isTouch = data?.isTouch ?? !!touchCapable;

    this.level = 1;
    this.started = true;
    this.timerStart = 0;
    this.elapsed = 0;
    this.spawnTimer = null;
  }

  create() {
    this.physics.world.timeScale = 1;
    this.time.timeScale = 1;

    this.buildLevel(this.level);

    // HUD (slightly lower on mobile to avoid status bar)
    const hudY = this.isTouch ? 22 : 12;
    this.hudBg = this.add.rectangle(8, hudY - 4, 280, 36, 0x000000, 0.42)
      .setOrigin(0, 0).setScrollFactor(0).setDepth(10001);
    this.hud = this.add.text(16, hudY, '', {
      fontSize: 20, color: '#FFFFFF', fontFamily: 'sans-serif'
    }).setScrollFactor(0).setDepth(10002);

    // Inputs (mobile: joystick; desktop: keys + mouse)
    this.inputMgr = new InputManager(this, {
      isTouchDevice: this.isTouch,
      onDirection: (dir) => { this.player.requestDirection?.(dir, (cx, cy) => this.isOpen(cx, cy)); },
      onShoot: () => this.shoot()
    });

    this.timerStart = this.time.now;

    // Resize handling
    this.scale.on('resize', this.handleResize, this);
    this.handleResize({ width: this.scale.width, height: this.scale.height });
  }

  /* ===== Build maze sized to fill the viewport ===== */
  buildLevel(level) {
    // Cleanup
    if (this.spawnTimer) { this.spawnTimer.remove(false); this.spawnTimer = null; }
    if (this.wallBodies) { this.wallBodies.clear(true, true); this.wallBodies.destroy(true); this.wallBodies = null; }
    if (this.enemiesGroup) { this.enemiesGroup.clear(true, true); this.enemiesGroup.destroy(true); this.enemiesGroup = null; }
    if (this.player) { this.player.sprite.destroy(); this.player = null; }
    if (this.bullets) { this.bullets.group.clear(true, true); this.bullets = null; }
    if (this.exitMarker) { this.exitMarker.destroy(); this.exitMarker = null; }
    if (this.exitZone) { this.exitZone.destroy(); this.exitZone = null; }

    const vw = this.scale.width;
    const vh = this.scale.height;
    const colsFit = makeOdd(Math.max(7, Math.ceil(vw / CELL_SIZE)));
    const rowsFit = makeOdd(Math.max(7, Math.ceil(vh / CELL_SIZE)));

    const { grid, cols, rows, startCell, exitCell } = generateMaze(level, {
      colsOverride: colsFit,
      rowsOverride: rowsFit
    });
    this.grid = grid; this.cols = cols; this.rows = rows; this.exitCell = exitCell;

    // Walls
    this.wallBodies = this.physics.add.staticGroup();
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        const wx = x * CELL_SIZE, wy = y * CELL_SIZE;
        this.wallBodies.create(wx + CELL_SIZE/2, wy + CELL_SIZE/2, 'wallTile').refreshBody();
      }
    }

    // World bounds = maze size
    const worldW = cols * CELL_SIZE, worldH = rows * CELL_SIZE;
    this.physics.world.setBounds(0, 0, worldW, worldH);
    this.cameras.main.setBounds(0, 0, worldW, worldH);

    // Player
    const startX = startCell.x * CELL_SIZE + CELL_SIZE/2;
    const startY = startCell.y * CELL_SIZE + CELL_SIZE/2;
    this.player = new Player(this, startX, startY);
    this.physics.add.collider(this.player.sprite, this.wallBodies);

    // Enemies container
    this.enemiesGroup = this.physics.add.group();
    this.enemies = [];

    // Initial enemies near the exit
    for (let i = 0; i < START_ENEMIES; i++) this.spawnEnemyNearExit();

    // Bullets
    this.bullets = new BulletPool(this);
    this.physics.add.collider(this.bullets.group, this.wallBodies, (bullet) => {
      this.bullets.group.killAndHide(bullet); bullet.body.stop();
    });
    this.physics.add.overlap(this.bullets.group, this.enemiesGroup, (bullet, enemySprite) => {
      const idx = this.enemies.findIndex(e => e.sprite === enemySprite);
      if (idx >= 0) this.enemies.splice(idx, 1);
      enemySprite.disableBody(true, true);
      enemySprite.destroy();
      this.bullets.group.killAndHide(bullet); bullet.body.stop();
    });

    // Exit
    this.exitMarker = this.add.rectangle(
      exitCell.x * CELL_SIZE + CELL_SIZE/2,
      exitCell.y * CELL_SIZE + CELL_SIZE/2,
      CELL_SIZE * 0.6, CELL_SIZE * 0.6, 0x3bff88, 0.95
    ).setDepth(9);

    this.exitZone = this.add.zone(this.exitMarker.x, this.exitMarker.y, CELL_SIZE*0.6, CELL_SIZE*0.6);
    this.physics.world.enable(this.exitZone);
    this.exitZone.body.setAllowGravity(false);
    this.exitZone.body.moves = false;
    this.physics.add.overlap(this.player.sprite, this.exitZone, () => this.winLevel(), null, this);

    // Camera
    this.cameras.main.startFollow(this.player.sprite, true, 0.12, 0.12);
    this.handleResize({ width: this.scale.width, height: this.scale.height });

    // Periodic random spawns
    this.spawnTimer = this.time.addEvent({
      delay: ENEMY_SPAWN_INTERVAL,
      loop: true,
      callback: () => this.spawnEnemyRandom()
    });
  }

  /* ===== Enemy spawns ===== */
  spawnEnemyNearExit() {
    const exit = this.exitCell;
    const playerCell = this.getPlayerCell();

    const candidates = [];
    for (let y = Math.max(1, exit.y - NEAR_EXIT_RADIUS); y <= Math.min(this.rows - 2, exit.y + NEAR_EXIT_RADIUS); y++) {
      for (let x = Math.max(1, exit.x - NEAR_EXIT_RADIUS); x <= Math.min(this.cols - 2, exit.x + NEAR_EXIT_RADIUS); x++) {
        if (!this.isOpen(x, y)) continue;
        const dExit = Math.abs(x - exit.x) + Math.abs(y - exit.y);
        if (dExit === 0 || dExit > NEAR_EXIT_RADIUS) continue;
        const dPlayer = Math.abs(x - playerCell.cx) + Math.abs(y - playerCell.cy);
        if (dPlayer < RANDOM_MIN_DIST_FROM_PLAYER) continue;
        candidates.push({ x, y });
      }
    }
    let chosen = candidates.length ? candidates[(Math.random() * candidates.length) | 0]
                                   : this.findFarOpenCell(playerCell, RANDOM_MIN_DIST_FROM_PLAYER);
    this._spawnEnemyAt(chosen.x, chosen.y);
  }

  spawnEnemyRandom() {
    const playerCell = this.getPlayerCell();
    let pick = null;
    for (let i = 0; i < MAX_SPAWN_ATTEMPTS; i++) {
      const rx = 1 + ((Math.random() * (this.cols - 2)) | 0);
      const ry = 1 + ((Math.random() * (this.rows - 2)) | 0);
      if (!this.isOpen(rx, ry)) continue;
      const d = Math.abs(rx - playerCell.cx) + Math.abs(ry - playerCell.cy);
      if (d >= RANDOM_MIN_DIST_FROM_PLAYER) { pick = { x: rx, y: ry }; break; }
    }
    if (!pick) pick = this.findFarOpenCell(playerCell, RANDOM_MIN_DIST_FROM_PLAYER);
    this._spawnEnemyAt(pick.x, pick.y);
  }

  _spawnEnemyAt(cx, cy) {
    const ex = cx * CELL_SIZE + CELL_SIZE / 2;
    const ey = cy * CELL_SIZE + CELL_SIZE / 2;
    const enemy = new Enemy(this, ex, ey, () => this.getPlayerCell(), (x, y) => this.isOpen(x, y));
    this.enemies.push(enemy);
    this.enemiesGroup.add(enemy.sprite);
    this.physics.add.collider(enemy.sprite, this.wallBodies);
    this.physics.add.overlap(enemy.sprite, this.player.sprite, () => this.onHitByEnemy());
  }

  /* ===== Resize / camera fit ===== */
  handleResize(size) {
    const w = size.width ?? this.scale.width;
    const h = size.height ?? this.scale.height;

    this.cameras.main.setViewport(0, 0, w, h);

    const worldW = this.cols * CELL_SIZE;
    const worldH = this.rows * CELL_SIZE;

    const zx = w / worldW;
    const zy = h / worldH;
    const z = Math.min(zx, zy);
    this.cameras.main.setZoom(Phaser.Math.Clamp(z, 0.1, 4));

    // Keep HUD pinned 
    const hudY = this.isTouch ? 22 : 12;
    this.hudBg?.setPosition(8, hudY - 4);
    this.hud?.setPosition(16, hudY);
  }

  /* ===== Loop ===== */
  update(time, delta) {
    if (!this.isTouch) {
      // Desktop: keys each frame
      const dir = this.inputMgr.getKeyDirection?.();
      const S = PLAYER_SPEED;
      const vx = dir === 'left' ? -S : dir === 'right' ? S : 0;
      const vy = dir === 'up' ? -S : dir === 'down' ? S : 0;
      this.player.sprite.setVelocity(vx, vy);
    } else {
      // Mobile: joystick vector
      const v = this.inputMgr.getJoystickVector();
      const S = PLAYER_SPEED;
      this.player.sprite.setVelocity(v.x * S, v.y * S);

      
    }

    // Enemies
    for (let i = 0; i < this.enemies.length; i++) {
      const e = this.enemies[i];
      if (e?.sprite?.active) e.update();
    }

    // HUD
    this.elapsed = time - this.timerStart;
    this.hud.setText(`Level ${this.level}/${MAX_LEVELS}   Time ${formatMs(this.elapsed)}`);
    this.hudBg.width = this.hud.width + 24;
  }

  /* ===== Helpers ===== */
  shoot() {
    const dir = !this.isTouch
      ? (this.inputMgr.getKeyDirection?.() || this.player.currentDirection || 'right')
      : (this.player.currentDirection || this.player.queuedDirection || 'right');
    const { x, y } = this.player.sprite;
    this.bullets.fire(x, y, dir);
  }

  onHitByEnemy() {
    this.cameras.main.shake(120, 0.006);
    this.scene.restart({ isTouch: this.isTouch }); 
  }

  winLevel() {
    if (this.spawnTimer) { this.spawnTimer.remove(false); this.spawnTimer = null; }
    if (this.level < MAX_LEVELS) {
      this.level++;
      this.buildLevel(this.level);
      this.timerStart = this.time.now;
    } else {
      const cx = this.scale.width / 2, cy = this.scale.height / 2;
      this.add.text(cx, cy, `You finished!\nTotal Time: ${formatMs(this.elapsed)}`, {
        fontSize: 24, color: '#ffffff', align: 'center'
      }).setOrigin(0.5).setDepth(1000);
      this.time.delayedCall(1600, () => this.scene.start('Menu'));
    }
  }

  isOpen(cx, cy) {
    if (cy < 0 || cy >= this.rows || cx < 0 || cx >= this.cols) return false;
    return this.grid[cy][cx] === 1;
  }

  getPlayerCell() {
    return {
      cx: Math.floor(this.player.sprite.x / CELL_SIZE),
      cy: Math.floor(this.player.sprite.y / CELL_SIZE)
    };
  }

  findFarOpenCell(fromCell, minDist=10) {
    const open = [];
    for (let y=1; y < this.rows-1; y++) {
      for (let x=1; x < this.cols-1; x++) {
        if (this.grid[y][x] === 1) open.push({ x, y });
      }
    }
    let best = open[0], bestScore = -1;
    for (const c of open) {
      const d = Math.abs(c.x - fromCell.cx) + Math.abs(c.y - fromCell.cy);
      if (d >= minDist && d > bestScore) { bestScore = d; best = c; }
    }
    return best || open[(Math.random()*open.length)|0];
  }
}

function formatMs(ms) {
  const s = Math.floor(ms/1000);
  const m = Math.floor(s/60);
  const sec = s % 60;
  const mm = String(m).padStart(2,'0');
  const ss = String(sec).padStart(2,'0');
  const hundredths = String(Math.floor((ms%1000)/10)).padStart(2,'0');
  return `${mm}:${ss}.${hundredths}`;
}
function makeOdd(n){ return n % 2 === 0 ? n + 1 : n; }
