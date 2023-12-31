# SEF-Maze

## resources:
* [setting up phaser game](https://flaviocopes.com/phaser-setup/#:~:text=Let%E2%80%99s%20install%20phaser%20in%20a%20folder%20using%20npm%3A,import%20Phaser%20from%20%27phaser%27%20new%20Phaser.Game%28%29%20Now%20run)
* [phaser docs](https://photonstorm.github.io/phaser3-docs/)
* [tile/sprites](https://github.com/photonstorm/phaser3-examples/tree/master/public/assets/)
* [tile measure](http://www.spritecow.com/)
* [texture wrapper](http://free-tex-packer.com/)
* [phaser tutorial](https://www.codecademy.com/learn/learn-phaser)
* [parallax](https://blog.logrocket.com/create-parallax-scrolling-css/#:~:text=Parallax%20scrolling%20is%20a%20computer,Video%20Player)
* [parallax](https://www.w3schools.com/howto/howto_css_parallax.asp)
* [tile map editor](https://thorbjorn.itch.io/tiled)
* [using tile editor](https://medium.com/@Shakuro/phaser-js-tutorial-creating-and-loading-a-map-enabling-collisions-3ca33917a902)

## Requirements:

* the Landing page - Parallax scrolling
* The Landing page - button that redirects users to the Maze Game.
* Phaser, a JavaScript library
* scoring system and consist of at least two levels (more levels, more points)

## steps to install the phaser framework(already done but this is for knowledge)

* enter into directory
* enter these commands:
* npm init -y (initiates the project and npm is package installer for node.js)
* npm install phaser (adds module to package and downloads it)

## Install packages to run the game
* install npm from this site: [node js 18.16.1](https://nodejs.org/en/download)
* npm install -g parcel-bundler(install module wrapper globally to use for every project)
* npm install -g browser-sync(to install http server for this project)
* npm install(install packages and dependencies found in package-lock.json)

## Run the game
* parcel watch main.js(create game.js and watch it for changes instead of stopping server each time we make changes to the game)
* browser-sync start --server --files "." (to start the server)

