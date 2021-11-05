const home_svg = document.querySelectorAll("#home_svg path");
console.log(home_svg);

for(let i = 0; i<home_svg.length; i++) {
    console.log(`Letter ${i} is ${home_svg[i].getTotalLength()}`);
}

// $('ul li a').click(function(){ $('li a').removeClass("active"); $(this).addClass("active"); });


// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });


// // Disabling Keybord Keys
// $(window).oncontextmenu = function () {
//     return false;
// }
// $(document).keydown(function (event) {
//     if (event.keyCode == 123) {
//         return false;
//     }
//     else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74) || (event.ctrlKey && event.keyCode == 117) || (event.ctrlKey && event.keyCode == 85) || (event.ctrlKey && event.keyCode == 115) || (event.ctrlKey && event.keyCode == 83) || (event.ctrlKey && event.keyCode == 112) || (event.ctrlKey && event.keyCode == 80)) {
//         return false;
//     }
// });
// // Disabling right-click
// document.oncontextmenu = new Function("return false;");