export default class BulletPool {
  constructor(scene) {
    this.scene = scene;
    this.group = scene.physics.add.group({
      classType: Phaser.Physics.Arcade.Image,
      maxSize: 20,
      runChildUpdate: false
    });
    this.cooldown = 160; // ms
    this.lastFired = 0;
  }

  fire(fromX, fromY, dir) {
    const now = this.scene.time.now;
    if (now - this.lastFired < this.cooldown) return;

    const bullet = this.group.get(fromX, fromY, 'bullet');
    if (!bullet) return;
    bullet.setActive(true).setVisible(true).setDepth(10);
    bullet.body.setCircle(3);
    bullet.setCollideWorldBounds(true);
    bullet.body.onWorldBounds = true;

    const SPEED = 280;
    const vx = dir === 'left' ? -SPEED : dir === 'right' ? SPEED : 0;
    const vy = dir === 'up'   ? -SPEED : dir === 'down'  ? SPEED : 0;
    bullet.setVelocity(vx, vy);

    // Auto-despawn after 1.5s
    this.scene.time.delayedCall(1500, () => {
      this.group.killAndHide(bullet);
      bullet.body.stop();
    });

    this.lastFired = now;
  }
}
