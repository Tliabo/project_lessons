let dot;

function setup() {
  createCanvas(600, 600);
  dot = new tp_Circle(width / 2, height / 2);
}

function draw() {
  background('#222');
  dot.display();
}

function keyPressed() {

  switch (keyCode) {
    case LEFT_ARROW:
      dot.moveX(-10);
      break;
    case RIGHT_ARROW:
      dot.moveX(10);
      break;
    case UP_ARROW:
      dot.moveY(-10);
      break;
    case DOWN_ARROW:
      dot.moveY(10);
      break;
  }

}