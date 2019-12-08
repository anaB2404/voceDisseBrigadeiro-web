// ScrollSpy
const ss = document.querySelectorAll('.scrollspy')
M.ScrollSpy.init(ss, {})

// cor quando o menu descer

$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
      $("#menu").addClass("opaque");
    } else {
      $("#menu").removeClass("opaque");
    }
  });
});
