function Star() {

  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.size = 10;
  this.lz = this.z;

  // draw the stars
  this.show = function() {
    fill(255);
    noStroke();

    // Map x and y / z to 0 - width
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    circle(sx, sy, this.size);

    // generate line positions
    let lx = map(this.x / this.lz, 0, 1, 0, width);
    let ly = map(this.y / this.lz, 0, 1, 0, height);

    this.lz = this.z;
    stroke(255);
    line(sx, sy, lx, ly);
  };

  this.update = function() {

    // Define speed of stars
    this.z -= speed;

    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.lz = this.z;
    }

    this.show();
  };

}