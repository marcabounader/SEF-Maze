export default class levelFour extends Phaser.Scene{
    constructor(){
        super('levelFour')
    }

    preload(){
    
    }

    create(){
        // this.maze=this.add.image(150,150,'tiles')
        // this.maze.setOrigin(0,0)
        const map=this.make.tilemap({key:'maze-4'});
        const tileset=map.addTilesetImage('BasicTiles','wall-tiles',32,32)
        const maze_wall=map.createLayer('layerStone',tileset,100,50);
    
        //maze_wall.setCollisionByProperty({collides:true});
        // maze_wall.setCollisionBetween(0,9);


        // const mazer=this.add.sprite(128,128,'player','PLAYER_WALK_D')
        this.player = this.add.sprite(200, 0.5, 'player');
        this.player.setScale(0.5,0.5);
        this.cursors=this.input.keyboard.createCursorKeys();
        // this.physics.add.collider(this.player,maze_wall,() => {
            
        // })
        let debugGraphics=this.add.graphics().setAlpha(0.7);
        maze_wall.renderDebug(debugGraphics,{
            tileColor:null,
            collidingTileColor: new Phaser.Display.Color(243,234,48,255),
            faceColor:new Phaser.Display.Color(40,39,37,255)
        })
    }

    update(){
        if (this.cursors.left.isDown){
            this.player.x-=2;
            this.scene.start('levelOne');   

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