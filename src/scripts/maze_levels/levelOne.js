export default class levelOne extends Phaser.Scene{
  constructor(){
      super('levelOne')
  }
  create(){
    const map=this.make.tilemap({key:"maze-3"});
    const tileset=map.addTilesetImage("TileBasic","wall-tiles")

    const maze_wall=map.createLayer("layerWall",tileset,50,50).setScale(1.4)
    maze_wall.setCollisionBetween(0,55);


    this.player = this.physics.add.sprite(870, 80, 'player');
    this.player.setScale(1,1);
    this.player.setCollideWorldBounds(true);

    this.circle=this.physics.add.existing(this.add.circle(160,830,15,'0x08000'));

    this.cursors=this.input.keyboard.createCursorKeys();

    let debugGraphics=this.add.graphics().setAlpha(0.7);
    maze_wall.renderDebug(debugGraphics,{
          tileColor:null,
          collidingTileColor: new Phaser.Display.Color(243,234,48,255),
          faceColor:new Phaser.Display.Color(40,39,37,255)
    })

    this.physics.add.collider(this.player,maze_wall,() => {

    })
    this.physics.add.collider(this.player,this.circle,() => {
      this.scene.start('levelTwo')
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