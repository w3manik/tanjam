$(function(){
    $('.slik-baner-slier').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots:true,
    autoplaySpeed: 2000,
    });
    
    
    
    
    $('.feedback-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots:true,
    autoplaySpeed: 2000,
    });
    
    //navbar//
    $(window).scroll(function(){
        var srcalvar = $(this).scrollTop();
        if(srcalvar > 100){
           $('.navbar').addClass('mbg');
        }
        else{
            $('.navbar').removeClass('mbg');
        }
        
        if(srcalvar > 400){
            $('.updn').fadeIn(500);
        }
        
        else{
            $('.updn').fadeOut(500);
        }
         
    })
    
    $('.updn').click(function(){
        $('html, body').animate({scrollTop:0},1000);
    });
    
        //venobox//
    
       $('.venobox').venobox(); 
    
})







