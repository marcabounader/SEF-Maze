import Phaser from 'phaser';
import preLoader from './src/scripts/maze_levels/preLoader.js';
import levelOne from './src/scripts/maze_levels/levelOne.js';
import levelTwo from './src/scripts/maze_levels/levelTwo.js';
import levelFour from './src/scripts/maze_levels/levelFour.js';
import levelThree from './src/scripts/maze_levels/levelThree.js';

let maze_container=document.getElementById('maze-subcontainer');

// export default new Phaser.levelOne({
//     type: Phaser.AUTO,
//     width: 1200,
//     height: 850,
//     scene: levelOne
//     })
const config = {
	type: Phaser.AUTO,
	width: 1200,
	height: 850,
	backgroundColor: "#5f2a55",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: maze_container,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: [preLoader,levelOne,levelTwo,levelThree,levelFour]
};

const game = new Phaser.Game(config);