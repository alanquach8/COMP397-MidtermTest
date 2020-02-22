"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Bonus = /** @class */ (function (_super) {
        __extends(Bonus, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Bonus() {
            var _this = _super.call(this) || this;
            _this.results = [0, 0, 0, 0];
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Bonus.prototype.Start = function () {
            var _this = this;
            this.background = new createjs.Bitmap("./Assets/images/dicebackground.png");
            this.addChild(this.background);
            this.dice1 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 0, 0, false);
            this.dice2 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 200, 0, false);
            this.dice3 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 400, 0, false);
            this.dice4 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 0, 200, false);
            this.result = new objects.Label("Result: ", "35px", "Consolas", "#FFFF00", 200, 305, false);
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.rollButton.on("click", function () {
                _this.isRolling = true;
                _this.rollAnimation = 0;
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
        };
        Bonus.prototype.Update = function () {
            if (this.isRolling) {
                if (this.rollAnimation < 25) {
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
                }
                else {
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
                    var result = this.results[0];
                    var min = this.results[0];
                    for (var i = 1; i < 4; i++) {
                        result += this.results[i];
                        if (min > this.results[i]) {
                            min = this.results[i];
                        }
                    }
                    result -= min;
                    this.result = new objects.Label("Result: " + result, "35px", "Consolas", "#FFFF00", 200, 305, false);
                    this.addChild(this.result);
                    this.isRolling = false;
                }
            }
        };
        Bonus.prototype.Main = function () {
        };
        return Bonus;
    }(objects.Scene));
    scenes.Bonus = Bonus;
})(scenes || (scenes = {}));
//# sourceMappingURL=Bonus.js.map