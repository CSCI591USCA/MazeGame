import ASSETS from '../assets.js';
import ANIMATION from '../animation.js';
import Player from '../gameObjects/Player.js';
import Enemy from '../gameObjects/Enemy.js';
import Key from '../gameObjects/Key.js';

export class Game extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    create() {
        this.initVariables();
        this.initGameUi();
        this.initAnimations();
        this.initInput();
        this.initGroups();
        this.initMap();
        this.initPlayer();
        this.initPhysics();

        // full-screen background that follows the viewport
        this.bg = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'tiles', 1)
            .setOrigin(0, 0)
            .setScrollFactor(0)
            .setDepth(-100);
        
        // fit the whole map into view on first layout
        this.updateCameraFit();

        // re-fit on any resize / rotation
        this.scale.on('resize', (size) => {
            this.bg.setSize(this.scale.gameSize.width, this.scale.gameSize.height);
            this.updateCameraFit();
        });
    }

    updateCameraFit() {
        const cam = this.cameras.main;

        const layer = (this.levelLayer ?? this.groundLayer);
        const b = layer.getBounds(); 

        const viewW = this.scale.width;
        const viewH = this.scale.height;
        const worldW = b.width;
        const worldH = b.height;

        const zoom = Math.min(viewW / worldW, viewH / worldH);
        cam.setZoom(zoom);

        const padX = Math.max(0, (viewW / zoom - worldW) / 2);
        const padY = Math.max(0, (viewH / zoom - worldH) / 2);

        cam.setBounds(
            b.x - padX,
            b.y - padY,
            worldW + padX * 2,
            worldH + padY * 2
        );

        cam.centerOn(b.centerX, b.centerY);
  
        if (this.physics && this.physics.world) {
            this.physics.world.setBounds(
                b.x - padX,
                b.y - padY,
                worldW + padX * 2,
                worldH + padY * 2
            );
        }

        cam.setRoundPixels(true);
    }


    update(time, delta) {
        if (!this.gameStarted) return;

        this.player.update(delta);
        this.addEnemy();
    }

    // --------------------------------
    // INITIALIZATION
    // --------------------------------
    initVariables() {
        this.gameStarted = false;
        this.score = 0;
        this.hasKey = false;
        this.keyPlaced = false;
        this.doorPlaced = false;
        this.door = false;
        this._doorCollider = null;
        this.centreX = this.scale.width * 0.5;
        this.centreY = this.scale.height * 0.5;

        this.spawnCounterEnemy = 0;
        this.spawnRateEnemy = 3 * 60;

        this.tileIds = {
            player: 96,
            enemy: 95,
            key: 94,
            door: 106,
            walls: [45, 46, 47, 48, 53, 54, 55, 56, 57, 58, 59, 60,
                    65, 66, 67, 68, 69, 70, 71, 72, 77, 78, 79, 80,
                    81, 82, 83, 84]
        };

        this.playerStart = { x: 0, y: 0 };
        this.enemyStart = { x: 0, y: 0 };

        this.tiles = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 44];
        this.tileSize = 32;
        this.halfTileSize = this.tileSize * 0.5;

        this.mapHeight = 15;
        this.mapWidth = 21;
        this.mapX = this.centreX - (this.mapWidth * this.tileSize * 0.5);
        this.mapY = this.centreY - (this.mapHeight * this.tileSize * 0.5);

        this.map;
        this.groundLayer;
        this.levelLayer;
    }

    initGameUi() {
        this.tutorialText = this.add.text(this.centreX, this.centreY,
            'Find the key then unlock the door!\nArrow keys to move!\nPress Spacebar to Start',
            {
                fontFamily: 'Arial Black', fontSize: 42, color: '#ffffff',
                stroke: '#000000', strokeThickness: 8, align: 'center'
            })
            .setOrigin(0.5).setDepth(100)
            .setScrollFactor(0);

        this.scoreText = this.add.text(20, 20, 'Score: 0', {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
        }).setDepth(100)
          .setScrollFactor(0);

        this.gameOverText = this.add.text(this.scale.width * 0.5, this.scale.height * 0.5, 'Game Over', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8, align: 'center'
        }).setOrigin(0.5).setDepth(100).setVisible(false)
        .setScrollFactor(0);
    }

    initAnimations() {
        const playerAnimations = ANIMATION.player;
        for (const key in playerAnimations) {
            const animation = playerAnimations[key];
            this.anims.create({
                key: animation.key,
                frames: this.anims.generateFrameNumbers(animation.texture, animation.config),
                frameRate: animation.frameRate,
                repeat: animation.repeat
            });
        }

        const enemyAnimations = ANIMATION.enemy;
        for (const key in enemyAnimations) {
            const animation = enemyAnimations[key];
            this.anims.create({
                key: animation.key,
                frames: this.anims.generateFrameNumbers(animation.texture, animation.config),
                frameRate: animation.frameRate,
                repeat: animation.repeat
            });
        }
    }

    initGroups() {
        this.enemyGroup = this.add.group();
        this.itemGroup = this.add.group();
    }

    initPhysics() {
        this.physics.add.overlap(this.player, this.enemyGroup, this.hitPlayer, null, this);
        this.physics.add.overlap(this.player, this.itemGroup, this.collectItem, null, this);

        if (this.door && !this._doorCollider) {
            this._doorCollider = this.physics.add.overlap(
                this.player, this.door, this.tryOpenDoor, null, this
            );
        }
    }

    initPlayer() {
        this.player = new Player(this, this.playerStart.x, this.playerStart.y);
    }

    initInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.cursors.space.once('down', () => this.startGame());
    }

    // --------------------------------
    // MAP AND RANDOM PLACEMENT
    // --------------------------------
    initMap() {
        const mapData = [];
        for (let y = 0; y < this.mapHeight; y++) {
            const row = [];
            for (let x = 0; x < this.mapWidth; x++) {
                const tileIndex = Phaser.Math.RND.weightedPick(this.tiles);
                row.push(tileIndex);
            }
            mapData.push(row);
        }

        this.map = this.make.tilemap({ key: ASSETS.tilemapTiledJSON.map.key });
        this.map.setCollision(this.tileIds.walls);
        const tileset = this.map.addTilesetImage(ASSETS.spritesheet.tiles.key);

        this.groundLayer = this.map.createBlankLayer('ground', tileset, this.mapX, this.mapY);
        this.groundLayer.fill(0, 0, 0, this.mapWidth, this.mapHeight);
        for (let y = 0; y < this.mapHeight; y++) {
            for (let x = 0; x < this.mapWidth; x++) {
                const tile = this.groundLayer.getTileAt(x, y);
                tile.index = Phaser.Math.RND.weightedPick(this.tiles);
            }
        }

        this.levelLayer = this.map.createLayer('level', tileset, this.mapX, this.mapY);
        for (let y = 0; y < this.mapHeight; y++) {
            for (let x = 0; x < this.mapWidth; x++) {
                const tile = this.levelLayer.getTileAt(x, y);
                if (!tile) continue;

                if (tile.index === this.tileIds.player) {
                    tile.index = -1;
                    this.playerStart.x = x;
                    this.playerStart.y = y;
                } else if (tile.index === this.tileIds.enemy) {
                    tile.index = -1;
                    this.enemyStart.x = x;
                    this.enemyStart.y = y;
                } else if (tile.index === this.tileIds.key || tile.index === this.tileIds.door) {
                    tile.index = -1;
                }
            }
        }

        // randomize key and door placement
        this.placeKeyAndDoorRandom();
    }

    // --------------------------------
    // RANDOM SPAWN HELPERS
    // --------------------------------
    getWalkableCells() {
        const walkable = [];
        for (let y = 0; y < this.mapHeight; y++) {
            for (let x = 0; x < this.mapWidth; x++) {
                const t = this.levelLayer.getTileAt(x, y, true);
                const isWall = this.tileIds.walls.indexOf(t.index) !== -1;
                if (!isWall) {
                    if (!(x === this.playerStart.x && y === this.playerStart.y) &&
                        !(x === this.enemyStart.x && y === this.enemyStart.y)) {
                        walkable.push({ x, y });
                    }
                }
            }
        }
        return walkable;
    }

    pickRandomCell(avoidSet = new Set()) {
        const candidates = this.getWalkableCells().filter(c => !avoidSet.has(`${c.x},${c.y}`));
        return candidates[Math.floor(Math.random() * candidates.length)];
    }

    placeKeyAndDoorRandom() {
        const avoid = new Set();
        avoid.add(`${this.playerStart.x},${this.playerStart.y}`);
        avoid.add(`${this.enemyStart.x},${this.enemyStart.y}`);

        const keyCell = this.pickRandomCell(avoid);
        this.addKey(keyCell.x, keyCell.y);
        avoid.add(`${keyCell.x},${keyCell.y}`);

        let doorCell = this.pickRandomCell(avoid);
        let guard = 0;
        while ((Math.abs(doorCell.x - keyCell.x) + Math.abs(doorCell.y - keyCell.y)) < 6 && guard++ < 50) {
            doorCell = this.pickRandomCell(avoid);
        }
        this.addDoor(doorCell.x, doorCell.y);

        if (this.player && this.door && !this._doorCollider) {
            this._doorCollider = this.physics.add.overlap(
                this.player, this.door, this.tryOpenDoor, null, this
            );
        }
    }

    // --------------------------------
    // GAME LOGIC
    // --------------------------------
    startGame() {
        this.gameStarted = true;
        this.tutorialText.setVisible(false);
    }

    addEnemy() {
        if (this.spawnCounterEnemy-- > 0) return;
        this.spawnCounterEnemy = this.spawnRateEnemy;
        const enemy = new Enemy(this, this.enemyStart.x, this.enemyStart.y);
        this.enemyGroup.add(enemy);
    }

    addKey(x, y) {
        this.itemGroup.add(new Key(this, x, y));
    }

    removeItem(item) {
        this.itemGroup.remove(item, true, true);
    }

    addDoor(x, y) {
        const m = this.getMapOffset();
        const worldX = m.x + (x * m.tileSize);
        const worldY = m.y + (y * m.tileSize);
        
        this.door = this.physics.add.staticImage(worldX, worldY, 'doorClosed')
            .setDepth(200)
            .setOrigin(0.5, 0.5);

        this.door.setDisplaySize(m.tileSize * 1.0, m.tileSize * 2.0);
        this.door.refreshBody();
    }

    tryOpenDoor() {
        if (!this.door) return;
        if (this.hasKey) {
            this.tutorialText.setVisible(false);
            this.door.destroy();
            this.door = null;
            this.levelComplete();
        } else {
            this.tutorialText.setText('Find the key to escape the maze!');
            this.tutorialText.setVisible(true);
        }
    }

    destroyEnemies() {
        this.updateScore(100 * this.enemyGroup.getChildren().length);
        this.enemyGroup.clear(true, true);
    }

    hitPlayer(player, obstacle) {
        player.hit();
        this.GameOver();
    }

    collectItem(player, item) {
        item.collect();
    }

    updateScore(points) {
        this.score += points;
        this.scoreText.setText(`Score: ${this.score}`);
    }

    getMapOffset() {
        return {
            x: this.mapX + this.halfTileSize,
            y: this.mapY + this.halfTileSize,
            width: this.mapWidth,
            height: this.mapHeight,
            tileSize: this.tileSize
        }
    }

    getTileAt(x, y) {
        const tile = this.levelLayer.getTileAtWorldXY(x, y, true);
        return tile ? this.tileIds.walls.indexOf(tile.index) : -1;
    }

    levelComplete() {
        this.gameStarted = false;
        this.tutorialText.setVisible(false);
        if (this._doorCollider){
            this.physics.world.removeCollider(this._doorCollider);
            this._doorCollider = null;
        }
        this.gameOverText.setText('Level Completed!');
        this.gameOverText.setVisible(true);
    }

    GameOver() {
        this.gameStarted = false;
        this.tutorialText.setVisible(false)
        this.gameOverText.setVisible(true);
    }
}
