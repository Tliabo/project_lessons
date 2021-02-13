const sliders = [];
let tl = null;
let tween = null;
let sliderList = null;
let btnAssemble = null;

function init() {
  let saber = new Saber();
  createSliders(saber);
}

function createSliders(saber) {

  for (const parts in saber.PartsOptions) {

    const hSliderContainer = document.createElement('div');
    hSliderContainer.classList.add('swiper-container');
    hSliderContainer.id = `slider-${parts}`;

    const hSliderWrapper = document.createElement('div');
    hSliderWrapper.className = 'swiper-wrapper';


    const hControls = {
      prev: document.createElement('div'),
      next: document.createElement('div')
    };

    eval(`saber.PartsOptions.${parts}`).forEach(part => {

      let partDiv = document.createElement('div');
      partDiv.className = 'saber_part swiper-slide';

      let partImg = document.createElement('img');
      partImg.src = saber.buildPartsSrc(part);
      partImg.alt = part.name;

      partDiv.appendChild(partImg);
      hSliderWrapper.appendChild(partDiv);
    });

    hControls.prev.classList.add('swiper-button-prev');
    hControls.next.classList.add('swiper-button-next');

    hSliderContainer.appendChild(hSliderWrapper);
    hSliderContainer.appendChild(hControls.prev);
    hSliderContainer.appendChild(hControls.next);
    document.querySelector('.slider-list').appendChild(hSliderContainer);

    const hSwiper = new Swiper(hSliderContainer, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      spaceBetween: 16,
      centeredSlides: true,
      grabCursor: true,

      // Navigation arrows
      navigation: {
        nextEl: hControls.next,
        prevEl: hControls.prev
      }

    });

    sliders.push(hSwiper);
  }
}

function sliderAnimation() {
  tl = gsap.timeline({ duration: 1 });
  tl.pause();
  sliderList = document.querySelector('.slider-list');

  let sliderListHeight = 0;

  for (const child of sliderList.children) {
    sliderListHeight += child.clientHeight;
  }

  // console.log(sliderListHeight);

  tl
    .to(sliderList, {
      height: sliderListHeight
    });

  for (const child of sliderList.children) {
    tl.to(child, {
      duration: 1.5,
      delay: 0.5,
      ease: 'back.out(1.5)',
      x: 0
    });
  }

  btnAssemble = document.querySelector('#btn-assemble');

  tl
    .to(btnAssemble, {
      y: -this.height,
      delay: 1
    })
    .to(btnAssemble, {
      visibility: 'visible',
      opacity: 1,
      y: 0,
      onComplete: function() {
        btnAssemble.addEventListener('click', assembleAnimation);
      }
    });

  tl.play();
}

function assembleAnimation() {
  // console.log('assembling');

  // freeze all parts and separate active parts
  let activeParts = document.querySelectorAll('.swiper-slide-active');
  console.log(activeParts);

  activeParts.forEach(part => {
    tl
  })


  // move out the other parts, left and right side
  // move the assembly parts close together
  // start welding animation
  // open the website (preferred with the parts)
}

window.onload = function() {
  init();

  // timeout because images ned to be loaded
  setTimeout(sliderAnimation, 5000);
};

