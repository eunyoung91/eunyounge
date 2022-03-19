var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
var url = window.location.href;
var str = 'event.eduwill.net';
var checkUrl = url.indexOf(str);

$(function(){
	frontInit();
});

function frontInit(){
	pageMove('.page-move');

	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		arrows: false,
		dots:false,
		slidesToScroll: 1,
		speed: 800,
		centerMode: true,
		variableWidth: true,
	});
	$('.slider2').slick({
		autoplay: true,
		autoplaySpeed: 3500,
		infinite: true,
		arrows: true,
		dots:false,
		slidesToScroll: 1,
		speed: 800
	});
	
	if(!isMobile){	
	}
	else{
		applyTabControl('.lecture-container');
	}
}

function applyTabControl($seletor) {
	$($seletor).find('.lecture-tab').children('a').on('click', function () {
		var idx = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$($seletor).find('.lecture-section').hide();
		$($seletor).find('.lecture-section').eq(idx).show();
	});
}


