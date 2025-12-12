import Level from "./scenes/Level.js";
import Preload from "./scenes/Preload.js";

window.addEventListener('load', function () {

	/**
	 * Initializes the Phaser game with specified configurations.
	 */
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
				debug: true,
				gravity: {
					x: 0, y: 0
				}
			}
		}
	});

	/**
	 * Adds game scenes to the Phaser game instance.
	 */
	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		/**
		 * Loads the asset pack for preloading assets.
		 */
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		/**
		 * Starts the Preload scene after booting.
		 */
		this.scene.start("Preload");
	}
}