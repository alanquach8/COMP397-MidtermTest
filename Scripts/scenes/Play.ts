module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private background:createjs.Bitmap;

        private dice1:objects.Dice;
        private dice2:objects.Dice;
        private result1:objects.Label;
        private result2:objects.Label;
        private rollButton:objects.Button;

        private isRolling:boolean;
        private rollAnimation:number;

        private results:number[] = [0, 0];


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

            this.dice1 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 75, 100, false);
            this.dice2 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 375, 100, false);
            this.result1 = new objects.Label("","35px","Consolas", "#FFFF00", 160, 305, false);
            this.result2 = new objects.Label("","35px","Consolas", "#FFFF00", 470, 305, false);
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.rollButton.on("click", () => {
                this.isRolling = true;
                this.rollAnimation = 0;
            });

            this.addChild(this.dice1);
            this.addChild(this.dice2);
            this.addChild(this.result1);
            this.addChild(this.result2);
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

                    this.dice1 = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 75, 100, false);
                    this.dice2 = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 375, 100, false);

                    this.addChild(this.dice1);
                    this.addChild(this.dice2);
                    this.rollAnimation++;
                } else {
                    console.log("HERE");
                    this.results[0] = Math.floor((Math.random() * 6) + 1);
                    this.results[1] = Math.floor((Math.random() * 6) + 1);
                    this.removeChild(this.dice1);
                    this.removeChild(this.dice2);
                    this.dice1 = new objects.Dice(config.Game.ASSETS.getResult(this.results[0].toString()), 75, 100, false);
                    this.dice2 = new objects.Dice(config.Game.ASSETS.getResult(this.results[1].toString()), 375, 100, false);
                    this.addChild(this.dice1);
                    this.addChild(this.dice2);
    
                    this.removeChild(this.result1);
                    this.removeChild(this.result2);
                    this.result1 = new objects.Label(this.results[0].toString(),"35px","Consolas", "#FFFF00", 160, 305, false);
                    this.result2 = new objects.Label(this.results[1].toString(),"35px","Consolas", "#FFFF00", 470, 305, false);
                    this.addChild(this.result1);
                    this.addChild(this.result2);

                    this.isRolling = false;
                }
            }
        }
        
        public Main(): void 
        {


        }

        
    }
}