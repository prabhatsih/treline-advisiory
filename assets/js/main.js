

(function ($) {
  "use strict";
  
  // ==========================================
  //      Start Document Ready function
  // ==========================================
  $(document).ready(function () {  
    
    // ========================= Header Hide Click On Body Js Start =====================
    $(document).click(function(event) {
      if (!$(event.target).closest("#header").length) {
        if($('.navbar-collapse').hasClass('show')){
          document.getElementById("hiddenNav").click();
        }
      }
    });
    // ========================= Header Hide Click On Body Js End =====================
    
    //======================= MagnificPopup Start ======================
    $('.play-button').magnificPopup({
      type: 'iframe'
      // other options
    });
    //======================= MagnificPopup Start ======================

      // ========================= Odometer Counter Js Start =====================
      $(".counterup-item").each(function () {
        $(this).isInViewport(function (status) {
          if (status === "entered") {
            for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
              var el = document.querySelectorAll('.odometer')[i];
              el.innerHTML = el.getAttribute("data-odometer-final");
            }
          }
        });
      });
      // ========================= Counter Js End =====================
    

    // ========================= Slick Slider Js Start =====================
    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        dots: false,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"><i class="las la-arrow-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="las la-arrow-left"></i></button>',
      });
    // ========================= Slick Slider Js End =====================

    // ========================= Password Show Hide Js Start ==========================
      $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye-slash");
        var input = $($(this).attr("id"));
        if (input.attr("type") == "password") {
        input.attr("type", "text");
        } else {
        input.attr("type", "password");
        }
      });
    // ========================= Password Show Hide Js End ==========================
  });
  // ==========================================
  //      End Document Ready function
  // ==========================================

  // ========================= Preloader Js Start =====================
    $(window).on("load", function(){
      $('.preloader').fadeOut(); 
    })
    // ========================= Preloader Js End=====================

    // ========================= Header Sticky Js Start =====================
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 300) {
          $('.header-bottom').addClass('fixed-header');
      }
      else {
          $('.header-bottom').removeClass('fixed-header');
      }
    });
    // ========================= Header Sticky Js End=====================
    //================================= Scroll To Top Icon Js Start =========================
    var btn = $('.scroll-top');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
//================================= Scroll To Top Icon Js End ===========================

})(jQuery);
