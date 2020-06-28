$(function(){
  var str = '#len'; //increment by 1 up to 1-nelemnts
  $(document).ready(function(){
    var i, stop;
    i = 1;
    stop = 4; //num elements
    setInterval(function(){
      if (i > stop){
        return;
      }
      $('#len'+(i++)).toggleClass('bounce');
    }, 500)
  });
});




$(document).ready(function() {

  $(window).scroll(function() {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('.navbar').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 281) {
      $('.navbar').removeClass('navbar-fixed-top');
    }
  });
});