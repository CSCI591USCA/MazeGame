
// You can write more code here

/* START OF COMPILED CODE */

import Prefabwall from "./Prefabwall.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background1
		const background1 = this.add.image(-2, 0, "castlebg1");
		background1.scaleX = 2.2254355424635595;
		background1.scaleY = 2.2359550008840916;
		background1.setOrigin(0, 0);

		// prefabwall
		const prefabwall = new Prefabwall(this, 28, 690);
		this.add.existing(prefabwall);

		// prefabwall_1
		const prefabwall_1 = new Prefabwall(this, 80, 690);
		this.add.existing(prefabwall_1);
		prefabwall_1.body.allowGravity = false;

		// prefabwall_2
		const prefabwall_2 = new Prefabwall(this, 132, 690);
		this.add.existing(prefabwall_2);
		prefabwall_2.body.allowGravity = false;

		// prefabwall_3
		const prefabwall_3 = new Prefabwall(this, 186, 690);
		this.add.existing(prefabwall_3);
		prefabwall_3.body.allowGravity = false;

		// prefabwall_4
		const prefabwall_4 = new Prefabwall(this, 236, 690);
		this.add.existing(prefabwall_4);
		prefabwall_4.body.allowGravity = false;

		// prefabwall_5
		const prefabwall_5 = new Prefabwall(this, 289, 690);
		this.add.existing(prefabwall_5);

		// prefabwall_6
		const prefabwall_6 = new Prefabwall(this, 341, 690);
		this.add.existing(prefabwall_6);

		// prefabwall_7
		const prefabwall_7 = new Prefabwall(this, 394, 690);
		this.add.existing(prefabwall_7);

		// prefabwall_8
		const prefabwall_8 = new Prefabwall(this, 445, 690);
		this.add.existing(prefabwall_8);

		// prefabwall_9
		const prefabwall_9 = new Prefabwall(this, 500, 690);
		this.add.existing(prefabwall_9);

		// prefabwall_10
		const prefabwall_10 = new Prefabwall(this, 553, 690);
		this.add.existing(prefabwall_10);

		// prefabwall_11
		const prefabwall_11 = new Prefabwall(this, 606, 690);
		this.add.existing(prefabwall_11);

		// prefabwall_12
		const prefabwall_12 = new Prefabwall(this, 658, 690);
		this.add.existing(prefabwall_12);

		// prefabwall_13
		const prefabwall_13 = new Prefabwall(this, 710, 690);
		this.add.existing(prefabwall_13);

		// prefabwall_14
		const prefabwall_14 = new Prefabwall(this, 759, 690);
		this.add.existing(prefabwall_14);

		// prefabwall_15
		const prefabwall_15 = new Prefabwall(this, 813, 690);
		this.add.existing(prefabwall_15);

		// prefabwall_16
		const prefabwall_16 = new Prefabwall(this, 866, 690);
		this.add.existing(prefabwall_16);

		// prefabwall_17
		const prefabwall_17 = new Prefabwall(this, 914, 690);
		this.add.existing(prefabwall_17);

		// prefabwall_18
		const prefabwall_18 = new Prefabwall(this, 962, 690);
		this.add.existing(prefabwall_18);

		// prefabwall_19
		const prefabwall_19 = new Prefabwall(this, 1014, 690);
		this.add.existing(prefabwall_19);

		// prefabwall_20
		const prefabwall_20 = new Prefabwall(this, 1066, 690);
		this.add.existing(prefabwall_20);

		// prefabwall_21
		const prefabwall_21 = new Prefabwall(this, 1118, 690);
		this.add.existing(prefabwall_21);

		// prefabwall_22
		const prefabwall_22 = new Prefabwall(this, 1170, 690);
		this.add.existing(prefabwall_22);

		// prefabwall_23
		const prefabwall_23 = new Prefabwall(this, 1221, 690);
		this.add.existing(prefabwall_23);

		// prefabwall_24
		const prefabwall_24 = new Prefabwall(this, 1271, 690);
		this.add.existing(prefabwall_24);

		// player
		const player = this.physics.add.sprite(38, 661, "idlefront1");
		player.scaleX = 1.7;
		player.scaleY = 1.7;
		player.setOrigin(0.5, 1);
		player.body.collideWorldBounds = true;
		player.body.setOffset(10, 0);
		player.body.setSize(28, 40, false);

		// prefabwall_25
		const prefabwall_25 = new Prefabwall(this, 370, 559);
		this.add.existing(prefabwall_25);

		// prefabwall_26
		const prefabwall_26 = new Prefabwall(this, 419, 559);
		this.add.existing(prefabwall_26);

		// prefabwall_27
		const prefabwall_27 = new Prefabwall(this, 467, 559);
		this.add.existing(prefabwall_27);

		// prefabwall_28
		const prefabwall_28 = new Prefabwall(this, 704, 450);
		this.add.existing(prefabwall_28);

		// prefabwall_29
		const prefabwall_29 = new Prefabwall(this, 756, 450);
		this.add.existing(prefabwall_29);

		// prefabwall_30
		const prefabwall_30 = new Prefabwall(this, 806, 450);
		this.add.existing(prefabwall_30);

		// prefabwall_31
		const prefabwall_31 = new Prefabwall(this, 854, 450);
		this.add.existing(prefabwall_31);

		// prefabwall_32
		const prefabwall_32 = new Prefabwall(this, 1151, 335);
		this.add.existing(prefabwall_32);

		// prefabwall_33
		const prefabwall_33 = new Prefabwall(this, 1196, 335);
		this.add.existing(prefabwall_33);

		// prefabwall_34
		const prefabwall_34 = new Prefabwall(this, 1247, 335);
		this.add.existing(prefabwall_34);

		// prefabwall_35
		const prefabwall_35 = new Prefabwall(this, 1100, 335);
		this.add.existing(prefabwall_35);

		// prefabwall_36
		const prefabwall_36 = new Prefabwall(this, 1052, 335);
		this.add.existing(prefabwall_36);

		// prefabwall_37
		const prefabwall_37 = new Prefabwall(this, 857, 205);
		this.add.existing(prefabwall_37);

		// prefabwall_38
		const prefabwall_38 = new Prefabwall(this, 755, 205);
		this.add.existing(prefabwall_38);

		// prefabwall_39
		const prefabwall_39 = new Prefabwall(this, 806, 205);
		this.add.existing(prefabwall_39);

		// prefabwall_40
		const prefabwall_40 = new Prefabwall(this, 707, 205);
		this.add.existing(prefabwall_40);

		// prefabwall_41
		const prefabwall_41 = new Prefabwall(this, 656, 205);
		this.add.existing(prefabwall_41);

		// prefabwall_42
		const prefabwall_42 = new Prefabwall(this, 605, 205);
		this.add.existing(prefabwall_42);

		// prefabwall_43
		const prefabwall_43 = new Prefabwall(this, 554, 205);
		this.add.existing(prefabwall_43);

		// prefabwall_44
		const prefabwall_44 = new Prefabwall(this, 505, 205);
		this.add.existing(prefabwall_44);

		// prefabwall_45
		const prefabwall_45 = new Prefabwall(this, 460, 205);
		this.add.existing(prefabwall_45);

		// prefabwall_46
		const prefabwall_46 = new Prefabwall(this, 412, 205);
		this.add.existing(prefabwall_46);

		// prefabwall_47
		const prefabwall_47 = new Prefabwall(this, 364, 205);
		this.add.existing(prefabwall_47);

		// prefabwall_48
		const prefabwall_48 = new Prefabwall(this, 315, 205);
		this.add.existing(prefabwall_48);

		// prefabwall_49
		const prefabwall_49 = new Prefabwall(this, 265, 205);
		this.add.existing(prefabwall_49);

		// prefabwall_50
		const prefabwall_50 = new Prefabwall(this, 217, 205);
		this.add.existing(prefabwall_50);

		// prefabwall_51
		const prefabwall_51 = new Prefabwall(this, 169, 205);
		this.add.existing(prefabwall_51);

		// prefabwall_52
		const prefabwall_52 = new Prefabwall(this, 118, 205);
		this.add.existing(prefabwall_52);

		// prefabwall_53
		const prefabwall_53 = new Prefabwall(this, 70, 205);
		this.add.existing(prefabwall_53);

		// prefabwall_54
		const prefabwall_54 = new Prefabwall(this, 22, 205);
		this.add.existing(prefabwall_54);

		// prefabwall_55
		const prefabwall_55 = new Prefabwall(this, 1199, 135);
		this.add.existing(prefabwall_55);

		// prefabwall_56
		const prefabwall_56 = new Prefabwall(this, 1250, 135);
		this.add.existing(prefabwall_56);

		// prefabwall_57
		const prefabwall_57 = new Prefabwall(this, 1146, 135);
		this.add.existing(prefabwall_57);

		// prefabwall_58
		const prefabwall_58 = new Prefabwall(this, 1092, 135);
		this.add.existing(prefabwall_58);

		// door
		const door = this.add.rectangle(1249, 55, 128, 128);
		door.scaleX = 0.4;
		door.scaleY = 0.8;
		door.isFilled = true;
		door.fillColor = 6564352;

		// key
		const key = this.add.polygon(35, 158, "35 100 0 50 70 0 140 50 105 100");
		key.scaleX = 0.4;
		key.scaleY = 0.4;
		key.isFilled = true;
		key.fillColor = 14400768;

		// enemy1
		const enemy1 = this.physics.add.sprite(773, 407, "enemywalkingright1");
		enemy1.scaleX = 2;
		enemy1.scaleY = 2;
		enemy1.setOrigin(0.5, 1);
		enemy1.body.collideWorldBounds = true;
		enemy1.body.setOffset(6, -8);
		enemy1.body.setSize(28, 40, false);

		// enemy2
		const enemy2 = this.physics.add.sprite(1120, 301, "enemywalkingright1");
		enemy2.scaleX = 2;
		enemy2.scaleY = 2;
		enemy2.setOrigin(0.5, 1);
		enemy2.body.collideWorldBounds = true;
		enemy2.body.setOffset(6, -8);
		enemy2.body.setSize(28, 40, false);

		// enemy3
		const enemy3 = this.physics.add.sprite(462, 165, "enemywalkingright1");
		enemy3.scaleX = 2;
		enemy3.scaleY = 2;
		enemy3.setOrigin(0.5, 1);
		enemy3.body.collideWorldBounds = true;
		enemy3.body.setOffset(6, -8);
		enemy3.body.setSize(28, 40, false);

		// prefabwall_59
		const prefabwall_59 = new Prefabwall(this, 1038, 135);
		this.add.existing(prefabwall_59);

		// lists
		const ground = [prefabwall_1, prefabwall_2, prefabwall_3, prefabwall_4, prefabwall_5, prefabwall_6, prefabwall_7, prefabwall_8, prefabwall_9, prefabwall_10, prefabwall_11, prefabwall_12, prefabwall_13, prefabwall_14, prefabwall_15, prefabwall_16, prefabwall_17, prefabwall_18, prefabwall_19, prefabwall_20, prefabwall_21, prefabwall_22, prefabwall_23, prefabwall_24, prefabwall_25, prefabwall_26, prefabwall_27, prefabwall_28, prefabwall_29, prefabwall_30, prefabwall_31, prefabwall_32, prefabwall_33, prefabwall_34, prefabwall_35, prefabwall_36, prefabwall_37, prefabwall_38, prefabwall_39, prefabwall_40, prefabwall_41, prefabwall_42, prefabwall_43, prefabwall_44, prefabwall_45, prefabwall_46, prefabwall_47, prefabwall_48, prefabwall_49, prefabwall_50, prefabwall_51, prefabwall_52, prefabwall_53, prefabwall_54, prefabwall_55, prefabwall_56, prefabwall_57, prefabwall_58, prefabwall, prefabwall_59];
		const enemies = [enemy1, enemy2, enemy3];

		// collider
		this.physics.add.collider(player, ground);

		// collider_1
		this.physics.add.collider(enemies, ground, undefined, undefined, this);

		this.player = player;
		this.door = door;
		this.key = key;
		this.enemy1 = enemy1;
		this.enemy2 = enemy2;
		this.enemy3 = enemy3;
		this.ground = ground;
		this.enemies = enemies;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	player;
	/** @type {Phaser.GameObjects.Rectangle} */
	door;
	/** @type {Phaser.GameObjects.Polygon} */
	key;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	enemy1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	enemy2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	enemy3;
	/** @type {Prefabwall[]} */
	ground;
	/** @type {Phaser.Physics.Arcade.Sprite[]} */
	enemies;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		//--- Forces all ground tiles to be solid ---
		this.platforms = this.physics.add.staticGroup();

		if (this.ground && Array.isArray(this.ground)) {
			this.ground.forEach(tile => {
				if (!tile) return;
				this.platforms.add(tile);
			});
		}

		const player = this.player;

		// --- Background Music ---
		this.bgMusic = this.sound.add("bgMusic", {
			loop: true,
			volume: 0.5
		});
		this.bgMusic.play();

		//--- game state ---
		this.gameOver = false;
		this.levelComplete = false;		//level finished
		this.hasKey = false;			//player has picked up key or not

		//--- key and door setup ---
		/**
		 * Configures the key and door physics.
		 * The key is immovable and does not fall due to gravity.
		 * The door is a static object that the player can interact with.
		 */
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

		//--- Score setup ---
		this.score = this.registry.get("score") || 0;

		this.scoreText = this.add.text(16, 16, "Score: " + this.score, {
			fontSize: "28px",
			color: "#d4b100",
			fontStyle: "bold"
		});
		this.scoreText.setScrollFactor(0);
		this.scoreText.setStroke("#000000", 2);

		//--- Timer HUD ---

		//reads current elapsed time in seconds from registry
		this.elapsedTime = this.registry.get("elapsedTime") || 0;

		//timer text in top right corner
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
			.setOrigin(1, 0); //anchor top right
		this.timerText.setScrollFactor(0);
		this.timerText.setStroke("#000000", 2);

		//every 1000 ms increase timer by 1 second
		this.timerEvent = this.time.addEvent({
			delay: 1000,
			loop: true,
			callback: () => {
				this.elapsedTime++;

				//saves globally so it continues onto the next level
				this.registry.set("elapsedTime", this.elapsedTime);

				//updates text
				if (this.timerText && this.timerText.setText) {
					this.timerText.setText(this.formatTime(this.elapsedTime));
				}
			}
		});

		//--- Bullet Texture ---
		if (!this.textures.exists("bulletTex")) {
			const g = this.add.graphics();
			g.fillStyle(0xffff00, 1); 	//yellow
			g.fillRect(0, 0, 10, 4);	//10x4 bullet
			g.generateTexture("bulletTex", 10, 4);
			g.destroy();
		}

		//--- Physics setup ---
		this.physics.world.gravity.y = 600;			//gravity so jumps fall back down
		player.body.setCollideWorldBounds(true);	//keep player inside the screen
		player.body.setBounce(0.1, 0.1);

		//--- Enemy Group + Patrol ---
		/**
		 * Creates a group of enemies and sets their patrol behavior.
		 * Each enemy patrols between a defined range and moves at a specified speed.
		 * Enemies are added to the physics world and configured to collide with the ground.
		 * The patrol direction and speed are initialized for each enemy.
		 */
		this.enemies = this.physics.add.group();
		if (this.enemy1) this.enemies.add(this.enemy1);
		if (this.enemy2) this.enemies.add(this.enemy2);
		if (this.enemy3) this.enemies.add(this.enemy3);

		const PATROL_SPEED = 70; //enemy speed
		const PATROL_RANGE = 96; //enemy patrol range

		this.enemies.children.iterate(enemy => {
			if (!enemy || !enemy.body) return;

			enemy.body.setCollideWorldBounds(true);
			enemy.body.setBounce(0, 0);

			//starting point where enemies will patrol
			enemy.startX = enemy.x;
			enemy.minX = enemy.startX - PATROL_RANGE;
			enemy.maxX = enemy.startX + PATROL_RANGE;

			enemy.patrolDir = 1;
			enemy.patrolSpeed = PATROL_SPEED;

			//start moving to the right
			enemy.body.setVelocityX(enemy.patrolSpeed * enemy.patrolDir);
		})

		// --- Bullet Group ---
		/**
		 * Creates a group for bullets with a maximum size and no gravity.
		 * Bullets are used for shooting mechanics in the game.
		 */
		this.bullets = this.physics.add.group({
			defaultKey: "bulletTex",	//use texture we created
			maxSize: 50,				//max bullets at once
			allowGravity: false
		});

		//--- Colliders ---
		//player vs ground
		this.physics.add.collider(this.player, this.platforms);

		//enemies vs ground
		this.physics.add.collider(this.enemies, this.platforms);

		//Enemy hits player -> game over
		this.physics.add.collider(
			this.enemies,
			this.player,
			this.onPlayerHitEnemy,
			null,
			this
		);

		//Bullet vs ground -> destroys only bullet
		this.physics.add.collider(
			this.platforms,
			this.bullets,
			this.onBulletHitPlatform,
			null,
			this
		);

		//Bullet vs enemies -> destroys both
		this.physics.add.overlap(
			this.bullets,
			this.enemies,
			this.onBulletHitEnemy,
			null,
			this
		);

		//Player picking up key
		this.physics.add.overlap(
			this.player,
			this.key,
			this.onPlayerPickupKey,
			null,
			this
		);

		//Player reaching door
		this.physics.add.overlap(
			this.player,
			this.door,
			this.onPlayerReachDoor,
			null,
			this
		);

		//--- Input ---
		/**
		 * Creates keyboard input for player movement and shooting.
		 */
		this.cursor = this.input.keyboard.createCursorKeys();
		this.wasd = this.input.keyboard.addKeys({
			up: Phaser.Input.Keyboard.KeyCodes.W,
			left: Phaser.Input.Keyboard.KeyCodes.A,
			down: Phaser.Input.Keyboard.KeyCodes.S,
			right: Phaser.Input.Keyboard.KeyCodes.D
		});

		//Spacebar for shooting
		this.shootKey = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.SPACE
		);

		//--- Mobile Detection & Controls ---
		/**
		 * Detects if the game is running on a mobile device.
		 */
		this.isMobile = !this.sys.game.device.os.desktop;

		if (this.isMobile) {
			this.createMobileControls();
		}

		//--- Animations ---
		/**
		 * Creates animations for the player and enemies.
		 */
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

		//--- Enemy Walk Animation ---
		/**
		 * Creates an animation for enemy walking.
		 */
		this.anims.create({
			key: "enemy_walk",
			frames: [
				{ key: "enemywalkingright1" },
				{ key: "enemywalkingright2" },
				{ key: "enemywalkingright3" },
				{ key: "enemywalkingright4" }
			],
			frameRate: 8,
			repeat: -1
		});
	}

	update(){
		//if game is over or level is complete skip all game logic
		if (this.gameOver || this.levelComplete) {
			return;
		}

		const player = this.player;
		const speed = 200;
		const jumpSpeed = -450;

		//--- Combine Arrows + WASD + Joystick ---
		/**
		 * Combines input from keyboard arrows, WASD keys, and joystick for player movement.
		 */
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

		//--- Shoot Bullets ----
		/**
		 * Checks if the shoot key is pressed and calls the shootBullet method.
		 */
		if (Phaser.Input.Keyboard.JustDown(this.shootKey)) {
			this.shootBullet();
		}

		// --- Movement and Animation ---
		/**
		 * Handles player movement and animation based on input.
		 */
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

		//--- Jump Logic ---
		/**
		 * Handles player jumping when the up key is pressed and the player is on the ground.
		 */
		if (upPressed && player.body.blocked.down) {
			player.body.setVelocityY(jumpSpeed);
		}

		//--- Enemy patrol between minX and maxX ---
		/**
		 * Updates enemy patrol behavior, making them move between defined limits.
		 */
		if (this.enemies) {
			this.enemies.children.iterate(enemy => {
				if (!enemy || !enemy.body) return;

				enemy.play("enemy_walk", true);


				//enemy reaches left limit and goes right
				if (enemy.x <= enemy.minX) {
					enemy.patrolDir = 1;
					if (enemy.setFlipX) enemy.setFlipX(false);	//enemy faces right
				}
				//reach right limit and go left
				else if (enemy.x >= enemy.maxX) {
					enemy.patrolDir = -1;
					if (enemy.setFlipX) enemy.setFlipX(true); //face left
				}

				enemy.body.setVelocityX(enemy.patrolSpeed * enemy.patrolDir);
			});
		}
	}

	//--- Enemy hits player Game Over ---
	onPlayerHitEnemy(player, enemy) {

		// prevents double-triggering
		if (this.gameOver) return;

		//marks game as over
		this.gameOver = true;

		// pauses timer so it stops counting on game over
		if (this.timerEvent) {
			this.timerEvent.paused = true;
		}

		// Stop background music
		if (this.bgMusic && this.bgMusic.isPlaying) {
			this.bgMusic.stop();
		}

		//Stops all physics so everyone freezes
		this.physics.pause();

		//shows the player was hit
		if (player.setTint) {
			player.setTint(0xff0000);
		}
		if (player.anims) {
			player.anims.stop();
		}

		//shows game over text
		const { width, height } = this.scale;
		
		//creates the text object
		const gameOverText = this.add.text(
			width / 2,
			height / 2 - 100,
			"GAME OVER",
			{
				fontSize: "64px",
				color: "#b80000",
				fontStyle: "bold"
			}
		).setOrigin(0.5);

		//adds black outline to make it look bigger
		gameOverText.setStroke("#000000", 6);

		//--- Restart button visuals ---
		const buttonWidth = 180;
		const buttonHeight = 50;

		//--- button background ---
		const restartButton = this.add.rectangle(
			width / 2,
			height / 2 + 10, //below GAME OVER text
			buttonWidth,
			buttonHeight,
			0x000000
		)
			.setStrokeStyle(3, 0xffffff)
			.setOrigin(0.5)
			.setScrollFactor(0)
			.setDepth(1000)
			.setInteractive({ useHandCursor: true });
		
		//--- Button Label ---
		const restartLabel = this.add.text(
			restartButton.x,
			restartButton.y,
			"RESTART",
			{
				fontSize: "24px",
				color: "#ffffff"
			}
		)
			.setOrigin(0.5)
			.setScrollFactor(0)
			.setDepth(1001);

		//--- Shared restart handler ---
		const doRestart = () => {
			if (player.clearTint) {
				player.clearTint();
			}
			this.scene.restart();
		};

		//--- click on button background ---
		restartButton.on("pointerup", doRestart);

		//--- allows clicking on the text itself ---
		restartLabel.setInteractive({ useHandCursor: true });
		restartLabel.on("pointerup", doRestart);

		//--- Simple hover effect ---
		restartButton.on("pointerover", () => {
			restartButton.setFillStyle(0x222222);
		});
		restartButton.on("pointerout", () => {
			restartButton.setFillStyle(0x000000);
		});
	}

	//--- Shooting Logic ---
	/**
	 * Shoots a bullet from the player's position in the direction they are facing.
	 * The bullet is spawned slightly in front of the player and travels across the screen.
	 */
	shootBullet() {
		const player = this.player;
		const BULLET_SPEED = 400;

		const dir = player.flipX ? -1 : 1;

		//spawn slightly in front of the player
		const offsetX = 20 * dir;

		//Put bullet around mid-body
		const bulletY = player.y - player.displayHeight * 0.5;

		//Get a bullet from the physics group
		const bullet = this.bullets.get(player.x + offsetX, bulletY);

		if (!bullet) return;

		//activate and show it
		bullet.setActive(true);
		bullet.setVisible(true);

		//Ensure its body is enabled and dynamic
		bullet.body.enable = true;
		bullet.body.allowGravity = false;

		//Set velocity so bullet travels across the screen
		bullet.body.setVelocityX(BULLET_SPEED * dir);
	}

	//--- Bullet hits platform ---
	onBulletHitPlatform(platform, bullet) {
		//destroys bullet when it hits platform, platform stays
		if (bullet && bullet.destroy) {
			bullet.destroy();
		}
	}

	//--- Bullet hits enemy ---
	/**
	 * Handles the event when a bullet hits an enemy.
	 * If the bullet and enemy exist, it destroys both,
	 * adds points to the score, and updates the score text.
	 */
	onBulletHitEnemy(bullet, enemy) {
		if (bullet && bullet.destroy) {
			bullet.destroy() ;
		}
		if (enemy && enemy.destroy) {
			enemy.destroy();

			//add 10 points to score for killing enemy
			this.score += 10;

			//saves the score so the next level sees the new value
			this.registry.set("score", this.score);

			//updates score text
			if (this.scoreText && this.scoreText.setText) {
				this.scoreText.setText("Score: " + this.score);
			}
		}
	}

	//--- Player picks up key ---
	/**
	 * Handles the event when the player picks up a key.
	 * If the player does not already have the key, it marks the key as collected,
	 * removes it from the level, and displays a "Key + 1" message on screen.
	 */
	onPlayerPickupKey(player, key) {
		if (this.hasKey) return;

		//mark that we have the key
		this.hasKey = true;

		// Remove the key from the level
		if (key && key.destroy) {
			key.destroy();
		}

		//Show "Key + 1" on screen
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

		//Remove the text after 1 second
		this.time.delayedCall(1000, () => {
			if (text && text.destroy) {
				text.destroy();
			}
		});
	}

	//--- Player reaches door ---
	/**
	 * Handles the event when the player reaches the door.
	 * If the player has the key, it marks the level as complete,
	 * stops the background music, pauses the game physics,
	 * and displays a "LEVEL COMPLETE" message.
	 */
	onPlayerReachDoor(player, door) {
		if (!this.hasKey || this.levelComplete || this.gameOver) {
			return;
		}

		this.levelComplete = true;

		// Stop background music
		if (this.bgMusic && this.bgMusic.isPlaying) {
			this.bgMusic.stop();
		}

		this.physics.pause();

		if (player.anims) {
			player.anims.stop();
		}

		const { width, height } = this.scale;
		
		//creates text object for level complete
		const levelCompleteText = this.add.text(
			width / 2,
			height / 2,
			"LEVEL 3 COMPLETE",
			{
				fontSize: "64px",
				color: "0f7a2b",
				fontStyle: "bold"
			}
		).setOrigin(0.5);

		//outline to make it look bigger
		levelCompleteText.setStroke("#0f7a2b", 6);
	}

	//--- Mobile Controls: Joystick + Shoot Button ---
	/**
	 * Creates on-screen joystick and shoot button for mobile devices.
	 * The joystick allows for player movement, while the shoot button enables shooting bullets.
	 */
	createMobileControls() {
		const width = this.scale.width;
		const height = this.scale.height;

		//--- Joystick ---
		const baseX = 80;
		const baseY = height - 80;
		const baseRadius = 70;

		//--- Joystick Base ---
		const base = this.add.circle(baseX, baseY, baseRadius, 0x000000, 0.3);
		base.setScrollFactor(0);
		base.setDepth(1000);
		base.setInteractive();

		//--- Joystick Thumb ---
		const thumb = this.add.circle(baseX, baseY, baseRadius * 0.5, 0xffffff, 0.6);
		thumb.setScrollFactor(0);
		thumb.setDepth(1001);

		this.joystickBase = base;
		this.joystickThumb = thumb;
		this.joystickPointerId = null;
		this.joystickLeft = false;
		this.joystickRight = false;
		this.joystickUp = false;

		//--- Pointer Events on Joystick ---

		/**
		 * If the joystick area is touched, starts tracking that pointer for joystick movement.
		 */
		this.input.on("pointerdown", (pointer) => {		
			if (this.joystickPointerId !== null) {
				return;
			}

			if (pointer.x > width / 2) {
				return
			}

			this.joystickPointerId = pointer.id;
			this.updateJoystick(pointer);
		});

		/**
		 * If the joystick touch moves, updates the joystick state.
		 */
		this.input.on("pointermove", (pointer) => {
			if (pointer.id === this.joystickPointerId) {
				this.updateJoystick(pointer);
			}
		});

		/**
		 * if the joystick touch is released, resets the joystick state.
		 */
		this.input.on("pointerup", (pointer) => {
			if (pointer.id === this.joystickPointerId) {
				this.resetJoystick();
			}
		});

		//--- Shoot Button ---
		/**
		 * Creates a shoot button on the screen for mobile devices.
		 */
		const shootRadius = 30;
		const shoot = this.add.circle(width - 80, height - 80, shootRadius, 0xff4444, 0.7);
		shoot.setScrollFactor(0);
		shoot.setDepth(1000);
		shoot.setInteractive();

		/**
		 * If the shoot button is pressed, calls the shootBullet method.
		 */
		shoot.on("pointerdown", () => {
			if (!this.gameOver && !this.levelComplete) {
				this.shootBullet();
			}
		});

		this.shootButton = shoot;
	}

	//--- Update Joystick State ---
	updateJoystick(pointer) {

		/**
		 * if there is no joystick, return.
		 */
		if (!this.joystickBase || !this.joystickThumb) return;

		/**
		 * Calculates the joystick thumb position based on pointer location,
		 * clamping it within a maximum distance from the joystick base.
		 */
		const baseX = this.joystickBase.x;
		const baseY = this.joystickBase.y;
		const maxDist = 40;

		const dx = pointer.x - baseX;
		const dy = pointer.y - baseY;

		/**
		 * Calculates the distance from the joystick base to the pointer.
		 * If the distance exceeds the maximum allowed, it clamps the thumb position.
		 */
		let dist = Math.sqrt(dx * dx + dy * dy);
		let clampedDx = dx;
		let clampedDy = dy;

		/**
		 * Clamps the joystick thumb position within the maximum distance.
		 */
		if (dist > maxDist) {
			const ratio = maxDist / dist;
			clampedDx *= ratio;
			clampedDy *= ratio;
		}

		/**
		 * Sets the joystick thumb position based on the clamped values.
		 */
		this.joystickThumb.setPosition(baseX + clampedDx, baseY + clampedDy);

		/**
		 * Determines the joystick direction based on the clamped thumb position.
		 */
		this.joystickLeft = clampedDx < -10;
		this.joystickRight = clampedDx > 10;
		this.joystickUp = clampedDy < -15;
	}

	//--- Reset Joystick ---
	/**
	 * Resets the joystick to its neutral position and clears directional flags.
	 */
	resetJoystick() {

		/**
		 * if there is no joystick, return.
		 */
		if (!this.joystickBase || !this.joystickThumb) return;

		/**
		 * Resets the joystick pointer ID and thumb position.
		 */
		this.joystickPointerId = null;
		this.joystickThumb.setPosition(this.joystickBase.x, this.joystickBase.y);

		/**
		 * Clears the joystick directional flags.
		 */
		this.joystickLeft = false;
		this.joystickRight = false;
		this.joystickUp = false;
	}

	//--- Timer Logic ---
	formatTime(totalSeconds) {
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;

		const mStr = minutes.toString();
		const sStr = seconds.toString().padStart(2, "0");

		return mStr + ":" + sStr;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
