
var delay = 10;
var end = new Date("Dec 31,2019,23:59:59").getTime(); //디데이
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;

$(function(){
    setTimeout(showSec, delay);
    init();
    onComplete();
});

function onComplete(){
    TweenMax.fromTo( $(".blink1"), 0.5,{scale: 0.5}, {scale: 1, delay:0.5, repeat: -1, yoyo:true});
    TweenMax.fromTo( $(".blink2"), 0.5,{scale: 0.8}, {scale: 1, delay:0.8, repeat: -1, yoyo:true});
}


function init(){
   

    $(window).scroll(function(){   
        if ( $(window).scrollTop() >= $("#sectionApply").offset().top - 700 ) {   
            $(".g_fix_apply").hide();   
        } else {   
            $(".g_fix_apply").show();   
        }   
    });   

    var slider02 = $('#bxSlider').bxSlider({
        mode: 'horizontal',
        auto: true,
        pause: 3000,
        pager: true,
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
}

function showSec() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0 ) {
        $(".day").text("0");
        $(".hour").text("00");
        $(".min").text("00");
        $(".sec").text("00");
        $(".msec").text("00");
    } else {
        var days = Math.floor(distance / _day);
        var hours = Math.floor( (distance % _day ) / _hour );
        var minutes = Math.floor( (distance % _hour) / _minute );
        var seconds = Math.floor( (distance % _minute) / _second );
        var mseconds =  "00";
        try { mseconds = Math.floor( (distance % _minute) % 1000).toString().substring(0,2); } catch(e) {}


        $(".day").text((days.toString().length == 1) ? "0"+days : days);
        $(".hour").text((hours.toString().length == 1) ? "0"+hours : hours);
        $(".min").text((minutes.toString().length == 1) ? "0"+minutes : minutes);
        $(".sec").text((seconds.toString().length == 1) ? "0"+seconds : seconds);
        $(".msec").text(mseconds);

        setTimeout(showSec, delay);
    }
}

