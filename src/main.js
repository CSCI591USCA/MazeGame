import BootScene from './scenes/BootScene.js';
import MenuScene from './scenes/MenuScene.js';
import GameScene from './scenes/GameScene.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#040218',
  scale: {
    mode: Phaser.Scale.RESIZE,      // ⬅ fill the window exactly
    autoCenter: Phaser.Scale.NO_CENTER
    
  },
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 0 }, debug: false }
  },
  scene: [BootScene, MenuScene, GameScene]
};

new Phaser.Game(config);
