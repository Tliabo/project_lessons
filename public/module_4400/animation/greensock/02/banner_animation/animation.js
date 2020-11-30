// Timeline for WEB and SAE logos
const webLogo = gsap.timeline();
const saeLogo = gsap.timeline().pause();

// Timeline for text and line
const text_line = gsap.timeline().pause();

// Timeline for ul li
const ul_tl = gsap.timeline().pause();

// Timeline for cta button
const cta_tl = gsap.timeline().pause();

// 1. Animation for Web and SAE logos
webLogo
  .to('.logo-web', {
    scale: 1.5,
    ease: 'linear',
    duration: 0.6,
    yoyo: true,
    repeat: 5
  })
  .set('.logo-web', {
    autoAlpha: 0,
    onComplete: function() {
      saeLogo.play();
    }
  });


saeLogo
  .fromTo('.logo-sae', {
    opacity: 0,
    duration: 0.3,
    left: '-100px'
  }, {
    opacity: 1,
    duration: 0.3,
    left: '50%',
    onComplete: function() {
      text_line.play();
    }
  });

/* 2. Line and Text */
text_line
  .fromTo('.line', {
    autoAlpha: 0,
    duration: 0.3
  }, {
    autoAlpha: 1,
    duration: 0.3,
    repeat: 6
  }, '+=1')
  .to('.text', {
    text: 'Programmiere <br> deine <br> Zukunft',
    duration: 2,
    ease: 'linear'
  }, '-=1.5')
  .to('.text', {
    top: '10%',
    ease: 'elastic.out(1, 0.3)',
    duration: 2,
    onComplete: function() {
      ul_tl.play();
    }
  });

// 3. UL Timeline
ul_tl
  .to('ul li', {
    opacity: 1,
    stagger: {
      amount: 1.8,
      from: 0
    }
  })
  .to('ul li', {
    opacity: 0,
    stagger: {
      amount: 0.5,
      from: 5
    },
    onComplete: function() {
      cta_tl.play();
    }
  }, '+=1');

// cta animation
cta_tl
  .set('.cta', {
    display: 'block'
  })
  .to('.cta', {
    autoAlpha: 1,
    padding: '1.5rem 0',
    duration: 1,
    height: 'auto'
  });

// small animation
document.querySelector('.cta a').addEventListener('click', e => {
  e.preventDefault();
  cta_tl
    .to('.cta', {
      scale: 1.2,
      duration: 0.8
    })
    .to('.cta', {
      scale: 1,
      duration: 0.8,
      onComplete: function() {
        // window.open(e.target.href); // new tab
        window.location.href = e.target.href; // open link in same tab
      }
    });
});
