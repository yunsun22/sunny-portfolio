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
  
  
});