export default class preLoader extends Phaser.Scene{
    constructor(){
        super('preLoader')
    }

    preload(){

        this.load.image('tiles','src\\assets\\tilemaps\\walls_1x2.png')

        this.load.tilemapTiledJSON('maze','src\\assets\\tilemaps\\map-1\\maze.json');

        this.load.image("wall-tiles","src/img/MazeImage/wall-tiles.png")
        
        this.load.tilemapTiledJSON("map-3","src/assets/tilemaps/map-3.json")
        // this.load.atlas('player','src\\assets\\sprites\\player.png','src\\assets\\sprites\\player.json')
        this.load.image('player', 'https://content.codecademy.com/courses/learn-phaser/codey.png');

    }

    create(){
        this.scene.start('levelOne');
    }

}