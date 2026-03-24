// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Menu extends Phaser.Scene {

	constructor() {
		super("Menu");

		/* START-USER-CTR-CODE */
		this.menuOptions = [];
		this.menuTexts = [];
		this.menuButtons = [];
		this.menuBoxes = [];
		this.selectedIndex = 0;
		this.isShowingInstructions = false;
		this.instructionsBg = null;
		this.instructionsTitle = null;
		this.instructionsText = null;
		this.instructionsBackButton = null;
		this.hoverPlayer = null;
		this.titleText = null;
		this.subtitleText = null;
		this.isMobile = false;

		// storm effects
		this.rainDrops = [];
		this.rainGraphics = null;
		this.lightningFlash = null;
		this.lightningBolt = null;
		this.lightningTimer = null;
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	create() {

		this.editorCreate();

		const width = this.scale.width;
		const height = this.scale.height;

		// detect mobile like LevelOne
		this.isMobile = !this.sys.game.device.os.desktop;

		// background image
		const bg = this.add.image(width / 2, height / 2, "menuBg");
		bg.setScale(Math.max(width / bg.width, height / bg.height));

		// dark overlay for readability
		this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.45);

		// thunderstorm effects
		this.createStormEffects();

		// title
		this.titleText = this.add.text(width / 2, 100, "Tower of Trials", {
			fontFamily: "Chiller",
			fontSize: "80px",
			color: "#ff0000",
			fontStyle: "bold"
		}).setOrigin(0.5);
		this.titleText.setDepth(100);

		// subtitle
		this.subtitleText = this.add.text(width / 2, 150, "Main Menu", {
			fontFamily: "Chiller",
			fontSize: "40px",
			color: "#cccccc"
		}).setOrigin(0.5);
		this.subtitleText.setDepth(100);

		// create idle animation once
		if (!this.anims.exists("menu-idle")) {
			this.anims.create({
				key: "menu-idle",
				frames: [
					{ key: "idle1" },
					{ key: "idle2" },
					{ key: "idle3" },
					{ key: "idle4" }
				],
				frameRate: 6,
				repeat: -1
			});
		}

		// animated selector sprite
		this.hoverPlayer = this.add.sprite(0, 0, "idle1");
		this.hoverPlayer.setScale(1.5);
		this.hoverPlayer.play("menu-idle");
		this.hoverPlayer.setVisible(false);
		this.hoverPlayer.setDepth(100);

		// menu options
		this.menuOptions = [
			{ text: "START", action: () => this.startGame() },
			{ text: "HOW TO PLAY", action: () => this.showHowToPlay() }
		];

		this.createMenu();

		// desktop keyboard controls only
		if (!this.isMobile) {
			this.setupControls();
		}

		this.updateSelection();
	}

	createMenu() {
		const width = this.scale.width;
		const startY = 270;
		const spacing = 80;

		this.menuTexts = [];
		this.menuButtons = [];
		this.menuBoxes = [];

		for (let i = 0; i < this.menuOptions.length; i++) {
			const option = this.menuOptions[i];
			const y = startY + i * spacing;

			// visible red transparent box
			const box = this.add.rectangle(width / 2, y, 360, 60, 0xff0000, 0.28);
			box.setStrokeStyle(2, 0xff9999);
			box.setDepth(90);

			// invisible clickable area on top of the box
			const button = this.add.rectangle(width / 2, y, 360, 60, 0x000000, 0.001);
			button.setInteractive({ useHandCursor: true });
			button.setDepth(95);

			// option text
			const text = this.add.text(width / 2, y, option.text, {
				fontFamily: "Chiller",
				fontSize: "32px",
				color: "#aaaaaa"
			}).setOrigin(0.5);
			text.setDepth(100);

			// desktop hover
			button.on("pointerover", () => {
				if (this.isShowingInstructions || this.isMobile) return;

				this.selectedIndex = i;
				this.updateSelection();
				this.showHoverPlayerForOption(i);

				box.setFillStyle(0xff0000, 0.45);
				box.setStrokeStyle(2, 0xffffff);
			});

			button.on("pointerout", () => {
				if (this.isShowingInstructions || this.isMobile) return;
				this.hideHoverPlayer();

				if (i !== this.selectedIndex) {
					box.setFillStyle(0xff0000, 0.28);
					box.setStrokeStyle(2, 0xff9999);
				}
			});

			// tap/click
			button.on("pointerdown", () => {
				if (this.isShowingInstructions) return;

				this.selectedIndex = i;
				this.updateSelection();
				this.showHoverPlayerForOption(i);

				this.time.delayedCall(120, () => {
					option.action();
				});
			});

			// allow text clicks too
			text.setInteractive({ useHandCursor: true });

			text.on("pointerover", () => {
				if (this.isShowingInstructions || this.isMobile) return;

				this.selectedIndex = i;
				this.updateSelection();
				this.showHoverPlayerForOption(i);

				box.setFillStyle(0xff0000, 0.45);
				box.setStrokeStyle(2, 0xffffff);
			});

			text.on("pointerout", () => {
				if (this.isShowingInstructions || this.isMobile) return;
				this.hideHoverPlayer();

				if (i !== this.selectedIndex) {
					box.setFillStyle(0xff0000, 0.28);
					box.setStrokeStyle(2, 0xff9999);
				}
			});

			text.on("pointerdown", () => {
				if (this.isShowingInstructions) return;

				this.selectedIndex = i;
				this.updateSelection();
				this.showHoverPlayerForOption(i);

				this.time.delayedCall(120, () => {
					option.action();
				});
			});

			this.menuBoxes.push(box);
			this.menuButtons.push(button);
			this.menuTexts.push(text);
		}
	}

	setupControls() {
		this.input.keyboard.on("keydown-UP", () => {
			if (this.isShowingInstructions) return;

			this.selectedIndex--;

			if (this.selectedIndex < 0) {
				this.selectedIndex = this.menuOptions.length - 1;
			}

			this.updateSelection();
			this.showHoverPlayerForOption(this.selectedIndex);
		});

		this.input.keyboard.on("keydown-DOWN", () => {
			if (this.isShowingInstructions) return;

			this.selectedIndex++;

			if (this.selectedIndex >= this.menuOptions.length) {
				this.selectedIndex = 0;
			}

			this.updateSelection();
			this.showHoverPlayerForOption(this.selectedIndex);
		});

		this.input.keyboard.on("keydown-ENTER", () => {
			if (this.isShowingInstructions) return;
			this.menuOptions[this.selectedIndex].action();
		});

		this.input.keyboard.on("keydown-SPACE", () => {
			if (this.isShowingInstructions) return;
			this.menuOptions[this.selectedIndex].action();
		});

		this.input.keyboard.on("keydown-ESC", () => {
			if (this.isShowingInstructions) {
				this.hideHowToPlay();
			}
		});
	}

	updateSelection() {
		for (let i = 0; i < this.menuTexts.length; i++) {
			if (i === this.selectedIndex) {
				this.menuTexts[i].setStyle({
					fontFamily: "Chiller",
					fontSize: "36px",
					color: "#ffffff"
				});

				if (this.menuBoxes && this.menuBoxes[i]) {
					this.menuBoxes[i].setFillStyle(0xff0000, 0.45);
					this.menuBoxes[i].setStrokeStyle(2, 0xffffff);
				}
			} else {
				this.menuTexts[i].setStyle({
					fontFamily: "Chiller",
					fontSize: "32px",
					color: "#aaaaaa"
				});

				if (this.menuBoxes && this.menuBoxes[i]) {
					this.menuBoxes[i].setFillStyle(0xff0000, 0.28);
					this.menuBoxes[i].setStrokeStyle(2, 0xff9999);
				}
			}
		}
	}

	showHoverPlayerForOption(index) {
		if (!this.hoverPlayer || !this.menuTexts[index]) return;

		const optionText = this.menuTexts[index];
		const boxWidth = 360;

		this.hoverPlayer.setPosition(
			optionText.x - (boxWidth / 2) - 60,
			optionText.y + 4
		);

		this.hoverPlayer.setVisible(true);
	}

	hideHoverPlayer() {
		if (this.hoverPlayer) {
			this.hoverPlayer.setVisible(false);
		}
	}

	startGame() {
		this.scene.start("LevelOne");
	}

	showHowToPlay() {
		this.isShowingInstructions = true;

		const width = this.scale.width;
		const height = this.scale.height;

		// hide menu items
		for (let i = 0; i < this.menuTexts.length; i++) {
			this.menuTexts[i].setVisible(false);
		}

		for (let i = 0; i < this.menuButtons.length; i++) {
			this.menuButtons[i].setVisible(false);
		}

		for (let i = 0; i < this.menuBoxes.length; i++) {
			this.menuBoxes[i].setVisible(false);
		}

		if (this.hoverPlayer) {
			this.hoverPlayer.setVisible(false);
		}

		if (this.titleText) {
			this.titleText.setVisible(false);
		}

		if (this.subtitleText) {
			this.subtitleText.setVisible(false);
		}

		this.instructionsBg = this.add.rectangle(width / 2, height / 2 + 30, 900, 620, 0x000000, 0.9);
		this.instructionsBg.setStrokeStyle(2, 0xffffff);
		this.instructionsBg.setDepth(100);

		this.instructionsTitle = this.add.text(width / 2, height / 2 - 230, "How to Play", {
			fontFamily: "Chiller",
			fontSize: "34px",
			color: "#ffffff",
			fontStyle: "bold"
		}).setOrigin(0.5);
		this.instructionsTitle.setDepth(101);

		this.instructionsText = this.add.text(
			width / 2 - 360,
			height / 2 - 175,
			"Controls For Desktop:\n" +
			"• Arrow Keys or WASD: Move player around the maze\n" +
			"• SPACE: Shoot enemies\n" +
			"• K: Open the door after acquiring the key\n\n" +
			"Controls For Mobile:\n" +
			"• Joystick: Move player around the maze\n" +
			"• Red Button: Shoot enemies\n" +
			"• Green Button: Interact / open door after acquiring the key\n\n" +
			"Objective:\n" +
			"• Move through the maze\n" +
			"• Avoid enemies and obstacles\n" +
			"• Grab the key\n" +
			"• Escape through the door\n\n" +
			(this.isMobile
				? "Tap BACK to return to the main menu."
				: "Press ESC to return to the main menu."),
			{
				fontFamily: "Chiller",
				fontSize: "20px",
				color: "#ffffff",
				align: "left",
				wordWrap: { width: 720 },
				lineSpacing: 4
			}
		);
		this.instructionsText.setOrigin(0, 0);
		this.instructionsText.setDepth(101);

		// mobile-friendly back button
		this.instructionsBackButton = this.add.text(width / 2, height / 2 + 245, "BACK", {
			fontFamily: "Chiller",
			fontSize: "28px",
			color: "#ffffff",
			backgroundColor: "#444444",
			padding: {
				left: 20,
				right: 20,
				top: 10,
				bottom: 10
			}
		}).setOrigin(0.5);
		this.instructionsBackButton.setDepth(101);

		this.instructionsBackButton.setInteractive({ useHandCursor: true });
		this.instructionsBackButton.on("pointerdown", () => {
			this.hideHowToPlay();
		});
	}

	hideHowToPlay() {
		this.isShowingInstructions = false;

		if (this.instructionsBg) {
			this.instructionsBg.destroy();
			this.instructionsBg = null;
		}

		if (this.instructionsTitle) {
			this.instructionsTitle.destroy();
			this.instructionsTitle = null;
		}

		if (this.instructionsText) {
			this.instructionsText.destroy();
			this.instructionsText = null;
		}

		if (this.instructionsBackButton) {
			this.instructionsBackButton.destroy();
			this.instructionsBackButton = null;
		}

		for (let i = 0; i < this.menuTexts.length; i++) {
			this.menuTexts[i].setVisible(true);
		}

		for (let i = 0; i < this.menuButtons.length; i++) {
			this.menuButtons[i].setVisible(true);
		}

		for (let i = 0; i < this.menuBoxes.length; i++) {
			this.menuBoxes[i].setVisible(true);
		}

		if (this.titleText) {
			this.titleText.setVisible(true);
		}

		if (this.subtitleText) {
			this.subtitleText.setVisible(true);
		}

		this.updateSelection();

		if (!this.isMobile) {
			this.showHoverPlayerForOption(this.selectedIndex);
		}
	}

	createStormEffects() {
		const width = this.scale.width;
		const height = this.scale.height;

		this.rainGraphics = this.add.graphics();
		this.rainGraphics.setDepth(20);

		this.lightningBolt = this.add.graphics();
		this.lightningBolt.setDepth(999);

		this.lightningFlash = this.add.rectangle(width / 2, height / 2, width, height, 0xffffff, 1);
		this.lightningFlash.setAlpha(0);
		this.lightningFlash.setDepth(998);

		this.rainDrops = [];

		for (let i = 0; i < 180; i++) {
			this.rainDrops.push({
				x: Phaser.Math.Between(0, width),
				y: Phaser.Math.Between(0, height),
				length: Phaser.Math.Between(10, 22),
				speed: Phaser.Math.Between(500, 900),
				drift: Phaser.Math.Between(-30, -10)
			});
		}

		this.scheduleLightning();
	}

	scheduleLightning() {
		this.lightningTimer = this.time.delayedCall(4000, () => {
			this.triggerLightning();
			this.scheduleLightning();
		});
	}

	triggerLightning() {
		if (!this.lightningFlash || !this.lightningBolt) return;

		const width = this.scale.width;
		const height = this.scale.height;

		this.lightningBolt.clear();

		const startX = Phaser.Math.Between(width * 0.2, width * 0.8);
		let x = startX;
		let y = 0;

		this.lightningBolt.lineStyle(5, 0xffffff, 1);
		this.lightningBolt.beginPath();
		this.lightningBolt.moveTo(x, y);

		while (y < height * 0.65) {
			x += Phaser.Math.Between(-30, 30);
			y += Phaser.Math.Between(25, 55);
			this.lightningBolt.lineTo(x, y);
		}

		this.lightningBolt.strokePath();

		this.lightningFlash.setAlpha(0.6);

		this.tweens.add({
			targets: this.lightningFlash,
			alpha: 0,
			duration: 180,
			ease: "Quad.easeOut"
		});

		this.time.delayedCall(120, () => {
			if (this.lightningBolt) {
				this.lightningBolt.clear();
			}
		});

		this.time.delayedCall(220, () => {
			if (!this.lightningFlash || !this.lightningBolt) return;

			this.lightningBolt.clear();

			let x2 = startX + Phaser.Math.Between(-20, 20);
			let y2 = 0;

			this.lightningBolt.lineStyle(3, 0xddeeff, 0.9);
			this.lightningBolt.beginPath();
			this.lightningBolt.moveTo(x2, y2);

			while (y2 < height * 0.55) {
				x2 += Phaser.Math.Between(-20, 20);
				y2 += Phaser.Math.Between(20, 45);
				this.lightningBolt.lineTo(x2, y2);
			}

			this.lightningBolt.strokePath();

			this.lightningFlash.setAlpha(0.35);

			this.tweens.add({
				targets: this.lightningFlash,
				alpha: 0,
				duration: 120,
				ease: "Quad.easeOut"
			});

			this.time.delayedCall(100, () => {
				if (this.lightningBolt) {
					this.lightningBolt.clear();
				}
			});
		});
	}

	updateRain(time, delta) {
		if (!this.rainGraphics) return;

		const width = this.scale.width;
		const height = this.scale.height;
		const dt = delta / 1000;

		this.rainGraphics.clear();
		this.rainGraphics.lineStyle(1, 0xbfd7ff, 0.45);

		for (let i = 0; i < this.rainDrops.length; i++) {
			const drop = this.rainDrops[i];

			drop.y += drop.speed * dt;
			drop.x += drop.drift * dt;

			if (drop.y > height + 30 || drop.x < -30) {
				drop.x = Phaser.Math.Between(0, width);
				drop.y = Phaser.Math.Between(-200, -20);
				drop.length = Phaser.Math.Between(10, 22);
				drop.speed = Phaser.Math.Between(500, 900);
				drop.drift = Phaser.Math.Between(-30, -10);
			}

			this.rainGraphics.beginPath();
			this.rainGraphics.moveTo(drop.x, drop.y);
			this.rainGraphics.lineTo(drop.x + 4, drop.y + drop.length);
			this.rainGraphics.strokePath();
		}
	}

	update(time, delta) {
		this.updateRain(time, delta);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here