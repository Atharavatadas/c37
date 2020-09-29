class Form {
    constructor() {
        this.input = createInput("Name")
        this.button = createButton("Play")
        this.greeting = createElement('h3')
    }
    hide() {
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display() {
        var title = createElement('h2')
        title.html("CAR RACING GAME")
        title.position(displayWidth/2-80,0)
        this.input.position(displayWidth/2-100,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2+20)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount+=1;
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Welcome " + player.name)
            this.greeting.postion(displayWidth/2-80,displayHeight/2-60)
        })
    }
}
