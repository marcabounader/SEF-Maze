import ScoreLabel from "./ScoreLabel";

export default class preLoader extends Phaser.Scene{
    constructor(){
        super('preLoader')
        this.ScoreLabel=undefined;

    }

    preload(){


        this.load.image('tiles','src\\assets\\tilemaps\\walls_1x2.png')
        this.load.image("wall-tiles","src\\assets\\tilemaps\\wall-tiles.png")

        //sprit (21,2)
        // this.load.spritesheet('player', 'src\\assets\\sprites\\player.png', { frameWidth: 19, frameHeight:27 });
        this.load.atlas('player', 'src\\assets\\sprites\\player.png', 'src\\assets\\sprites\\player.json')

        this.load.tilemapTiledJSON('maze-1','src\\assets\\tilemaps\\map-1\\maze.json');
        this.load.tilemapTiledJSON('maze-2','src\\assets\\tilemaps\\map-2\\maze-2.json');
        this.load.tilemapTiledJSON("maze-3","src\\assets\\tilemaps\\map-3\\map-3.json") 
        this.load.tilemapTiledJSON("maze-4","src\\assets\\tilemaps\\map-4\\map-4.json") 
        
        this.load.image('star', 'src\\assets\\sprites\\star.png');

    }

    create(){
            

      this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { prefix:'PLAYER_WALK_L',start: 66, end: 71 }),
      frameRate: 10,
      repeat: 0
    });

    this.anims.create({
        key: 'turn',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
        frameRate: 20,
        repeat:-1
      });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', {prefix:'PLAYER_WALK_R', start: 46, end: 51 }),
      frameRate: 10,
      repeat: 0
    });

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('player', { prefix:'PLAYER_WALK_U', start: 26, end: 31}),
      frameRate: 10,
      repeat: 0
    });

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('player', {prefix:'PLAYER_WALK_D', start: 6, end: 11 }),
      frameRate: 10,
      repeat: 0
    });


        this.scene.start('levelOne');
    }

}