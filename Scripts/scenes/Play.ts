module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private dice1:objects.Dice;
        private dice2:objects.Dice;
        private result1:objects.Label;
        private result2:objects.Label;
        private rollButton:objects.Button;


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
            this.dice1 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 75, 100, false);
            this.dice2 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 375, 100, false);
            this.result1 = new objects.Label("R1: ","35px","Consolas", "#000000", 90, 300, false);
            this.result2 = new objects.Label("R2: ","35px","Consolas", "#000000", 400, 300, false);
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 0, 0, false);

            this.addChild(this.dice1);
            this.addChild(this.dice2);
            this.addChild(this.result1);
            this.addChild(this.result2);
            this.addChild(this.rollButton);

            
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {


        }

        
    }
}