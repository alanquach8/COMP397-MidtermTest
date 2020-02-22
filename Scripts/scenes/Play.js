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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.results = [0, 0];
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            var _this = this;
            this.dice1 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 75, 100, false);
            this.dice2 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 375, 100, false);
            this.result1 = new objects.Label("", "35px", "Consolas", "#000000", 160, 305, false);
            this.result2 = new objects.Label("", "35px", "Consolas", "#000000", 470, 305, false);
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.rollButton.on("click", function () {
                _this.isRolling = true;
                _this.rollAnimation = 0;
            });
            this.addChild(this.dice1);
            this.addChild(this.dice2);
            this.addChild(this.result1);
            this.addChild(this.result2);
            this.addChild(this.rollButton);
            this.isRolling = false;
            this.rollAnimation = 0;
            this.Main();
        };
        Play.prototype.Update = function () {
            if (this.isRolling) {
                if (this.rollAnimation < 25) {
                    this.removeChild(this.dice1);
                    this.removeChild(this.dice2);
                    this.dice1 = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 75, 100, false);
                    this.dice2 = new objects.Dice(config.Game.ASSETS.getResult(Math.floor((Math.random() * 6) + 1).toString()), 375, 100, false);
                    this.addChild(this.dice1);
                    this.addChild(this.dice2);
                    this.rollAnimation++;
                }
                else {
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
                    this.result1 = new objects.Label(this.results[0].toString(), "35px", "Consolas", "#000000", 160, 305, false);
                    this.result2 = new objects.Label(this.results[1].toString(), "35px", "Consolas", "#000000", 470, 305, false);
                    this.addChild(this.result1);
                    this.addChild(this.result2);
                    this.isRolling = false;
                }
            }
        };
        Play.prototype.Main = function () {
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map