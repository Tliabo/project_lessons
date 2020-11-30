// ScrollMagic Animation

// Initialize Controller
let controller = new ScrollMagic.Controller();

// Not for mobile
if (document.documentElement.clientWidth > 790) {

  // 1. Parallax Background

  new ScrollMagic.Scene({
    triggerElement: '#parallax',
    triggerHook: 'onEnter'
  })
    .duration('200%')
    .setTween('#parallax', {
      backgroundPosition: '50% 100%',
      ease: Linear.easeNone
    })
    .addIndicators()
    .addTo(controller);
}

// 2. slide in
new ScrollMagic.Scene({
  triggerElement: '#slideIn',
  triggerHook: 'onLeave'
})
  .setPin('#slideIn')
  // .addIndicators()
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#slideIn2',
  triggerHook: 'onLeave'
})
  .setPin('#slideIn2')
  .addTo(controller)


// 3. slidein2
const fromLeftTl = gsap.timeline();
const fromBottomTl = gsap.timeline();
const fromNowhereTl = gsap.timeline();

fromLeftTl
  .from('.left', {
    x: -500,
    duration: 1
  });

fromBottomTl
  .from('.bottom', {
    y: 500,
    duration: 1
  });

fromNowhereTl
  .from('.opacity', {
    opacity: 0,
    duration: 1
  });

// 3. left opacity bottom
new ScrollMagic.Scene({
  triggerElement: '#slideIn2'
  // triggerHook: 'onLeave'
})
  .setTween(fromLeftTl)
  .duration(400)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#slideIn2'
  // triggerHook: 'onLeave'
})
  .setTween(fromNowhereTl)
  .duration(400)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '#slideIn2',
  // triggerHook: 'onLeave'
  offset: 300
})
  .setTween(fromBottomTl)
  .duration(400)
  .addTo(controller);