var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
var url = window.location.href;
var str = 'www.eduwill.net';
var checkUrl = url.indexOf(str);

$(function () {
	frontInit();
});

function frontInit() {
	baseEvent();
}

function baseEvent() {
	//tablist
	// $('.tab-list li').on('click', function () {
	// 	$(this).toggleClass('active');
	// });

	//mobile
	if (isMobile) {
		//list-box height 값 제한 - 토익일 경우
		var visiblelist = $('.list-box li').outerHeight();
		$('.list-scroll').css("height", visiblelist * 3.8 );
	}
}


