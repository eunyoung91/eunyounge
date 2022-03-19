var $ = jQuery.noConflict();

// 주소창 없애기
window.addEventListener('load', function(){
    document.body.style.height = (document.documentElement.clientHeight + 5) + 'px';
    window.scrollTo(0, 1);
}, false);

$(function(){
	//gnb
	$('#gnb').scrollFix({})
	
	//js tab
	if($('.js_tab').length > 0) {	
		$('.js_tab > a').on("click", function() {
			var _index = $(this).index();
			$(this).parent().find('> a').eq(_index).addClass('active').siblings().removeClass('active')
			$(this).parent().next('.js_tab_cont').find('> div').eq(_index).show().siblings().hide();
			return false;
		});
	}
	
	//js toggle
	$('.js_toggle li').click(function(){
		$(this).addClass('open').find('.detail').toggle().parent().siblings('li').removeClass('open').find('.detail').hide();
		if($(this).find('.detail').css('display') === 'none') $(this).removeClass('open');
		return false;
	})
	
	$('.js_alarm_02 button').on("click", function() {
		$(this).addClass('on').siblings('button').removeClass('on')
	});

	$('.js_alarm_01 button').on("click", function() {
		$(this).toggleClass('on')
		if($(this).hasClass('on')) {
			$(this).text('켬');
		} else {
			$(this).text('끔');
		}
	});
	
	//question active
	if($('.js_sel').length > 0) {
		$('.js_sel li').on("click", function() {
			$(this).addClass('active').siblings('li').removeClass('active')
			return false;
		});
	}
	
	//layer close
	$('.layer_wrap .close').click(function(){
		$(this).parents('.layer_wrap').hide();
		$('.dim').hide()
		return false;
	})

	// 패밀리사이트
	$('.footer_btn li.btn2>a').click(function(){
		if ( $('.footer_btn li.btn2').is(".over") ){
			$('.family_site').hide();
			$('.footer_btn li.btn2').removeClass('over');
		} else {
			$('.family_site').show();
			$('.footer_btn li.btn2').addClass('over');
		}
		return false;
	});

	//랭킹 슬라이더
	var bx_num01 = $("#rankSlider li").length;
	var ticker01 = $('#rankSlider').bxSlider({
		minSlides: 10,
		maxSlides: 100,
		slideWidth: 900,
		slideMargin: 0,
		ticker: true,
		mode: 'vertical',
		tickerHover: true,
		speed:500*bx_num01
	});
		

});

layerFnc = function (obj, param) {//레이어
	var _obj = $(obj);
	var _target = $(param);
	var _height = _target.height()
	
	$('.dim').show();

	if(_target.hasClass('full_layer')) {
		_target.show().css('margin-top', 0);
		_target.height($(window).height())
	} else {
		_target.show().css('margin-top', -(_height/2));
	}

};//레이어



