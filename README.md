# SEF-Maze

## resources:
* [setting up phaser game](https://flaviocopes.com/phaser-setup/#:~:text=Let%E2%80%99s%20install%20phaser%20in%20a%20folder%20using%20npm%3A,import%20Phaser%20from%20%27phaser%27%20new%20Phaser.Game%28%29%20Now%20run)
* [phaser docs](https://photonstorm.github.io/phaser3-docs/)
* [phaser tutorial](https://www.codecademy.com/learn/learn-phaser)
* [parallax](https://blog.logrocket.com/create-parallax-scrolling-css/#:~:text=Parallax%20scrolling%20is%20a%20computer,Video%20Player)
* [parallax](https://www.w3schools.com/howto/howto_css_parallax.asp)

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
* install node js from this site: [node js 18.16.1](https://nodejs.org/en/download)
* npm install -g parcel-bundler(install module wrapper globally to use for every project)
* npm install -g browser-sync(to install http server for this project)
* npm install(install packages and dependencies found in package-lock.json)

## Run the game
* Set-ExecutionPolicy -ExecutionPolicy Bypass(to remove powershell restrictions)
* parcel watch game.js(create game.js and watch it for changes instead of stopping server each time we make changes to the game)
* browser-sync start --server --files "." (to start the server) or install Live Server extension. 

## Tasks
* Update the pages and add some styling(loading the game and some animation and fix colors and change background maybe): Rayan - Chehadeh
* building the maze game: Zeina - Faissal - Marc
