import Preload from "./scenes/Preload.js";
import LevelOne from "./scenes/LevelOne.js";
import LevelTwo from "./scenes/LevelTwo.js";
import Level from "./scenes/Level.js";
import LevelFour from "./scenes/LevelFour.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: 'arcade',
			arcade: {
				debug: false,
				gravity: {
					x: 0, y: 0
				}
			}
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("LevelOne", LevelOne);
	game.scene.add("LevelTwo", LevelTwo);
	game.scene.add("Level", Level);
	game.scene.add("LevelFour", LevelFour);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}