export default class preLoader extends Phaser.Scene{
    constructor(){
        super('preLoader')
    }

    preload(){
        this.load.image('tiles','src\\assets\\tilemaps\\walls.png')

        this.load.tilemapTiledJSON('maze','src\\assets\\tilemaps\\walls.json');
    }

    create(){
        this.scene.start('Game');
    }

}