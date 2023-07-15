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

        const mazer=this.add.sprite(128,128,'mazer','person_spritesheet')
    }

    update(){

    }
}