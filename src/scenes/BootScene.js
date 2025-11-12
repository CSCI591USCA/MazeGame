import { CELL_SIZE, PLAYER_MARGIN } from '../config.js';

export default class BootScene extends Phaser.Scene {
  constructor() { super('Boot'); }

  preload() {
    this.load.image('wallTile', 'assets/tile_0000.png');
  }

  create() {
    const g = this.add.graphics();

    // Player box (final size)
    const PLAYER_SIZE = Math.max(8, CELL_SIZE - PLAYER_MARGIN);
    g.clear().fillStyle(0xffffff, 1).fillRect(0, 0, PLAYER_SIZE, PLAYER_SIZE);
    g.generateTexture('playerBox', PLAYER_SIZE, PLAYER_SIZE);

    // Enemy box
    const ENEMY_SIZE = CELL_SIZE - 2;
    g.clear().fillStyle(0xff3b3b, 1).fillRect(0, 0, ENEMY_SIZE, ENEMY_SIZE);
    g.generateTexture('enemyBox', ENEMY_SIZE, ENEMY_SIZE);

    // Bullet
    g.clear().fillStyle(0xffff66, 1).fillRect(0, 0, 6, 6);
    g.generateTexture('bullet', 6, 6);

    // Shoot button
    let r = 44;
    g.clear().fillStyle(0x0a84ff, 0.7).fillCircle(r, r, r);
    g.lineStyle(4, 0xffffff, 1).strokeCircle(r, r, r);
    g.generateTexture('shootBtn', r * 2, r * 2);

    // Joystick base
    const R_BASE = 60;
    g.clear().fillStyle(0x000000, 0.25).fillCircle(R_BASE, R_BASE, R_BASE);
    g.lineStyle(4, 0x4da3ff, 0.9).strokeCircle(R_BASE, R_BASE, R_BASE);
    g.generateTexture('joyBase', R_BASE * 2, R_BASE * 2);

    // Joystick knob
    const R_KNOB = 28;
    g.clear().fillStyle(0x4da3ff, 0.9).fillCircle(R_KNOB, R_KNOB, R_KNOB);
    g.lineStyle(3, 0xffffff, 1).strokeCircle(R_KNOB, R_KNOB, R_KNOB);
    g.generateTexture('joyKnob', R_KNOB * 2, R_KNOB * 2);

    g.destroy();

    this.scene.start('Menu');
  }
}
