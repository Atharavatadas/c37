var gameState = 0;
var playerCount,database;
var form,game,player,allPlayers;
var car1,car2,car3,car4,cars;


function setup(){
  database = firebase.database();
  createCanvas(displayWidth - 100,displayHeight-150);
  game = new Game()
  game.getState()
  game.start()
 
}

function draw(){
  background("white");
  if(playerCount === 4) {
    game.update(1)
  }
  if(gameState === 1) {
      clear ()
      game.play()
  }
}