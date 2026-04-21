// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelOne extends Phaser.Scene {

	constructor() {
		super("LevelOne");

		/* START-USER-CTR-CODE */
		// Write your code here.

		// storm effects
		this.rainDrops = [];
		this.rainGraphics = null;
		this.lightningFlash = null;
		this.lightningBolt = null;
		this.lightningTimer = null;

		// help button popup UI
		this.helpOpen = false;
		this.helpButton = null;
		this.helpButtonText = null;
		this.helpOverlay = null;
		this.helpPanel = null;
		this.helpTitleText = null;
		this.helpInstructionsText = null;
		this.helpCloseText = null;
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background1
		const background1 = this.add.image(0, 0, "castlebg2");
		background1.scaleX = 2.22;
		background1.scaleY = 2.24;
		background1.setOrigin(0, 0);

		// tile_9
		const tile_9 = this.add.image(31, 695, "tile_0000");
		tile_9.scaleX = 3;
		tile_9.scaleY = 3;

		// tile_10
		const tile_10 = this.add.image(84, 695, "tile_0000");
		tile_10.scaleX = 3;
		tile_10.scaleY = 3;

		// tile_11
		const tile_11 = this.add.image(137, 695, "tile_0000");
		tile_11.scaleX = 3;
		tile_11.scaleY = 3;

		// tile_12
		const tile_12 = this.add.image(190, 695, "tile_0000");
		tile_12.scaleX = 3;
		tile_12.scaleY = 3;

		// tile_13
		const tile_13 = this.add.image(243, 695, "tile_0000");
		tile_13.scaleX = 3;
		tile_13.scaleY = 3;

		// tile_14
		const tile_14 = this.add.image(296, 695, "tile_0000");
		tile_14.scaleX = 3;
		tile_14.scaleY = 3;

		// tile_15
		const tile_15 = this.add.image(349, 695, "tile_0000");
		tile_15.scaleX = 3;
		tile_15.scaleY = 3;

		// tile_16
		const tile_16 = this.add.image(402, 695, "tile_0000");
		tile_16.scaleX = 3;
		tile_16.scaleY = 3;

		// tile_17
		const tile_17 = this.add.image(455, 695, "tile_0000");
		tile_17.scaleX = 3;
		tile_17.scaleY = 3;

		// tile_18
		const tile_18 = this.add.image(508, 695, "tile_0000");
		tile_18.scaleX = 3;
		tile_18.scaleY = 3;

		// tile_19
		const tile_19 = this.add.image(561, 695, "tile_0000");
		tile_19.scaleX = 3;
		tile_19.scaleY = 3;

		// tile_20
		const tile_20 = this.add.image(614, 695, "tile_0000");
		tile_20.scaleX = 3;
		tile_20.scaleY = 3;

		// tile_21
		const tile_21 = this.add.image(667, 695, "tile_0000");
		tile_21.scaleX = 3;
		tile_21.scaleY = 3;

		// tile_22
		const tile_22 = this.add.image(720, 695, "tile_0000");
		tile_22.scaleX = 3;
		tile_22.scaleY = 3;

		// tile_23
		const tile_23 = this.add.image(773, 695, "tile_0000");
		tile_23.scaleX = 3;
		tile_23.scaleY = 3;

		// tile_24
		const tile_24 = this.add.image(826, 695, "tile_0000");
		tile_24.scaleX = 3;
		tile_24.scaleY = 3;

		// tile_25
		const tile_25 = this.add.image(879, 695, "tile_0000");
		tile_25.scaleX = 3;
		tile_25.scaleY = 3;

		// tile_26
		const tile_26 = this.add.image(932, 695, "tile_0000");
		tile_26.scaleX = 3;
		tile_26.scaleY = 3;

		// tile_27
		const tile_27 = this.add.image(985, 695, "tile_0000");
		tile_27.scaleX = 3;
		tile_27.scaleY = 3;

		// tile_28
		const tile_28 = this.add.image(1038, 695, "tile_0000");
		tile_28.scaleX = 3;
		tile_28.scaleY = 3;

		// tile_29
		const tile_29 = this.add.image(1091, 695, "tile_0000");
		tile_29.scaleX = 3;
		tile_29.scaleY = 3;

		// tile_30
		const tile_30 = this.add.image(1144, 695, "tile_0000");
		tile_30.scaleX = 3;
		tile_30.scaleY = 3;

		// tile_31
		const tile_31 = this.add.image(1197, 695, "tile_0000");
		tile_31.scaleX = 3;
		tile_31.scaleY = 3;

		// tile_32
		const tile_32 = this.add.image(1250, 695, "tile_0000");
		tile_32.scaleX = 3;
		tile_32.scaleY = 3;

		// door
		const door = this.physics.add.sprite(1173, 627, "Door-1");
		door.scaleX = 0.4;
		door.scaleY = 0.4;
		door.body.moves = false;
		door.body.allowGravity = false;
		door.body.collideWorldBounds = true;
		door.body.pushable = false;
		door.body.immovable = true;
		door.body.setSize(480, 480, false);

		// player
		const player = this.physics.add.sprite(582, 672, "idlefront1");
		player.scaleX = 1.7;
		player.scaleY = 1.7;
		player.setOrigin(0.5, 1);
		player.body.collideWorldBounds = true;
		player.body.setOffset(10, 0);
		player.body.setSize(28, 40, false);

		// key
		const key = this.physics.add.image(97, 627, "New Piskel");
		key.scaleX = 0.2;
		key.scaleY = 0.2;
		key.body.moves = false;
		key.body.allowGravity = false;
		key.body.collideWorldBounds = true;
		key.body.pushable = false;
		key.body.immovable = true;
		key.body.setSize(480, 480, false);

		// lists
		const ground = [tile_32, tile_31, tile_30, tile_29, tile_28, tile_27, tile_26, tile_25, tile_24, tile_23, tile_22, tile_21, tile_20, tile_19, tile_18, tile_17, tile_16, tile_15, tile_14, tile_13, tile_12, tile_11, tile_10, tile_9];

		// collider
		this.physics.add.collider(player, ground);

		this.door = door;
		this.player = player;
		this.key = key;
		this.ground = ground;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	door;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	player;
	/** @type {Phaser.Physics.Arcade.Image} */
	key;
	/** @type {Phaser.GameObjects.Image[]} */
	ground;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		const player = this.player;

		// storm effects
		this.createStormEffects();

		// --- Background Music ---
		const songs = ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5", "Track 6"];

		if (!this.game.levelSongs) {
			this.game.levelSongs = {};
		}

		const levelId = this.scene.key;

		if (!this.game.levelSongs[levelId]) {
			this.game.levelSongs[levelId] = Phaser.Utils.Array.GetRandom(songs);
		}

		const chosenSong = this.game.levelSongs[levelId];
		let currentMusic = this.sound.get(chosenSong);

		if (!currentMusic || !currentMusic.isPlaying) {
			if (this.game.currentMusicKey && this.game.currentMusicKey !== chosenSong) {
				const oldMusic = this.sound.get(this.game.currentMusicKey);
				if (oldMusic && oldMusic.isPlaying) {
					oldMusic.stop();
				}
			}

			this.bgMusic = this.sound.add(chosenSong, {
				loop: true,
				volume: 0.5
			});

			this.bgMusic.play();
			this.game.currentMusicKey = chosenSong;
		} else {
			this.bgMusic = currentMusic;
		}

		//-- Game State --
		this.gameOver = false;
		this.levelComplete = false;
		this.hasKey = false;

		//-- Makes all ground tiles static platforms
		this.platforms = this.physics.add.staticGroup();

		if (this.ground && Array.isArray(this.ground)) {
			this.ground.forEach(tile => {
				if (!tile) return;
				this.platforms.add(tile);
			});
		}

		//--- key and door setup ---
		const key = this.key;
		const door = this.door;

		if (key) {
			this.physics.add.existing(key);
			key.body.setAllowGravity(false);
			key.body.setImmovable(true);
		}

		if (door) {
			this.physics.add.existing(door, true);
		}

		//--- Score HUD ---
		if (this.registry.get("score") === undefined) {
			this.registry.set("score", 0);
		}

		this.score = this.registry.get("score") || 0;

		this.scoreText = this.add.text(16, 16, "Score: " + this.score, {
			fontSize: "28px",
			color: "#d4b100",
			fontStyle: "bold"
		});
		this.scoreText.setScrollFactor(0);
		this.scoreText.setStroke("#000000", 2);
		this.scoreText.setDepth(1000);

		//--- Timer HUD ---
		if (this.registry.get("elapsedTime") === undefined) {
			this.registry.set("elapsedTime", 0);
		}

		this.elapsedTime = this.registry.get("elapsedTime") || 0;

		const { width } = this.scale;
		this.timerText = this.add.text(
			width - 16,
			16,
			this.formatTime(this.elapsedTime),
			{
				fontSize: "28px",
				color: "#d4b100",
				fontStyle: "bold"
			}
		)
			.setOrigin(1, 0);
		this.timerText.setScrollFactor(0);
		this.timerText.setStroke("#000000", 2);
		this.timerText.setDepth(1000);

		this.timerEvent = this.time.addEvent({
			delay: 1000,
			loop: true,
			callback: () => {
				this.elapsedTime++;
				this.registry.set("elapsedTime", this.elapsedTime);

				if (this.timerText && this.timerText.setText) {
					this.timerText.setText(this.formatTime(this.elapsedTime));
				}
			}
		});

		//--- Adaptive Difficulty ---
		if (this.registry.get("playerDifficulty") === undefined) {
			this.registry.set("playerDifficulty", { speedMult: 1 });
		}

		this.playerDifficulty = this.registry.get("playerDifficulty");
		this.levelStartTime = this.elapsedTime;
		this.deathsThisLevel = 0;

		//--- Jump Skill Tracking Initialization ---
		this.totalJumps = 0;
		this.totalLandings = 0;
		this.totalLandingOffset = 0;
		this.totalDirectionSwitches = 0;
		this.totalWaitTime = 0;
		this.waitSamples = 0;

		this.isAirborne = false;
		this.currentAirDir = 0;
		this.currentAirDirectionSwitches = 0;
		this.lastLandTime = this.elapsedTime;

		this.diffDebugText = this.add.text(
			16,
			48,
			"Diff: " + this.playerDifficulty.speedMult.toFixed(2),
			{
				fontSize: "20px",
				color: "#d4b100",
				fontStyle: "bold"
			}
		);
		this.diffDebugText.setScrollFactor(0);
		this.diffDebugText.setStroke("#000000", 2);
		this.diffDebugText.setDepth(1000);

		//--- Door Animation ---
		if (!this.anims.exists("door_open")) {
			this.anims.create({
				key: "door_open",
				frames: [
					{ key: "Door-1" },
					{ key: "Door-2" },
					{ key: "Door-3" },
					{ key: "Door-4" },
					{ key: "Door-5" },
					{ key: "Door-6" },
					{ key: "Door-7" }
				],
				frameRate: 10,
				repeat: 0
			});
		}

		if (this.door && this.door.setTexture) {
			this.door.setTexture("Door-1");
		}

		//--- Bullet Texture ---
		if (!this.textures.exists("bulletTex")) {
			const g = this.add.graphics();
			g.fillStyle(0xffff00, 1);
			g.fillRect(0, 0, 10, 4);
			g.generateTexture("bulletTex", 10, 4);
			g.destroy();
		}

		//--- Bullet Group ---
		this.bullets = this.physics.add.group({
			defaultKey: "bulletTex",
			maxSize: 50,
			allowGravity: false
		});

		//--- World and Player Physics ---
		this.physics.world.gravity.y = 600;
		player.body.setCollideWorldBounds(true);
		player.body.setBounce(0.1, 0.1);

		//--- Player vs Ground Collider ---
		this.physics.add.collider(
			this.player,
			this.platforms,
			this.onPlayerLand,
			null,
			this
		);

		//--- Bullet vs ground ---
		this.physics.add.collider(
			this.platforms,
			this.bullets,
			this.onBulletHitPlatform,
			null,
			this
		);

		//--- Player picks up key ---
		this.physics.add.overlap(
			this.player,
			this.key,
			this.onPlayerPickupKey,
			null,
			this
		);

		//--- Input for player movement ---
		this.cursor = this.input.keyboard.createCursorKeys();
		this.wasd = this.input.keyboard.addKeys({
			up: Phaser.Input.Keyboard.KeyCodes.W,
			left: Phaser.Input.Keyboard.KeyCodes.A,
			down: Phaser.Input.Keyboard.KeyCodes.S,
			right: Phaser.Input.Keyboard.KeyCodes.D
		});

		this.shootKey = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.SPACE
		);

		this.interactKey = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.K
		);

		//--- Mobile Detection & Controls ---
		this.isMobile = !this.sys.game.device.os.desktop;

		if (this.isMobile) {
			this.createMobileControls();
		}

		this.createHelpUI();

		//--- Player Animations ---
		this.anims.create({
			key: "player_idle_front",
			frames: [
				{ key: "idlefront1" },
				{ key: "idlefront2" },
				{ key: "idlefront3" },
				{ key: "idlefront4" }
			],
			frameRate: 1,
			repeat: -1
		});

		this.anims.create({
			key: "player_walk_right",
			frames: [
				{ key: "walkingright1" },
				{ key: "walkingright2" },
				{ key: "walkingright3" },
				{ key: "walkingright4" }
			],
			frameRate: 8,
			repeat: -1
		});

		player.play("player_idle_front");
	}

	update(time, delta) {
		this.updateRain(time, delta);

		if (this.gameOver || this.levelComplete) {
			return;
		}

		if (this.helpOpen) {
			return;
		}

		const player = this.player;
		const speed = 200;
		const jumpSpeed = -450;

		const leftPressed =
			this.cursor.left.isDown ||
			this.wasd.left.isDown ||
			!!this.joystickLeft;

		const rightPressed =
			this.cursor.right.isDown ||
			this.wasd.right.isDown ||
			!!this.joystickRight;

		const upPressed =
			this.cursor.up.isDown ||
			this.wasd.up.isDown ||
			!!this.joystickUp;

		let hDir = 0;
		if (leftPressed) {
			hDir = -1;
		} else if (rightPressed) {
			hDir = 1;
		}

		if (Phaser.Input.Keyboard.JustDown(this.shootKey)) {
			this.shootBullet();
		}

		if (Phaser.Input.Keyboard.JustDown(this.interactKey)) {
			this.tryOpenDoor();
		}

		if (leftPressed) {
			player.body.setVelocityX(-speed);
			player.setFlipX(true);
			player.play("player_walk_right", true);
		} else if (rightPressed) {
			player.body.setVelocityX(speed);
			player.setFlipX(false);
			player.play("player_walk_right", true);
		} else {
			player.body.setVelocityX(0);
			player.play("player_idle_front", true);
		}

		if (upPressed && player.body.blocked.down) {

			if (typeof this.lastLandTime === "number") {
				const wait = this.elapsedTime - this.lastLandTime;
				if (wait >= 0) {
					this.totalWaitTime += wait;
					this.waitSamples++;
				}
			}

			this.totalJumps++;
			this.isAirborne = true;
			this.currentAirDirectionSwitches = 0;
			this.currentAirDir = hDir;

			player.body.setVelocityY(jumpSpeed);
		}

		if (!player.body.blocked.down && this.isAirborne) {
			if (
				this.currentAirDir !== 0 &&
				hDir !== 0 &&
				hDir !== this.currentAirDir
			) {
				this.currentAirDirectionSwitches++;
				this.totalDirectionSwitches++;
			}

			if (hDir !== 0) {
				this.currentAirDir = hDir;
			}
		}
	}

	shootBullet() {
		const player = this.player;
		const BULLET_SPEED = 400;

		const dir = player.flipX ? -1 : 1;
		const offsetX = 20 * dir;
		const bulletY = player.y - player.displayHeight * 0.5;

		const bullet = this.bullets.get(player.x + offsetX, bulletY);
		if (!bullet) return;

		bullet.setActive(true);
		bullet.setVisible(true);
		bullet.body.enable = true;
		bullet.body.allowGravity = false;
		bullet.body.setVelocityX(BULLET_SPEED * dir);
	}

	onBulletHitPlatform(platform, bullet) {
		if (bullet && bullet.destroy) {
			bullet.destroy();
		}
	}

	onPlayerLand(player, platform) {
		if (!this.isAirborne) {
			this.lastLandTime = this.elapsedTime;
			return;
		}

		this.isAirborne = false;

		const platformX = platform.x;
		const landingOffset = Math.abs(player.x - platformX);

		this.totalLandings++;
		this.totalLandingOffset += landingOffset;
		this.lastLandTime = this.elapsedTime;
	}

	onPlayerPickupKey(player, key) {
		if (this.hasKey) return;

		this.hasKey = true;

		if (key && key.destroy) {
			key.destroy();
		}

		const { width, height } = this.scale;

		const text = this.add.text(
			width / 2,
			height * 0.15,
			"Key + 1",
			{
				fontSize: "28px",
				color: "#ffff00",
				fontStyle: "bold"
			}
		)
		.setOrigin(0.5)
		.setDepth(999);

		this.time.delayedCall(1000, () => {
			if (text && text.destroy) {
				text.destroy();
			}
		});
	}

	tryOpenDoor() {
		if (!this.hasKey || this.gameOver || this.levelComplete) {
			return;
		}

		if (!this.player || !this.door) {
			return;
		}

		const OPEN_DISTANCE = 70;

		const dist = Phaser.Math.Distance.Between(
			this.player.x,
			this.player.y,
			this.door.x,
			this.door.y
		);

		if (dist <= OPEN_DISTANCE) {
			this.onPlayerReachDoor(this.player, this.door);
		}
	}

	onPlayerReachDoor(player, door) {
		if (!this.hasKey || this.levelComplete || this.gameOver) {
			return;
		}

		this.levelComplete = true;

		if (this.door && this.door.anims) {
			this.door.play("door_open");
		}

		if (this.bgMusic && this.bgMusic.isPlaying) {
			this.bgMusic.stop();
		}

		this.physics.pause();
		if (player.anims) {
			player.anims.stop();
		}

		const { width, height } = this.scale;

		const levelCompleteText = this.add.text(
			width / 2,
			height / 2,
			"LEVEL 1 COMPLETE",
			{
				fontSize: "64px",
				color: "#0f7a2b",
				fontStyle: "bold"
			}
		).setOrigin(0.5);

		levelCompleteText.setStroke("#000000", 6);

		const endTime = this.elapsedTime;
		const levelDuration = endTime - (this.levelStartTime || 0);
		const deaths = this.deathsThisLevel || 0;

		let diff = this.registry.get("playerDifficulty") || { speedMult: 1 };

		if (deaths === 0 && levelDuration < 30) {
			diff.speedMult = Math.min(diff.speedMult + 0.15, 2);
		} else if (deaths >= 3 || levelDuration > 45) {
			diff.speedMult = Math.max(diff.speedMult - 0.15, 0.5);
		}

		const avgLandingOffset =
			this.totalLandings > 0
				? this.totalLandingOffset / this.totalLandings
				: null;

		const avgDirectionSwitches =
			this.totalJumps > 0
				? this.totalDirectionSwitches / this.totalJumps
				: null;

		const avgWaitTime =
			this.waitSamples > 0
				? this.totalWaitTime / this.waitSamples
				: null;

		if (avgLandingOffset !== null) {
			if (avgLandingOffset < 40) {
				diff.speedMult = Math.min(diff.speedMult + 0.05, 2);
			} else if (avgLandingOffset > 80) {
				diff.speedMult = Math.max(diff.speedMult - 0.05, 0.5);
			}
		}

		if (avgDirectionSwitches !== null) {
			if (avgDirectionSwitches < 0.5) {
				diff.speedMult = Math.min(diff.speedMult + 0.05, 2);
			} else if (avgDirectionSwitches > 1.5) {
				diff.speedMult = Math.max(diff.speedMult - 0.05, 0.5);
			}
		}

		if (avgWaitTime !== null) {
			if (avgWaitTime < 1.5) {
				diff.speedMult = Math.min(diff.speedMult + 0.05, 2);
			} else if (avgWaitTime > 4) {
				diff.speedMult = Math.max(diff.speedMult - 0.05, 0.5);
			}
		}

		this.registry.set("playerDifficulty", diff);

		this.time.delayedCall(1500, () => {
			this.scene.start("LevelTwo");
		});
	}

	//------ Help Button + Popup UI --------
	createHelpUI() {
		const { width, height } = this.scale;

		// Help button background
		this.helpButton = this.add.rectangle(width - 90, 78, 120, 44, 0x111111, 0.8);
		this.helpButton.setStrokeStyle(2, 0xffffff, 1);
		this.helpButton.setScrollFactor(0);
		this.helpButton.setDepth(2000);
		this.helpButton.setInteractive({ useHandCursor: true });

		// Help button label
		this.helpButtonText = this.add.text(width - 90, 78, "Help", {
			fontFamily: "Chiller",
			fontSize: "28px",
			color: "#ffffff"
		});
		this.helpButtonText.setOrigin(0.5);
		this.helpButtonText.setScrollFactor(0);
		this.helpButtonText.setDepth(2001);
		this.helpButtonText.setInteractive({ useHandCursor: true });

		// Dark overlay behind popup
		this.helpOverlay = this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.6);
		this.helpOverlay.setScrollFactor(0);
		this.helpOverlay.setDepth(2100);
		this.helpOverlay.setVisible(false);

		// Popup panel
		this.helpPanel = this.add.rectangle(width / 2, height / 2, 920, 620, 0x1a1a1a, 0.95);
		this.helpPanel.setStrokeStyle(4, 0xffffff, 1);
		this.helpPanel.setScrollFactor(0);
		this.helpPanel.setDepth(2101);
		this.helpPanel.setVisible(false);

		// Popup title
		this.helpTitleText = this.add.text(width / 2, height / 2 - 255, "How to Play", {
			fontFamily: "Chiller",
			fontSize: "42px",
			color: "#ffffff"
		});
		this.helpTitleText.setOrigin(0.5);
		this.helpTitleText.setScrollFactor(0);
		this.helpTitleText.setDepth(2102);
		this.helpTitleText.setVisible(false);

		// Popup instructions
		this.helpInstructionsText = this.add.text(
			width / 2 - 390,
			height / 2 - 205,
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
				? "Tap CLOSE to resume the game."
				: "Click CLOSE to resume the game."),
			{
				fontFamily: "Chiller",
				fontSize: "18px",
				color: "#d4b100",
				align: "left",
				wordWrap: { width: 780 },
				lineSpacing: 4
			}
		);
		this.helpInstructionsText.setScrollFactor(0);
		this.helpInstructionsText.setDepth(2102);
		this.helpInstructionsText.setVisible(false);

		// Close button text
		this.helpCloseText = this.add.text(width / 2, height / 2 + 245, "CLOSE", {
			fontFamily: "Chiller",
			fontSize: "30px",
			color: "#ffff00"
		});
		this.helpCloseText.setOrigin(0.5);
		this.helpCloseText.setScrollFactor(0);
		this.helpCloseText.setDepth(2102);
		this.helpCloseText.setVisible(false);
		this.helpCloseText.setInteractive({ useHandCursor: true });

		const openHelpHandler = () => {
			if (!this.helpOpen && !this.gameOver && !this.levelComplete) {
				this.openHelpPopup();
			}
		};

		this.helpButton.on("pointerdown", openHelpHandler);
		this.helpButtonText.on("pointerdown", openHelpHandler);

		this.helpCloseText.on("pointerdown", () => {
			if (this.helpOpen) {
				this.closeHelpPopup();
			}
		});
	}

	openHelpPopup() {
		if (this.helpOpen) return;

		this.helpOpen = true;

		this.physics.pause();

		if (this.timerEvent) {
			this.timerEvent.paused = true;
		}

		if (this.player && this.player.body) {
			this.player.body.setVelocity(0, 0);
		}

		if (this.player && this.player.anims) {
			this.player.anims.stop();
		}

		this.helpOverlay.setVisible(true);
		this.helpPanel.setVisible(true);
		this.helpTitleText.setVisible(true);
		this.helpInstructionsText.setVisible(true);
		this.helpCloseText.setVisible(true);
	}

	closeHelpPopup() {
		if (!this.helpOpen) return;

		this.helpOpen = false;

		this.helpOverlay.setVisible(false);
		this.helpPanel.setVisible(false);
		this.helpTitleText.setVisible(false);
		this.helpInstructionsText.setVisible(false);
		this.helpCloseText.setVisible(false);

		if (!this.gameOver && !this.levelComplete) {
			this.physics.resume();

			if (this.timerEvent) {
				this.timerEvent.paused = false;
			}
		}
	}

	//--- Mobile Controls: Joystick + Shoot Button ---
	createMobileControls() {
		const width = this.scale.width;
		const height = this.scale.height;

		const baseX = 80;
		const baseY = height - 80;
		const baseRadius = 70;

		const base = this.add.circle(baseX, baseY, baseRadius, 0x000000, 0.3);
		base.setScrollFactor(0);
		base.setDepth(1000);
		base.setInteractive();

		const thumb = this.add.circle(baseX, baseY, baseRadius * 0.5, 0xffffff, 0.6);
		thumb.setScrollFactor(0);
		thumb.setDepth(1001);

		this.joystickBase = base;
		this.joystickThumb = thumb;
		this.joystickPointerId = null;
		this.joystickLeft = false;
		this.joystickRight = false;
		this.joystickUp = false;

		this.input.on("pointerdown", (pointer) => {
			if (this.joystickPointerId !== null) {
				return;
			}

			if (pointer.x > width / 2) {
				return;
			}

			this.joystickPointerId = pointer.id;
			this.updateJoystick(pointer);
		});

		this.input.on("pointermove", (pointer) => {
			if (pointer.id === this.joystickPointerId) {
				this.updateJoystick(pointer);
			}
		});

		this.input.on("pointerup", (pointer) => {
			if (pointer.id === this.joystickPointerId) {
				this.resetJoystick();
			}
		});

		const shootRadius = 30;
		const shoot = this.add.circle(width - 80, height - 80, shootRadius, 0xff4444, 0.7);
		shoot.setScrollFactor(0);
		shoot.setDepth(1000);
		shoot.setInteractive();

		shoot.on("pointerdown", () => {
			if (!this.gameOver && !this.levelComplete && !this.helpOpen) {
				this.shootBullet();
			}
		});

		this.shootButton = shoot;

		const interactRadius = 30;
		const interact = this.add.circle(
			width - 150,
			height - 80,
			interactRadius,
			0x44ff44,
			0.7
		);
		interact.setScrollFactor(0);
		interact.setDepth(1000);
		interact.setInteractive();

		interact.on("pointerdown", () => {
			if (!this.gameOver && !this.levelComplete && !this.helpOpen) {
				this.tryOpenDoor();
			}
		});

		this.interactButton = interact;
	}

	updateJoystick(pointer) {
		if (!this.joystickBase || !this.joystickThumb) return;

		const baseX = this.joystickBase.x;
		const baseY = this.joystickBase.y;
		const maxDist = 40;

		const dx = pointer.x - baseX;
		const dy = pointer.y - baseY;

		let dist = Math.sqrt(dx * dx + dy * dy);
		let clampedDx = dx;
		let clampedDy = dy;

		if (dist > maxDist) {
			const ratio = maxDist / dist;
			clampedDx *= ratio;
			clampedDy *= ratio;
		}

		this.joystickThumb.setPosition(baseX + clampedDx, baseY + clampedDy);

		this.joystickLeft = clampedDx < -10;
		this.joystickRight = clampedDx > 10;
		this.joystickUp = clampedDy < -15;
	}

	resetJoystick() {
		if (!this.joystickBase || !this.joystickThumb) return;

		this.joystickPointerId = null;
		this.joystickThumb.setPosition(this.joystickBase.x, this.joystickBase.y);

		this.joystickLeft = false;
		this.joystickRight = false;
		this.joystickUp = false;
	}

	formatTime(totalSeconds) {
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;

		const mStr = minutes.toString();
		const sStr = seconds.toString().padStart(2, "0");

		return mStr + ":" + sStr;
	}

	createStormEffects() {
		const width = this.scale.width;
		const height = this.scale.height;

		this.rainGraphics = this.add.graphics();
		this.rainGraphics.setDepth(20);

		this.lightningBolt = this.add.graphics();
		this.lightningBolt.setDepth(998);

		this.lightningFlash = this.add.rectangle(width / 2, height / 2, width, height, 0xffffff, 1);
		this.lightningFlash.setAlpha(0);
		this.lightningFlash.setDepth(997);

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

		this.lightningFlash.setAlpha(0.55);

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

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here