
$(function(){
    onComplete();
    init();
});

function onComplete(){

    TweenMax.fromTo( $(".tween1"), 0.25,{rotationX:90, opacity:0}, {rotationX:0, opacity:1, delay:1, perspective:400, ease:Power4.eaesInOut });

    TweenMax.to( $(".light_left"), 3, {rotation:-20, repeat:-1, yoyo:true, transformOrigin:"left top", ease:Power4.eaesOut });
    TweenMax.to( $(".light_right"), 3, { rotation:20, repeat:-1, yoyo:true, transformOrigin:"right top", ease:Power4.eaesOut });

    TweenMax.fromTo( $(".blink1"), 0.35,{scale: 0.5}, {scale: 1, delay:0.5, repeat: -1, yoyo:true});
    TweenMax.fromTo( $(".blink2"), 0.35,{scale: 0.5}, {scale: 1, delay:0.8, repeat: -1, yoyo:true});
    

    TweenMax.fromTo( $(".teacher1_1"), 0.5,{opacity: 0,x:-50}, {x:0, opacity:1, delay:0.6, ease:Expo.eaesOut});
    TweenMax.fromTo( $(".teacher1_2"), 0.5,{opacity: 0,x:50}, {x:0, opacity:1, delay:0.5, ease:Expo.eaesOut});

    TweenMax.fromTo( $(".teacher2_1"), 0.5,{opacity: 0,x:-100}, {x:0, opacity:1, delay:0.9, ease:Expo.eaesOut});
    TweenMax.fromTo( $(".teacher2_2"), 0.5,{opacity: 0,x:100}, {x:0, opacity:1, delay:0.9, ease:Expo.eaesOut});

    TweenMax.fromTo( $(".teacher3_1"), 0.5,{opacity: 0,x:-100}, {x:0, opacity:1, delay:1.2, ease:Expo.eaesOut});
    TweenMax.fromTo( $(".teacher3_2"), 0.5,{opacity: 0,x:100}, {x:0, opacity:1, delay:1.2, ease:Expo.eaesOut, onComplete:function(){
        var tween2 = $(".tween2").children("img");
        TweenMax.fromTo(tween2, 0.5, {opacity:0, y:tween2.height()}, { opacity:1, y:0, ease:Power4.eaesOut});
        TweenMax.fromTo($(".tween3"), 0.35, {opacity:0, scaleY:0.5}, { opacity:1, scaleY:1, delay:0.2, ease:Power3.eaesOut});
    }});
}

