export default class levelTwo extends Phaser.Scene{
    constructor(){
        super('levelTwo')
    }

    preload(){
    
    }

    create(){
        const map=this.make.tilemap({key:'maze-2'});
        const tileset=map.addTilesetImage('walls_1x2','tiles',32,58)
        const maze_wall=map.createLayer('Tile Layer 1',tileset,100,50);
        maze_wall.setCollisionBetween(0,8);

        this.player = this.physics.add.sprite(560, 70, 'player');
        this.player.setScale(0.9,0.9);
        this.player.setCollideWorldBounds(true);
        
        this.circle=this.physics.add.existing(this.add.circle(470,840,10,'0x08000'));

        this.cursors=this.input.keyboard.createCursorKeys();

    
        let debugGraphics=this.add.graphics().setAlpha(0.7);
        maze_wall.renderDebug(debugGraphics,{
                tileColor:null,
                collidingTileColor: new Phaser.Display.Color(243,234,48,255),
                faceColor:new Phaser.Display.Color(40,39,37,255)
        })
    

        this.physics.add.collider(this.player,maze_wall,() => {
    
        })
        this.physics.add.collider(this.player,this.circle,() => {
          this.scene.start('levelThree')
        })  
      }
      update(){
    
          if (this.cursors.left.isDown){
            this.player.setVelocityX(-128);
            this.player.anims.play('left', true);
    
          }
          else if (this.cursors.right.isDown){
            this.player.setVelocityX(128);
            this.player.anims.play('right', true);
          }
          else if (this.cursors.up.isDown){
            this.player.setVelocityY(-128);
            this.player.anims.play('up', true);
          }
          else if (this.cursors.down.isDown){
            this.player.setVelocityY(128);
            this.player.anims.play('down', true);
          }
          else{
            this.player.anims.play('turn');
            this.player.setVelocityY(0);
            this.player.setVelocityX(0);
          }
      }


}