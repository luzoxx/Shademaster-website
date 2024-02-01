//Hiện thị menu con

$(document).ready(function () {
  $(".item-1").click(function () {
    $(".item-1").text("CLOSE");
    $(".header_submenus").css({ "display": "block", "position": "fixed" });
    $(".menu_1").css({ "display": "block"});
    $(".menu_2").css({ "display": "none"});
    $(".item-2").text("ROOFING DESIGN");
    $(".header_submenus").animate({
      height: '750px',
      opacity: '1'
    });
  });
});

$(document).ready(function () {
  $(".item-2").click(function () {
    $(".item-2").text("CLOSE");
    $(".header_submenus").css({ "display": "block", "position": "fixed" });
    $(".menu_2").css({ "display": "block"});
    $(".menu_1").css({ "display": "none"});
    $(".item-1").text("ABOUT US");
    $(".header_submenus").animate({
      height: '750px',
      opacity: '1'
    });
  });
});

//Tắt menu con
$(document).ready(function () {
  $(".menu-cancel").click(function () {
    $(".item-1").text("ABOUT US");
    $(".item-2").text("ROOFING DESIGN");
    $(".header_submenus").css({ "position": "static" });
    $(".header_submenus").animate({
      height: '0',
      opacity: '0'
    });
  });
});
