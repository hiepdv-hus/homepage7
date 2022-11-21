function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("body-background").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("body-background").style.height = "0";
}

$(document).ready(function () {
  var lastScrollTop = 0;
  $(window).scroll(function () {
    var currentScrollTop = $(this).scrollTop();
    if (currentScrollTop < lastScrollTop) {
      $("header").removeClass("header-static-top").addClass("header-fixed-top");
    } else {
      $("header").addClass("header-static-top").removeClass("header-fixed-top");
    }
    lastScrollTop = currentScrollTop;
  });
});
