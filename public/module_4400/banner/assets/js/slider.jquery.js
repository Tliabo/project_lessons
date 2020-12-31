$(function() {
  // 0: wait for DOM to be loaded

  // 1: Define Global variables

  // Slider Elements
  let slider = $('.slider'),
    sliderItems = slider.children('.slider-items'),
    sliderItem = sliderItems.children('.slider-item'),
    itemsCount = sliderItem.length,
    slideWidth = sliderItem.width(),
    slideHeight = sliderItem.height(),
    sliderUlWidth = itemsCount * slideWidth;

  // Control Elements
  let prevBtn = slider.children('.slider-control.prev'),
    nextBtn = slider.children('.slider-control.next');

  // Shrink the slider, making it as big as a slide
  slider.css({
    // width: slideWidth,
    // height: slideHeight
  });

  // fit the row of slides
  sliderItems.css({
    // width: sliderUlWidth,
    // marginLeft: -slideWidth
  });

  // take the last slide and prepend to the row of slides
  sliderItem.last().prependTo(sliderItems);

  // 2: Events
  prevBtn.on('click', slidePrev);
  nextBtn.on('click', slideNext);

  // 3: Functions
  function slideNext(e) {
    e.preventDefault();

    // animate slide
    // has 3 parameters
    // 1. { } -> properties to be animated
    // 2. duration in ms
    // 3. callback function (runs after animation is complete)

    sliderItems.animate({
        left: +slideWidth
      }, 200,
      function() {
        // we take the last li in the ul and prepend it to the ul
        $(this).children('.slider-item').last().prependTo(sliderItems);
        // we reset the left value which we changed in the animation
        $(this).css('left', '');
      });
    console.log('slide next');
  }

  function slidePrev(e) {

    if (e) {
      e.preventDefault();
    }

    sliderItems.animate({
        left: -slideWidth
      }, 200,
      function() {
        // we take the first li in the ul and append it to the ul
        $(this).children('.slider-item').first().appendTo(sliderItems);
        // we reset the left value which we changed in the animation
        $(this).css('left', '');
      });
    console.log('slide prev');
  }

});