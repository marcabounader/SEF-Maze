
export default class Player extends Phaser.Scene{
    
    constructor() {
        super();
    }

    preload() {
        this.load.sprite('person-1',{
          background: url('imgs/person_spritesheet.png') no-repeat -18px -2px;
          width: 49px;
          height: 150px;
        });
        // this.load.spritesheet('person_sprite', 'src\\assets\\sprites\\person_spritesheet.png', { frameWidth: 70, frameHeight: 150 });
        // this.load.obj('stone', 'src\\assets\\lowpoly_maze\\StoneArch.obj', 'src\\assets\\lowpoly_maze\\StoneArch.mtl');

      }
      
     create() {
        gameState.person = this.add.sprite(150, 200, 'person');
        // this.person=this.add.sprite(200, 0, 'person_sprite',0);
        // this.person.displayWidth=30;
        // this.person.displayHeight=50;
        // this.cache.obj.add('stone');
        // this.add.obj()

        // this.cursors=this.input.keyboard.createCursorKeys();
      
        // var frames = this.anims.generateFrameNumbers(gameState.person)
        //create animation from sprites 
        // this.anims.create({
        //     key: 'walk',
        //     frames: frames,
        //     frameRate: 8,
        //     repeat: -1
        // });
      
        // this.boy.play("walk")
      
      }
      
     update() {
        if (this.cursors.left.isDown){
          this.person.x-=5;
        }
        if (this.cursors.right.isDown){
          this.person.x+=5;
        }
        if (this.cursors.up.isDown){
          this.person.y-=5;
      
        }
        if (this.cursors.down.isDown){
          this.person.y+=5;
        }
      }

}

