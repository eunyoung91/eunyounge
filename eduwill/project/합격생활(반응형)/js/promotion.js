var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$(function(){
	init();

	$(window).on('resize', function(){
		checkResolution();
	});
});

function init(){
	onComplete();
	checkResolution();
}

function checkResolution(){
	if( isMobile || $(window).innerWidth() < 1280 ){
		replaceImagePaths('pc', 'mobile');
		//console.log('mobile');
	} else {
		replaceImagePaths('mobile', 'pc');
		//console.log('pc');
	}
}

function replaceImagePaths(basic, change) {
	$('.promotion img').each(function(){
		$(this).attr('src', $(this).attr('src').replace(basic, change));
	});
}

function onComplete(){
	var $title = $('.promotion-title');

	TweenMax.fromTo( $title.find('.motion-1'), .5, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: .3, ease: Back.easeInOut });
	TweenMax.fromTo( $title.find('.motion-2'), .5, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: .4, ease: Back.easeInOut });
	TweenMax.fromTo( $title.find('.motion-3'), .5, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: .5, ease: Back.easeInOut });
	TweenMax.fromTo( $title.find('.motion-4'), .5, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: .6, ease: Power3.easeInOut });
	TweenMax.fromTo( $title.find('.motion-5'), .5, { opacity: 0, rotation: -30 }, { opacity: 1, rotation: 0, delay: 1.2, transformOrigin: 'center center', ease: Back.easeOut });
	TweenMax.fromTo( $title.find('.motion-6'), .5, { opacity: 0, rotation: 30 }, { opacity: 1, rotation: 0, delay: 1.2, transformOrigin: 'center center', ease: Back.easeOut });
	TweenMax.fromTo( $title.find('.motion-7'), .5, { opacity: 0, scale: .5 }, { opacity: 1, scale: 1, delay: .9, ease: Power3.easeInOut });
	TweenMax.fromTo( $title.find('.period'), .5, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, delay: 1.0, ease: Power3.easeInOut });
}
