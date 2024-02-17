// fixed header script
$(window).scroll(function() {
    var hh = $('header').outerHeight();
    var scrollAmount = $(window).scrollTop();
    console.log(scrollAmount);

    if (scrollAmount > 200) {
        $("header").addClass("is-fixed");
        $('body').css({"paddingTop": hh })
    } else {
        $("header").removeClass("is-fixed");
        $('body').css({"paddingTop":"0px"})
    }
});

$(window).load(function() {
    if ($('div').hasClass('coutries-carousel')) {
        var coutriesCarousel = $('#coutriesCarousel');

        coutriesCarousel.owlCarousel({

                loop: false,
                // nav:true,
                dots:false,
                margin: 30,
                autoplay: false,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                touchDrag:false,
                responsive: {
                    0: {
                        items: 1
                    },
                    992: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });

        $(".pwNext").click(function() {
            coutriesCarousel.trigger('next.owl.carousel');
        });
        $(".pwPrev").click(function() {
            coutriesCarousel.trigger('prev.owl.carousel');
        });
    }
});

$('.banner div').eq(0).addClass('animate');
        $('.item').hover(function(){
            $(".banner div").removeClass('animate');
            var imgId = $(this).attr("data");
            console.log(imgId);
            $(".banner div").css({"z-index": 0});
            $('#' + imgId).css({"z-index":1, opacity:1}).fadeIn().addClass('animate');
        }, function(){
    });

$(window).scroll(function(){
    var svrollTop = $(window).scrollTop()
    if(svrollTop> 300){
        $('.gotop').css({"right": "50px", "transition": "ease all 1s"});
    }else{
        $('.gotop').css({"right": "-100px", "transition": "ease all 1s"});
    }
    // 
    })
    
    $('.gotop').click(function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })
      



