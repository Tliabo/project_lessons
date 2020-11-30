const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;

const numberOfCols = 25;
const squareSize = Math.floor(pageWidth / numberOfCols);
const numberOfRows = Math.floor(pageHeight / squareSize);

const numberOfSquares = numberOfCols * numberOfRows;


for (let i = 0; i < numberOfSquares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px;`);
  document.querySelector('.container').appendChild(square);
}

// Staggering Elements with GSAP
gsap.to('.square', {
  opacity: 0,
  scale: 0.1,
  background: 'violet',
  borderRadius: '50%',
  y: 33,
  ease: 'ease.inOut',
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
  stagger: {
    amount: 2,
    from: 'center',
    grid: 'auto'
  }
});