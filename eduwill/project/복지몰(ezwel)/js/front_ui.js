var $ = jQuery.noConflict();

$(function(){
	// 메인메뉴
	$('.btn_category').on('click', function(){
		/*if ( $('#gnb').is(':hidden') ) {
			$('.btn_gnb').removeClass('open');
			$('.btn_gnb').addClass('close');
			$('#gnb').show();
		} else {
			$('.btn_gnb').removeClass('close');
			$('.btn_gnb').addClass('open');
			$('#gnb').hide();
		}*/
		$('#gnb').show();
		$('.dim').show();
		$('#wrap').addClass('fixed');
		$('.gnb_cont').animate({
			left: 0
		}, 500);
		return false;
	});

	$('.close_gnb, .dim').on('click', function(){
		$('#wrap').removeClass('fixed');
		$('.gnb_cont').animate({
			left: "-80%"
		}, 300, function(){
			$('#gnb').hide();
		});
		return false;
	});

	// 메인 아이템 메뉴 열고닫기
	$('.item_btn').each(function(i){
		$(this).on('click', function(){
			if ( $('.item > div').eq(i).hasClass('open') ) {
				$('.item > div').eq(i).removeClass('open');
				$('.item h2 em.off').eq(i).show();
				$('.item h2 em.on').eq(i).hide();
			} else {
				$('.item > div').removeClass('open');
				$('.item > div').eq(i).addClass('open');
				$('.item h2 em.on').eq(i).show();
				$('.item h2 em.off').eq(i).hide();
			}
			return false;
		});
	});

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

	// 로그인 한글,특수기호 키패드보기
	$('.key_btn').each(function(i){
		$(this).on("click", function(){
			$('.key_pic div').hide();
			$('.key_pic div').eq(i).show();
		});
	});

	// 탭메뉴 컨트롤
	$('.g_tab_a li a, .g_tab_b li a').each(function(i){
		$(this).on("click", function(){
			$('.tab_cont').hide();
			$('.tab_cont').eq(i).show();
			$('.g_tab_a li, .g_tab_b li').removeClass('on');
			$(this).parent().addClass('on');
			return false;
		});
	});

	// 결제방법 선택시 내용변경
	$('.radio_list li input').each(function(i){
		$(this).on("click", function(){
			if($(this).attr("checked") == "checked"){
				$(".pay .g_list_d").hide();
				$(".pay .g_list_d").eq(i).show();
			}
		});
	});

});

// 모바일 gnb 터치 스크롤 스크립트
;(function($){
var TouchScrollMenu = function(element, _options){
	this.options  = _options;
	this.$element = $(element);
	this.$layout;
	this.$backdrop;

	this.create();
}

TouchScrollMenu.DEFAULTS = {

}

TouchScrollMenu.prototype.create = function(){
	this.$backdrop = $('<div class="touchScrollMenu-backdrop"/>').appendTo("body");
	if( !this.$element.parent().hasClass('touchScrollMenu-layout') ) this.$layout = this.$element.wrap('<div class="touchScrollMenu-layout"/>').parent();
	
	// iscroll
	this.iscroll = new IScroll(this.$element[0], {
		click: true,
		mouseWheel: true
		// scrollbars: true
	});

	// window - resize	
	$(window).on("resize.TouchScrollMenu", $.proxy(function(e){
		this.$element.height( this.$element.closest(".touchScrollMenu-layout").height() );
		this.iscroll.refresh();
	}, this));
	
	window.onorientationchange = function() {
		$(window).trigger('resize');
	}
	
	// layout
	this.layoutTouch();
	
	// active image
	var $img = $('<div style="position:absolute;top:0;left:100%;width:100%;height:100%;z-index:9999999; cursor:pointer;"></div>')
	.on("click", $.proxy(this.hide, this));
	
	this.$element.append($img);
	
	$(window).trigger("resize.TouchScrollMenu");
}

TouchScrollMenu.prototype.show = function(){
	$("html, body").addClass("touchScrollMenu-open");
	
	this.$backdrop.fadeIn();
	this.$layout.show();
	var th = this;
	setTimeout(function(){
		th.$element.show().stop(true).animate({marginLeft : 0}, 400, function(){
			$(window).trigger("resize.TouchScrollMenu");
		});
		$("#wrap").stop(true).animate({left : th.$element.width()}, 400, function(){ /* ... */ });
	},100);
}

TouchScrollMenu.prototype.hide = function(){
	$("html, body").removeClass("touchScrollMenu-open");

	this.$element.stop(true).animate({marginLeft :  this.$element.width()*-1}, 400, $.proxy(function(){
		$(this).hide();
		this.$backdrop.fadeOut();
		this.$layout.hide();
	}, this));
	
	$("#wrap").stop(true).animate({left : 0}, 400, function(){ /* ... */ });
}

TouchScrollMenu.prototype.layoutTouch = function(){
	var that = this,
		flickingStart, isScroll;
	
	this.$layout.on("touchstart", function(e){
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];

		$(document).off("touchmove", onMove)
				   .off("touchend", onEnd);

		flickingStart = { pageX : touch.pageX, pageY : touch.pageY };
		isScroll      = false;

		$(document).on("touchmove", onMove)
				   .on("touchend", onEnd);
				   
		e.target === that.$layout[0] && e.preventDefault();
	});

	function onMove(e){
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];

		if(!isScroll && Math.abs(touch.pageY - flickingStart.pageY) >= 20){
			// console.log( "isScroll ~~");
			isScroll = true;
		}
		if(isScroll) e.preventDefault();
	}

	function onEnd(e){
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
			dx = touch.pageX-flickingStart.pageX,
			dy = touch.pageY-flickingStart.pageY,
			direction;

		if(isScroll){}

		if( Math.sqrt(dx*dx+dy*dy) < 10 ){ // click
			e.target === that.$layout[0] && that.hide();
		}

		$(document).off("touchmove").off("touchend");
	}
}

$.fn.touchScrollMenu = function(_options){
	return this.each(function(){
		var $this   = $(this),
			data    = $this.data('ui.touchScrollMenu'),
			options = $.extend({}, TouchScrollMenu.DEFAULTS, $this.data(), typeof _options == 'object' && _options);

		if(!data) $this.data('ui.touchScrollMenu', (data = new TouchScrollMenu(this, options)));
		if(typeof _options == 'string') data[_options]();
		else data.show();
	});
};

})(jQuery);