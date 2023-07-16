export default class preLoader extends Phaser.Scene{
    constructor(){
        super('preLoader')
    }

    preload(){

        this.load.image('tiles','src\\assets\\tilemaps\\walls_1x2.png')
        this.load.tilemapTiledJSON('maze','src\\assets\\tilemaps\\map-1\\maze.json');
        this.load.spritesheet('player', 'src\\assets\\sprites\\player.png', { frameWidth: 20, frameHeight: 32 });
    }

    create(){
        this.scene.start('levelOne');
    }

}