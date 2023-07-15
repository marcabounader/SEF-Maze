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
        // const tileset=map.addTilesetImage('maze','maze')
        // map.createLayer('maze',tileset)
        
    }

    update(){

    }
}