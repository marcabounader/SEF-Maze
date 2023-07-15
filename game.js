export default class Game extends Phaser.Scene{
    constructor(){
        super('Game')
    }

    preload(){
    
    }

    create(){
        // this.maze=this.add.image(150,150,'tiles')
        // this.maze.setOrigin(0,0)
        const map=this.make.tilemap({key:'maze'});
        const tileset=map.addTilesetImage('walls_1x2','tiles',32,58)
        const maze_wall=map.createLayer('maze-wall',tileset,100,0);
    
        maze_wall.setCollisionByProperty({collides:true});

        // const mazer=this.add.sprite(128,128,'player','PLAYER_WALK_D')
        this.player = this.add.sprite(200, 0.5, 'player');
        this.player.setScale(0.5,0.5);
        this.cursors=this.input.keyboard.createCursorKeys();

    }

    update(){
        if (this.cursors.left.isDown){
            this.player.x-=3;
          }
          if (this.cursors.right.isDown){
            this.player.x+=3;
          }
          if (this.cursors.up.isDown){
            this.player.y-=3;
        
          }
          if (this.cursors.down.isDown){
            this.player.y+=3;
          }
    }
}