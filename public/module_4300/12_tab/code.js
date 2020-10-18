$(function () {

  // start by defining our global variables
  const wrapper = $('.tab-container')
  const allTabs = wrapper.find('.tab-inhalt > div')
  const tabMenu = wrapper.find('.tab-auswahl > li')
  const line = $('<div class="line"></div>').appendTo(tabMenu)

  // hide the tabs that are not 'first-of-type'
  allTabs.not(':first-of-type').hide()

  // change width of first to 100%
  tabMenu.filter(':first-of-type').find(':first').width('100%')

  // for each tab set the data atrribute of the li
  tabMenu.each(function(i){
    $(this).attr('data-tab', 'tab' + i)
  })

  // same for the corresponding content div
  allTabs.each(function (i) {
    $(this).attr('data-tab', 'tab' + i)
  })

  tabMenu.on('click', function () {
    let dataTabIndex = $(this).data('tab')
    let getWrapper = $(this).closest(wrapper)

    // remove 'active' from the tabs and add it to the clicked tab
    getWrapper.find(tabMenu).removeClass('active')
    $(this).addClass('active')

    // reset width of all lines to 0
    getWrapper.find('.line').width(0)
    $(this).find(line).animate({width: '100%'}, "fast")

    // we reeset all the content div's
    getWrapper.find(allTabs).hide()
    // show the tab content using it's corresponding data-tab attribute
    getWrapper.find(allTabs).filter(`[data-tab=${dataTabIndex}]`).show()
  })


});