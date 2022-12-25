
function openNav() {
  if (x.matches) { // If media query matches
    document.getElementById("mySidenav").style.width = "100%";
    $('body').removeClass('stop-scrolling')
  } else {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("body-background").style.height = "100%";
    $('body').addClass('stop-scrolling')
  }
}

function closeNav() {
  if (x.matches) { // If media query matches
    document.getElementById("mySidenav").style.width = "100% !important";
  } else {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("body-background").style.height = "0";
    $('body').removeClass('stop-scrolling')
  }
}

var x = window.matchMedia("(min-width: 992px)")
openNav(x)
closeNav(x)
x.addListener(openNav)
x.addListener(closeNav)

// $(document).ready(function () {
//   var lastScrollTop = 0;
//   $(window).scroll(function () {
//     var currentScrollTop = $(this).scrollTop();
//     if (currentScrollTop < lastScrollTop) {
//       $("header").removeClass("header-static-top").addClass("header-fixed-top");
//     } else {
//       $("header").addClass("header-static-top").removeClass("header-fixed-top");
//     }
//     lastScrollTop = currentScrollTop;
//   });
// });


var matcheTM = window.matchMedia("(max-width: 991px)")
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && matcheTM) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  }
  