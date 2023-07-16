export default class levelOne extends Phaser.Scene{
  constructor(){
      super('levelOne')
  }

  preload(){
      
  }

  create(){
      const map=this.make.tilemap({key:"maze-3"});
      const tileset=map.addTilesetImage("TileBasic","wall-tiles")
      const layer=map.createLayer("layerWall",tileset,200,200)
      // const layer=map.createLayer("layerWall",tileset,this.game.config.width/2,this.game.config.height/2)

      // maze_wall.setCollisionByProperty({collides:true});
      this.player = this.add.sprite(200, 0.5, 'player');
      this.player.setScale(0.5,0.5);
      this.cursors=this.input.keyboard.createCursorKeys();
      // this.physics.add.collider(this.player,maze_wall,() => {   
      // })
    
      // let debugGraphics=this.add.graphics().setAlpha(0.7);
      // layer.renderDebug(debugGraphics,{
      //     tileColor:null,
      //     collidingTileColor: new Phaser.Display.Color(243,234,48,255),
      //     faceColor:new Phaser.Display.Color(40,39,37,255)
      // })
  }

update(){
    if (this.cursors.left.isDown){

        this.player.x-=2;
        this.scene.start('levelTwo');   

      }
      if (this.cursors.right.isDown){
        this.player.x+=2;
      }
      if (this.cursors.up.isDown){
        this.player.y-=2;
    
      }
      if (this.cursors.down.isDown){
        this.player.y+=2;
      }
}
}