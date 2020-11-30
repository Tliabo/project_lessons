/* This is our snake class
 * a p5 js class
 */
function Snake() {

  //Define global variables
  // Starting position

  this.x = 20;
  this.y = 20;

  // Vertical and Horizontal speed
  this.xMoveDir = 1;
  this.yMoveDir = 0;

  // Snake length
  this.tailLength = 0;

  // Position of body / body
  this.tail = [];

  // Snake Eat
  this.eat = function(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);

    if (d < 1) {
      // snake ate a food
      this.tailLength++;
      return true;
    } else {
      return false;
    }
  };

  // Snake Move Direction
  this.move = function(xDir, yDir) {
    this.xMoveDir = xDir;
    this.yMoveDir = yDir;
  };

  this.moveX = function(xDir) {
    this.move(xDir, 0);
  };

  this.moveY = function(yDir) {
    this.move(0, yDir);
  };

  // Snake Death
  this.death = function() {
    // Head touches Tail
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('Game Over');
        this.tailLength = 0;
        this.tail = [];
      }
    }

    // Head touches Edge
    if (this.x <= 0 || this.x + scl >= width || this.y <= 0 || this.y + scl >= height) {
      console.log('You ded');
      this.tailLength = 0;
      this.tail = [];
    }

  };

  // Snake Update
  this.update = function() {
    // console.log('Length:', this.tailLength);

    // update tail
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    // update length
    if (this.tailLength >= 1) {
      this.tail[this.tailLength - 1] = createVector(this.x, this.y);
    }

    this.x += this.xMoveDir * scl;
    this.y += this.yMoveDir * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  };

  // Snake Show
  this.show = function() {
    fill(255);

    // for loop later DONT FORGET
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }

    rect(this.x, this.y, scl, scl);
  };

  // 2. FUNCTION FOR DISPLAYING SCORE!




}