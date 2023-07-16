export default class levelOne extends Phaser.Scene{
  constructor(){
      super('levelOne')
  }
  preload(){
  
  }
  create(){
    const map=this.make.tilemap({key:'maze'});
    const tileset=map.addTilesetImage('walls_1x2','tiles',32,58)
    const maze_wall=map.createLayer('maze-wall',tileset,100,0);
    maze_wall.setCollisionByProperty({collides:true});


    //To Add player+position
    this.player = this.physics.add.sprite(300, 300, 'player');
    //To set scale
    this.player.setScale(1,1);
    
    //To change Sprite

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { start: 66, end: 71 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
        frameRate: 20,
        repeat: -1
      });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { start: 46, end: 51 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('player', { start: 24, end: 29 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('player', { start: 6, end: 11 }),
      frameRate: 10,
      repeat: -1
    });


  let debugGraphics=this.add.graphics().setAlpha(0.7);
      maze_wall.renderDebug(debugGraphics,{
          tileColor:null,
          collidingTileColor: new Phaser.Display.Color(243,234,48,255),
          faceColor:new Phaser.Display.Color(40,39,37,255)
      })

    this.cursors=this.input.keyboard.createCursorKeys();
    this.physics.add.collider(this.player,maze_wall,() => {

    })

  }
  update(){

      if (this.cursors.left.isDown){
        this.player.setVelocityX(-128);
        this.player.anims.play('left', true);
      }
      else if (this.cursors.right.isDown){
        this.player.setVelocityX(128);
        this.player.anims.play('right', true);
      }
      else if (this.cursors.up.isDown){
        this.player.setVelocityY(-128);
        this.player.anims.play('up', true);
      }
      else if (this.cursors.down.isDown){
        this.player.setVelocityY(128);
        this.player.anims.play('down', true);
      }
      else{
        this.player.anims.play('turn');
        this.player.setVelocityY(0);
        this.player.setVelocityX(0);
      }
  }
}