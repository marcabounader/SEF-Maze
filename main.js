import Phaser from 'phaser';
import levelOne from './levelOne.js';
import levelTwo from './levelTwo.js';
import preLoader from './preLoader.js';
// import levelThree from './levelThree.js';

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
    scene: [preLoader,levelOne,levelTwo]
};

const game = new Phaser.Game(config);