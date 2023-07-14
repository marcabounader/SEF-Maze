import Phaser from 'phaser'
const gameState = {}
let maze_container=document.getElementById('maze-subcontainer');

function preload() {
  // this.load.image('maze', 'src/assets/maze.png');
  this.load.image('player', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
  // this.load.image({
  //   key: 'tiles',
  //   url: 'src/assets/tilemaps/tiles.png',
  // });
  // this.load.tilemapTiledJSON('maze', 'src/assets/tilemaps/maze.tmj');

}

function create() {
  gameState.cursors=this.input.keyboard.createCursorKeys();
  gameState.player = this.add.sprite(200, 0.5, 'player');
  gameState.player.setOrigin(0,0)


}

function update() {
  if (gameState.cursors.left.isDown){
    gameState.player.x-=3;
  }
  if (gameState.cursors.right.isDown){
    gameState.player.x+=3;
  }
  if (gameState.cursors.up.isDown){
    gameState.player.y-=3;

  }
  if (gameState.cursors.down.isDown){
    gameState.player.y+=3;
  }
}

const config = {
	type: Phaser.AUTO,
	width: 1364,
	height: 768,
	backgroundColor: "#3f2a33",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: maze_container,
	scene: {
    preload,
    create,
    update
	}
}

const game = new Phaser.Game(config)
