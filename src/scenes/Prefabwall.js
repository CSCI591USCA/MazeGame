
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Prefabwall extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 1, y ?? 0, texture || "tile_0000", frame);

		this.scaleX = 3;
		this.scaleY = 3;
		scene.physics.add.existing(this, true);
		this.body.moves = false;
		this.body.allowGravity = false;
		this.body.collideWorldBounds = true;
		this.body.pushable = false;
		this.body.immovable = true;
		this.body.setSize(48, 48, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
