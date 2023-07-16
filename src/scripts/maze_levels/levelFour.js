export default class levelFour extends Phaser.Scene{
    constructor(){
        super('levelFour')
    }

    preload(){
    
    }

    create(){
        // this.maze=this.add.image(150,150,'tiles')
        // this.maze.setOrigin(0,0)
        const map=this.make.tilemap({key:'maze-4'});
        const tileset=map.addTilesetImage('BasicTiles','wall-tiles',32,32)
        const maze_wall=map.createLayer('layerStone',tileset,10,50);
        maze_wall.setCollisionBetween(0,55);

        this.cursors=this.input.keyboard.createCursorKeys();

        //To Add player+position
        this.player = this.physics.add.sprite(860, 70, 'player');
        //To set scale
        this.player.setScale(1,1);
        this.player.setCollideWorldBounds(true);
        this.circle=this.physics.add.existing(this.add.circle(20,740,10,'#00ff04'));

    
      let debugGraphics=this.add.graphics().setAlpha(0.7);
      maze_wall.renderDebug(debugGraphics,{
              tileColor:null,
              collidingTileColor: new Phaser.Display.Color(243,234,48,255),
              faceColor:new Phaser.Display.Color(40,39,37,255)
          })
    
        this.physics.add.collider(this.player,maze_wall,() => {
    
        })
        this.physics.add.collider(this.player,this.circle,() => {
          // this.scene.start('levelTwo')
        })
        // this.time.addEvent({
        //   delay: 3000,
        //   loop: false,
        //   callback: () => {
        //       this.scene.start("levelOne");
        //   }
        // })
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