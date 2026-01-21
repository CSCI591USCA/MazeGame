
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelOne extends Phaser.Scene {

	constructor() {
		super("LevelOne");

		/* START-USER-CTR-CODE */
		// Write your code here.
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

		// player
		const player = this.physics.add.sprite(582, 672, "idlefront1");
		player.scaleX = 1.7;
		player.scaleY = 1.7;
		player.setOrigin(0.5, 1);
		player.body.collideWorldBounds = true;
		player.body.setOffset(10, 0);
		player.body.setSize(28, 40, false);

		// door
		const door = this.physics.add.sprite(1209, 639, "Door", 0);
		door.scaleX = 0.4;
		door.scaleY = 0.4;
		door.body.moves = false;
		door.body.allowGravity = false;
		door.body.collideWorldBounds = true;
		door.body.pushable = false;
		door.body.immovable = true;
		door.body.setSize(512, 512, false);

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

		this.player = player;
		this.door = door;
		this.key = key;
		this.ground = ground;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	player;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	door;
	/** @type {Phaser.Physics.Arcade.Image} */
	key;
	/** @type {Phaser.GameObjects.Image[]} */
	ground;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		const player = this.player;

		// --- Background Music ---
		this.bgMusic = this.sound.add("bgMusic", {
			loop: true,
			volume: 0.5
		});
		this.bgMusic.play();

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

		//--- Score HUD ---

		//--- Initializes global score only once ---
		if (this.registry.get("score") === undefined) {
			this.registry.set("score", 0);
		}

		// read the saved score from the registry
		this.score = this.registry.get("score") || 0;

		this.scoreText = this.add.text(16, 16, "Score: " + this.score, {
			fontSize: "28px",
			color: "#d4b100",
			fontStyle: "bold"
		});
		this.scoreText.setScrollFactor(0);
		this.scoreText.setStroke("#000000", 2);

		//--- Timer HUD ---

		//initializes global timer only once
		if (this.registry.get("elapsedTime") === undefined) {
			this.registry.set("elapsedTime", 0);
		}

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
				frames: this.anims.generateFrameNumbers("Door", { start: 0, end: 4 }),
				frameRate: 8,	//speed of animation
				repeat: 0
			});
		}

		//makes sure door starts on frame 0 when door is closed
		if (this.door && this.door.setFrame) {
			this.door.setFrame(0);
		}

		//--- Bullet Texture ---
		if (!this.textures.exists("bulletTex")) {
			const g = this.add.graphics();
			g.fillStyle(0xffff00, 1); //Yellow bullets
			g.fillRect(0, 0, 10, 4);
			g.generateTexture("bulletTex", 10, 4);
			g.destroy();
		}

		//--- Bullet Group ---
		/**
		 * Creates a group for bullets with a maximum size and no gravity.
		 * Bullets are used for shooting mechanics in the game.
		 */
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
		this.physics.add.collider(this.player, this.platforms);

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

		//--- Player reaches door ----
		this.physics.add.overlap(
			this.player,
			this.door,
			this.onPlayerReachDoor,
			null,
			this
		);

		//--- Input for player movement ---
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

		//--- Spacebar for shooting ---
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

	update() {
		// if player is dead or level is completed stop.
		if (this.gameOver || this.levelComplete) {
			return;
		}

		const player = this.player;
		const speed = 200;
		const jumpSpeed = -450

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

		//--- Shoot ---
		/**
		 * Checks if the shoot key is pressed and calls the shootBullet method.
		 */
		if (Phaser.Input.Keyboard.JustDown(this.shootKey)) {
			this.shootBullet();
		}

		//--- Animation + Horizontal movement ---
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

	//--- Bullets hit ground logic ----
	onBulletHitPlatform(platform, bullet) {
		//destroys bullet when it hits platform, platform stays
		if (bullet && bullet.destroy) {
			bullet.destroy();
		}
	}

	//--- Player Picks Up Key Logic ----
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

	//--- Player reaches door logic ---
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

		//freezes gameplay
		this.physics.pause();
		if (player.anims) {
			player.anims.stop();
		}

		//shows Level Complete text
		const { width, height } = this.scale;

		//creates text object for level complete
		const levelCompleteText = this.add.text(
			width / 2,
			height / 2,
			"LEVEL 1 COMPLETE",
			{
				fontSize: "64px",
				color: "0f7a2b",
				fontStyle: "bold"
			}
		).setOrigin(0.5);

		//outline to make it look bigger
		levelCompleteText.setStroke("#0f7a2b", 6);

		//after a short delay this starts the second level 
		this.time.delayedCall(1500, () => {
			this.scene.start("LevelTwo");
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
