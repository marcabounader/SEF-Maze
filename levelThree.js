// import Phaser from "phaser"
export default class levelThree extends Phaser.Scene{
    constructor(){
        super('levelThree')
    }

    preload(){
        
    }

    create(){
        const map=this.make.tilemap({key:"map",tileWidth:32,tileHeight:32});
        const tileset=map.addTilesetImage("TileBasic","wall-tiles")
        const layer=map.createLayer("layerWall",tileset,0,0)
    
        maze_wall.setCollisionByProperty({collides:true});

        this.player = this.add.sprite(200, 0.5, 'player');
        this.player.setScale(1,1);
        this.cursors=this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player,maze_wall,() => {   
        })
      
      const debugGraphics=this.add.graphics().setAlpha(0.7);
      maze_wall.renderDebug(debugGraphics,{
          tileColor:null,
          collidingTileColor: new Phaser.Display.Color(243,234,48,255),
          faceColor:new Phaser.Display.Color(40,39,37,255)
      })
    }

  update(){
      if (this.cursors.left.isDown){
          this.player.x-=2;
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