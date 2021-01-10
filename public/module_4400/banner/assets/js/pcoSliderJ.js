/**
 * @author Tobia Prezioso
 */

$(function() {

  const pcoSliders = $('.slider');
  // console.log(pcoSliders);

  for (let i = 0; i < pcoSliders.length; i++) {
    let sliderObj = {
      slider: pcoSliders[i],

      init() {
        if (!this.slider.id) {
          this.slider.id = `slider-${i}`;
        }
        console.log(`
        initializing slider... 
        id: ${this.slider.id}
        `);

        this.sliderItems = $(this.slider).children('.slider-item');

        this.sliderControls = $(this.slider).children('.slider-control');
        this.initSliderControl();

        this.updateData('active-slide', 0);
      },
      initSliderControl() {
        for (let j = 0; j < this.sliderControls.length; j++) {
          let control = this.sliderControls[j];
          console.log(control);
          $(control).on('click', function() {
            if (control.className.includes('next')) {
              this.slideNext();
            }
            if (control.className.includes('prev')) {
              this.slidePrev();
            }
          });
        }
      },
      slideNext() {
        let activeItem = this.slider.getAttribute('data-active-slide');

        if (activeItem < this.sliderItems.length) {
          activeItem++;
          this.updateData('active-slide', activeItem);
          this.sliderItems.forEach(item => {
            item.style.transform = `translateX(-${(activeItem - 1) * 100}%)`;
          });
        } else {
          activeItem = 1;
          this.updateData('active-slide', activeItem);
          this.sliderItems.forEach(item => {
            item.style.transform = `translateX(${0}%)`;
          });
        }
        console.log('slide next');
      },
      slidePrev() {
        let activeItem = this.slider.getAttribute('data-active-slide');

        if (activeItem > 1) {
          activeItem--;
          this.updateData('active-slide', activeItem);
          this.sliderItems.forEach(item => {
            item.style.transform = `translateX(-${(activeItem - 1) * 100}%)`;
          });
        } else {
          activeItem = this.sliderItems.length;
          this.updateData('active-slide', activeItem);
          this.sliderItems.forEach(item => {
            item.style.transform = `translateX(-${(this.sliderItems.length - 1) * 100}%)`;
          });
        }
        console.log('slide prev');
      },
      updateData(data, index) {
        this.slider.setAttribute(`data-${data}`, index);
      }
    };

    sliderObj.init();
    // console.log(sliderObj);
  }

});


