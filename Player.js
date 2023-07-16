// export default class Player extends Phaser.Scene{
    
// constructor() {
//   super();
// }

// preload() {

//   }
    
//   create() {

//   //To Add player+position (x,y)
//   this.player = this.physics.add.sprite(300, 300, 'player');
//   //To set scale
//   this.player.setScale(1,1);
  
//   //To change Sprite

//   this.anims.create({
//     key: 'left',
//     frames: this.anims.generateFrameNumbers('player', { start: 66, end: 71 }),
//     frameRate: 10,
//     repeat: -1
//   });

//   this.anims.create({
//       key: 'turn',
//       frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
//       frameRate: 20,
//       repeat: -1
//     });

//   this.anims.create({
//       key: 'right',
//       frames: this.anims.generateFrameNumbers('player', { start: 46, end: 51 }),
//       frameRate: 10,
//       repeat: -1
//     });

//     this.anims.create({
//       key: 'up',
//       frames: this.anims.generateFrameNumbers('player', { start: 24, end: 29 }),
//       frameRate: 10,
//       repeat: -1
//     });

//     this.anims.create({
//       key: 'down',
//       frames: this.anims.generateFrameNumbers('player', { start: 6, end: 11 }),
//       frameRate: 10,
//       repeat: -1
//     });

//   }
      
//   update() {

//     if (this.cursors.left.isDown){
//       this.player.setVelocityX(-128);
//       this.player.anims.play('left', true);
//     }
//     else if (this.cursors.right.isDown){
//       this.player.setVelocityX(128);
//       this.player.anims.play('right', true);
//     }
//     else if (this.cursors.up.isDown){
//       this.player.setVelocityY(-128);
//       this.player.anims.play('up', true);
//     }
//     else if (this.cursors.down.isDown){
//       this.player.setVelocityY(128);
//       this.player.anims.play('down', true);
//     }
//     else{
//       this.player.anims.play('turn');
//       this.player.setVelocityY(0);
//       this.player.setVelocityX(0);
//     }

//   }
// }

