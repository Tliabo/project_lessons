var XY = /** @class */ (function () {
    function XY(pX, pY) {
        if (pX === void 0) { pX = 0; }
        if (pY === void 0) { pY = 0; }
        this.x = pX;
        this.y = pY;
    }
    return XY;
}());
var SnakeEngine = /** @class */ (function () {
    function SnakeEngine(pCanvasId) {
        this.refCanvas = document.getElementById(pCanvasId);
        this.ctx = this.refCanvas.getContext("2d", { alpha: true });
        this.resizeCanvas();
        this.restartGame();
        this.initListeners();
    }
    SnakeEngine.prototype.resizeCanvas = function () {
        this.refCanvas.width = this.refCanvas.clientWidth;
        this.refCanvas.height = this.refCanvas.clientHeight;
    };
    SnakeEngine.prototype.restartGame = function () {
        clearTimeout(this.refST);
        this.snake = [new XY(5, 5), new XY(4, 5), new XY(3, 5)];
        this.snakeDirection = new XY(1, 0);
        this.gameSize = new XY(30, 15);
        this.generateFood();
        this.move();
    };
    SnakeEngine.prototype.generateFood = function () {
        do {
            this.food = new XY(Math.floor(Math.random() * this.gameSize.x), Math.floor(Math.random() * this.gameSize.y));
        } while (this.checkIsPointOnSnake(this.food, true));
    };
    SnakeEngine.prototype.initListeners = function () {
        var _this = this;
        //keydown listener
        window.addEventListener("keydown", function (event) {
            console.log("User Key: " + event.key);
            switch (event.key) {
                case "w":
                case "ArrowUp":
                    _this.snakeDirection.x = 0;
                    _this.snakeDirection.y = -1;
                    break;
                case "a":
                case "ArrowLeft":
                    _this.snakeDirection.x = -1;
                    _this.snakeDirection.y = 0;
                    break;
                case "s":
                case "ArrowDown":
                    _this.snakeDirection.x = 0;
                    _this.snakeDirection.y = 1;
                    break;
                case "d":
                case "ArrowRight":
                    _this.snakeDirection.x = 1;
                    _this.snakeDirection.y = 0;
                    break;
            }
        });
    };
    SnakeEngine.prototype.move = function () {
        var lastXY = new XY(this.snake[this.snake.length - 1].x, this.snake[this.snake.length - 1].y);
        for (var s = this.snake.length - 1; s > 0; s--) {
            this.snake[s].x = this.snake[s - 1].x;
            this.snake[s].y = this.snake[s - 1].y;
        }
        this.snake[0].x += this.snakeDirection.x;
        this.snake[0].y += this.snakeDirection.y;
        //check if snake eat food
        if (this.snake[0].x === this.food.x &&
            this.snake[0].y === this.food.y) {
            this.snake.push(lastXY);
            this.generateFood();
        }
        if (!this.collissionDetection()) {
            this.render();
            this.refST = setTimeout(this.move.bind(this), 2500 / Math.pow(1.5, this.snake.length));
        }
        else {
            //GAME OVER
            this.ctx.strokeStyle = "#FBAE3F";
            this.ctx.fillStyle = "#000000";
            this.ctx.font = "bold 50px Arial";
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "middle";
            this.ctx.fillText("GAME OVER!", this.refCanvas.width / 2, this.refCanvas.height / 2);
            this.ctx.strokeText("GAME OVER!", this.refCanvas.width / 2, this.refCanvas.height / 2);
        }
    };
    SnakeEngine.prototype.collissionDetection = function () {
        var result = false;
        //check collission
        if (this.snake[0].x < 0 ||
            this.snake[0].y < 0 ||
            this.snake[0].x >= this.gameSize.x ||
            this.snake[0].y >= this.gameSize.y ||
            this.checkIsPointOnSnake(this.snake[0], false)) {
            result = true;
        }
        return result;
    };
    SnakeEngine.prototype.checkIsPointOnSnake = function (pObj, pCheckHeadElement) {
        var result = false;
        var i = (pCheckHeadElement) ? 0 : 1;
        for (; i < this.snake.length; i++) {
            if (this.snake[i].x === pObj.x && this.snake[i].y === pObj.y) {
                result = true;
            }
        }
        return result;
    };
    SnakeEngine.prototype.render = function () {
        this.ctx.clearRect(0, 0, this.refCanvas.width, this.refCanvas.height);
        var elementWH = this.refCanvas.width / this.gameSize.x;
        for (var i = 0; i < this.snake.length; i++) {
            if (i === 0) {
                //head-element
                this.ctx.fillStyle = "#ff0000";
            }
            else {
                //body-element
                this.ctx.fillStyle = "#aaaaaa";
            }
            this.ctx.fillRect(this.snake[i].x * elementWH, this.snake[i].y * elementWH, elementWH, elementWH);
        }
        this.ctx.fillStyle = "#00ff00";
        this.ctx.fillRect(this.food.x * elementWH, this.food.y * elementWH, elementWH, elementWH);
    };
    return SnakeEngine;
}());
