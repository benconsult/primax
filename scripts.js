
$(function(){
  $('.hamburger-menu').on('click', function(){
     $('.toggle').toggleClass('open');
     $('.nav-list').toggleClass('open');
  });


  AOS.init({
  	easing:'ease',
  	duration:1000
  });

  $(".example").typeIt({
  	strings: 'This is me',
  	speed:50,
  	autoStart:false
  });
   
   
});