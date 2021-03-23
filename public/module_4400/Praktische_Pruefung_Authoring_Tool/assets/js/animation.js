const tl = gsap.timeline();
const tagline_tl = gsap.timeline();
tagline_tl.pause();

const cta = document.querySelector('.cta');

const textStart = document.querySelectorAll('.text-start');

tl
  .fromTo(textStart[0], {
    visibility: 'hidden',
    opacity: 0,
    fontSize: '10em'
  }, {
    visibility: 'visible',
    opacity: 1,
    fontSize: '2em',
    ease: 'expo',
    duration: 3
  })
  .to(textStart[0], {
    fontSize: 0
  })
  .fromTo(textStart[1], {
    fontSize: 0
  }, {
    visibility: 'visible',
    fontSize: '2em'
  })
  .to(textStart[1], {
    opacity: 0,
    duration: 2
  })
  .fromTo(textStart[2], {
    // roll in
  }, {
    opacity: 1,
    duration: 2
  })
  .to(textStart[2], {
    visibility: 'visible',
    opacity: 0,
    fontSize: 0,
    left: 0,
    duration: 2
  })
  .fromTo(document.querySelector('.saelogo'), {
    top: '50%',
    left: '50%'
  }, {
    visibility: 'visible',
    transform: 'translate(0, 0)',
    top: '2rem',
    left: '2rem',
    height: '40%',
    ease: 'expo',
    duration: 2,
    onComplete: function() {
      tagline_tl.play();
    }
  });

// mit tween möglich tagline
tagline_tl
  .fromTo(document.querySelector('#vfx_logo'), {}, {})
  .fromTo(document.querySelector('#audio_logo'), {}, {})
  .fromTo(document.querySelector('#film_logo'), {}, {})
  .fromTo(document.querySelector('#games_logo'), {}, {})
  .fromTo(document.querySelector('#web_logo'), {}, {})
  .fromTo(document.querySelector('#vfx_text'), {}, {})
  .fromTo(document.querySelector('#audio_text'), {}, {})
  .fromTo(document.querySelector('#film_text'), {}, {})
  .fromTo(document.querySelector('#games_text'), {}, {})
  .fromTo(document.querySelector('#web_text'), {});

cta.addEventListener('click', e => {
  window.open('https://www.sae.edu/che/de/', '_blank')
})