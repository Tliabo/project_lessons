class Star {

  constructor() {
    let minSize = 10;
    let maxSize = 50;

    this.size = this.getRandomInt(minSize, maxSize)
    this.xPos = this.getRandomInt(this.size, window.innerWidth);
    this.yPos = this.getRandomInt(this.size, window.innerHeight);
  }

  creat() {
    const container = document.querySelector('body');
    const starElement = document.createElement('div');
    starElement.classList.add('star');
    starElement.style.width = this.size + 'px';
    starElement.style.height = this.size + 'px';
    starElement.style.left = this.xPos + 'px';
    starElement.style.top = this.yPos + 'px';
    container.appendChild(starElement);
  }

  getRandomInt(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

}

let stars = [];

for (let i = 0; i < 500; i++) {
  stars.push(new Star());
  stars[i].creat()
}