var toggleAffix = function(affixElement, scrollElement, wrapper) {

  var height = affixElement.outerHeight(),
      top = wrapper.offset().top;

  if (scrollElement.scrollTop() >= top){
      wrapper.height(height);
      affixElement.addClass("affix");
  }
  else {
      affixElement.removeClass("affix");
      wrapper.height('auto');
  }

};


$('[data-toggle="affix"]').each(function() {
  var ele = $(this),
      wrapper = $('<div></div>');

  ele.before(wrapper);
  $(window).on('scroll resize', function() {
      toggleAffix(ele, $(this), wrapper);
  });

  // init
  toggleAffix(ele, $(window), wrapper);
});
$(function(){
var shrinkHeader = 100;
$(window).scroll(function() {
  var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader ) {
         $('.header').addClass('shrink');
         $('.navbar-brand').addClass('brand-shrink');
      }
      else {
          $('.header').removeClass('shrink');
          $('.navbar-brand').removeClass('brand-shrink');
      }
});
function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
  }
});
