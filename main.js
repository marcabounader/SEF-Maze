import Phaser from 'phaser';
import levelOne from './levelOne.js';

let maze_container=document.getElementById('maze-subcontainer');

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
    scene: [levelOne,levelTwo,Game]
};

const game = new Phaser.Game(config);