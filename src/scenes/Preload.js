
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super({
			key: "Preload",
			pack: {
				files: [
					{ type: "image", key: "walk1", url: "assets/walkingright1.png" },
					{ type: "image", key: "walk2", url: "assets/walkingright2.png" },
					{ type: "image", key: "walk3", url: "assets/walkingright3.png" },
					{ type: "image", key: "walk4", url: "assets/walkingright4.png" },

					{ type: "image", key: "idle1", url: "assets/idlefront1.png" },
					{ type: "image", key: "idle2", url: "assets/idlefront2.png" },
					{ type: "image", key: "idle3", url: "assets/idlefront3.png" },
					{ type: "image", key: "idle4", url: "assets/idlefront4.png" },
					
					{ type: "image", key: "menuBg", url: "assets/castlebg2.png" }
				]
			}
		});

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// animated player
		const player = this.add.sprite(505.0120544433594, 360, "walk1");
		player.setScale(3);

		// progressBar
		const progressBar = this.add.rectangle(553, 361, 256, 20);
		progressBar.setOrigin(0, 0);
		progressBar.isFilled = true;
		progressBar.fillColor = 14737632;

		// progressBarBg
		const progressBarBg = this.add.rectangle(553.0120849609375, 361, 256, 20);
		progressBarBg.setOrigin(0, 0);
		progressBarBg.fillColor = 14737632;
		progressBarBg.isStroked = true;

		// loadingText
		const loadingText = this.add.text(552.0120849609375, 329, "", {});
		loadingText.text = "Loading...";
		loadingText.setStyle({ "color": "#e0e0e0", "fontFamily": "arial", "fontSize": "20px" });

		this.progressBar = progressBar;
		this.player = player;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	progressBar;

	/** @type {Phaser.GameObjects.Sprite} */
	player;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		//ADD MUSIC
		this.load.audio("bgMusic", "assets/sexyback.mp3");

		if (!this.anims.exists("player-walk")) {
			this.anims.create({
				key: "player-walk",
				frames: [
					{ key: "walk1" },
					{ key: "walk2" },
					{ key: "walk3" },
					{ key: "walk4" }
				],
				frameRate: 8,
				repeat: -1
			});
		}

		this.player.play("player-walk");

		const width =  this.progressBar.width;

		this.load.on("progress", (progress) => {

			this.progressBar.width = progress * width;
		});
	}

	create() {

		this.scene.start("Menu");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
