
const images = document.querySelectorAll('.img-list img');
const activeImg = document.querySelector('.gallery .active');
const imgPresentation = document.querySelector('.img-presentation');

images.forEach(img => img.addEventListener('click', imageClick))

function imageClick(e) {

  images.forEach(img => img.classList.remove('active'))
  imgPresentation.src = e.target.src;
  e.target.classList.add('active');
  imgPresentation.classList.add('fadeIn');
  setTimeout(() => imgPresentation.classList.remove('fadeIn'), 750);

}