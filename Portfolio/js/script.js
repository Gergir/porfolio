$(document).ready(function(){
    AOS.init();
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar sript
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation
    var typed = new Typed("#typing",{
        strings:["Developer","Programmer","DevOps"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    // card flip

    $(".characteristics .characteristics-content .card").click(function(){
        $(this).toggleClass("flipped");
        var $this = $(this);
        if($this.data('clicked')){
            $this.data('clicked',false);
            $(this).css('box-shadow', ' 3px 3px 3px  rgb(60, 144, 255)');
            //double sided
            if($this.attr('id') == 'card1'){
                $('.text#weak-memory').css('display','none');
                $('ul#weak-memory').css('display','none');
                $('ul#sourceful').css('display','block');
                $('.text#sourceful').css('display','block');
            }
            if($this.attr('id') == 'card2'){
                $('.text#overly-ambitious').css('display','none');
                $('ul#overly-ambitious').css('display','none');
                $('ul#fast-learner').css('display','block');
                $('.text#fast-learner').css('display','block');
            }
            if($this.attr('id') == 'card3'){
                $('.text#no-rutines').css('display','none');
                $('ul#no-rutines').css('display','none');
                $('ul#creative').css('display','block');
                $('.text#creative').css('display','block');
            }
        }
        else{
            $this.data('clicked',true);
            $(this).css('boxShadow', '-3px 3px 3px 0px rgb(222, 117, 30)');

            //double sided
            if($this.attr('id') == 'card1'){
                $('.text#weak-memory').css('display','block');
                $('ul#weak-memory').css('display','block');
                $('ul#sourceful').css('display','none');
                $('.text#sourceful').css('display','none');
            }
            if($this.attr('id') == 'card2'){
                $('.text#overly-ambitious').css('display','block');
                $('ul#overly-ambitious').css('display','block');
                $('ul#fast-learner').css('display','none');
                $('.text#fast-learner').css('display','none');
            }
            if($this.attr('id') == 'card3'){
                $('.text#no-rutines').css('display','block');
                $('ul#no-rutines').css('display','block');
                $('ul#creative').css('display','none');
                $('.text#creative').css('display','none');
            }
            
        }


      });
    // My fade effects
    // if($(window).scrollTop() < $("#about").position().top-60)
    // {
    //     $("#about p").fadeTo("30", 0);
    // }
    // if($(window).scrollTop() < $("#experience").position().top-60)
    // {
    //     $('#experience p').fadeTo("300", 0);
    // }
    

    // $(window).scroll(function(){      
    //     if($(window).scrollTop() > $("#about").position().top-200)
    //     {
    //         $("#about p").fadeTo("300", 1);
    //     }


    //     if($(window).scrollTop() > $("#experience").position().top-400)
    //     {
    //         $('#experience p').fadeTo("300", 1);
    //     }
        
    // });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin:20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});