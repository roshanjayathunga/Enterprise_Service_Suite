
$(document).ready(function () {
      $(this).scrollTop(0);
});

// NAV BAR

$(document).ready(function () {
      $(".menu-icon").on("click", function () {
            $("nav ul").toggleClass("showing");
      });
});

// Scrolling Effect

$(window).on('scroll', function () {
      if ($(window).scrollTop()) {
            $('nav').addClass('black');
      }

      else {
            $('nav').removeClass('black');
      }
})

// Navbar hide on scroll down
$(document).ready(function () {
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                  document.getElementById("navbar").style.top = "0";
            } else {
                  document.getElementById("navbar").style.top = "-120px";
            }
            prevScrollpos = currentScrollPos;
      }
});

// SCROLL


// HOME PAGE WORD CHANGING

$(function () {
      count = -1;
      initTextOne = "You want to improve your  ";
      initTextTwo = " operations by having one Unified IT Platform? We can help";

      wordsTopArray = [
            "Want to jumpstart your ",
            "Are you looking at delivering services to Customers in a ",
            "You want to improve your operations by having one  ",
            "Do you need to   ",
            
      ];

      wordsArray = [
            "Digital Initiatives ",
            "New & Improved   ",
            "Unified IT Platform?  ",
            "Modernize your IT  ",
         
      ];

      wordsSubArray = [
            "on a low-cost business model? Partner with Us.",
            "manner? We’re here to help.",
            "We can help",
            "for better business outcomes? Don’t know where to start? Talk to us.",
          
      ];
      
      $("#wordchange").text(initTextOne).delay(500);
      $("#wordchange-sub").text(initTextTwo).delay(500);

      setInterval(function () {
            count++;
            $("#wordchange-sub-top").fadeOut(1000, function () {
                  $(this).text(wordsTopArray[count % wordsTopArray.length]).fadeIn(600);
            });
            $("#wordchange").fadeOut(1000, function () {
                  $(this).text(wordsArray[count % wordsArray.length]).slideDown(1000);
            });
            $("#wordchange-sub").fadeOut(1000, function () {
                  $(this).text(wordsSubArray[count % wordsSubArray.length]).fadeIn(600);
            });

      }, 8000); // set interval time
});
