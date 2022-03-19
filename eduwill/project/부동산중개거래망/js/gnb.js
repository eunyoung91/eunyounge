$(function(){
    initGnb();
});

function initGnb(){
    createGnb();
    addEventGnb();
}

var _w;
var _openMenu;
var _mobileMenu;
var _gnbDim;
var _mymenu;

var _wid;
var _hei;
var _device = 753; // 분기처리 사이즈(769인데 pc에서 스크롤 사이즈땜에 -16 설정)

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

function createGnb(){
    _w = $(window);
    
    _openMenu = $(".openMenu");
    _mobileMenu = $(".mobile-icon");
    _gnbDim = $( ".dim" );
    _mymenu = $(".mymenu");
}

function addEventGnb(){
    _mobileMenu.on("click", gnbMenuEvent);
    _mymenu.on("click", myMenuEvent);
}

function myMenuEvent(){
    $(this).toggleClass("active");
    if(_mymenu.hasClass("active")){
        _openMenu.fadeIn();
    }else{
        _openMenu.fadeOut();
    } 
}

function gnbMenuEvent(){
    $(this).toggleClass("active");
    if(_mobileMenu.hasClass("active")){
        _gnbDim.show();
        _openMenu.slideDown();
    }else{
        _gnbDim.hide();
        _openMenu.slideUp();
    }
}

