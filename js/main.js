/* Scroll Sections
---------------------------------------------------------------------------- */
$(function() {
  $('nav a').bind('click',function(event){
    var $anchor = $(this);
                    
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeInOutExpo');
        event.preventDefault();
  });
});

$(function() {
  $('.go-top').bind('click',function(event){
    var $anchor = $(this);
                    
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeInOutExpo');
        event.preventDefault();
  });
});

$(function() {
  $('.arrow').bind('click',function(event){
    var $anchor = $(this);
                    
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeInOutExpo');
        event.preventDefault();
  });
});



/* Shrink Header
---------------------------------------------------------------------------- */

$(function(){
 var shrinkHeader = 300;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.header').addClass('shrink');
        }
        else {
            $('.header').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

/* TOP BUTTON
---------------------------------------------------------------------------- */
$(document).ready(function() {
      // Show or hide the sticky footer button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
      });
      
      // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
        
      })
    });

/* WORK SECTIONS
---------------------------------------------------------------------------- */

$(".work-btn").on("click", function(eventObject){

  eventObject.preventDefault();

  $('.work-details[data-state="open"]').attr("data-state", "closed");

  var id= $(this).attr("href");
  $(id).attr("data-state", "open");

  $('html, body').stop().animate({
    scrollTop: $("#work-position").offset().top
  }, 1500,'easeInOutExpo');

});

$(".work-close").on("click", function(eventObject){
  $(this).parents(".work-details").attr("data-state", "closed");
});

