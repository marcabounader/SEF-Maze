export default class preLoader extends Phaser.Scene{
    constructor(){
        super('preLoader')
    }

    preload(){
        this.load.image('tiles','src\\assets\\tilemaps\\walls_1x2.png')

        this.load.tilemapTiledJSON('maze','src\\assets\\tilemaps\\maze.json');

        // this.load.atlas('mazer','src\\assets\\sprites\\player.png','src\\assets\\sprites\\player.json')
        this.load.image('player', 'https://content.codecademy.com/courses/learn-phaser/codey.png');

    }

    create(){
        this.scene.start('Game');
    }

}