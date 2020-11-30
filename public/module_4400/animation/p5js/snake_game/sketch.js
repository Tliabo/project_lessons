// SCL is grid system / snake column
let scl = 20;

let snake;
let food;

function setup() {
  createCanvas(600, 600);

  // Limit framerate
  frameRate(10);
  snake = new Snake();
  pickLocation();
}

function draw() {
  background('#222');

  // if the snake eats food
  if (snake.eat(food)) {
    // Draw a new fruit
    pickLocation();
  }

  snake.death()

  // Update the position of snake
  snake.update();

  // Show / draw the snake
  snake.show();

  fill(255, 0, 0);
  rect(food.x, food.y, scl, scl);
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);

  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl)
}

function keyPressed() {

  if (keyCode === LEFT_ARROW && snake.xMoveDir !== 1) {
    snake.moveX(-1);
  } else if (keyCode === RIGHT_ARROW && snake.xMoveDir !== -1) {
    snake.moveX(1);
  } else if (keyCode === UP_ARROW && snake.yMoveDir !== 1) {
    snake.moveY(-1);
  } else if (keyCode === DOWN_ARROW && snake.yMoveDir !== -1) {
    snake.moveY(1);
  }

}

// 3. click fnction to create new food
function mouseClicked() {
  snake.length++;
}