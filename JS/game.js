class Game {
    constructor() {

    }
    getState() {
        var gsref = database.ref('gameState')
        gsref.on("value", function(data){
           gameState = data.val()
        })
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        })
    }
   async start() {
        if(gameState === 0) {
            player = new Player()
            var pcref = await database.ref('playerCount').once("value")
            if(pcref.exists()) {
                playerCount = pcref.val()
                player.getCount()
            }
            form = new Form()
            form.display()
        }
        car1 = createSprite(100,200,40,40)
        car2 = createSprite(300,200,40,40)
        car3 = createSprite(500,200,40,40)
        car4 = createSprite(700,200,40,40)
        cars = [car1,car2,car3,car4]
        
    }
    play() {
        form.hide()
        textSize(30)
        text("Game Started",120,100)
        Player.getPlayerInfo()
        drawSprites()
        if(allPlayers !== undefined) {
            //if all players are defined then match will start
                var index = 0
                var x = 0
                var y;
            for(var plr in allPlayers){
                //index is used for to identifying current player
                   index = index+1
                   //x is used for to distance the players
                   x = x+200
                   y = displayHeight-allPlayers[plr].distance
                   cars[index-1].x = x
                   cars[index-1].y = y
               if(index === player.index) {
                   //to find the current player
                     cars[index-1].shapeColor = "red"
                //game camera 
                     camera.position.x = displayWidth/2;
                     camera.position.y = cars[index-1].y;
               }
               

            }
        }
        if(keyIsDown(UP_ARROW)&& player.index !== null) {
                player.distance+=50
                player.update()
        }
    }
}