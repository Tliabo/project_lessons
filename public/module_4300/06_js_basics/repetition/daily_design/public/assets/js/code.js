$(function () {
  $('.toggle').on('click', function () {

    $('.card-body').not($(this).parent().siblings('.card-body')).slideUp()

    $('.fa-minus').not($(this).children('.fas')).removeClass('fa-minus').addClass('fa-plus');

    $(this).children('.fas').toggleClass('fa-plus').toggleClass('fa-minus');

    $(this).parent().siblings('.card-body').slideToggle();

  })
})

