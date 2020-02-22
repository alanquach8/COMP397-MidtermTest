module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;

        private _bonusButton: objects.Button;


        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void 
        {
             //instantiate a new Text object
            this._welcomeLabel = new objects.Label("COMP397 - Midterm Test", "40px", "Consolas", "#000000", 320, 180, true);
            // buttons
             this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 430, true);
             this._bonusButton = new objects.Button(config.Game.ASSETS.getResult("bonusButton"), 320, 300, true);


            this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {

       
            this.addChild(this._welcomeLabel);

        
            this.addChild(this._startButton);
            this.addChild(this._bonusButton);

            this._startButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });
            this._bonusButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.BONUS;
            });

        }

        
    }
}