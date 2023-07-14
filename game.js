import Phaser from 'phaser'

function create() {
    // Change "Codey's Adventures\n  in Code World" to the name of your game
    this.add.text(50, 100, "Our Maze!", { font: "40px Times New Roman", fill: "#ffa0d0"});
  
    // Change "by Codecademy" to your name!
    this.add.text(50, 300, "by Codecademy", { font: "20px Times New Roman", fill: "#ffa0d0"});
  }
  
  const config = {
      type: Phaser.AUTO,
      width: 1000,
      height: 800,
      backgroundColor: "#5f2a55",
      scene: {
      create
      }
  };
  
  const game = new Phaser.Game(config);
  