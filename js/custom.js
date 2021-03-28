/*global $, window*/

$(function () {
   
    'use strict';
    
    // Adjust Header Height
    
    var myHeader = $('.header');
    
    myHeader.height($(window).height());
    
    $('window').resize(function () {
       
        myHeader.height($(window).height());
        
        // Adjust Bxslider List Item Center
        
            $('.bxslider').each(function () {

            $(this).css('paddingTop', (($(window).height() - $(this).height()) / 2.3));
                
        });
        
    });
    
    // Links Add Active Class
    
    $('.links li a').click(function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
    
    // Adjust Bxslider List Item Center
    
    $('.bxslider').each(function () {
        
        $(this).css('paddingTop', (($(window).height() - $(this).height()) / 2.3));
        
    });
    
    // Trigger The Bx Slider
    
    $('.bxslider').bxSlider({
        
        pager : false
        
    });
    
    // Smooth Scroll To Div
    
    $('.about').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.services').offset().top
            
        }, 1000);
        
    });
    
    $('.team').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.our-team').offset().top
            
        }, 1000);
        
    });
    
    $('.testi').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.testim').offset().top
            
        }, 1000);
        
    });
    
    $('.pro').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.our-projects').offset().top
            
        }, 1000);
        
    });
    
    $('.con').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.footer').offset().top
            
        }, 1000);
        
    });
    
    // Our Auto Slider Code
    
    (function autoSlider() {
        
        $('.slider .active').each(function () {
           
            if (!$(this).is(':last-child')) {
                
                $(this).delay(2000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            } else {
                
                $(this).delay(2000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            }
            
        });
        
    }());
    
    // Trigger MixitUp
    
    mixitup('#container');
    
    // Adjust Shuffle Links
    
    $('.shuffle li').click(function () {
       
        $(this).addClass('selected').siblings().removeClass('selected');
        
    });
    
    // Trigger Nice Scroll
    
    $("body").niceScroll({
        
      cursorcolor:"#1BBC9B",
        
      cursorwidth:"8px",
        
      cursorborder:"1px solid #FFF"    
        
    });
    
});