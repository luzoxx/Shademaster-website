// Menu con của page - position fix
var myBlock = document.querySelector(".main__header");

function updatePosition() {
  var distanceToTop = document.documentElement.scrollTop;

  if (distanceToTop >= 700 && distanceToTop <= 6170) {
    myBlock.style.position = "fixed";
    myBlock.classList.add("position");
  }
  else {
    myBlock.style.position = "sticky";
    myBlock.classList.remove("position");
  }
}

updatePosition();
window.addEventListener("scroll", updatePosition);





// Thêm sự kiện khi click vào 1 trong 8 item trong menu con sẽ scroll đến item đó
function scrollToWall(WallId) {
  var element = document.getElementById(WallId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}




//animtion 
// Chờ trang tải xong
//Wall header
var wallT1 = document.querySelector('.wall-title1');
var wallT2 = document.querySelector('.wall-title2');
var wallContent = document.querySelector('.wall-content');
var wallBtn = document.querySelector('.wall-btn');

window.onload = function () {
  // Chọn tất cả các khối
  var blocks = [wallT1, wallT2, wallContent, wallBtn]

  // Dùng biến để kiểm soát thời gian delay giữa các khối
  var delay = 0;

  // Lặp qua từng khối và thêm animation
  blocks.forEach(function (block) {
    setTimeout(function () {
      block.classList.remove('hidden');
      block.style.animation = 'appear 1.3s ease-out';
    }, delay);

    delay += 500; // Thay đổi giá trị delay nếu cần
  });
}






// cuộn đến video
var btnScroll = document.querySelector('.wall-scroll');
btnScroll.addEventListener('click', function() {
  scrollToWall('video');
})

//

// Lấy phần tử bạn muốn kích hoạt animation content trong page
var EW1 = document.getElementById('wall1');
var EW2 = document.getElementById('wall2');
var EW3 = document.getElementById('wall3');
var EW4 = document.getElementById('wall4');
var EW5 = document.getElementById('wall5');
var EW6 = document.getElementById('wall6');
var EW7 = document.getElementById('wall7');
var EW8 = document.getElementById('wall8');


// Thiết lập một hàm để kiểm tra khi người dùng cuộn
// Lấy danh sách tất cả các wall
const walls = [EW1, EW2, EW3, EW4, EW5, EW6, EW7, EW8]

// Hàm kiểm tra xem wall có nằm trong viewport không
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Hàm xử lý sự kiện scroll đến content thì hiện animation
function handleScroll() {
  walls.forEach((wall) => {
    if (isElementInViewport(wall)) {
      // Khi wall nằm trong viewport, thêm class "animate" và xóa class "hidden"
      wall.classList.add('animate');
      wall.classList.remove('hidden');
    } else {
      // Khi wall không nằm trong viewport, xóa class "animate" và thêm class "hidden"
      wall.classList.remove('animate');
      wall.classList.add('hidden');
    }
  });
}
// Thêm sự kiện scroll cho window
window.addEventListener('scroll', handleScroll);

// Khi trang web được tải, kiểm tra một lần ban đầu
handleScroll();





//Hiện thị menu con
// Hiển thị About us
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
// Hiển thị Roofing Design
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



