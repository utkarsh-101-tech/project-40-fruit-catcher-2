class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.fullScreen = createElement('h6');
        this.title = createElement('h2');
        this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.fullScreen.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(displayWidth / 2 - 300, displayHeight / 5 - 200);
        this.title.style('font-size', '120px');
        this.title.style('color', 'skyblue');

        this.input.position(displayWidth / 2 - 400, displayHeight / 2 - 100);
        this.input.style('width', '300px');
        this.input.style('height', '30px');
        this.input.style('background', 'lavender');

        this.button.position(displayWidth / 2 - 400, displayHeight / 2 + 100);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');

        this.reset.position(displayWidth - 200, displayHeight / 7 - 130);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightblue');

        this.fullScreen.html("NOTE - Press f11 for fullscreen");
        this.fullScreen.position(displayWidth / 2 - 400, displayHeight - 600);
        this.fullScreen.style('color', 'white');
        this.fullScreen.style('font-size', '30px');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.fullScreen.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth / 2 - 400, displayHeight - 600);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '90px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            location.reload();
        });

    }
}