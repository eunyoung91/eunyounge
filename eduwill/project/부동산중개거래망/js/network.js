$(function(){
    init();
});

function init(){
    create();
    addEvent();
}

var _w;
var _gnb;
var _menu;
var _dim;
var _layerTooltip;

var _dimmed;
var _wrap;
var _popup;
var _popupClose;
var _popupBtn;

var _wid;
var _hei;
var _device = 753; // 분기처리 사이즈(769인데 pc에서 스크롤 사이즈땜에 -16 설정)

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;


var _headerHei;
var _listTopHei;
var _listTabHei;
var _listFooterHei;
var _contentHei;
function create(){
    _w = $(window);
    
    _gnb = $("#gnb");
    _menu = $(".menu-icon");
    _dim = $( ".dim" );
    _layerTooltip = $(".layer-tooltip");

    _dimmed = $( ".dimmed" );
    _wrap = $( "#wrap" );
    _popup = $( ".popup" );
    _popupClose = $( ".popup-close" );
    _popupBtn = $(".btn-close");
}

function addEvent(){
    pageMove('.page-move');

    _popupClose.on( "click", popupCloseClick );
    _popupBtn.on("click", popupCloseClick);

    _menu.on("click", menuEvent);

    _w.on("resize", resizeEvent);
    resizeEvent();

    $(".ico-tooltip").on("mouseenter", function(){
        _layerTooltip.show();
    });

    $(".ico-tooltip").on("mouseleave", function(){
        _layerTooltip.hide();
    });

     // 버튼 active 체크
     //btnGroupEvent();

    // 사진등록
    photoUploadCtrl();
    $(".estate-register").find(".btn-delete").on("click", deleteImg);

    // 프로필 이미지 삭제
    $(".estate-mypage").find(".btn-delete").on("click", deleteMypageImg);

    // 사무소정보 팝업
    $(".btn-office").on("click",function(){
        popupOpen('popup-office');
    });

    // 상세검색 팝업
    $(".btn-search").on("click",function(){
        popupOpen('popup-search');
    });

    // 인증신청완료 팝업
    $(".btn-certify").on("click",function(){
        popupOpen('popup-certify');
    });

    // 회원구분안내
    $(".btn-member").on("click",function(){
        popupOpen('popup-member');
    });

    // 저장완료
    $(".btn-success").on("click",function(){
        popupOpen('popup-success');
    });
   
    
    // 모바일 매물 리스트 보기
    $(".btn-layer-view").on("click",function(){
       $(".estate-list").find(".fixed-banner").hide();
       $(".estate-list").find(".layer-list").show();
       $(".fixed-map").show();
    });

    // 모바일 지도보기 아이콘 클릭시
    $(".fixed-map").on("click",function(){
        $(".estate-list").find(".fixed-banner").show();
        $(".estate-list").find(".layer-list").hide();
        $(".fixed-map").hide();
    });

    $("#popup-office .popup-close, #popup-certify .popup-close").on("click",function(){
        _wrap.css({height:"auto", "overflow":"auto"});
    });
    
    $(".btn-text").on("click",function(){
        $(this).toggleClass("active");
        $(".info-text").toggleClass("active");

        if($(this).hasClass("active")){
            $(this).text("접기");
        }else{
            $(this).text("펼침");
        }
    });

    // 매물상세기본
    //slidePhotoInit();
    $(".slide-photo-tab").find("li").on("click", function(){
        //var idx = $(this).index();

        $(".slide-photo-tab").find("li").removeClass("on");
        $(this).addClass("on");

        slidePhotoInit(".slide-photo-list[data-photo-group='"+$(this).data("photo-group")+"']");
    });

    // 매물리스트기본
    $(".tab-list").find("li").on("click", function(){
        //var idx = $(this).index();

        $(".tab-list").find("li").removeClass("on");
        $(this).addClass("on");

    });

    fileUploadEvent();
}

