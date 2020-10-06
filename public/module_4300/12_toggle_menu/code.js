$(function () {

  const navMenu = $('.nav-menu')

  $('#trigger').on('click', function (){
    $(this).siblings('.nav-menu').toggleClass('active')
  })

});