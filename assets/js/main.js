

/*
$(".section_one .container p:nth-child(1)").click(function(){
$ (".menu").slideUp(300);
});

$(".section_one .container p:nth-child(2)").click(function(){
$ (".menu").slideDown(300);
});
*/

$(".section_one .container p:nth-child(1)").click(function(){
$ (".fixed_back, .modal_window_form").fadeIn(500);
});


$ (".fixed_back, .modal_window_form textarea").click(function(){
  $ (".fixed_back, .modal_window_form").fadeOut(500);
});

$('.slider').slick({
  infinite:true,
  slidesToShow:1,
  slidesToScroll:1,
  speed:300,
  autoplay:false,
  auroplaySpeed:3000,
  dots:true
});
