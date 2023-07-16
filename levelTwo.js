import Phaser from "phaser"
export default class levelTwo extends Phaser.Scene{
    constructor(){
        super('levelTwo')
    }

    preload(){
        this.load.image("wall-tiles","src/img/MazeImage/wall-tiles.png")
        this.load.tilemapTiledJSON("map-3","src/assets/tilemaps/map-3.json")
    }

    create(){
        // this.maze=this.add.image(150,150,'tiles')
        // this.maze.setOrigin(0,0)
        // const tileset=map.addTilesetImage('maze','maze')
        // map.createLayer('maze',tileset)
        const map=this.make.tilemap({key:"map",tileWidth:32,tileHeight:32});
        const tileset=map.addTilesetImage("TileBasic","wall-tiles")
        const layer=map.createLayer("layerWall",tileset,0,0)
    }

    update(){

    }
}