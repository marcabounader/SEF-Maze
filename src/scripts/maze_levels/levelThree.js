import ScoreLabel from "./ScoreLabel";

export default class levelThree extends Phaser.Scene{
  constructor(){
      super('levelThree')
  }
  init(data){
    this.score=data.getScore();
  }
  preload(){
  
  }

  create(){
      const map=this.make.tilemap({key:'maze-1'});
      const tileset=map.addTilesetImage('walls_1x2','tiles',32,58)
      const maze_wall=map.createLayer('maze-wall',tileset,15,5).setScale(1.1);
      this.add.text(1050,16,"level 3",{ fontSize: '32px', fill: '#000' })

      this.scoreLabel = this.createScoreLabel(16, 16, this.score);
      this.cursors=this.input.keyboard.createCursorKeys();
      this.player = this.physics.add.sprite(520, 50, 'player');
      this.player.setCollideWorldBounds(true);
      this.player.setScale(1.2);
      this.circle=this.physics.add.existing(this.add.circle(560,830,10,'0x08000'));

      maze_wall.setCollisionBetween(0,8);

      // let debugGraphics=this.add.graphics().setAlpha(0.7);
      // maze_wall.renderDebug(debugGraphics,{
      //         tileColor:null,
      //         collidingTileColor: new Phaser.Display.Color(243,234,48,255),
      //         faceColor:new Phaser.Display.Color(40,39,37,255)
      // })
    

    this.physics.add.collider(this.player,maze_wall,() => {
    
    })
    this.physics.add.collider(this.player,this.circle,() => {
      this.scene.start('levelFour',this.scoreLabel)
    })

    this.star_1 = this.physics.add.sprite(200,450,'star');
    this.star_1.setScale(0.5,0.5);
    
    this.physics.add.overlap(
      this.player, 
      this.star_1, 
      (player,star) =>{
        star.disableBody(true, true);

        this.scoreLabel.add(10);
    }, 
    null, 
    this);

    this.star_2 = this.physics.add.sprite(400,600,'star');
    this.star_2.setScale(0.5,0.5);
    
    this.physics.add.overlap(
      this.player, 
      this.star_2, 
      (player,star) =>{
        star.disableBody(true, true);

        this.scoreLabel.add(10);
    }, 
    null, 
    this);

    this.star_3 = this.physics.add.sprite(200,750,'star');
    this.star_3.setScale(0.5,0.5);

    this.physics.add.overlap(
      this.player, 
      this.star_3, 
      (player,star) =>{
        star.disableBody(true, true);

        this.scoreLabel.add(10);
    }, 
    null, 
    this);

    this.star_4 = this.physics.add.sprite(550,220,'star');
    this.star_4.setScale(0.5,0.5);
    
    this.physics.add.overlap(
      this.player, 
      this.star_4, 
      (player,star) =>{
        star.disableBody(true, true);

        this.scoreLabel.add(10);
    }, 
    null, 
    this);

    this.star_5 = this.physics.add.sprite(750,550,'star');
    this.star_5.setScale(0.5,0.5);
    
    this.physics.add.overlap(
      this.player, 
      this.star_5, 
      (player,star) =>{
        star.disableBody(true, true);

        this.scoreLabel.add(10);
    }, 
    null, 
    this);
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
  createScoreLabel(x, y, score)
  {
    const style = { fontSize: '32px', fill: '#000' }
    const label = new ScoreLabel(this, x, y, score, style)

    this.add.existing(label)

    return label
  }
}