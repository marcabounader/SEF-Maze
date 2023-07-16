export default class preLoader extends Phaser.Scene{
    constructor(){
        super('preLoader')
    }

    preload(){

        //Tileheight must be 30!!!
        this.load.image('tiles','src\\assets\\tilemaps\\walls_1x2.png')
        this.load.tilemapTiledJSON('maze','src\\assets\\tilemaps\\map-1\\maze.json');

        // Player+Animation (21,26)
        this.load.spritesheet('player', 'src\\assets\\sprites\\player.png', { frameWidth: 21, frameHeight: 26 });
        this.load.atlas('player', 'src\\assets\\sprites\\player.png', 'src\\assets\\sprites\\player.json')
    }

    create(){
        this.scene.start('levelOne');
    }

}