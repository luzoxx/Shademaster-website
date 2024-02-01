
//xử lý position của wall1__box
$(document).ready(function() {
    $(window).on('scroll', function() {
        var distanceToTop = window.innerHeight;//Lấy chiều cao của cửa sổ trình duyệt
        if ($(window).scrollTop() >= 0.7 * distanceToTop) {
            $('.wall1__box').css({'position': 'absolute'});
        } else {
            $('.wall1__box').css({'position': 'fixed'});
        }
    });
});



//Khi click vào biểu tượng scroll thì scroll xuống dưới
$(document).ready(function () {
    $('.wall1_scroll').click(function () {
        document.querySelector('.wall2')?.scrollIntoView({ behavior: "smooth" });
    });
});


// Thêm một lớp CSS cho phần tử khi nó nằm trong tầm nhìn // xuất hiện rõ dần
function addAnimationToVisibleItems() {
    const items = document.querySelectorAll('.wall2-item');

    items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight) {
            item.classList.add('animate');
        }
    });
}

// Thêm sự kiện cuộn trang để theo dõi khi nào phần tử nằm trong tầm nhìn
window.addEventListener('scroll', addAnimationToVisibleItems);

// Gọi hàm một lần ban đầu để kiểm tra các phần tử đã hiển thị từ trước
addAnimationToVisibleItems();



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
  