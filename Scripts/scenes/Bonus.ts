module scenes
{
    export class Bonus extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private background:createjs.Bitmap;

        private dice1:objects.Dice;
        private dice2:objects.Dice;
        private dice3:objects.Dice;
        private dice4:objects.Dice;

        private result:objects.Label;
        private rollButton:objects.Button;

        private isRolling:boolean;
        private rollAnimation:number;

        private results:number[] = [0, 0, 0, 0];


        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            this.background = new createjs.Bitmap("./Assets/images/dicebackground.png");
            this.addChild(this.background);

            this.dice1 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 0, 0, false);
            this.dice2 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 200, 0, false);
            this.dice3 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 400, 0, false);
            this.dice4 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 0, 200, false);
            this.result = new objects.Label("Result: ","35px","Consolas", "#FFFF00", 200, 305, false);
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.rollButton.on("click", () => {
                this.isRolling = true;
                this.rollAnimation = 0;
            });

            this.addChild(this.dice1);
            this.addChild(this.dice2);
            this.addChild(this.dice3);
            this.addChild(this.dice4);
            this.addChild(this.result);
            this.addChild(this.rollButton);

            this.isRolling = false;
            this.rollAnimation = 0;

            
             this.Main();
        }        
        
        public Update(): void 
        {
            if(this.isRolling) {
                if(this.rollAnimation < 25) {
                    this.removeChild(this.dice1);
                    this.removeChild(this.dice2);
                    this.removeChild(this.dice3);
                    this.removeChild(this.dice4);

                    this.dice1 = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 0, 0, false);
                    this.dice2 = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 200, 0, false);
                    this.dice3 = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 400, 0, false);
                    this.dice4 = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 0, 200, false);

                    this.addChild(this.dice1);
                    this.addChild(this.dice2);
                    this.addChild(this.dice3);
                    this.addChild(this.dice4);
                    this.rollAnimation++;
                } else {
                    console.log("HERE");
                    this.results[0] = Math.floor((Math.random() * 6) + 1);
                    this.results[1] = Math.floor((Math.random() * 6) + 1);
                    this.results[2] = Math.floor((Math.random() * 6) + 1);
                    this.results[3] = Math.floor((Math.random() * 6) + 1);
                    this.removeChild(this.dice1);
                    this.removeChild(this.dice2);
                    this.removeChild(this.dice3);
                    this.removeChild(this.dice4);
                    this.dice1 = new objects.Dice(config.Game.ASSETS.getResult(this.results[0].toString()), 0, 0, false);
                    this.dice2 = new objects.Dice(config.Game.ASSETS.getResult(this.results[1].toString()), 200, 0, false);
                    this.dice3 = new objects.Dice(config.Game.ASSETS.getResult(this.results[2].toString()), 400, 0, false);
                    this.dice4 = new objects.Dice(config.Game.ASSETS.getResult(this.results[3].toString()), 0, 200, false);
                    this.addChild(this.dice1);
                    this.addChild(this.dice2);
                    this.addChild(this.dice3);
                    this.addChild(this.dice4);
    
                    this.removeChild(this.result);
                    let result = this.results[0];
                    let min = this.results[0];
                    for(let i = 1; i<4; i++) {
                        result += this.results[i];
                        if (min > this.results[i]) {
                            min = this.results[i];
                        }
                    }
                    result -= min;
                    this.result = new objects.Label("Result: " + result,"35px","Consolas", "#FFFF00", 200, 305, false);
                    this.addChild(this.result);

                    this.isRolling = false;
                }
            }
        }
        
        public Main(): void 
        {


        }

        
    }
}