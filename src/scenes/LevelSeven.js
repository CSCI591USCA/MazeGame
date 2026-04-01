// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelSeven extends Phaser.Scene {

	constructor() {
		super("LevelSeven");

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

		// door platform / right side ground
		const tile_0000 = this.add.image(1252, 700, "tile_0000");
		tile_0000.scaleX = 3;
		tile_0000.scaleY = 3;

		const tile = this.add.image(1200, 700, "tile_0000");
		tile.scaleX = 3;
		tile.scaleY = 3;

		const tile_1 = this.add.image(1148, 700, "tile_0000");
		tile_1.scaleX = 3;
		tile_1.scaleY = 3;

		const tile_2 = this.add.image(1148, 648, "tile_0000");
		tile_2.scaleX = 3;
		tile_2.scaleY = 3;

		const tile_3 = this.add.image(1200, 648, "tile_0000");
		tile_3.scaleX = 3;
		tile_3.scaleY = 3;

		const tile_4 = this.add.image(1252, 648, "tile_0000");
		tile_4.scaleX = 3;
		tile_4.scaleY = 3;

		const tile_5 = this.add.image(1148, 596, "tile_0000");
		tile_5.scaleX = 3;
		tile_5.scaleY = 3;

		const tile_6 = this.add.image(1200, 596, "tile_0000");
		tile_6.scaleX = 3;
		tile_6.scaleY = 3;

		const tile_7 = this.add.image(1252, 596, "tile_0000");
		tile_7.scaleX = 3;
		tile_7.scaleY = 3;

		// lower moving platform VISUALS only
		const tile_8 = this.add.image(960, 480, "tile_0000");
		tile_8.scaleX = 3;
		tile_8.scaleY = 3;

		const tile_9 = this.add.image(908, 480, "tile_0000");
		tile_9.scaleX = 3;
		tile_9.scaleY = 3;

		const tile_10 = this.add.image(856, 480, "tile_0000");
		tile_10.scaleX = 3;
		tile_10.scaleY = 3;

		const tile_11 = this.add.image(804, 480, "tile_0000");
		tile_11.scaleX = 3;
		tile_11.scaleY = 3;

		// left side platform / outlaw platform
		const tile_12 = this.add.image(25, 360, "tile_0000");
		tile_12.scaleX = 3;
		tile_12.scaleY = 3;

		const tile_13 = this.add.image(77, 360, "tile_0000");
		tile_13.scaleX = 3;
		tile_13.scaleY = 3;

		const tile_14 = this.add.image(129, 360, "tile_0000");
		tile_14.scaleX = 3;
		tile_14.scaleY = 3;

		const tile_15 = this.add.image(181, 360, "tile_0000");
		tile_15.scaleX = 3;
		tile_15.scaleY = 3;

		const tile_16 = this.add.image(233, 360, "tile_0000");
		tile_16.scaleX = 3;
		tile_16.scaleY = 3;

		const tile_17 = this.add.image(285, 360, "tile_0000");
		tile_17.scaleX = 3;
		tile_17.scaleY = 3;

		// upper moving platform VISUALS only
		const tile_18 = this.add.image(460, 250, "tile_0000");
		tile_18.scaleX = 3;
		tile_18.scaleY = 3;

		const tile_19 = this.add.image(512, 250, "tile_0000");
		tile_19.scaleX = 3;
		tile_19.scaleY = 3;

		const tile_20 = this.add.image(564, 250, "tile_0000");
		tile_20.scaleX = 3;
		tile_20.scaleY = 3;

		const tile_21 = this.add.image(616, 250, "tile_0000");
		tile_21.scaleX = 3;
		tile_21.scaleY = 3;

		// key platform / scout platform
		const tile_22 = this.add.image(1252, 150, "tile_0000");
		tile_22.scaleX = 3;
		tile_22.scaleY = 3;

		const tile_23 = this.add.image(1200, 150, "tile_0000");
		tile_23.scaleX = 3;
		tile_23.scaleY = 3;

		const tile_24 = this.add.image(1148, 150, "tile_0000");
		tile_24.scaleX = 3;
		tile_24.scaleY = 3;

		const tile_25 = this.add.image(1096, 150, "tile_0000");
		tile_25.scaleX = 3;
		tile_25.scaleY = 3;

		const tile_26 = this.add.image(1044, 150, "tile_0000");
		tile_26.scaleX = 3;
		tile_26.scaleY = 3;

		const tile_27 = this.add.image(992, 150, "tile_0000");
		tile_27.scaleX = 3;
		tile_27.scaleY = 3;

		// flame hazards
		// these use smaller hitboxes so the player only dies
		// when actually stepping into the visible fire area
		const flame_1 = this.physics.add.sprite(1023, 624, "Flame-1");
		flame_1.scaleX = 0.5;
		flame_1.scaleY = 0.5;
		flame_1.body.moves = false;
		flame_1.body.allowGravity = false;
		flame_1.body.collideWorldBounds = true;
		flame_1.body.pushable = false;
		flame_1.body.immovable = true;
		flame_1.body.setSize(70, 90, false);
		flame_1.body.setOffset(205, 180);

		const flame = this.physics.add.sprite(823, 624, "Flame-1");
		flame.scaleX = 0.5;
		flame.scaleY = 0.5;
		flame.body.moves = false;
		flame.body.allowGravity = false;
		flame.body.collideWorldBounds = true;
		flame.body.pushable = false;
		flame.body.immovable = true;
		flame.body.setSize(70, 90, false);
		flame.body.setOffset(205, 180);

		const flame_2 = this.physics.add.sprite(620, 624, "Flame-1");
		flame_2.scaleX = 0.5;
		flame_2.scaleY = 0.5;
		flame_2.body.moves = false;
		flame_2.body.allowGravity = false;
		flame_2.body.collideWorldBounds = true;
		flame_2.body.pushable = false;
		flame_2.body.immovable = true;
		flame_2.body.setSize(70, 90, false);
		flame_2.body.setOffset(205, 180);

		const flame_3 = this.physics.add.sprite(417, 624, "Flame-1");
		flame_3.scaleX = 0.5;
		flame_3.scaleY = 0.5;
		flame_3.body.moves = false;
		flame_3.body.allowGravity = false;
		flame_3.body.collideWorldBounds = true;
		flame_3.body.pushable = false;
		flame_3.body.immovable = true;
		flame_3.body.setSize(70, 90, false);
		flame_3.body.setOffset(205, 180);

		const flame_4 = this.physics.add.sprite(214, 624, "Flame-1");
		flame_4.scaleX = 0.5;
		flame_4.scaleY = 0.5;
		flame_4.body.moves = false;
		flame_4.body.allowGravity = false;
		flame_4.body.collideWorldBounds = true;
		flame_4.body.pushable = false;
		flame_4.body.immovable = true;
		flame_4.body.setSize(70, 90, false);
		flame_4.body.setOffset(205, 180);

		const flame_5 = this.physics.add.sprite(56, 624, "Flame-1");
		flame_5.scaleX = 0.27;
		flame_5.scaleY = 0.5;
		flame_5.body.moves = false;
		flame_5.body.allowGravity = false;
		flame_5.body.collideWorldBounds = true;
		flame_5.body.pushable = false;
		flame_5.body.immovable = true;
		flame_5.body.setSize(40, 90, false);
		flame_5.body.setOffset(220, 180);

		// door
		const door = this.physics.add.sprite(1235, 530, "Door-1");
		door.scaleX = 0.4;
		door.scaleY = 0.4;
		door.body.moves = false;
		door.body.allowGravity = false;
		door.body.collideWorldBounds = true;
		door.body.pushable = false;
		door.body.immovable = true;
		door.body.setSize(480, 480, false);

		// player
		const player = this.physics.add.sprite(1219, 571, "idlefront1");
		player.scaleX = 1.7;
		player.scaleY = 1.7;
		player.setOrigin(0.5, 1);
		player.body.collideWorldBounds = true;
		player.body.setOffset(10, 0);
		player.body.setSize(28, 40, false);

		// key
		const key = this.physics.add.image(1230, 78, "New Piskel");
		key.scaleX = 0.2;
		key.scaleY = 0.2;
		key.body.moves = false;
		key.body.allowGravity = false;
		key.body.collideWorldBounds = true;
		key.body.pushable = false;
		key.body.immovable = true;
		key.body.setSize(480, 480, false);

		// outlaw
		const outlaw = this.physics.add.sprite(149, 332, "enemyrun1");
		outlaw.scaleX = 2;
		outlaw.scaleY = 2;
		outlaw.setOrigin(0.5, 1);
		outlaw.body.collideWorldBounds = true;
		outlaw.body.setOffset(6, -8);
		outlaw.body.setSize(28, 40, false);

		// scout
		const scout = this.physics.add.sprite(1123, 124, "enemywalk1");
		scout.scaleX = 2;
		scout.scaleY = 2;
		scout.setOrigin(0.5, 1);
		scout.body.collideWorldBounds = true;
		scout.body.setOffset(6, -8);
		scout.body.setSize(28, 40, false);

		// lists
		const ground = [
			tile_0000, tile, tile_1, tile_2, tile_3, tile_4, tile_5, tile_6, tile_7,
			tile_12, tile_13, tile_14, tile_15, tile_16, tile_17,
			tile_22, tile_23, tile_24, tile_25, tile_26, tile_27
		];

		const flames = [flame_1, flame, flame_2, flame_3, flame_4, flame_5];
		const enemies = [outlaw, scout];
		const bottomMovingPlatformTiles = [tile_11, tile_10, tile_9, tile_8];
		const topMovingPlatformTiles = [tile_18, tile_19, tile_20, tile_21];

		this.flame_1 = flame_1;
		this.flame = flame;
		this.flame_2 = flame_2;
		this.flame_3 = flame_3;
		this.flame_4 = flame_4;
		this.flame_5 = flame_5;
		this.door = door;
		this.player = player;
		this.key = key;
		this.outlaw = outlaw;
		this.scout = scout;
		this.ground = ground;
		this.flames = flames;
		this.enemies = enemies;
		this.bottomMovingPlatformTiles = bottomMovingPlatformTiles;
		this.topMovingPlatformTiles = topMovingPlatformTiles;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	flame_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	flame;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	flame_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	flame_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	flame_4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	flame_5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	door;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	player;
	/** @type {Phaser.Physics.Arcade.Image} */
	key;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	outlaw;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	scout;
	/** @type {Phaser.GameObjects.Image[]} */
	ground;
	/** @type {Phaser.Physics.Arcade.Sprite[]} */
	flames;
	/** @type {Phaser.Physics.Arcade.Sprite[]} */
	enemies;
	/** @type {Phaser.GameObjects.Image[]} */
	bottomMovingPlatformTiles;
	/** @type {Phaser.GameObjects.Image[]} */
	topMovingPlatformTiles;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		//--- Forces all ground tiles to be solid ---
		this.platforms = this.physics.add.staticGroup();

		if (this.ground && Array.isArray(this.ground)) {
			this.ground.forEach(tileObj => {
				if (!tileObj) return;
				this.platforms.add(tileObj);
			});
		}

		//--- Moving platform setup ---
		/**
		 * Creates solid physics bodies for each visible moving platform tile.
		 * The visible tiles are just the graphics.
		 * The hidden static bodies are what the player actually stands on.
		 * These bodies are moved and refreshed every frame so each platform
		 * stays solid while moving across the flames.
		 */
		this.movingPlatformGroup = this.physics.add.staticGroup();

		this.bottomMovingPlatformBodies = [];
		this.topMovingPlatformBodies = [];

		// safety checks so scene does not crash if arrays are missing
		this.bottomMovingPlatformTiles = this.bottomMovingPlatformTiles || [];
		this.topMovingPlatformTiles = this.topMovingPlatformTiles || [];

		this.bottomMovingPlatformTiles.forEach(tileObj => {
			if (!tileObj) return;
			const bodyTile = this.physics.add.staticImage(tileObj.x, tileObj.y, "tile_0000");
			bodyTile.setScale(3, 3);
			bodyTile.refreshBody();
			bodyTile.visible = false;
			this.movingPlatformGroup.add(bodyTile);
			this.bottomMovingPlatformBodies.push(bodyTile);
		});

		this.topMovingPlatformTiles.forEach(tileObj => {
			if (!tileObj) return;
			const bodyTile = this.physics.add.staticImage(tileObj.x, tileObj.y, "tile_0000");
			bodyTile.setScale(3, 3);
			bodyTile.refreshBody();
			bodyTile.visible = false;
			this.movingPlatformGroup.add(bodyTile);
			this.topMovingPlatformBodies.push(bodyTile);
		});

		// lower platform movement limits
		// starts by moving LEFT first, then RIGHT
		this.bottomPlatformMinX = 450;
		this.bottomPlatformMaxX = 1040;
		this.bottomPlatformSpeed = 105;
		this.bottomPlatformDir = -1;

		// upper platform movement limits
		// starts by moving RIGHT first, then LEFT
		this.topPlatformMinX = 430;
		this.topPlatformMaxX = 840;
		this.topPlatformSpeed = 105;
		this.topPlatformDir = 1;

		const player = this.player;

		// --- Background Music ---
		this.bgMusic = this.sound.add("bgMusic", {
			loop: true,
			volume: 0.5
		});
		this.bgMusic.play();

		//--- game state ---
		this.gameOver = false;
		this.levelComplete = false;		// level finished
		this.hasKey = false;			// player has picked up key or not

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
		this.scoreText.setDepth(1000);

		//--- Timer HUD ---

		// reads current elapsed time in seconds from registry
		this.elapsedTime = this.registry.get("elapsedTime") || 0;

		// timer text in top right corner
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

		// every 1000 ms increase timer by 1 second
		this.timerEvent = this.time.addEvent({
			delay: 1000,
			loop: true,
			callback: () => {
				this.elapsedTime++;

				// saves globally so it continues onto the next level
				this.registry.set("elapsedTime", this.elapsedTime);

				// updates text
				if (this.timerText && this.timerText.setText) {
					this.timerText.setText(this.formatTime(this.elapsedTime));
				}
			}
		});

		//--- Adaptive Difficulty ---
		this.playerDifficulty = this.registry.get("playerDifficulty") || {
			speedMult: 1
		};
		this.registry.set("playerDifficulty", this.playerDifficulty);
		this.levelStartTime = this.elapsedTime;
		this.deathsThisLevel = 0;

		//--- Jump Skill Tracking Initialization ---
		this.totalJumps = 0;
		this.totalLandings = 0;
		this.totalLandingOffset = 0;
		this.totalDirectionSwitches = 0;
		this.totalWaitTime = 0;
		this.waitSamples = 0;

		// per-jump state
		this.isAirborne = false;
		this.currentAirDir = 0;
		this.currentAirDirectionSwitches = 0;

		// first frame is treated as "already landed"
		this.lastLandTime = this.elapsedTime;

		//--- show current difficulty multiplier on screen ---
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

		// this makes sure the door starts on the closed frame
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

		//--- Flame Animation ---
		/**
		 * Creates a looping animation for the flames so they look alive.
		 */
		if (!this.anims.exists("flame_burn")) {
			this.anims.create({
				key: "flame_burn",
				frames: [
					{ key: "Flame-1" },
					{ key: "Flame-2" },
					{ key: "Flame-3" },
					{ key: "Flame-4" }
				],
				frameRate: 8,
				repeat: -1
			});
		}

		this.flames.forEach(flameObj => {
			if (flameObj && flameObj.anims) {
				flameObj.play("flame_burn");
			}
		});

		//--- Physics setup ---
		this.physics.world.gravity.y = 600;
		player.body.setCollideWorldBounds(true);
		player.body.setBounce(0.1, 0.1);

		//--- Enemy Group + Patrol ---
		/**
		 * Creates a group of enemies and sets their patrol behavior.
		 * Outlaw patrols only the left platform.
		 * Scout patrols only the top key platform.
		 */
		this.enemies = this.physics.add.group();

		if (this.outlaw) this.enemies.add(this.outlaw);
		if (this.scout) this.enemies.add(this.scout);

		const BASE_PATROL_SPEED = 93;
		const speedMult = (this.playerDifficulty && this.playerDifficulty.speedMult) || 1;
		const PATROL_SPEED = BASE_PATROL_SPEED * speedMult;

		// outlaw setup
		this.outlaw.enemyType = "outlaw";
		this.outlaw.startX = this.outlaw.x;
		this.outlaw.minX = 45;
		this.outlaw.maxX = 265;
		this.outlaw.patrolDir = 1;
		this.outlaw.patrolSpeed = PATROL_SPEED;
		this.outlaw.state = "PATROL";
		this.outlaw.chaseSpeed = 110 * speedMult;
		this.outlaw.detectRange = 180;
		this.outlaw.canRandomTurn = true;
		this.outlaw.turnChance = 0.005;
		this.outlaw.canRandomJump = false;
		this.outlaw.jumpChance = 0;
		this.outlaw.jumpPower = 0;

		// scout setup
		this.scout.enemyType = "scout";
		this.scout.startX = this.scout.x;
		this.scout.minX = 1010;
		this.scout.maxX = 1235;
		this.scout.patrolDir = -1;
		this.scout.patrolSpeed = PATROL_SPEED;
		this.scout.state = "PATROL";
		this.scout.chaseSpeed = 110 * speedMult;
		this.scout.detectRange = 180;
		this.scout.canRandomTurn = true;
		this.scout.turnChance = 0.004;
		this.scout.canRandomJump = true;
		this.scout.jumpChance = 0.004;
		this.scout.jumpPower = 260;

		this.enemies.children.iterate(enemy => {
			if (!enemy || !enemy.body) return;

			enemy.body.setCollideWorldBounds(true);
			enemy.body.setBounce(0, 0);
			enemy.body.setVelocityX(enemy.patrolSpeed * enemy.patrolDir);
		});

		// --- Bullet Group ---
		/**
		 * Creates a group for bullets with a maximum size and no gravity.
		 * Bullets are used for shooting mechanics in the game.
		 */
		this.bullets = this.physics.add.group({
			defaultKey: "bulletTex",
			maxSize: 50,
			allowGravity: false
		});

		//--- Colliders ---
		// player vs ground
		this.physics.add.collider(
			this.player,
			this.platforms,
			this.onPlayerLand,
			null,
			this
		);

		// player vs moving platforms
		/**
		 * Lets the player jump onto both moving platforms and stand on them.
		 * Since the platform bodies are static and refreshed every frame,
		 * collision works like normal ground.
		 */
		this.physics.add.collider(
			this.player,
			this.movingPlatformGroup,
			this.onPlayerLand,
			null,
			this
		);

		// enemies vs ground
		this.physics.add.collider(this.enemies, this.platforms);

		// enemies vs moving platforms
		this.physics.add.collider(this.enemies, this.movingPlatformGroup);

		// Enemy hits player -> game over
		this.physics.add.collider(
			this.enemies,
			this.player,
			this.onPlayerHitEnemy,
			null,
			this
		);

		// Bullet vs ground -> destroys only bullet
		this.physics.add.collider(
			this.platforms,
			this.bullets,
			this.onBulletHitPlatform,
			null,
			this
		);

		// Bullet vs moving platforms -> destroys only bullet
		this.physics.add.collider(
			this.movingPlatformGroup,
			this.bullets,
			this.onBulletHitPlatform,
			null,
			this
		);

		// Bullet vs enemies -> destroys both
		this.physics.add.overlap(
			this.bullets,
			this.enemies,
			this.onBulletHitEnemy,
			null,
			this
		);

		// Player picking up key
		this.physics.add.overlap(
			this.player,
			this.key,
			this.onPlayerPickupKey,
			null,
			this
		);

		// Player touching flames
		/**
		 * Flame overlap kills the player only if the player's feet are low
		 * enough to actually touch the fire.
		 * This prevents dying while standing safely on nearby platforms.
		 */
		this.physics.add.overlap(
			this.player,
			this.flames,
			this.onPlayerTouchFlame,
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

		// Spacebar for shooting
		this.shootKey = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.SPACE
		);

		//--- Click 'K' key for opening doors ---
		this.interactKey = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.K
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
		if (!this.anims.exists("player_idle_front")) {
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
		}

		if (!this.anims.exists("player_walk_right")) {
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
		}

		//--- Outlaw Run Animation ---
		/**
		 * Creates the outlaw running animation.
		 */
		if (!this.anims.exists("outlaw_run")) {
			this.anims.create({
				key: "outlaw_run",
				frames: [
					{ key: "enemyrun1" },
					{ key: "enemyrun2" },
					{ key: "enemyrun3" },
					{ key: "enemyrun4" },
					{ key: "enemyrun5" }
				],
				frameRate: 8,
				repeat: -1
			});
		}

		//--- Scout Walk Animation ---
		/**
		 * Creates the scout walking animation.
		 */
		if (!this.anims.exists("scout_walk")) {
			this.anims.create({
				key: "scout_walk",
				frames: [
					{ key: "enemywalk1" },
					{ key: "enemywalk2" },
					{ key: "enemywalk3" },
					{ key: "enemywalk4" },
					{ key: "enemywalk5" }
				],
				frameRate: 8,
				repeat: -1
			});
		}

		//--- Scout Jump Animation ---
		/**
		 * Creates the scout jumping animation.
		 */
		if (!this.anims.exists("scout_jump")) {
			this.anims.create({
				key: "scout_jump",
				frames: [
					{ key: "enemyjump1" },
					{ key: "enemyjump2" },
					{ key: "enemyjump3" },
					{ key: "enemyjump4" }
				],
				frameRate: 8,
				repeat: -1
			});
		}

		player.play("player_idle_front");
		this.outlaw.play("outlaw_run");
		this.scout.play("scout_walk");
	}

	update(time, delta) {

		// if game is over or level is complete skip all game logic
		if (this.gameOver || this.levelComplete) {
			return;
		}

		const player = this.player;
		const speed = 200;
		const jumpSpeed = -450;

		//--- Lower moving platform movement ---
		/**
		 * Moves the lower platform left first and then right.
		 * The average x position of its tiles is used to decide when to reverse.
		 * refreshBody() is required so the static physics bodies update to
		 * their new positions and remain solid for the player.
		 */
		if (this.bottomMovingPlatformTiles && this.bottomMovingPlatformTiles.length >= 4) {
			const bottomCenterX =
				(this.bottomMovingPlatformTiles[0].x +
					this.bottomMovingPlatformTiles[1].x +
					this.bottomMovingPlatformTiles[2].x +
					this.bottomMovingPlatformTiles[3].x) / 4;

			if (bottomCenterX <= this.bottomPlatformMinX) {
				this.bottomPlatformDir = 1;
			} else if (bottomCenterX >= this.bottomPlatformMaxX) {
				this.bottomPlatformDir = -1;
			}

			const bottomMove =
				(this.bottomPlatformSpeed * delta / 1000) * this.bottomPlatformDir;

			for (let i = 0; i < this.bottomMovingPlatformTiles.length; i++) {
				if (!this.bottomMovingPlatformTiles[i] || !this.bottomMovingPlatformBodies[i]) continue;
				this.bottomMovingPlatformTiles[i].x += bottomMove;
				this.bottomMovingPlatformBodies[i].x += bottomMove;
				this.bottomMovingPlatformBodies[i].refreshBody();
			}
		}

		//--- Upper moving platform movement ---
		/**
		 * Moves the upper platform right first and then left.
		 * The average x position of its tiles is used to decide when to reverse.
		 * refreshBody() is required so the static physics bodies update to
		 * their new positions and remain solid for the player.
		 */
		if (this.topMovingPlatformTiles && this.topMovingPlatformTiles.length >= 4) {
			const topCenterX =
				(this.topMovingPlatformTiles[0].x +
					this.topMovingPlatformTiles[1].x +
					this.topMovingPlatformTiles[2].x +
					this.topMovingPlatformTiles[3].x) / 4;

			if (topCenterX <= this.topPlatformMinX) {
				this.topPlatformDir = 1;
			} else if (topCenterX >= this.topPlatformMaxX) {
				this.topPlatformDir = -1;
			}

			const topMove =
				(this.topPlatformSpeed * delta / 1000) * this.topPlatformDir;

			for (let i = 0; i < this.topMovingPlatformTiles.length; i++) {
				if (!this.topMovingPlatformTiles[i] || !this.topMovingPlatformBodies[i]) continue;
				this.topMovingPlatformTiles[i].x += topMove;
				this.topMovingPlatformBodies[i].x += topMove;
				this.topMovingPlatformBodies[i].refreshBody();
			}
		}

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

		// Current horizontal input direction
		let hDir = 0;
		if (leftPressed) {
			hDir = -1;
		} else if (rightPressed) {
			hDir = 1;
		}

		//--- Shoot Bullets ---
		/**
		 * Checks if the shoot key is pressed and calls the shootBullet method.
		 */
		if (Phaser.Input.Keyboard.JustDown(this.shootKey)) {
			this.shootBullet();
		}

		//--- Interact with door using 'K' key
		if (Phaser.Input.Keyboard.JustDown(this.interactKey)) {
			this.tryOpenDoor();
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
		 * When the player is on the ground and presses jump:
		 * 1) measures how long they waited since the last standing.
		 * 2) start tracking jump statistics including direction changes in air.
		 */
		if (upPressed && player.body.blocked.down) {

			// Waiting Time:
			// how long did the player stand on the platform before this jump.
			if (typeof this.lastLandTime === "number") {
				const wait = this.elapsedTime - this.lastLandTime;
				if (wait >= 0) {
					this.totalWaitTime += wait;
					this.waitSamples++;
				}
			}

			// marks the jump started so landing callback knows this was a legit jump.
			this.totalJumps++;
			this.isAirborne = true;
			this.currentAirDirectionSwitches = 0;
			this.currentAirDir = hDir;

			player.body.setVelocityY(jumpSpeed);
		}

		//--- In-air horizontal direction tracking ---
		/**
		 * Switch direction in air:
		 * while airborne count how many times the player
		 * changes between left and right input.
		 */
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

		//--- Enemy patrol between minX and maxX ---
		/**
		 * Updates enemy patrol behavior, making each enemy move only on his own platform.
		 * Outlaw uses run animation.
		 * Scout uses walk animation while grounded and jump animation while airborne.
		 */
		if (this.enemies) {
			this.enemies.children.iterate(enemy => {
				if (!enemy || !enemy.body) return;

				const distToPlayer = Phaser.Math.Distance.Between(
					enemy.x, enemy.y,
					player.x, player.y
				);

				// animation selection by enemy type
				if (enemy.enemyType === "outlaw") {
					enemy.anims.play("outlaw_run", true);
				} else if (enemy.enemyType === "scout") {
					if (enemy.body.blocked.down) {
						enemy.anims.play("scout_walk", true);
					} else {
						enemy.anims.play("scout_jump", true);
					}
				}

				// --- STATE SWITCH ---
				if (distToPlayer < enemy.detectRange) {
					enemy.state = "CHASE";
				} else if (enemy.state === "CHASE") {
					enemy.state = "PATROL";
				}

				// --- PATROL STATE ---
				if (enemy.state === "PATROL") {

					if (enemy.x <= enemy.minX) {
						enemy.patrolDir = 1;
						enemy.setFlipX(false);
					}
					else if (enemy.x >= enemy.maxX) {
						enemy.patrolDir = -1;
						enemy.setFlipX(true);
					}

					if (enemy.canRandomTurn && Math.random() < enemy.turnChance) {
						enemy.patrolDir *= -1;
						enemy.setFlipX(enemy.patrolDir < 0);
					}

					if (
						enemy.canRandomJump &&
						enemy.body.blocked.down &&
						enemy.x > enemy.minX + 30 &&
						enemy.x < enemy.maxX - 30 &&
						Math.random() < enemy.jumpChance
					) {
						enemy.body.setVelocityY(-enemy.jumpPower);
					}

					enemy.body.setVelocityX(enemy.patrolSpeed * enemy.patrolDir);
				}

				// --- CHASE STATE ---
				else if (enemy.state === "CHASE") {
					const dir = player.x < enemy.x ? -1 : 1;

					enemy.setFlipX(dir < 0);
					enemy.body.setVelocityX(enemy.chaseSpeed * dir);

					// keep each enemy on his platform only
					if (enemy.x <= enemy.minX) {
						enemy.x = enemy.minX;
						enemy.body.setVelocityX(0);
					}
					if (enemy.x >= enemy.maxX) {
						enemy.x = enemy.maxX;
						enemy.body.setVelocityX(0);
					}
				}
			});
		}
	}

	//--- Enemy hits player Game Over ---
	onPlayerHitEnemy(player) {

		// count this death for adaptive difficulty
		this.deathsThisLevel = (this.deathsThisLevel || 0) + 1;

		// prevents double-triggering
		if (this.gameOver) return;

		// marks game as over
		this.gameOver = true;

		// pauses timer so it stops counting on game over
		if (this.timerEvent) {
			this.timerEvent.paused = true;
		}

		// Stop background music
		if (this.bgMusic && this.bgMusic.isPlaying) {
			this.bgMusic.stop();
		}

		// Stops all physics so everyone freezes
		this.physics.pause();

		// shows the player was hit
		if (player.setTint) {
			player.setTint(0xff0000);
		}
		if (player.anims) {
			player.anims.stop();
		}

		// shows game over text
		const { width, height } = this.scale;

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
		gameOverText.setDepth(1000);

		gameOverText.setStroke("#000000", 6);

		//--- Restart button visuals ---
		const buttonWidth = 180;
		const buttonHeight = 50;

		const restartButton = this.add.rectangle(
			width / 2,
			height / 2 + 10,
			buttonWidth,
			buttonHeight,
			0x000000
		)
			.setStrokeStyle(3, 0xffffff)
			.setOrigin(0.5)
			.setScrollFactor(0)
			.setDepth(1000)
			.setInteractive({ useHandCursor: true });

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

		const doRestart = () => {
			if (player.clearTint) {
				player.clearTint();
			}
			this.scene.restart();
		};

		restartButton.on("pointerup", doRestart);

		restartLabel.setInteractive({ useHandCursor: true });
		restartLabel.on("pointerup", doRestart);

		restartButton.on("pointerover", () => {
			restartButton.setFillStyle(0x222222);
		});
		restartButton.on("pointerout", () => {
			restartButton.setFillStyle(0x000000);
		});
	}

	//--- Player touches flames ---
	/**
	 * Handles death from the flame floor.
	 * Uses a feet-vs-flame check so the player only dies when actually
	 * low enough to touch the flames, not while safely above them.
	 */
	onPlayerTouchFlame(player, flame) {
		if (this.gameOver || this.levelComplete) return;

		const playerBottom = player.body.y + player.body.height;
		const flameTop = flame.body.y + 10;

		if (playerBottom >= flameTop) {
			this.onPlayerHitEnemy(player);
		}
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

		// spawn slightly in front of the player
		const offsetX = 20 * dir;

		// Put bullet around mid-body
		const bulletY = player.y - player.displayHeight * 0.5;

		// Get a bullet from the physics group
		const bullet = this.bullets.get(player.x + offsetX, bulletY);

		if (!bullet) return;

		// activate and show it
		bullet.setActive(true);
		bullet.setVisible(true);

		// Ensure its body is enabled and dynamic
		bullet.body.enable = true;
		bullet.body.allowGravity = false;

		// Set velocity so bullet travels across the screen
		bullet.body.setVelocityX(BULLET_SPEED * dir);
	}

	//--- Bullet hits platform ---
	onBulletHitPlatform(platform, bullet) {
		// destroys bullet when it hits platform, platform stays
		if (bullet && bullet.destroy) {
			bullet.destroy();
		}
	}

	//--- Player lands on platform ---
	/**
	 * called when the player collides with a platform.
	 * 1) Accuracy: measures how far the player.x landing position is from the center of the platform
	 * landing close to the center means safe accurate jumps were made
	 * landing near edges means riskier less accurate jumps.
	 */
	onPlayerLand(player, platform) {
		// if player was not in an airborne jump it tracks and skips it
		if (!this.isAirborne) {
			this.lastLandTime = this.elapsedTime;
			return;
		}

		// jump is now finished.
		this.isAirborne = false;

		// Accuracy: distance from platform center.
		const platformX = platform.x;
		const landingOffset = Math.abs(player.x - platformX);

		this.totalLandings++;
		this.totalLandingOffset += landingOffset;

		// starts the on platform timer
		this.lastLandTime = this.elapsedTime;
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

			// add 10 points to score for killing enemy
			this.score += 10;

			// saves the score so the next level sees the new value
			this.registry.set("score", this.score);

			// updates score text
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

		// mark that we have the key
		this.hasKey = true;

		// Remove the key from the level
		if (key && key.destroy) {
			key.destroy();
		}

		// Show "Key + 1" on screen
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

		// Remove the text after 1 second
		this.time.delayedCall(1000, () => {
			if (text && text.destroy) {
				text.destroy();
			}
		});
	}

	//--- Try to open the door by using 'K' key or mobile button ---
	tryOpenDoor() {
		// must have the key and be in a valid game state
		if (!this.hasKey || this.gameOver || this.levelComplete) {
			return;
		}

		if (!this.player || !this.door) {
			return;
		}

		// Require the player to be physically near the door
		const OPEN_DISTANCE = 70;

		const dist = Phaser.Math.Distance.Between(
			this.player.x,
			this.player.y,
			this.door.x,
			this.door.y
		);

		if (dist <= OPEN_DISTANCE) {
			// Reuses completion logic
			this.onPlayerReachDoor(this.player, this.door);
		}
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

		// play door opening animation
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

		const levelCompleteText = this.add.text(
			width / 2,
			height / 2,
			"LEVEL 7 COMPLETE",
			{
				fontSize: "64px",
				color: "#0f7a2b",
				fontStyle: "bold"
			}
		).setOrigin(0.5);
		levelCompleteText.setDepth(1000);

		levelCompleteText.setStroke("#000000", 6);

		//--- Adaptive Difficulty: updates difficulty for next level ---
		const endTime = this.elapsedTime;
		const levelDuration = endTime - (this.levelStartTime || 0);
		const deaths = this.deathsThisLevel || 0;

		let diff = this.registry.get("playerDifficulty") || { speedMult: 1 };

		// difficulty tuning rules:
		// - if player had NO deaths and finished quickly = slightly harder
		// - if player had MANY deaths or took a long time = slightly easier
		if (deaths === 0 && levelDuration < 30) {
			diff.speedMult = Math.min(diff.speedMult + 0.15, 2);
		} else if (deaths >= 3 || levelDuration > 45) {
			diff.speedMult = Math.max(diff.speedMult - 0.15, 0.5);
		}

		//--- Jumping Skill Measurements ---
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

		// Accuracy: closer to center = slightly harder; way off center = slightly easier.
		if (avgLandingOffset !== null) {
			if (avgLandingOffset < 40) {
				diff.speedMult = Math.min(diff.speedMult + 0.05, 2);
			} else if (avgLandingOffset > 80) {
				diff.speedMult = Math.max(diff.speedMult - 0.05, 0.5);
			}
		}

		// Direction switches in air: smooth = slightly harder; lots of switches = easier.
		if (avgDirectionSwitches !== null) {
			if (avgDirectionSwitches < 0.5) {
				diff.speedMult = Math.min(diff.speedMult + 0.05, 2);
			} else if (avgDirectionSwitches > 1.5) {
				diff.speedMult = Math.max(diff.speedMult - 0.05, 0.5);
			}
		}

		// Waiting time: quick jumps = harder; hesitating long jumps = easier.
		if (avgWaitTime !== null) {
			if (avgWaitTime < 1.5) {
				diff.speedMult = Math.min(diff.speedMult + 0.05, 2);
			} else if (avgWaitTime > 4) {
				diff.speedMult = Math.max(diff.speedMult - 0.05, 0.5);
			}
		}

		// save updated difficulty so the next level can use it
		this.registry.set("playerDifficulty", diff);
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

		//--- Shoot Button ---
		const shootRadius = 30;
		const shoot = this.add.circle(width - 80, height - 80, shootRadius, 0xff4444, 0.7);
		shoot.setScrollFactor(0);
		shoot.setDepth(1000);
		shoot.setInteractive();

		shoot.on("pointerdown", () => {
			if (!this.gameOver && !this.levelComplete) {
				this.shootBullet();
			}
		});

		this.shootButton = shoot;

		//--- Door Interact Button ---
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
			if (!this.gameOver && !this.levelComplete) {
				this.tryOpenDoor();
			}
		});

		this.interactButton = interact;
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

	//--- Reset Joystick ---
	/**
		 * Resets the joystick to its neutral position and clears directional flags.
		 */
	resetJoystick() {

		/**
		 * if there is no joystick, return.
		 */
		if (!this.joystickBase || !this.joystickThumb) return;

		this.joystickPointerId = null;
		this.joystickThumb.setPosition(this.joystickBase.x, this.joystickBase.y);

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