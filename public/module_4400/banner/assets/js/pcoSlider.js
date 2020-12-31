/**
 * @author Tobia Prezioso
 */

const pcoSliders = document.querySelectorAll('.slider');

for (let i = 0; i < pcoSliders.length; i++) {
  let sliderObj = {
    slider: pcoSliders[i],
    sliderId: `slider-${i}`,
    sliderControlsActive: true,

    init() {
      if (!this.slider.id) {
        this.slider.id = this.sliderId;
      } else {
        this.sliderId = this.slider.id;
      }
      this.sliderItems = this.slider.querySelectorAll('.slider-item');

      if (this.sliderControlsActive && this.slider.querySelectorAll('.slider-control').length > 0) {
        this.sliderControls = this.slider.querySelectorAll('.slider-control');

        this.initSliderControl();
      }
      this.updateData('active-slide', 0);
    },
    initSliderControl() {
      for (let j = 0; j < this.sliderControls.length; j++) {
        let control = this.sliderControls[j];
        this.addEventListenerToControl(control);
      }
    },
    addEventListenerToControl(control) {
      control.addEventListener('click', e => {
        if (control.className.includes('next')) {
          this.slideNext();
        }
        if (control.className.includes('prev')) {
          this.slidePrev();
        }
      });
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

}
