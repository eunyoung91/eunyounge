$(function(){
    init();
});

function init(){
    create();
    addEvent();
}

function create(){
	_w = $(window);
}

function addEvent(){
	
	pageMove('.page-move');

    _w.on("resize", resizeEvent);
    resizeEvent();

	//default
	$('.quest-panel').addClass('zoom2');
	$('.quest-panel').addClass('layout1');

	//zoom
	$(".zoom-option button").on("click",function(e){
		$('.quest-panel').removeClass('zoom1').removeClass('zoom2').removeClass('zoom3');
	
		$(this).toggleClass("active");
		$(this).siblings().removeClass('active');

		$('.quest-panel').toggleClass(e.target.value);	
	});

	//layout
	$(".layout-option button").on("click",function(e){
		$('.quest-panel').removeClass('layout1').removeClass('layout2').removeClass('layout3');
	
		$(this).toggleClass("active");
		$(this).siblings().removeClass('active');

		$('.quest-panel').toggleClass(e.target.value);	
	});

}

// pageMove
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

function resizeEvent(){
    _wid = _w.width();
    _hei = _w.height();

   _headerHei = $("#header").outerHeight();
   _footerHei = $("#footer").outerHeight();
    //console.log(_hei);

    $(".answer-panel").css({
        height:_hei-_headerHei-_footerHei-90
	});
	
}

// popup
function popupClose($dimName, $idName){
	var dimName = $dimName;
	var $popupLayer = $("#"+$idName);
	$(dimName).hide();
	$popupLayer.hide();
}
function popupOpen($dimName, $idName){
	var dimName = $dimName;
	var $popupLayer = $("#"+$idName);
	$(dimName).show();
	$popupLayer.show();
	popupPosition($popupLayer);
	openScalePopup($popupLayer);
}
function popupPosition($popupLayer) {
	var st = $(window).scrollTop();
	var winHeight = $(window).height();
	var popupHeight = $popupLayer.outerHeight();
	var topValue = (st + ( winHeight / 2 - popupHeight / 2 ));
	if($(window).height() < popupHeight){
		topValue = st;
	}
	$popupLayer.css({top:topValue});
}
function openScalePopup($popupLayer){
	TweenMax.killTweensOf( $popupLayer );
	TweenMax.set( $popupLayer, { scale : 0.5, opacity:0});
	TweenMax.to( $popupLayer, 0.4, { scale: 1, opacity:1, ease:Expo.easeInOut });
}