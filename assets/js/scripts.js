$(document).ready(function(){
  $("a").on('click', function(event) {
    if($(this).hasClass("nav-link")){
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    }
  });
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
window.onscroll = function() {
  var navdiv = document.getElementById("navigation");
  var logoimg = document.getElementById("logo");
  var socialicons = document.getElementById("social-section");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    changeLogo(logoimg, '45px');
    changeDivSize(navdiv, '70px');
    changeIcons(socialicons, 'none');
  }
  else {
		changeLogo(logoimg, '80px');
		changeDivSize(navdiv, '100px');
    changeIcons(socialicons, 'flex');
	}
};
function changeDivSize(navdiv, size) {navdiv.style["min-height"] = size;};
function changeLogo(logoimg, size) {logoimg.style["width"] = size;};
function changeIcons(socialicons, display) {socialicons.style["display"] = display;};

$(document).on('click', '#navbarSupportedContent', function(e) {
	if ($(e.target).is('a')) {
		$(this).collapse('hide');
	}
});
// Scroll to top button appear
$(document).on('scroll', function() {
  var scrollDistance = $(this).scrollTop();
  if (scrollDistance > 100) {
    $('.scroll-to-top').fadeIn();
  } else {
    $('.scroll-to-top').fadeOut();
  }
});
(function($) {
  "use strict"; // Start of use strict
// Smooth scrolling using jQuery easing
$(document).on('click', 'a.scroll-to-top', function(e) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: ($($anchor.attr('href')).offset().top)
  }, 1000, 'easeInOutExpo');
  e.preventDefault();
});
})(jQuery); // End of use strict
