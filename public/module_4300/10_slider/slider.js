$(function () {
  // 0: wait for DOM to be loaded

  // 1: Define Global variables

  // Control Elements
  let prevBtn = $('a.prev'),
    nextBtn = $('a.next'),
    checkbox = $('#toggle_autoplay');

  // Slider Elements
  let slider = $('.slider'),
    sliderUl = slider.children('.slides'),
    slides = sliderUl.children('.slide'),
    slideCount = slides.length,
    slideWidth = slides.width(),
    slideHeight = slides.height(),
    sliderUlWidth = slideCount * slideWidth,
    sliderInterval;

  // Shrink the slider, making it as big as a slide
  slider.css({
    width: slideWidth,
    height: slideHeight
  })

  // fit the row of slides
  sliderUl.css({
    width: sliderUlWidth,
    marginLeft: - slideWidth
  })

  // take the last slide and prepend to the row of slides
  slides.last().prependTo(sliderUl)

  // 2: Events
  prevBtn.on('click', moveLeft)
  nextBtn.on('click', moveRight)
  checkbox.on('click', onSliderToggle)

  // 3: Functions

  function moveLeft(e) {
    e.preventDefault()

    // animate slide
    // has 3 parameters
    // 1. { } -> properties to be animated
    // 2. duration in ms
    // 3. callback function (runs after animation is complete)

    sliderUl.animate({
      left: + slideWidth,
    }, 200,
      function () {
      // we take the last li in the ul and prepend it to the ul
        $(this).children('.slide').last().prependTo(sliderUl)
        // we reset the left value which we changed in the animation
        $(this).css('left', '')
      })
  }

  function moveRight(e) {

    if (e) {
      e.preventDefault();
    }

    sliderUl.animate({
        left: - slideWidth,
      }, 200,
      function () {
        // we take the first li in the ul and append it to the ul
        $(this).children('.slide').first().appendTo(sliderUl)
        // we reset the left value which we changed in the animation
        $(this).css('left', '')
      })

  }

  function onSliderToggle(e) {
    // check if checkbox is checked
    let check = $(e.currentTarget)

    if (check.is(':checked')) {
      sliderInterval = setInterval(moveRight, 3000)
    } else {
      // stop interval
      clearInterval(sliderInterval);
    }

  }


})