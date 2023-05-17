$(document).ready(function(){

  var hero = document.getElementById("landing");
  var heroHeight = hero.offsetHeight;
  $('#navbar').css({"top":heroHeight});

  var sticky = navbar.offsetTop;

  $(window).scroll(function(){
  
    if (window.pageYOffset >= sticky) {
      $('#navbar').addClass("sticky");
    } 
    else {
      $('#navbar').removeClass("sticky");
    }
  
  });

});