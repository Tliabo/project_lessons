let stars = [];
let amount = 800;

let speed;

function setup() {
  createCanvas(600, 600);

  frameRate(25);
  for (let i = 0; i < amount; i++) {
    stars.push(new Star());
  }
}

function draw() {
  // define speed using cursor x position
  speed = map(mouseX, 0, width, 0, 20)

  background(0);

  // move drawing to middle of canvas
  translate(width / 2, height / 2);

  // Update the position of stars
  stars.forEach(star => {
    star.update();
  });

}