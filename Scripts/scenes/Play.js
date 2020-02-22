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
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this.dice1 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 75, 100, false);
            this.dice2 = new objects.Dice(config.Game.ASSETS.getResult("blank"), 375, 100, false);
            this.result1 = new objects.Label("R1: ", "35px", "Consolas", "#000000", 90, 300, false);
            this.result2 = new objects.Label("R2: ", "35px", "Consolas", "#000000", 400, 300, false);
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 0, 0, false);
            this.addChild(this.dice1);
            this.addChild(this.dice2);
            this.addChild(this.result1);
            this.addChild(this.result2);
            this.addChild(this.rollButton);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map