import Phaser from 'phaser';
import preLoader from './preLoader.js';
import Game from './game.js';

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
    scene: [preLoader,Game]
};

const game = new Phaser.Game(config);