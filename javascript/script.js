jQuery(document).ready(function(){

    $('.navi>li').mouseover(function(){        
        $(this).find('.submenu1').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu1').stop().slideUp(500);
    });

    $('.navi>li').mouseover(function(){        
        $(this).find('.submenu2').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu2').stop().slideUp(500);
    });

    $('.hero-slide a:gt(0)').hide();
  setInterval(function(){
      $('.hero-slide a:first-child')
      .fadeOut(1000)
      .next('a')
      .fadeIn(1000)
      .end()
      .appendTo('.hero-slide');
  },3000);
});