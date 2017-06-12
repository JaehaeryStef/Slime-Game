var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Playerone = (function () {
    function Playerone(left, right, up, down) {
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("playerone");
        document.body.appendChild(this.div);
        this.upkey = up;
        this.downkey = down;
        this.leftkey = left;
        this.rightkey = right;
        this.x = 500;
        this.y = 800;
        this.width = 180;
        this.height = 145;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Playerone.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
            case this.leftkey:
                this.leftSpeed = 5;
                break;
            case this.rightkey:
                this.rightSpeed = 5;
                break;
        }
    };
    Playerone.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
            case this.leftkey:
                this.leftSpeed = 0;
                break;
            case this.rightkey:
                this.rightSpeed = 0;
                break;
        }
    };
    Playerone.prototype.move = function () {
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(-1)";
    };
    Playerone.prototype.showHit = function (hit) {
        if (hit) {
            console.log("Hit");
        }
        else {
            this.div.style.borderColor = "Not hit";
        }
    };
    return Playerone;
}());
var Game = (function () {
    function Game() {
        this.score = 0;
        this.time = 120;
        this.timeCount = 0;
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
        this.timeElement = document.createElement("time");
        document.body.appendChild(this.timeElement);
        this.numelements = 0;
        this.createElements();
        this.playerone = new Playerone(65, 68, 87, 83);
        this.utils = new Utils();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.createElements = function () {
        this.snotspawn = new Snotspawn(this);
    };
    Game.prototype.gameLoop = function () {
        this.scoreElement.innerHTML = "Score: " + this.score;
        this.timeCount++;
        if (this.timeCount >= 60) {
            this.time--;
            this.timeCount = 0;
        }
        this.timeElement.innerHTML = "Time: " + this.time;
        this.playerone.move();
        var hit = this.utils.objectsCollide(this.playerone, this.snotspawn);
        this.playerone.showHit(hit);
        this.snotspawn.showHit(hit);
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.createSnot = function () {
        console.log("Create Snot");
        this.snotspawn = new Snotspawn(this);
    };
    return Game;
}());
var Gameobjects = (function () {
    function Gameobjects(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    return Gameobjects;
}());
window.addEventListener("load", function () {
    new Game();
});
var Snotspawn = (function (_super) {
    __extends(Snotspawn, _super);
    function Snotspawn(g) {
        var _this = _super.call(this, (Math.random() * window.innerHeight), (Math.random() * window.innerHeight), 100, 100) || this;
        _this.game = g;
        _this.div = document.createElement("snotspawn");
        document.body.appendChild(_this.div);
        _this.div.style.left = _this.x + "px";
        _this.div.style.top = _this.y + "px";
        var color = Math.random() * 360;
        _this.div.style.webkitFilter = "hue-rotate(" + color + "deg)";
        _this.div.style.filter = "hue-rotate(" + color + "deg)";
        return _this;
    }
    Snotspawn.prototype.showHit = function (hit) {
        if (hit) {
            this.div.remove();
            this.game.createSnot();
        }
        else {
        }
    };
    return Snotspawn;
}(Gameobjects));
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.objectsCollide = function (c1, c2) {
        return (c1.x < c2.x + c2.width &&
            c1.x + c1.width > c2.x &&
            c1.y < c2.y + c2.height &&
            c1.height + c1.y > c2.y);
    };
    return Utils;
}());
//# sourceMappingURL=main.js.map