function loaderSpinner() {
    $(window).load(function() {
        var loader = $('.loader');
var wHeight = $(window).height();
var wWidth = $(window).width();
var i = 0;
/* Center loader on half screen */
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
      
      /* content */
      setTimeout(function(){
        $('.content').fadeIn("slow");
        (loader).fadeOut("fast");
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







