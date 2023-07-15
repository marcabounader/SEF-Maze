export default class firstLevel extends Phaser.Scene{
    constructor(){
        super('firstLevel');
    }
    preload(){
        console.log('pre')
    }
    create(){
        console.log('cre')
    }

    update(){
        console.log('up')
    }
}