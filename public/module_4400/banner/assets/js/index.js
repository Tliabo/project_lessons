const sliders = [];
let tl = null;
let sliderList = null;
let btnAssemble = null;
let sparkArr = null;

function init() {
  let saber = new Saber();
  sliderList = document.querySelector('.slider-list');
  sparkArr = document.querySelectorAll('canvas.spark');

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

  let sliderListHeight = 0;

  // calculate container height (different parts has different sizes)
  for (const child of sliderList.children) {
    sliderListHeight += child.clientHeight;
  }
  // console.log(sliderListHeight);

  tl.to(sliderList, {
    height: sliderListHeight
  });

  for (const child of sliderList.children) {
    tl.to(child, {
      duration: 1,
      delay: 0.25,
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
        tl.pause();
        btnAssemble.addEventListener('click', assembleAnimation);
      }
    });

  tl.play();
}

function assembleAnimation() {

  sparkArr.forEach(canvas => {
    canvas.style.visibility = 'visible';
  });

  // prevent sliders to be abel to slide
  sliders.forEach(slider => {
    slider.allowTouchMove = false;
  });

  document.querySelectorAll('.swiper-button-next').forEach(btn => {
    btn.remove();
  });
  document.querySelectorAll('.swiper-button-prev').forEach(btn => {
    btn.remove();
  });

  document.querySelectorAll('.saber_part').forEach(part => {
    if (!part.classList.contains('swiper-slide-active')) {
      gsap.to(part, { height: 0, opacity: 0, visibility: 0, duration: 2.5 });
    }
  });

  // start welding animation
  sparkArr.forEach(canvas => {
    let anim = new AnimSpark(canvas);
    const LENGTHCONST = 500 / canvas.clientWidth;
    anim.config.sparkLength = 50 / LENGTHCONST;
    anim.config.speed.increment = 0.01;
    canvas.visibility = true;

    tl
      .to(canvas, {
        onComplete: function() {
          anim.autoPlay = false;
        }
      })
      .to(canvas, {
        delay: 2, onComplete: function() {
          canvas.remove();
          sliderList.style.display = 'flex';
          sliderList.style.flexDirection = 'column';
          sliderList.style.justifyContent = 'center';
        }
      });
    anim.autoPlay = true;
    tl.resume();
  });

  // move the assembly parts close together
  sliders.forEach(slider => {
    gsap.to(slider.$el, {
      marginTop: -10
    });
  });

  // open the website (preferred with the parts but its too much for now)
  tl.to(window, {
    delay: 2,
    onComplete: function() {
      window.open('https://saberforge.com/', '_blank');
    }
  });
}

window.onload = function() {
  init();

  // timeout because images ned to be loaded first (not best solution)
  setTimeout(sliderAnimation, 5000);
};
