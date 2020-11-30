function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightblue');

  // Bodyparts
  fill('white');
  circle(width / 2, 210, 80); // top
  circle(width / 2, 150, 60); // middle
  circle(width / 2, 100, 50); // bottom


  // Eyes
  fill('black');
  circle(width / 2 - 10, 95, 5); // left
  circle(width / 2 + 10, 95, 5); // right

  // Hat
  rect(width / 2 - 25, 70, 50, 10);
  rect(width / 2 - 15, 50, 30, 21);

}