function init(){
    slideEvent(1);
    tabControl(".section_reason2");
    $(window).scroll(function(){   
        if ( $(window).scrollTop() >= $("#sectionApply").offset().top - 700 ) {   
            $(".g_fix_apply").hide();   
        } else {   
            $(".g_fix_apply").show();   
        }   
    });   

    $('.carousel_prev').on('click', function () {
        _carousel.prev();
    });

    $('.carousel_next').on('click', function () {
        _carousel.next();
    });

    var slider01 = $('#bxSlider1').bxSlider({
        mode: 'horizontal',
        auto: true,
        pause: 3000,
        pager: true,
        onSliderLoad: function(){
        }
    });

    var slider02 = $('#bxSlider2').bxSlider({
        mode: 'horizontal',
        auto: true,
        pause: 3000,
        pager: false,
        onSliderLoad: function(){
        }
    });

    $('.page_move').on('click', function(e){
        e.preventDefault();

        var _top = $($(this).attr('href'));
        var $target = _top.offset().top;

        $('html,body').animate({
            scrollTop: $target
        }, 500);
    });

    $(".flowplayer").on("click",function(){
        var idx = $(this).attr("id");

        switch(idx) {
            case "player1":
                _player1.play();
                _player2.stop();
                _player3.stop();
                _player4.stop();
                _player5.stop();
                _player6.stop();
                break;
            case "player2":
                _player1.stop();
                _player2.play();
                _player3.stop();
                _player4.stop();
                _player5.stop();
                _player6.stop();
                break;     
            case "player3":
                _player1.stop();
                _player2.stop();
                _player3.play();
                _player4.stop();
                _player5.stop();
                _player6.stop();
                break;
            case "player4":
                _player1.stop();
                _player2.stop();
                _player3.stop();
                _player4.play();
                _player5.stop();
                _player6.stop();
                break;            
            case "player5":
                _player1.stop();
                _player2.stop();
                _player3.stop();
                _player4.stop();
                _player5.play();
                _player6.stop();
                break;
            case "player6":
                _player1.stop();
                _player2.stop();
                _player3.stop();
                _player4.stop();
                _player5.stop();
                _player6.play();
                break;
        }
    });
  
    _player2 = flowplayer("#player2", {            
        autoplay:false,            
        autoBuffering:true,
        key : "$597838436033004",            
        clip: {sources: [{ type:"video/mp4", src:"http://pmp.eduwill.net/eduwillpmp/eduwill/flv/sample/conte/L/LPL-CONTE-SJW3.mp4" }] }
    });

    _player3 = flowplayer("#player3", {            
        autoplay:false,            
        autoBuffering:true,
        key : "$597838436033004",            
        clip: {sources: [{ type:"video/mp4", src:"http://pmp.eduwill.net/eduwillpmp/eduwill/flv/sample/conte/L/LBL-CONTE-LSJ.mp4" }] }
    });

    _player4 = flowplayer("#player4", {            
        autoplay:false,            
        autoBuffering:true,
        key : "$597838436033004",            
        clip: {sources: [{ type:"video/mp4", src:"http://pmp.eduwill.net/eduwillpmp/eduwill/flv/sample/conte/L/LNL-CONTE-KHS.mp4" }] }
    });

    _player5= flowplayer("#player5", {            
        autoplay:false,            
        autoBuffering:true,
        key : "$597838436033004",            
        clip: {sources: [{ type:"video/mp4", src:"http://pmp.eduwill.net/eduwillpmp/eduwill/flv/sample/conte/L/LGS-CONTE-KMS.mp4" }] }
    });

    _player6= flowplayer("#player6", {            
        autoplay:false,            
        autoBuffering:true,
        key : "$597838436033004",            
        clip: {sources: [{ type:"video/mp4", src:"http://pmp.eduwill.net/eduwillpmp/eduwill/flv/sample/conte/L/LNT-CONTE-SSR.mp4" }] }
    });

    _player1 = flowplayer("#player1", {            
        autoplay:false,            
        autoBuffering:true,
        key : "$597838436033004",            
        clip: {sources: [{ type:"video/mp4", src:"http://pmp.eduwill.net/eduwillpmp/eduwill/flv/sample/conte/L/LES-CONTE-LYB.mp4" }] }
    });

}

var _carousel;
function slideEvent(idx){
    $(".carousel_slide").hide();
    $("#carousel_slide"+idx).show();

    var max = $("#carousel_slide"+idx).children("li").length;
    if(max == 1){
        $('.carousel_prev').hide();
        $('.carousel_next').hide();
    }else{
        $('.carousel_prev').show();
        $('.carousel_next').show();
    }

    _carousel = $("#carousel_slide"+idx).waterwheelCarousel({
        flankingItems: 3,
        autoPlay: 2000
    });
}

function tabControl($seletor){
    $($seletor).find(".tab_list").children("li").on("click", function(){
        _player1.stop();
        _player2.stop();
        _player3.stop();
        _player4.stop();
        _player5.stop();
        _player6.stop();

        var idx = $(this).index();
        var tabList = $($seletor).find(".tab_list").children("li");

        tabList.each(function(){
            $(this).children("img").attr('src', $(this).children('img').attr('src').replace('_on','_off'));
        });
        
        tabList.eq(idx).children('img').attr('src', tabList.eq(idx).children('img').attr('src').replace('_off','_on'));

        tabList.removeClass("on");
        tabList.eq(idx).addClass("on");
     
        $($seletor).find(".tab_view").hide();
        $($seletor).find(".tab_view"+(idx+1)).show();
         
    });
}
