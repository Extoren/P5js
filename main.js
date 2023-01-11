function loaderSpinner() {
    $(window).load(function() {
        var loader = $('.loader');
var wHeight = $(window).height();
var wWidth = $(window).width();
var i = 0;
/*Center loader on half screen */
loader.css({
    top: wHeight / 2 - 2.5,
    left: wWidth / 2 - 200
 })
      
  do{
    loader.animate({
      width: i
    },10)
    i+=3;
  } while(i <= 400)
  if(i === 402){
    loader.animate({
      left: 0,
      width: '100%'
    })
    loader.animate({
      top: '0',
      height: '100vh'
    })
  }
      
      /* This line hide loader and show content */
      setTimeout(function(){
        $('.content').fadeIn("slow");
        (loader).fadeOut("fast");
        /*Set time in milisec */
      },3500);
    });

}

loaderSpinner();








$(function() {
  function Clock() {
    var theDate = new Date();
    var t = theDate.getHours() + ":" + theDate.getMinutes() + ":" + theDate.getSeconds();
    $('#time').text(t);
  }
  setInterval(Clock, 1000);
});











$(document).ready(function() {
  // Setup our variables
  var cH = $('#crosshair-h'),
      cV = $('#crosshair-v');
  
  $(this).on('mousemove touchmove', function(e) {
    var x = e.pageX - 1;
    var y = e.pageY - 1;
    cH.css('top', e.pageY);
    cV.css('left', e.pageX);
    
    $('#mousepos').css({
      top: e.pageY + 'px',
      left: e.pageX + 'px'
    }, 800);
    $('#mousepos').text( "X: " + x + "px, Y: " + y + "px");
    e.stopPropagation();
  });
  
  // Anchor Hover Effects
  $("a").hover(function() {
    $(".hair").stop().css({borderColor: "#fff"}, 800)},
     function() {
    $(".hair").stop().css({borderColor: "black"},800)
  });
  e.stopPropagation();
});