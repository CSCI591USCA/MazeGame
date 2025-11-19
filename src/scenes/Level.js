
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
		prefabwall.body.allowGravity = false;

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
		prefabwall_5.body.allowGravity = false;

		// prefabwall_6
		const prefabwall_6 = new Prefabwall(this, 341, 690);
		this.add.existing(prefabwall_6);
		prefabwall_6.body.allowGravity = false;

		// prefabwall_7
		const prefabwall_7 = new Prefabwall(this, 394, 690);
		this.add.existing(prefabwall_7);
		prefabwall_7.body.allowGravity = false;

		// prefabwall_8
		const prefabwall_8 = new Prefabwall(this, 445, 690);
		this.add.existing(prefabwall_8);
		prefabwall_8.body.allowGravity = false;

		// prefabwall_9
		const prefabwall_9 = new Prefabwall(this, 500, 690);
		this.add.existing(prefabwall_9);
		prefabwall_9.body.allowGravity = false;

		// prefabwall_10
		const prefabwall_10 = new Prefabwall(this, 553, 690);
		this.add.existing(prefabwall_10);
		prefabwall_10.body.allowGravity = false;

		// prefabwall_11
		const prefabwall_11 = new Prefabwall(this, 606, 690);
		this.add.existing(prefabwall_11);
		prefabwall_11.body.allowGravity = false;

		// prefabwall_12
		const prefabwall_12 = new Prefabwall(this, 658, 690);
		this.add.existing(prefabwall_12);
		prefabwall_12.body.allowGravity = false;

		// prefabwall_13
		const prefabwall_13 = new Prefabwall(this, 710, 690);
		this.add.existing(prefabwall_13);
		prefabwall_13.body.allowGravity = false;

		// prefabwall_14
		const prefabwall_14 = new Prefabwall(this, 759, 690);
		this.add.existing(prefabwall_14);
		prefabwall_14.body.allowGravity = false;

		// prefabwall_15
		const prefabwall_15 = new Prefabwall(this, 813, 690);
		this.add.existing(prefabwall_15);
		prefabwall_15.body.allowGravity = false;

		// prefabwall_16
		const prefabwall_16 = new Prefabwall(this, 866, 690);
		this.add.existing(prefabwall_16);
		prefabwall_16.body.allowGravity = false;

		// prefabwall_17
		const prefabwall_17 = new Prefabwall(this, 914, 690);
		this.add.existing(prefabwall_17);
		prefabwall_17.body.allowGravity = false;

		// prefabwall_18
		const prefabwall_18 = new Prefabwall(this, 962, 690);
		this.add.existing(prefabwall_18);
		prefabwall_18.body.allowGravity = false;

		// prefabwall_19
		const prefabwall_19 = new Prefabwall(this, 1014, 690);
		this.add.existing(prefabwall_19);
		prefabwall_19.body.allowGravity = false;

		// prefabwall_20
		const prefabwall_20 = new Prefabwall(this, 1066, 690);
		this.add.existing(prefabwall_20);
		prefabwall_20.body.allowGravity = false;

		// prefabwall_21
		const prefabwall_21 = new Prefabwall(this, 1118, 690);
		this.add.existing(prefabwall_21);
		prefabwall_21.body.allowGravity = false;

		// prefabwall_22
		const prefabwall_22 = new Prefabwall(this, 1170, 690);
		this.add.existing(prefabwall_22);
		prefabwall_22.body.allowGravity = false;

		// prefabwall_23
		const prefabwall_23 = new Prefabwall(this, 1221, 690);
		this.add.existing(prefabwall_23);
		prefabwall_23.body.allowGravity = false;

		// prefabwall_24
		const prefabwall_24 = new Prefabwall(this, 1271, 690);
		this.add.existing(prefabwall_24);
		prefabwall_24.body.allowGravity = false;

		// player
		const player = this.physics.add.sprite(40, 661, "idlefront1");
		player.setInteractive(new Phaser.Geom.Rectangle(0, 0, 48, 48), Phaser.Geom.Rectangle.Contains);
		player.scaleX = 1.5;
		player.scaleY = 1.5;
		player.setOrigin(0.5, 1);
		player.body.collideWorldBounds = true;
		player.body.setSize(48, 48, false);

		// prefabwall_25
		const prefabwall_25 = new Prefabwall(this, 370, 559);
		this.add.existing(prefabwall_25);
		prefabwall_25.body.allowGravity = false;

		// prefabwall_26
		const prefabwall_26 = new Prefabwall(this, 419, 559);
		this.add.existing(prefabwall_26);
		prefabwall_26.body.allowGravity = false;

		// prefabwall_27
		const prefabwall_27 = new Prefabwall(this, 467, 559);
		this.add.existing(prefabwall_27);
		prefabwall_27.body.allowGravity = false;

		// prefabwall_28
		const prefabwall_28 = new Prefabwall(this, 704, 450);
		this.add.existing(prefabwall_28);
		prefabwall_28.body.allowGravity = false;

		// prefabwall_29
		const prefabwall_29 = new Prefabwall(this, 756, 450);
		this.add.existing(prefabwall_29);
		prefabwall_29.body.allowGravity = false;

		// prefabwall_30
		const prefabwall_30 = new Prefabwall(this, 806, 450);
		this.add.existing(prefabwall_30);
		prefabwall_30.body.allowGravity = false;

		// prefabwall_31
		const prefabwall_31 = new Prefabwall(this, 854, 450);
		this.add.existing(prefabwall_31);
		prefabwall_31.body.allowGravity = false;

		// prefabwall_32
		const prefabwall_32 = new Prefabwall(this, 1151, 335);
		this.add.existing(prefabwall_32);
		prefabwall_32.body.allowGravity = false;

		// prefabwall_33
		const prefabwall_33 = new Prefabwall(this, 1196, 335);
		this.add.existing(prefabwall_33);
		prefabwall_33.body.allowGravity = false;

		// prefabwall_34
		const prefabwall_34 = new Prefabwall(this, 1247, 335);
		this.add.existing(prefabwall_34);
		prefabwall_34.body.allowGravity = false;

		// prefabwall_35
		const prefabwall_35 = new Prefabwall(this, 1100, 335);
		this.add.existing(prefabwall_35);
		prefabwall_35.body.allowGravity = false;

		// prefabwall_36
		const prefabwall_36 = new Prefabwall(this, 1052, 335);
		this.add.existing(prefabwall_36);
		prefabwall_36.body.allowGravity = false;

		// prefabwall_37
		const prefabwall_37 = new Prefabwall(this, 857, 205);
		this.add.existing(prefabwall_37);
		prefabwall_37.body.allowGravity = false;

		// prefabwall_38
		const prefabwall_38 = new Prefabwall(this, 755, 205);
		this.add.existing(prefabwall_38);
		prefabwall_38.body.allowGravity = false;

		// prefabwall_39
		const prefabwall_39 = new Prefabwall(this, 806, 205);
		this.add.existing(prefabwall_39);
		prefabwall_39.body.allowGravity = false;

		// prefabwall_40
		const prefabwall_40 = new Prefabwall(this, 707, 205);
		this.add.existing(prefabwall_40);
		prefabwall_40.body.allowGravity = false;

		// prefabwall_41
		const prefabwall_41 = new Prefabwall(this, 656, 205);
		this.add.existing(prefabwall_41);
		prefabwall_41.body.allowGravity = false;

		// prefabwall_42
		const prefabwall_42 = new Prefabwall(this, 605, 205);
		this.add.existing(prefabwall_42);
		prefabwall_42.body.allowGravity = false;

		// prefabwall_43
		const prefabwall_43 = new Prefabwall(this, 554, 205);
		this.add.existing(prefabwall_43);
		prefabwall_43.body.allowGravity = false;

		// prefabwall_44
		const prefabwall_44 = new Prefabwall(this, 505, 205);
		this.add.existing(prefabwall_44);
		prefabwall_44.body.allowGravity = false;

		// prefabwall_45
		const prefabwall_45 = new Prefabwall(this, 460, 205);
		this.add.existing(prefabwall_45);
		prefabwall_45.body.allowGravity = false;

		// prefabwall_46
		const prefabwall_46 = new Prefabwall(this, 412, 205);
		this.add.existing(prefabwall_46);
		prefabwall_46.body.allowGravity = false;

		// prefabwall_47
		const prefabwall_47 = new Prefabwall(this, 364, 205);
		this.add.existing(prefabwall_47);
		prefabwall_47.body.allowGravity = false;

		// prefabwall_48
		const prefabwall_48 = new Prefabwall(this, 315, 205);
		this.add.existing(prefabwall_48);
		prefabwall_48.body.allowGravity = false;

		// prefabwall_49
		const prefabwall_49 = new Prefabwall(this, 265, 205);
		this.add.existing(prefabwall_49);
		prefabwall_49.body.allowGravity = false;

		// prefabwall_50
		const prefabwall_50 = new Prefabwall(this, 217, 205);
		this.add.existing(prefabwall_50);
		prefabwall_50.body.allowGravity = false;

		// prefabwall_51
		const prefabwall_51 = new Prefabwall(this, 169, 205);
		this.add.existing(prefabwall_51);
		prefabwall_51.body.allowGravity = false;

		// prefabwall_52
		const prefabwall_52 = new Prefabwall(this, 118, 205);
		this.add.existing(prefabwall_52);
		prefabwall_52.body.allowGravity = false;

		// prefabwall_53
		const prefabwall_53 = new Prefabwall(this, 70, 205);
		this.add.existing(prefabwall_53);
		prefabwall_53.body.allowGravity = false;

		// prefabwall_54
		const prefabwall_54 = new Prefabwall(this, 22, 205);
		this.add.existing(prefabwall_54);
		prefabwall_54.body.allowGravity = false;

		// prefabwall_55
		const prefabwall_55 = new Prefabwall(this, 1199, 135);
		this.add.existing(prefabwall_55);
		prefabwall_55.body.allowGravity = false;

		// prefabwall_56
		const prefabwall_56 = new Prefabwall(this, 1250, 135);
		this.add.existing(prefabwall_56);
		prefabwall_56.body.allowGravity = false;

		// prefabwall_57
		const prefabwall_57 = new Prefabwall(this, 1146, 135);
		this.add.existing(prefabwall_57);
		prefabwall_57.body.allowGravity = false;

		// prefabwall_58
		const prefabwall_58 = new Prefabwall(this, 1092, 135);
		this.add.existing(prefabwall_58);
		prefabwall_58.body.allowGravity = false;

		// enemy1
		const enemy1 = this.add.ellipse(786, 391, 128, 128);
		enemy1.scaleX = 0.3;
		enemy1.scaleY = 0.3;
		enemy1.isFilled = true;
		enemy1.fillColor = 12058624;

		// enemy2
		const enemy2 = this.add.ellipse(1160, 288, 128, 128);
		enemy2.scaleX = 0.3;
		enemy2.scaleY = 0.3;
		enemy2.isFilled = true;
		enemy2.fillColor = 12058624;

		// enemy3
		const enemy3 = this.add.ellipse(466, 158, 128, 128);
		enemy3.scaleX = 0.3;
		enemy3.scaleY = 0.3;
		enemy3.isFilled = true;
		enemy3.fillColor = 12058624;

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

		// lists
		const ground = [prefabwall_1, prefabwall_2, prefabwall_3, prefabwall_4, prefabwall_5, prefabwall_6, prefabwall_7, prefabwall_8, prefabwall_9, prefabwall_10, prefabwall_11, prefabwall_12, prefabwall_13, prefabwall_14, prefabwall_15, prefabwall_16, prefabwall_17, prefabwall_18, prefabwall_19, prefabwall_20, prefabwall_21, prefabwall_22, prefabwall_23, prefabwall_24, prefabwall_25, prefabwall_26, prefabwall_27, prefabwall_28, prefabwall_29, prefabwall_30, prefabwall_31, prefabwall_32, prefabwall_33, prefabwall_34, prefabwall_35, prefabwall_36, prefabwall_37, prefabwall_38, prefabwall_39, prefabwall_40, prefabwall_41, prefabwall_42, prefabwall_43, prefabwall_44, prefabwall_45, prefabwall_46, prefabwall_47, prefabwall_48, prefabwall_49, prefabwall_50, prefabwall_51, prefabwall_52, prefabwall_53, prefabwall_54, prefabwall_55, prefabwall_56, prefabwall_57, prefabwall_58, prefabwall];
		const enemies = [enemy1, enemy2, enemy3];

		// collider
		this.physics.add.collider(player, ground);

		// collider_1
		this.physics.add.collider(enemies, ground);

		this.player = player;
		this.enemy1 = enemy1;
		this.enemy2 = enemy2;
		this.enemy3 = enemy3;
		this.door = door;
		this.key = key;
		this.ground = ground;
		this.enemies = enemies;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	player;
	/** @type {Phaser.GameObjects.Ellipse} */
	enemy1;
	/** @type {Phaser.GameObjects.Ellipse} */
	enemy2;
	/** @type {Phaser.GameObjects.Ellipse} */
	enemy3;
	/** @type {Phaser.GameObjects.Rectangle} */
	door;
	/** @type {Phaser.GameObjects.Polygon} */
	key;
	/** @type {Prefabwall[]} */
	ground;
	/** @type {Phaser.GameObjects.Ellipse[]} */
	enemies;

	/** @type {Phaser.GameObjects.Circle}  */
	joystickBase;
	/** @type {Phaser.GameObjects.Circle}  */
	joystickThumb;
	/** @type {Phaser.GameObjects.GameObject} */
	shootButton;

	/** @type {number|null} */
	joystickPointerId;
	/** @type {boolean} */
	joystickLeft = false;
	/** @type {boolean} */
	joystickRight = false;
	/** @type {boolean} */
	joystickUp = false;

	/** @type {boolean} */
	isMobile = false;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		const player = this.player;

		//--- game state ---
		this.gameOver = false;
		this.levelComplete = false;		//level finished
		this.hasKey = false;			//player has picked up key or not

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

		//--- Score setup ---
		this.score = 0;

		this.scoreText = this.add.text(16, 16, "Score: 0", {
			fontSize: "24px",
			color: "#ffffff"
		});
		this.scoreText.setScrollFactor(0);

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
		this.enemies = this.physics.add.group();
		if (this.enemy1) this.enemies.add(this.enemy1);
		if (this.enemy2) this.enemies.add(this.enemy2);
		if (this.enemy3) this.enemies.add(this.enemy3);

		const PATROL_SPEED = 70; 	//enemy speed
		const PATROL_RANGE = 96;	//distance enemy covers

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
		});

		// --- Bullet Group ---
		this.bullets = this.physics.add.group({
			defaultKey: "bulletTex",	//use texture we created
			maxSize: 100,				//max bullets at once
			allowGravity: false
		});

		//--- Colliders ---
		//player vs ground
		this.physics.add.collider(this.player, this.ground);

		//enemies vs ground
		this.physics.add.collider(this.enemies, this.ground);

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
			this.ground,
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
		this.isMobile = !this.sys.game.device.os.desktop;

		if (this.isMobile) {
			this.createMobileControls();
		}

		//--- Animations ---
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

	update(){
		//if game is over or level is complete skip all game logic
		if (this.gameOver || this.levelComplete) {
			return;
		}

		const player = this.player;
		const speed = 200;
		const jumpSpeed = -450;

		//--- Combine Arrows + WASD + Joystick ---
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
		if (Phaser.Input.Keyboard.JustDown(this.shootKey)) {
			this.shootBullet();
		}

		// --- Movement and Animation ---
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
		if (upPressed && player.body.blocked.down) {
			player.body.setVelocityY(jumpSpeed);
		}

		//--- Enemy patrol between minX and maxX ---
		if (this.enemies) {
			this.enemies.children.iterate(enemy => {
				if (!enemy || !enemy.body) return;

				if (enemy.x <= enemy.minX) {
					enemy.patrolDir = 1;
				} else if (enemy.x >= enemy.maxX) {
					enemy.patrolDir = -1;
				}

				enemy.body.setVelocityX(enemy.patrolSpeed * enemy.patrolDir);
			});
		}
	}

	//--- Enemy hits player Game Over ---
	onPlayerHitEnemy(player, enemy) {
		//marks game as over
		this.gameOver = true;

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
		this.add.text(width / 2, height / 2, "GAME OVER", {
			fontSize: "48px",
			color: "#b80000"
		}).setOrigin(0.5);
	}

	//--- Shooting Logic ---
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
	onBulletHitEnemy(bullet, enemy) {
		if (bullet && bullet.destroy) {
			bullet.destroy() ;
		}
		if (enemy && enemy.destroy) {
			enemy.destroy();

			//add 10 points to score for killing enemy
			this.score += 10;

			//updates score text
			if (this.scoreText && this.scoreText.setText) {
				this.scoreText.setText("Score: " + this.score);
			}
		}
	}

	//--- Player picks up key ---
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
				color: "#ffff00"
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
	onPlayerReachDoor(player, door) {
		if (!this.hasKey || this.levelComplete || this.gameOver) {
			return;
		}

		this.levelComplete = true;

		this.physics.pause();

		if (player.anims) {
			player.anims.stop();
		}

		const { width, height } = this.scale;
		this.add.text(width / 2, height / 2, "LEVEL COMPLETE", {
			fontSize: "48px",
			color: "#00ff00"
		}).setOrigin(0.5);
	}

	//--- Mobile Controls: Joystick + Shoot Button ---
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
				return
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

		//--- Mobile Shoot Button ---
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
	}

	//--- Update Joystick State ---
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

		//--- Determine Direction ---
		this.joystickLeft = clampedDx < -10;
		this.joystickRight = clampedDx > 10;
		this.joystickUp = clampedDy < -15;
	}

	//--- Reset Joystick ---
	resetJoystick() {
		if (!this.joystickBase || !this.joystickThumb) return;

		this.joystickPointerId = null;
		this.joystickThumb.setPosition(this.joystickBase.x, this.joystickBase.y);

		this.joystickLeft = false;
		this.joystickRight = false;
		this.joystickUp = false;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
