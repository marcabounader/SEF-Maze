export default class preLoader extends Phaser.Scene{
    constructor(){
        super('preLoader')
    }

    preload(){

        this.load.image('tiles','src\\assets\\tilemaps\\walls_1x2.png')

        this.load.tilemapTiledJSON('maze','src\\assets\\tilemaps\\map-1\\maze.json');

        
        // this.load.atlas('player','src\\assets\\sprites\\player.png','src\\assets\\sprites\\player.json')
        this.load.image('player', 'https://content.codecademy.com/courses/learn-phaser/codey.png');

        this.load.tilemapTiledJSON('maze-2','src\\assets\\tilemaps\\map-2\\maze-2.json');

        this.load.image("wall-tiles","src\\assets\\tilemaps\\wall-tiles.png")
        this.load.tilemapTiledJSON("maze-3","src\\assets\\tilemaps\\map-3\\map-3.json") 

    }

    create(){
        this.scene.start('levelOne');
    }

}