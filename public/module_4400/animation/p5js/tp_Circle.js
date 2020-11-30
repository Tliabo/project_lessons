class tp_Circle {
  constructor(x, y, d = 50) {
    this.x = x;
    this.y = y;
    this.d = d;
  }

  display() {
    fill(255, 0, 0);
    circle(this.x, this.y, this.d);
  }

  move(amountX, amountY) {
    this.x += amountX;
    this.y += amountY;
  }

  moveX(amountX) {
    this.move(amountX, 0)
  }

  moveY(amountY) {
    this.move(0, amountY)
  }


}