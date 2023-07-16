export default class levelOne extends Phaser.Scene{
  constructor(){
      super('levelOne')
  }
  preload(){
  
  }
  create(){
    const map=this.make.tilemap({key:'maze'});
    const tileset=map.addTilesetImage('walls_1x2','tiles',32,58)
    const maze_wall=map.createLayer('maze-wall',tileset,100,0);
    maze_wall.setCollisionByProperty({collides:true});


    //To Add player+position
    this.player = this.add.sprite(200, 300, 'player');
    //To set scale
    this.player.setScale(2,2);
    
    //To change image
    
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

  this.anims.create({
      key: 'turn',
      frames: [ { key: 'player', frame: 4 } ],
      frameRate: 20
    });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.cursors=this.input.keyboard.createCursorKeys();
    this.physics.add.collider(this.player,maze_wall,() => {

    })

  }
  update(){

      if (this.cursors.left.isDown){
        this.player.x-=2;
        this.player.anims.play('left', true);
      }
      else if (this.cursors.right.isDown){
        this.player.x+=2;
        this.player.anims.play('right', true);
      }
      else if (this.cursors.up.isDown){
        this.player.y-=2;
        this.player.anims.play('up', true);
      }
      else if (this.cursors.down.isDown){
        this.player.y+=2;
        this.player.anims.play('down', true);
      }
      else{
        this.player.anims.play('turn');
      }
  }
}