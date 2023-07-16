// export default class Player extends Phaser.Physics.Arcade.Sprite {
//   constructor(scene, x, y) {
//     super(scene, x, y, 'player');
//     scene.add.existing(this);
//     scene.physics.world.enable(this);

//     this.setScale(1, 1);

//     scene.anims.create({
//       key: 'left',
//       frames: scene.anims.generateFrameNumbers('player', { start: 66, end: 71 }),
//       frameRate: 10,
//       repeat: -1
//     });

//     scene.anims.create({
//       key: 'turn',
//       frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
//       frameRate: 20,
//       repeat: -1
//     });

//     scene.anims.create({
//       key: 'right',
//       frames: scene.anims.generateFrameNumbers('player', { start: 46, end: 51 }),
//       frameRate: 10,
//       repeat: -1
//     });

//     scene.anims.create({
//       key: 'up',
//       frames: scene.anims.generateFrameNumbers('player', { start: 24, end: 29 }),
//       frameRate: 10,
//       repeat: -1
//     });

//     scene.anims.create({
//       key: 'down',
//       frames: scene.anims.generateFrameNumbers('player', { start: 6, end: 11 }),
//       frameRate: 10,
//       repeat: -1
//     });

//     this.cursors = scene.input.keyboard.createCursorKeys();
//   }

//   update() {
//     const { left, right, up, down } = this.cursors;

//     if (left.isDown) {
//       this.setVelocityX(-128);
//       this.anims.play('left', true);
//     } else if (right.isDown) {
//       this.setVelocityX(128);
//       this.anims.play('right', true);
//     } else if (up.isDown) {
//       this.setVelocityY(-128);
//       this.anims.play('up', true);
//     } else if (down.isDown) {
//       this.setVelocityY(128);
//       this.anims.play('down', true);
//     } else {
//       this.anims.play('turn');
//       this.setVelocityY(0);
//       this.setVelocityX(0);
//     }
//   }
// }