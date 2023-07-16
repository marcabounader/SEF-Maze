import Phaser from 'phaser';

let maze_container = document.getElementById('maze-subcontainer');

function preload() {
  // this.load.image({
  //   key: 'tiles',
  //   url: 'src/assets/tiles.png',
  // });

   this.load.tilemapTiledJSON('map', 'src/assets/map1.json');
}

function create() {
  const gameState = {
    cursors: this.input.keyboard.createCursorKeys(),
    person: this.add.sprite(400, 300, 'tiles', 0),
  };

  // Create a new map
  const map = this.make.tilemap({ key: 'map', tileWidth: 64, tileHeight: 64 });

  // Add a tileset image to the map
  const tileset = map.addTilesetImage('tile1', 'tiles');

  // Create a new layer using the tileset
  const layer = map.createLayer('test', tileset, 0, 0);

  gameState.layer = layer;
  gameState.layer.setCollisionBetween(1, 100);
  gameState.person.setCollideWorldBounds(true);
  this.physics.add.collider(gameState.person, layer);

  this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  this.cameras.main.startFollow(gameState.person, true, 0.08, 0.08);
}

function update() {
  const gameState = {
    cursors: this.input.keyboard.createCursorKeys(),
    person: this.add.sprite(400, 300, 'tiles', 0),
    layer: null,
  };

  if (gameState.cursors.left.isDown) {
    gameState.person.x -= 5;
  }
  if (gameState.cursors.right.isDown) {
    gameState.person.x += 5;
  }
  if (gameState.cursors.up.isDown) {
    gameState.person.y -= 5;
  }
  if (gameState.cursors.down.isDown) {
    gameState.person.y += 5;
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  parent: maze_container,
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(config);