function fileUploadEvent(){
    $('.btn-upload').on('change', function(){
        var filename;
        if(window.FileReader){
            filename = $(this)[0].files[0].name;
        } else {
            filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.file-name').val(filename);
    });
}

function slidePhotoInit(element){
    var galleryThumbs = new Swiper(element + ' .gallery-thumbs', {
        slidesPerView: 'auto',
        watchSlidesVisibility: true,
        watchSlidesProgress: true
    });

    var galleryTop = new Swiper(element + ' .gallery-top', {
        thumbs: {
            swiper: galleryThumbs
        },
        scrollbar: {
            el: element + ' .swiper-scrollbar',
            draggable: true,
        },
    });
}

function photoUploadCtrl(){
    $(".estate-register").find(".upload-box").each(function(i){
        var $photoList = $(this).children(".photo-list");
        var $photoNodata = $(this).children(".photo-nodata");
        var photoLength = $photoList.children('li').length;

        if(photoLength > 1 && photoLength < 6 ){
            $photoList.children('li:last-child').removeClass('none');
            $photoNodata.hide();
        }
        else{
            $photoList.children('li:last-child').addClass('none');
            if(photoLength == 6){
                $photoNodata.hide();
            }else{
                $photoNodata.show();
            }
           
        }
        
    });
}

// 첨부한 이미지 삭제
function deleteImg(e){
    $(this).parent('li').remove();
    photoUploadCtrl();
}

// 첨부한 프로필 이미지 삭제
function deleteMypageImg(){
    $(this).parents('.upload-box').find(".photo-nodata").show();
    $(this).parents('.upload-box').find(".photo-list").hide();
    //$(this).parent('li').remove();
}


function btnGroupEvent(){
    $(".btn-group").children("a").on("click", function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
}

function resizeEvent(){
    _wid = _w.width();
    _hei = _w.height();
   var  _listWid = 0;
    if(!isMobile){
        if(_wid >= _device){  // pc
            _gnb.show();
            _dim.hide();
            _menu.hide();
            _layerTooltip.hide();
            _listWid = 400;
        }else{
            _gnb.hide();
            _dim.hide();
            _menu.show();
            _menu.removeClass("active");
            _layerTooltip.show();
            _listWid = 0;
        }
    }

    _headerHei = $("header").outerHeight();
    _listTopHei = $(".list-select-top").outerHeight();
    _listTabHei = $(".layer-list-tab").outerHeight();
    _listFooterHei = $(".layer-list-footer").outerHeight();
    _contentHei = _headerHei+_listTopHei+_listTabHei;

    console.log(_listFooterHei);

    // 매물리스트 지도영역
    $("#map").css({
        width:_wid-_listWid,
        height:_hei-_headerHei
    });

    // 매물리스트 뿌려지는곳
    $(".layer-list-view").css({
        height:_hei-_contentHei
    });
 
    if(_wid >= _device){ //pc
        $(".estate-list").find(".fixed-banner").hide();
        $(".estate-list").find(".layer-list").show();
        $(".fixed-map").hide();
    }else{ //mobile
        $(".estate-list").find(".fixed-banner").show();
        $(".estate-list").find(".layer-list").hide();
    }

}

function menuEvent(){
    $(this).toggleClass("active");

    if(_menu.hasClass("active")){
        _dim.show();
        _gnb.slideDown();
    }else{
        _dim.hide();
        _gnb.slideUp();
    }
}


function popupCloseClick($e) {
    popupClose();
}

function popupClose(){
    TweenMax.killTweensOf( _dimmed );
    TweenMax.killTweensOf( _popup );
    _dimmed.hide();
    _popup.hide();
    _popup.css({top:0});
}

function popupOpen($idName){
    var $popupLayer = $("#"+$idName);
    popupClose();

    _dimmed.show();
    $popupLayer.show();

    var winHeight = _w.height();
    var popupHeight = $popupLayer.outerHeight();

    if(_wid >= 400){  // pc
        popupPosition($popupLayer);
        openScalePopup($popupLayer);
        _dimmed.css({backgroundColor:"rgba( 0, 0, 0, 0.5)"});
    }else{
        $('html,body').scrollTop( 0 );
        _dimmed.css({backgroundColor:"#fff"});

        if($idName == "popup-office" || $idName == "popup-certify" ){
            _wrap.css({height:winHeight, "overflow":"hidden"});
        }
    }
}

function popupPosition($popupLayer) {
    var st = _w.scrollTop();
    var winHeight = _w.height();
    var popupHeight = $popupLayer.outerHeight();

    var topValue = (st + ( winHeight / 2 - popupHeight / 2 ));
    if(_w.height() < popupHeight){
        topValue = st;
    }

    $popupLayer.css({top:topValue});
}

function openScalePopup($popupLayer){
    TweenMax.killTweensOf( $popupLayer );
    TweenMax.set( $popupLayer, { scale : 0.5, opacity:0});
    TweenMax.to( $popupLayer, 0.4, { scale: 1, opacity:1, ease:Expo.easeInOut });
}

function pageMove($selector){
	var selector = $selector;
	$(selector).on('click', function (e) {
		e.preventDefault();

		var _top = $($(this).attr('href'));
		var $target = _top.offset().top;

		$('html,body').animate({
			scrollTop: $target
		}, 500);
	});
}