import Phaser from 'phaser'
const gameState = {}
let maze_container=document.getElementById('maze-subcontainer')

function preload() {
  this.load.image('person', '');
}

function create() {
  gameState.person = this.add.sprite(150, 200, 'person');
  gameState.cursors=this.input.keyboard.createCursorKeys();

}

function update() {
  if (gameState.cursors.left.isDown){
    gameState.person.x-=5;
  }
  if (gameState.cursors.right.isDown){
    gameState.person.x+=5;
  }
  if (gameState.cursors.up.isDown){
    gameState.person.y-=5;

  }
  if (gameState.cursors.down.isDown){
    gameState.person.y+=5;
  }
}

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 500,
	backgroundColor: "#5f2a55",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent,maze_container,
	scene: {
    preload,
    create,
    update
	}
}

const game = new Phaser.Game(config)
