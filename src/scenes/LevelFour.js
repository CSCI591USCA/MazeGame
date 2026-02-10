
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelFour extends Phaser.Scene {

	constructor() {
		super("LevelFour");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background1
		const background1 = this.add.image(0, 0, "castlebg3");
		background1.scaleX = 2.22;
		background1.scaleY = 2.24;
		background1.setOrigin(0, 0);

		// tile_0000
		const tile_0000 = this.add.image(25, 694, "tile_0000");
		tile_0000.scaleX = 3;
		tile_0000.scaleY = 3;

		// tile
		const tile = this.add.image(77, 694, "tile_0000");
		tile.scaleX = 3;
		tile.scaleY = 3;

		// tile_1
		const tile_1 = this.add.image(129, 694, "tile_0000");
		tile_1.scaleX = 3;
		tile_1.scaleY = 3;

		// tile_2
		const tile_2 = this.add.image(181, 694, "tile_0000");
		tile_2.scaleX = 3;
		tile_2.scaleY = 3;

		// tile_3
		const tile_3 = this.add.image(233, 694, "tile_0000");
		tile_3.scaleX = 3;
		tile_3.scaleY = 3;

		// tile_4
		const tile_4 = this.add.image(285, 694, "tile_0000");
		tile_4.scaleX = 3;
		tile_4.scaleY = 3;

		// tile_5
		const tile_5 = this.add.image(337, 694, "tile_0000");
		tile_5.scaleX = 3;
		tile_5.scaleY = 3;

		// tile_6
		const tile_6 = this.add.image(389, 693, "tile_0000");
		tile_6.scaleX = 3;
		tile_6.scaleY = 3;

		// tile_7
		const tile_7 = this.add.image(441, 694, "tile_0000");
		tile_7.scaleX = 3;
		tile_7.scaleY = 3;

		// tile_8
		const tile_8 = this.add.image(493, 694, "tile_0000");
		tile_8.scaleX = 3;
		tile_8.scaleY = 3;

		// tile_9
		const tile_9 = this.add.image(545, 694, "tile_0000");
		tile_9.scaleX = 3;
		tile_9.scaleY = 3;

		// tile_10
		const tile_10 = this.add.image(597, 694, "tile_0000");
		tile_10.scaleX = 3;
		tile_10.scaleY = 3;

		// tile_11
		const tile_11 = this.add.image(649, 694, "tile_0000");
		tile_11.scaleX = 3;
		tile_11.scaleY = 3;

		// tile_12
		const tile_12 = this.add.image(701, 694, "tile_0000");
		tile_12.scaleX = 3;
		tile_12.scaleY = 3;

		// tile_13
		const tile_13 = this.add.image(753, 694, "tile_0000");
		tile_13.scaleX = 3;
		tile_13.scaleY = 3;

		// tile_14
		const tile_14 = this.add.image(805, 694, "tile_0000");
		tile_14.scaleX = 3;
		tile_14.scaleY = 3;

		// tile_15
		const tile_15 = this.add.image(857, 694, "tile_0000");
		tile_15.scaleX = 3;
		tile_15.scaleY = 3;

		// tile_16
		const tile_16 = this.add.image(909, 694, "tile_0000");
		tile_16.scaleX = 3;
		tile_16.scaleY = 3;

		// tile_17
		const tile_17 = this.add.image(961, 694, "tile_0000");
		tile_17.scaleX = 3;
		tile_17.scaleY = 3;

		// tile_18
		const tile_18 = this.add.image(1013, 694, "tile_0000");
		tile_18.scaleX = 3;
		tile_18.scaleY = 3;

		// tile_19
		const tile_19 = this.add.image(1065, 694, "tile_0000");
		tile_19.scaleX = 3;
		tile_19.scaleY = 3;

		// tile_20
		const tile_20 = this.add.image(1117, 694, "tile_0000");
		tile_20.scaleX = 3;
		tile_20.scaleY = 3;

		// tile_21
		const tile_21 = this.add.image(1169, 694, "tile_0000");
		tile_21.scaleX = 3;
		tile_21.scaleY = 3;

		// tile_22
		const tile_22 = this.add.image(1221, 694, "tile_0000");
		tile_22.scaleX = 3;
		tile_22.scaleY = 3;

		// tile_23
		const tile_23 = this.add.image(1264, 694, "tile_0000");
		tile_23.scaleX = 2;
		tile_23.scaleY = 3;

		// tile_24
		const tile_24 = this.add.image(673, 641, "tile_0000");
		tile_24.scaleX = 3;
		tile_24.scaleY = 3;

		// tile_25
		const tile_25 = this.add.image(673, 589, "tile_0000");
		tile_25.scaleX = 3;
		tile_25.scaleY = 3;

		// tile_26
		const tile_26 = this.add.image(673, 537, "tile_0000");
		tile_26.scaleX = 3;
		tile_26.scaleY = 3;

		// tile_27
		const tile_27 = this.add.image(673, 485, "tile_0000");
		tile_27.scaleX = 3;
		tile_27.scaleY = 3;

		// tile_28
		const tile_28 = this.add.image(725, 485, "tile_0000");
		tile_28.scaleX = 3;
		tile_28.scaleY = 3;

		// tile_29
		const tile_29 = this.add.image(777, 485, "tile_0000");
		tile_29.scaleX = 3;
		tile_29.scaleY = 3;

		// tile_30
		const tile_30 = this.add.image(829, 485, "tile_0000");
		tile_30.scaleX = 3;
		tile_30.scaleY = 3;

		// tile_31
		const tile_31 = this.add.image(881, 485, "tile_0000");
		tile_31.scaleX = 3;
		tile_31.scaleY = 3;

		// tile_32
		const tile_32 = this.add.image(933, 485, "tile_0000");
		tile_32.scaleX = 3;
		tile_32.scaleY = 3;

		// tile_33
		const tile_33 = this.add.image(985, 485, "tile_0000");
		tile_33.scaleX = 3;
		tile_33.scaleY = 3;

		// tile_34
		const tile_34 = this.add.image(1037, 485, "tile_0000");
		tile_34.scaleX = 3;
		tile_34.scaleY = 3;

		// tile_35
		const tile_35 = this.add.image(1089, 485, "tile_0000");
		tile_35.scaleX = 3;
		tile_35.scaleY = 3;

		// tile_36
		const tile_36 = this.add.image(621, 641, "tile_0000");
		tile_36.scaleX = 3;
		tile_36.scaleY = 3;

		// tile_37
		const tile_37 = this.add.image(1253, 328, "tile_0000");
		tile_37.scaleX = 3;
		tile_37.scaleY = 3;

		// tile_38
		const tile_38 = this.add.image(1201, 328, "tile_0000");
		tile_38.scaleX = 3;
		tile_38.scaleY = 3;

		// tile_39
		const tile_39 = this.add.image(1149, 328, "tile_0000");
		tile_39.scaleX = 3;
		tile_39.scaleY = 3;

		// tile_40
		const tile_40 = this.add.image(1097, 328, "tile_0000");
		tile_40.scaleX = 3;
		tile_40.scaleY = 3;

		// tile_41
		const tile_41 = this.add.image(929, 221, "tile_0000");
		tile_41.scaleX = 3;
		tile_41.scaleY = 3;

		// tile_42
		const tile_42 = this.add.image(877, 221, "tile_0000");
		tile_42.scaleX = 3;
		tile_42.scaleY = 3;

		// tile_43
		const tile_43 = this.add.image(825, 221, "tile_0000");
		tile_43.scaleX = 3;
		tile_43.scaleY = 3;

		// tile_44
		const tile_44 = this.add.image(773, 221, "tile_0000");
		tile_44.scaleX = 3;
		tile_44.scaleY = 3;

		// tile_45
		const tile_45 = this.add.image(721, 221, "tile_0000");
		tile_45.scaleX = 3;
		tile_45.scaleY = 3;

		// tile_46
		const tile_46 = this.add.image(669, 221, "tile_0000");
		tile_46.scaleX = 3;
		tile_46.scaleY = 3;

		// tile_47
		const tile_47 = this.add.image(617, 221, "tile_0000");
		tile_47.scaleX = 3;
		tile_47.scaleY = 3;

		// tile_48
		const tile_48 = this.add.image(565, 221, "tile_0000");
		tile_48.scaleX = 3;
		tile_48.scaleY = 3;

		// tile_49
		const tile_49 = this.add.image(513, 221, "tile_0000");
		tile_49.scaleX = 3;
		tile_49.scaleY = 3;

		// tile_50
		const tile_50 = this.add.image(461, 221, "tile_0000");
		tile_50.scaleX = 3;
		tile_50.scaleY = 3;

		// tile_51
		const tile_51 = this.add.image(25, 450, "tile_0000");
		tile_51.scaleX = 3;
		tile_51.scaleY = 3;

		// tile_52
		const tile_52 = this.add.image(77, 450, "tile_0000");
		tile_52.scaleX = 3;
		tile_52.scaleY = 3;

		// tile_53
		const tile_53 = this.add.image(129, 450, "tile_0000");
		tile_53.scaleX = 3;
		tile_53.scaleY = 3;

		// tile_54
		const tile_54 = this.add.image(1250, 641, "tile_0000");
		tile_54.scaleX = 3;
		tile_54.scaleY = 3;

		// door
		const door = this.physics.add.sprite(774, 629, "Door-1");
		door.scaleX = 0.4;
		door.scaleY = 0.4;
		door.body.moves = false;
		door.body.allowGravity = false;
		door.body.collideWorldBounds = true;
		door.body.pushable = false;
		door.body.immovable = true;
		door.body.setSize(480, 480, false);

		// key
		const key = this.physics.add.image(78, 374, "New Piskel");
		key.scaleX = 0.2;
		key.scaleY = 0.2;
		key.body.moves = false;
		key.body.allowGravity = false;
		key.body.collideWorldBounds = true;
		key.body.pushable = false;
		key.body.immovable = true;
		key.body.setSize(480, 480, false);

		// player
		const player = this.physics.add.sprite(48, 666, "idlefront1");
		player.scaleX = 1.7;
		player.scaleY = 1.7;
		player.setOrigin(0.5, 1);
		player.body.collideWorldBounds = true;
		player.body.setOffset(10, 0);
		player.body.setSize(28, 40, false);

		// enemy1
		const enemy1 = this.physics.add.sprite(883, 454, "enemywalkingright1");
		enemy1.scaleX = 2;
		enemy1.scaleY = 2;
		enemy1.setOrigin(0.5, 1);
		enemy1.body.collideWorldBounds = true;
		enemy1.body.setOffset(6, -8);
		enemy1.body.setSize(28, 40, false);

		// enemy2
		const enemy2 = this.physics.add.sprite(1008, 663, "enemywalkingright1");
		enemy2.scaleX = 2;
		enemy2.scaleY = 2;
		enemy2.setOrigin(0.5, 1);
		enemy2.body.collideWorldBounds = true;
		enemy2.body.setOffset(6, -8);
		enemy2.body.setSize(28, 40, false);

		// enemy3
		const enemy3 = this.physics.add.sprite(1151, 300, "enemywalkingright1");
		enemy3.scaleX = 2;
		enemy3.scaleY = 2;
		enemy3.setOrigin(0.5, 1);
		enemy3.body.collideWorldBounds = true;
		enemy3.body.setOffset(6, -8);
		enemy3.body.setSize(28, 40, false);

		// enemy4
		const enemy4 = this.physics.add.sprite(664, 190, "enemywalkingright1");
		enemy4.scaleX = 2;
		enemy4.scaleY = 2;
		enemy4.setOrigin(0.5, 1);
		enemy4.body.collideWorldBounds = true;
		enemy4.body.setOffset(6, -8);
		enemy4.body.setSize(28, 40, false);

		// lists
		const ground = [tile_0000, tile, tile_1, tile_2, tile_3, tile_4, tile_5, tile_6, tile_7, tile_8, tile_9, tile_10, tile_11, tile_12, tile_13, tile_14, tile_15, tile_16, tile_17, tile_18, tile_19, tile_20, tile_21, tile_22, tile_23, tile_24, tile_25, tile_26, tile_27, tile_28, tile_29, tile_30, tile_31, tile_32, tile_33, tile_34, tile_35, tile_36, tile_37, tile_38, tile_39, tile_40, tile_41, tile_42, tile_43, tile_44, tile_45, tile_46, tile_47, tile_48, tile_49, tile_50, tile_51, tile_52, tile_53, tile_54];
		const enemies = [enemy1, enemy2, enemy3, enemy4];

		// collider
		this.physics.add.collider(player, ground);

		// collider_1
		this.physics.add.collider(enemies, ground, undefined, undefined, this);

		this.door = door;
		this.key = key;
		this.player = player;
		this.enemy1 = enemy1;
		this.enemy2 = enemy2;
		this.enemy3 = enemy3;
		this.enemy4 = enemy4;
		this.ground = ground;
		this.enemies = enemies;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	door;
	/** @type {Phaser.Physics.Arcade.Image} */
	key;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	player;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	enemy1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	enemy2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	enemy3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	enemy4;
	/** @type {Phaser.GameObjects.Image[]} */
	ground;
	/** @type {Phaser.Physics.Arcade.Sprite[]} */
	enemies;

	/* START-USER-CODE */

	// Write your code here

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

		//this makes sure the door starts on the closed frame
		if (this.door && this.door.setTexture) {
			this.door.setTexture("Door-1");
		}

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
		if (this.enemy4) this.enemies.add(this.enemy4);

		const PATROL_SPEED = 100; //enemy speed
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
		// ================================
		// Enemy Behavior Tuning (Level 4)
		// ================================

		// bottom big platform
		this.enemy2.canRandomTurn = true;
		this.enemy2.turnChance = 0.005;

		this.enemy2.canRandomJump = false;   // big floor = no jumping


		// middle platform
		this.enemy1.canRandomTurn = true;
		this.enemy1.turnChance = 0.005;

		this.enemy1.canRandomJump = true;
		this.enemy1.jumpChance = 0.008;
		this.enemy1.jumpPower = 260;


		// top right
		this.enemy3.canRandomTurn = true;
		this.enemy3.turnChance = 0.009;

		this.enemy3.canRandomJump = true;
		this.enemy3.jumpChance = 0.004;
		this.enemy3.jumpPower = 260;


		// top left
		this.enemy4.canRandomTurn = true;
		this.enemy4.turnChance = 0.008;

		this.enemy4.canRandomJump = true;
		this.enemy4.jumpChance = 0.008;
		this.enemy4.jumpPower = 260;


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

	update() {

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
				if (enemy.canRandomTurn && Math.random() < enemy.turnChance) {
					enemy.patrolDir *= -1;
					enemy.setFlipX(enemy.patrolDir < 0);
				}
				if (
					enemy.canRandomJump &&
					enemy.body.blocked.down &&
					Math.random() < enemy.jumpChance
				) {
					enemy.body.setVelocityY(-enemy.jumpPower);
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
			bullet.destroy();
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

		//play door opening animation
		if (this.door && this.door.anims) {
			this.door.play("door_open");
		}

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
			"LEVEL 4 COMPLETE",
			{
				fontSize: "64px",
				color: "0f7a2b",
				fontStyle: "bold"
			}
		).setOrigin(0.5);

		//outline to make it look bigger
		levelCompleteText.setStroke("#0f7a2b", 6);

		//after a short delay this starts the next level 
		this.time.delayedCall(1500, () => {
			this.scene.start("LevelFive");
		});
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
