AOS.init();
$(".blocks-gallery-item a").magnificPopup({
  type: "image",
  gallery: {
    enabled: true,
  },
});
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $(".scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  $(".link-division").click(function () {
    $("html, body").animate(scrollTo($("#division"), 600));
  });
});

$("body").niceScroll({
  cursorwidth: 12,
  cursoropacitymin: 0.4,
  cursorcolor: "#acb5ac",
  cursorborder: "none",
  cursorborderradius: 4,
  autohidemode: "leave",
  background: "#1d1c20",
});
