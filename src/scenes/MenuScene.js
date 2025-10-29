import { detectInputMode } from '../utils/device.js';

export default class MenuScene extends Phaser.Scene {
  constructor() { super('Menu'); }

  create() {
    const { isTouch } = detectInputMode(this.sys.game);
    const cx = this.scale.width / 2;
    const cy = this.scale.height / 2;

    this.add.text(cx, cy - 40, 'TOWER OF TRIALS', { fontSize: 36, color: '#ffffff' })
      .setOrigin(0.5);
    this.add.text(cx, cy + 10, isTouch
      ? 'Tap to start\nSwipe to move • Tap button to shoot'
      : 'Press SPACE to start\nMove: WASD / Arrows • Shoot: Ctrl or Click', {
        fontSize: 18, color: '#b8c1ff', align: 'center'
      }).setOrigin(0.5);

    if (isTouch) {
      this.input.once('pointerdown', () => this.scene.start('Game', { isTouch }));
    } else {
      const space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      space.once('down', () => this.scene.start('Game', { isTouch }));
    }
  }
}
