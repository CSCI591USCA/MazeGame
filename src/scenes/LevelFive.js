// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelFive extends Phaser.Scene {

	constructor() {
		super("LevelFive");

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
		const background1 = this.add.image(0, 0, "castlebg1");
		background1.scaleX = 2.22;
		background1.scaleY = 2.24;
		background1.setOrigin(0, 0);

		// tile_0000
		const tile_0000 = this.add.image(25, 155, "tile_0000");
		tile_0000.scaleX = 3;
		tile_0000.scaleY = 3;

		// tile
		const tile = this.add.image(77, 155, "tile_0000");
		tile.scaleX = 3;
		tile.scaleY = 3;

		// tile_1
		const tile_1 = this.add.image(129, 155, "tile_0000");
		tile_1.scaleX = 3;
		tile_1.scaleY = 3;

		// tile_2
		const tile_2 = this.add.image(25, 700, "tile_0000");
		tile_2.scaleX = 3;
		tile_2.scaleY = 3;

		// tile_3
		const tile_3 = this.add.image(77, 700, "tile_0000");
		tile_3.scaleX = 3;
		tile_3.scaleY = 3;

		// tile_4
		const tile_4 = this.add.image(129, 700, "tile_0000");
		tile_4.scaleX = 3;
		tile_4.scaleY = 3;

		// tile_5
		const tile_5 = this.add.image(181, 700, "tile_0000");
		tile_5.scaleX = 3;
		tile_5.scaleY = 3;

		// tile_6
		const tile_6 = this.add.image(233, 700, "tile_0000");
		tile_6.scaleX = 3;
		tile_6.scaleY = 3;

		// tile_7
		const tile_7 = this.add.image(285, 700, "tile_0000");
		tile_7.scaleX = 3;
		tile_7.scaleY = 3;

		// tile_8
		const tile_8 = this.add.image(337, 700, "tile_0000");
		tile_8.scaleX = 3;
		tile_8.scaleY = 3;

		// tile_9
		const tile_9 = this.add.image(389, 700, "tile_0000");
		tile_9.scaleX = 3;
		tile_9.scaleY = 3;

		// tile_10
		const tile_10 = this.add.image(441, 700, "tile_0000");
		tile_10.scaleX = 3;
		tile_10.scaleY = 3;

		// tile_11
		const tile_11 = this.add.image(493, 700, "tile_0000");
		tile_11.scaleX = 3;
		tile_11.scaleY = 3;

		// tile_12
		const tile_12 = this.add.image(545, 700, "tile_0000");
		tile_12.scaleX = 3;
		tile_12.scaleY = 3;

		// tile_13
		const tile_13 = this.add.image(597, 700, "tile_0000");
		tile_13.scaleX = 3;
		tile_13.scaleY = 3;

		// tile_14
		const tile_14 = this.add.image(649, 700, "tile_0000");
		tile_14.scaleX = 3;
		tile_14.scaleY = 3;

		// tile_15
		const tile_15 = this.add.image(701, 700, "tile_0000");
		tile_15.scaleX = 3;
		tile_15.scaleY = 3;

		// tile_16
		const tile_16 = this.add.image(753, 700, "tile_0000");
		tile_16.scaleX = 3;
		tile_16.scaleY = 3;

		// tile_17
		const tile_17 = this.add.image(805, 700, "tile_0000");
		tile_17.scaleX = 3;
		tile_17.scaleY = 3;

		// tile_18
		const tile_18 = this.add.image(857, 700, "tile_0000");
		tile_18.scaleX = 3;
		tile_18.scaleY = 3;

		// tile_19
		const tile_19 = this.add.image(909, 700, "tile_0000");
		tile_19.scaleX = 3;
		tile_19.scaleY = 3;

		// tile_20
		const tile_20 = this.add.image(961, 700, "tile_0000");
		tile_20.scaleX = 3;
		tile_20.scaleY = 3;

		// tile_21
		const tile_21 = this.add.image(1013, 700, "tile_0000");
		tile_21.scaleX = 3;
		tile_21.scaleY = 3;

		// tile_22
		const tile_22 = this.add.image(1065, 700, "tile_0000");
		tile_22.scaleX = 3;
		tile_22.scaleY = 3;

		// tile_23
		const tile_23 = this.add.image(1117, 700, "tile_0000");
		tile_23.scaleX = 3;
		tile_23.scaleY = 3;

		// tile_24
		const tile_24 = this.add.image(1169, 700, "tile_0000");
		tile_24.scaleX = 3;
		tile_24.scaleY = 3;

		// tile_25
		const tile_25 = this.add.image(1221, 700, "tile_0000");
		tile_25.scaleX = 3;
		tile_25.scaleY = 3;

		// tile_26
		const tile_26 = this.add.image(1265, 700, "tile_0000");
		tile_26.scaleX = 2;
		tile_26.scaleY = 3;

		// tile_27
		const tile_27 = this.add.image(179, 205, "tile_0000");
		tile_27.scaleX = 3;
		tile_27.scaleY = 3;

		// tile_28
		const tile_28 = this.add.image(230, 256, "tile_0000");
		tile_28.scaleX = 3;
		tile_28.scaleY = 3;

		// tile_29
		const tile_29 = this.add.image(280, 305, "tile_0000");
		tile_29.scaleX = 3;
		tile_29.scaleY = 3;

		// tile_30
		const tile_30 = this.add.image(332, 305, "tile_0000");
		tile_30.scaleX = 3;
		tile_30.scaleY = 3;

		// tile_31
		const tile_31 = this.add.image(384, 305, "tile_0000");
		tile_31.scaleX = 3;
		tile_31.scaleY = 3;

		// tile_32
		const tile_32 = this.add.image(436, 305, "tile_0000");
		tile_32.scaleX = 3;
		tile_32.scaleY = 3;

		// tile_33
		const tile_33 = this.add.image(488, 305, "tile_0000");
		tile_33.scaleX = 3;
		tile_33.scaleY = 3;

		// tile_34
		const tile_34 = this.add.image(540, 305, "tile_0000");
		tile_34.scaleX = 3;
		tile_34.scaleY = 3;

		// tile_35
		const tile_35 = this.add.image(592, 305, "tile_0000");
		tile_35.scaleX = 3;
		tile_35.scaleY = 3;

		// tile_36
		const tile_36 = this.add.image(644, 305, "tile_0000");
		tile_36.scaleX = 3;
		tile_36.scaleY = 3;

		// tile_37
		const tile_37 = this.add.image(696, 305, "tile_0000");
		tile_37.scaleX = 3;
		tile_37.scaleY = 3;

		// tile_38
		const tile_38 = this.add.image(746, 258, "tile_0000");
		tile_38.scaleX = 3;
		tile_38.scaleY = 3;

		// tile_39
		const tile_39 = this.add.image(796, 209, "tile_0000");
		tile_39.scaleX = 3;
		tile_39.scaleY = 3;

		// tile_40
		const tile_40 = this.add.image(847, 160, "tile_0000");
		tile_40.scaleX = 3;
		tile_40.scaleY = 3;

		// tile_41
		const tile_41 = this.add.image(899, 160, "tile_0000");
		tile_41.scaleX = 3;
		tile_41.scaleY = 3;

		// tile_42
		const tile_42 = this.add.image(951, 160, "tile_0000");
		tile_42.scaleX = 3;
		tile_42.scaleY = 3;

		// tile_43
		const tile_43 = this.add.image(1255, 650, "tile_0000");
		tile_43.scaleX = 3;
		tile_43.scaleY = 3;

		// tile_44
		const tile_44 = this.add.image(1255, 598, "tile_0000");
		tile_44.scaleX = 3;
		tile_44.scaleY = 3;

		// tile_45
		const tile_45 = this.add.image(1255, 546, "tile_0000");
		tile_45.scaleX = 3;
		tile_45.scaleY = 3;

		// tile_46
		const tile_46 = this.add.image(1255, 494, "tile_0000");
		tile_46.scaleX = 3;
		tile_46.scaleY = 3;

		// tile_47
		const tile_47 = this.add.image(1255, 442, "tile_0000");
		tile_47.scaleX = 3;
		tile_47.scaleY = 3;

		// tile_48
		const tile_48 = this.add.image(1255, 390, "tile_0000");
		tile_48.scaleX = 3;
		tile_48.scaleY = 3;

		// tile_49
		const tile_49 = this.add.image(1255, 338, "tile_0000");
		tile_49.scaleX = 3;
		tile_49.scaleY = 3;

		// tile_50
		const tile_50 = this.add.image(1255, 286, "tile_0000");
		tile_50.scaleX = 3;
		tile_50.scaleY = 3;

		// tile_51
		const tile_51 = this.add.image(1255, 234, "tile_0000");
		tile_51.scaleX = 3;
		tile_51.scaleY = 3;

		// tile_52
		const tile_52 = this.add.image(1255, 182, "tile_0000");
		tile_52.scaleX = 3;
		tile_52.scaleY = 3;

		// tile_53
		const tile_53 = this.add.image(1255, 130, "tile_0000");
		tile_53.scaleX = 3;
		tile_53.scaleY = 3;

		// tile_54
		const tile_54 = this.add.image(1203, 130, "tile_0000");
		tile_54.scaleX = 3;
		tile_54.scaleY = 3;

		// tile_55
		const tile_55 = this.add.image(1203, 182, "tile_0000");
		tile_55.scaleX = 3;
		tile_55.scaleY = 3;

		// tile_56
		const tile_56 = this.add.image(1203, 234, "tile_0000");
		tile_56.scaleX = 3;
		tile_56.scaleY = 3;

		// tile_57
		const tile_57 = this.add.image(1203, 286, "tile_0000");
		tile_57.scaleX = 3;
		tile_57.scaleY = 3;

		// tile_58
		const tile_58 = this.add.image(1203, 338, "tile_0000");
		tile_58.scaleX = 3;
		tile_58.scaleY = 3;

		// tile_59
		const tile_59 = this.add.image(1203, 390, "tile_0000");
		tile_59.scaleX = 3;
		tile_59.scaleY = 3;

		// tile_60
		const tile_60 = this.add.image(1203, 442, "tile_0000");
		tile_60.scaleX = 3;
		tile_60.scaleY = 3;

		// tile_61
		const tile_61 = this.add.image(1203, 494, "tile_0000");
		tile_61.scaleX = 3;
		tile_61.scaleY = 3;

		// tile_62
		const tile_62 = this.add.image(1203, 546, "tile_0000");
		tile_62.scaleX = 3;
		tile_62.scaleY = 3;

		// tile_63
		const tile_63 = this.add.image(1203, 598, "tile_0000");
		tile_63.scaleX = 3;
		tile_63.scaleY = 3;

		// tile_64
		const tile_64 = this.add.image(1203, 650, "tile_0000");
		tile_64.scaleX = 3;
		tile_64.scaleY = 3;

		// tile_65
		const tile_65 = this.add.image(1151, 650, "tile_0000");
		tile_65.scaleX = 3;
		tile_65.scaleY = 3;

		// tile_66
		const tile_66 = this.add.image(1151, 598, "tile_0000");
		tile_66.scaleX = 3;
		tile_66.scaleY = 3;

		// tile_67
		const tile_67 = this.add.image(1151, 546, "tile_0000");
		tile_67.scaleX = 3;
		tile_67.scaleY = 3;

		// tile_68
		const tile_68 = this.add.image(1151, 494, "tile_0000");
		tile_68.scaleX = 3;
		tile_68.scaleY = 3;

		// tile_69
		const tile_69 = this.add.image(1151, 442, "tile_0000");
		tile_69.scaleX = 3;
		tile_69.scaleY = 3;

		// tile_70
		const tile_70 = this.add.image(1151, 390, "tile_0000");
		tile_70.scaleX = 3;
		tile_70.scaleY = 3;

		// tile_71
		const tile_71 = this.add.image(1151, 338, "tile_0000");
		tile_71.scaleX = 3;
		tile_71.scaleY = 3;

		// tile_72
		const tile_72 = this.add.image(1151, 286, "tile_0000");
		tile_72.scaleX = 3;
		tile_72.scaleY = 3;

		// tile_73
		const tile_73 = this.add.image(1099, 650, "tile_0000");
		tile_73.scaleX = 3;
		tile_73.scaleY = 3;

		// tile_74
		const tile_74 = this.add.image(1099, 598, "tile_0000");
		tile_74.scaleX = 3;
		tile_74.scaleY = 3;

		// tile_75
		const tile_75 = this.add.image(1099, 546, "tile_0000");
		tile_75.scaleX = 3;
		tile_75.scaleY = 3;

		// tile_76
		const tile_76 = this.add.image(1099, 494, "tile_0000");
		tile_76.scaleX = 3;
		tile_76.scaleY = 3;

		// tile_77
		const tile_77 = this.add.image(1099, 442, "tile_0000");
		tile_77.scaleX = 3;
		tile_77.scaleY = 3;

		// tile_78
		const tile_78 = this.add.image(1047, 650, "tile_0000");
		tile_78.scaleX = 3;
		tile_78.scaleY = 3;

		// tile_79
		const tile_79 = this.add.image(1047, 598, "tile_0000");
		tile_79.scaleX = 3;
		tile_79.scaleY = 3;

		// tile_80
		const tile_80 = this.add.image(181, 650, "tile_0000");
		tile_80.scaleX = 3;
		tile_80.scaleY = 3;

		// tile_81
		const tile_81 = this.add.image(233, 650, "tile_0000");
		tile_81.scaleX = 3;
		tile_81.scaleY = 3;

		// tile_82
		const tile_82 = this.add.image(285, 650, "tile_0000");
		tile_82.scaleX = 3;
		tile_82.scaleY = 3;

		// tile_83
		const tile_83 = this.add.image(337, 650, "tile_0000");
		tile_83.scaleX = 3;
		tile_83.scaleY = 3;

		// tile_84
		const tile_84 = this.add.image(389, 650, "tile_0000");
		tile_84.scaleX = 3;
		tile_84.scaleY = 3;

		// tile_86
		const tile_86 = this.add.image(129, 650, "tile_0000");
		tile_86.scaleX = 3;
		tile_86.scaleY = 3;

		// tile_87
		const tile_87 = this.add.image(441, 546, "tile_0000");
		tile_87.scaleX = 3;
		tile_87.scaleY = 3;

		// tile_88
		const tile_88 = this.add.image(389, 598, "tile_0000");
		tile_88.scaleX = 3;
		tile_88.scaleY = 3;

		// tile_89
		const tile_89 = this.add.image(337, 598, "tile_0000");
		tile_89.scaleX = 3;
		tile_89.scaleY = 3;

		// tile_90
		const tile_90 = this.add.image(285, 598, "tile_0000");
		tile_90.scaleX = 3;
		tile_90.scaleY = 3;

		// tile_91
		const tile_91 = this.add.image(233, 598, "tile_0000");
		tile_91.scaleX = 3;
		tile_91.scaleY = 3;

		// tile_92
		const tile_92 = this.add.image(181, 598, "tile_0000");
		tile_92.scaleX = 3;
		tile_92.scaleY = 3;

		// tile_93
		const tile_93 = this.add.image(181, 546, "tile_0000");
		tile_93.scaleX = 3;
		tile_93.scaleY = 3;

		// tile_94
		const tile_94 = this.add.image(233, 546, "tile_0000");
		tile_94.scaleX = 3;
		tile_94.scaleY = 3;

		// tile_95
		const tile_95 = this.add.image(285, 546, "tile_0000");
		tile_95.scaleX = 3;
		tile_95.scaleY = 3;

		// tile_96
		const tile_96 = this.add.image(337, 546, "tile_0000");
		tile_96.scaleX = 3;
		tile_96.scaleY = 3;

		// tile_97
		const tile_97 = this.add.image(389, 546, "tile_0000");
		tile_97.scaleX = 3;
		tile_97.scaleY = 3;

		// tile_101
		const tile_101 = this.add.image(710, 546, "tile_0000");
		tile_101.scaleX = 3;
		tile_101.scaleY = 3;

		// door
		const door = this.physics.add.sprite(1236, 78, "Door-1");
		door.scaleX = 0.3;
		door.scaleY = 0.3;
		door.body.moves = false;
		door.body.allowGravity = false;
		door.body.collideWorldBounds = true;
		door.body.pushable = false;
		door.body.immovable = true;
		door.body.setSize(480, 480, false);

		// key
		const key = this.physics.add.image(51, 624, "New Piskel");
		key.scaleX = 0.2;
		key.scaleY = 0.2;
		key.body.moves = false;
		key.body.allowGravity = false;
		key.body.collideWorldBounds = true;
		key.body.pushable = false;
		key.body.immovable = true;
		key.body.setSize(480, 480, false);

		// player
		const player = this.physics.add.sprite(46, 133, "idlefront1");
		player.scaleX = 1.7;
		player.scaleY = 1.7;
		player.setOrigin(0.5, 1);
		player.body.collideWorldBounds = true;
		player.body.setOffset(10, 0);
		player.body.setSize(28, 40, false);

		// enemy1
		const enemy1 = this.physics.add.sprite(492, 278, "enemywalkingright1");
		enemy1.scaleX = 2;
		enemy1.scaleY = 2;
		enemy1.setOrigin(0.5, 1);
		enemy1.body.collideWorldBounds = true;
		enemy1.body.setOffset(6, -8);
		enemy1.body.setSize(28, 40, false);

		// enemy2
		const enemy2 = this.physics.add.sprite(860, 676, "enemywalkingright1");
		enemy2.scaleX = 2;
		enemy2.scaleY = 2;
		enemy2.setOrigin(0.5, 1);
		enemy2.body.collideWorldBounds = true;
		enemy2.body.setOffset(6, -8);
		enemy2.body.setSize(28, 40, false);

		// enemy3
		const enemy3 = this.physics.add.sprite(569, 678, "enemywalkingright1");
		enemy3.scaleX = 2;
		enemy3.scaleY = 2;
		enemy3.setOrigin(0.5, 1);
		enemy3.body.collideWorldBounds = true;
		enemy3.body.setOffset(6, -8);
		enemy3.body.setSize(28, 40, false);

		// enemy4
		const enemy4 = this.physics.add.sprite(279, 522, "enemywalkingright1");
		enemy4.scaleX = 2;
		enemy4.scaleY = 2;
		enemy4.setOrigin(0.5, 1);
		enemy4.body.collideWorldBounds = true;
		enemy4.body.setOffset(6, -8);
		enemy4.body.setSize(28, 40, false);

		// lists
		const ground = [tile_0000, tile, tile_1, tile_2, tile_3, tile_4, tile_5, tile_6, tile_7, tile_8, tile_9, tile_10, tile_11, tile_12, tile_13, tile_14, tile_15, tile_16, tile_17, tile_18, tile_19, tile_20, tile_21, tile_22, tile_23, tile_24, tile_25, tile_26, tile_27, tile_28, tile_29, tile_30, tile_31, tile_32, tile_33, tile_34, tile_35, tile_36, tile_37, tile_38, tile_39, tile_40, tile_41, tile_42, tile_43, tile_44, tile_45, tile_46, tile_47, tile_48, tile_49, tile_50, tile_51, tile_52, tile_53, tile_54, tile_55, tile_56, tile_57, tile_58, tile_59, tile_60, tile_61, tile_62, tile_63, tile_64, tile_65, tile_66, tile_67, tile_68, tile_69, tile_70, tile_71, tile_72, tile_73, tile_74, tile_75, tile_76, tile_77, tile_78, tile_79, tile_80, tile_81, tile_82, tile_83, tile_84, tile_86, tile_87, tile_88, tile_89, tile_90, tile_91, tile_92, tile_93, tile_94, tile_95, tile_96, tile_97, tile_101];
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
	/** @type {Phaser.Input.Keyboard.Key} */
	interactKey;

	/** Jump skill tracking */
	totalJumps;
	totalLandings;
	totalLandingOffset;
	totalDirectionSwitches;
	totalWaitTime;
	waitSamples;
	isAirborne;
	currentAirDir;
	currentAirDirectionSwitches;
	lastLandTime;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		// storm effects
		this.createStormEffects();

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
		// --- Background Music (keep playing on retry) ---
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

		//--- game state ---
		this.gameOver = false;
		this.levelComplete = false;
		this.hasKey = false;

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

		//--- Difficulty Multiplier Text---
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

		//--- Physics setup ---
		this.physics.world.gravity.y = 600;
		player.body.setCollideWorldBounds(true);
		player.body.setBounce(0.1, 0.1);

		//--- Enemy Group + Patrol ---
		this.enemies = this.physics.add.group();
		if (this.enemy1) this.enemies.add(this.enemy1);
		if (this.enemy2) this.enemies.add(this.enemy2);
		if (this.enemy3) this.enemies.add(this.enemy3);
		if (this.enemy4) this.enemies.add(this.enemy4);

		const BASE_PATROL_SPEED = 105;
		const PATROL_RANGE = 96;

		const speedMult = (this.playerDifficulty && this.playerDifficulty.speedMult) || 1;
		const PATROL_SPEED = BASE_PATROL_SPEED * speedMult;

		this.enemies.children.iterate(enemy => {
			if (!enemy || !enemy.body) return;

			enemy.body.setCollideWorldBounds(true);
			enemy.body.setBounce(0, 0);

			enemy.startX = enemy.x;
			enemy.minX = enemy.startX - PATROL_RANGE;
			enemy.maxX = enemy.startX + PATROL_RANGE;

			enemy.patrolDir = 1;
			enemy.patrolSpeed = PATROL_SPEED;
			enemy.detectRange = 180;
			enemy.chaseSpeed = 140 * speedMult;

			// =====================================
			// ENEMY PERSONALITY SETTINGS
			// =====================================

			// top platform enemy
			this.enemy1.canRandomTurn = true;
			this.enemy1.turnChance = 0.003;
			this.enemy1.canRandomJump = true;
			this.enemy1.jumpChance = 0.004;
			this.enemy1.jumpPower = 260;

			// bottom right
			this.enemy2.canRandomTurn = true;
			this.enemy2.turnChance = 0.002;
			this.enemy2.canRandomJump = false;

			// bottom middle
			this.enemy3.canRandomTurn = true;
			this.enemy3.turnChance = 0.002;
			this.enemy3.canRandomJump = false;

			// small mid platform
			this.enemy4.canRandomTurn = true;
			this.enemy4.turnChance = 0.004;
			this.enemy4.canRandomJump = true;
			this.enemy4.jumpChance = 0.006;
			this.enemy4.jumpPower = 260;

			enemy.body.setVelocityX(enemy.patrolSpeed * enemy.patrolDir);
		});

		// --- Bullet Group ---
		this.bullets = this.physics.add.group({
			defaultKey: "bulletTex",
			maxSize: 50,
			allowGravity: false
		});

		//--- Colliders ---
		this.physics.add.collider(
			this.player,
			this.platforms,
			this.onPlayerLand,
			null,
			this
		);

		this.physics.add.collider(this.enemies, this.platforms);

		this.physics.add.collider(
			this.enemies,
			this.player,
			this.onPlayerHitEnemy,
			null,
			this
		);

		this.physics.add.collider(
			this.platforms,
			this.bullets,
			this.onBulletHitPlatform,
			null,
			this
		);

		this.physics.add.overlap(
			this.bullets,
			this.enemies,
			this.onBulletHitEnemy,
			null,
			this
		);

		this.physics.add.overlap(
			this.player,
			this.key,
			this.onPlayerPickupKey,
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

		//--- Enemy Walk Animation ---
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
		} else if (rightPressed){
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

		if (this.enemies) {
			this.enemies.children.iterate(enemy => {
				if (!enemy || !enemy.body) return;

				enemy.play("enemy_walk", true);

				if (enemy.x <= enemy.minX) {
					enemy.patrolDir = 1;
					if (enemy.setFlipX) enemy.setFlipX(false);
				}
				else if (enemy.x >= enemy.maxX) {
					enemy.patrolDir = -1;
					if (enemy.setFlipX) enemy.setFlipX(true);
				}

				if (enemy.canRandomTurn && Math.random() < enemy.turnChance) {
					enemy.patrolDir *= -1;
					if (enemy.setFlipX) enemy.setFlipX(enemy.patrolDir < 0);
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
		this.deathsThisLevel = (this.deathsThisLevel || 0) + 1;

		if (this.gameOver) return;

		this.gameOver = true;

		if (this.timerEvent) {
			this.timerEvent.paused = true;
		}

		if (this.bgMusic && this.bgMusic.isPlaying) {
			this.bgMusic.stop();
		}

		this.physics.pause();

		if (player.setTint) {
			player.setTint(0xff0000);
		}
		if (player.anims) {
			player.anims.stop();
		}

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

	//--- Shooting Logic ---
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

	//--- Bullet hits platform ---
	onBulletHitPlatform(platform, bullet) {
		if (bullet && bullet.destroy) {
			bullet.destroy();
		}
	}

	//--- Player lands on platform ---
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

	//--- Bullet hits enemy ---
	onBulletHitEnemy(bullet, enemy) {
		if (bullet && bullet.destroy) {
			bullet.destroy();
		}
		if (enemy && enemy.destroy) {
			enemy.destroy();

			this.score += 10;
			this.registry.set("score", this.score);

			if (this.scoreText && this.scoreText.setText) {
				this.scoreText.setText("Score: " + this.score);
			}
		}
	}

	//--- Player picks up key ---
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

	//--- Try to open the door by using 'K' key or mobile button ---
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

	//--- Player reaches door ---
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
			"LEVEL 5 COMPLETE",
			{
				fontSize: "64px",
				color: "#0f7a2b",
				fontStyle: "bold"
			}
		).setOrigin(0.5);
		levelCompleteText.setDepth(1000);
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

		let nextSceneKey;
		if (diff.speedMult <= 1.0) {
			nextSceneKey = "LevelSixEasy";
		} else {
			nextSceneKey = "LevelSix";
		}

		this.time.delayedCall(1500, () => {
			this.scene.start(nextSceneKey);
		});
	}

	//------ Help Button + Popup UI --------
	createHelpUI() {
		const { width, height } = this.scale;

		this.helpButton = this.add.rectangle(width - 90, 78, 120, 44, 0x111111, 0.8);
		this.helpButton.setStrokeStyle(2, 0xffffff, 1);
		this.helpButton.setScrollFactor(0);
		this.helpButton.setDepth(2000);
		this.helpButton.setInteractive({ useHandCursor: true });

		this.helpButtonText = this.add.text(width - 90, 78, "Help", {
			fontFamily: "Chiller",
			fontSize: "28px",
			color: "#ffffff"
		});
		this.helpButtonText.setOrigin(0.5);
		this.helpButtonText.setScrollFactor(0);
		this.helpButtonText.setDepth(2001);
		this.helpButtonText.setInteractive({ useHandCursor: true });

		this.helpOverlay = this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.6);
		this.helpOverlay.setScrollFactor(0);
		this.helpOverlay.setDepth(2100);
		this.helpOverlay.setVisible(false);

		this.helpPanel = this.add.rectangle(width / 2, height / 2, 920, 620, 0x1a1a1a, 0.95);
		this.helpPanel.setStrokeStyle(4, 0xffffff, 1);
		this.helpPanel.setScrollFactor(0);
		this.helpPanel.setDepth(2101);
		this.helpPanel.setVisible(false);

		this.helpTitleText = this.add.text(width / 2, height / 2 - 255, "How to Play", {
			fontFamily: "Chiller",
			fontSize: "42px",
			color: "#ffffff"
		});
		this.helpTitleText.setOrigin(0.5);
		this.helpTitleText.setScrollFactor(0);
		this.helpTitleText.setDepth(2102);
		this.helpTitleText.setVisible(false);

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

	//--- Timer Logic ---
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