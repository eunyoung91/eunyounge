$(function(){

	"use strict";

	var $window = $(window),
		$html = $('html'),
		$body = $('body'),
		$document = $(document);

	// select option ellipsis
	var _maxLength = 24;
	$('.select option').each(function(){
		if($(this).text().length >= _maxLength){
			$(this).text($(this).text().substr(0,_maxLength)+'...');
		}
	});


	// modal
	$document.on('click', '[data-modal]', function(e){
		var _el = $(this).attr('href'),
			$target = $(_el);

		e.preventDefault();

		if ( !$target.hasClass('in')){
			$('#wrap').append('<div class="white-dim"></div>');
			$body.addClass('fix');
			$target.addClass('in');
		} else {
			$('.white-dim').detach();
			$body.removeClass('fix');
			$target.removeClass('in');
		}
	});

	// mymenu active
	$('[data-toggle-menu]').on('click', function(e){
		e.preventDefault();

		var $myMenu = $('#myMenu');
		var _core = function() {
			$html.toggleClass('is-mymenu');
//			if ($html.hasClass('is-mymenu')) {
//				$myMenu.attr('tabindex', 0).focus();
//			} else {
//				$(this).focus();
//			}
		};
		_core();
	});

	$('.variable-width').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		centerMode: false,
		variableWidth: true,
		responsive: [
		{
			breakpoint: 1280,
			settings: {
			arrows: true,
			slidesToShow: 5,
			slidesToScroll: 1
			}
		},
		{
			breakpoint: 1100,
			settings: {
			arrows: false,
			slidesToShow: 4,
			slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
			arrows: false,
			slidesToShow: 3,
			slidesToScroll: 1
			}
		}
		]
	});

	if ( $('.slick-slide').length > 6 )	{
		$('.slick-arrow').show();
	} else {
		$('.slick-arrow').hide();
	}

	$document.on('click', '.question-section .list .subject a', function(i){
		var $base = $('html, body'),
			  $target = $(this).parents('.item');

		i.preventDefault();
		$target.toggleClass('in').siblings().removeClass('in');

		$base.animate({
			scrollTop: $target.offset().top
		}, 500);
	});

	function speaker(){
		if ( $('.speaker > p').width() > $('.speaker').width() ){
			$('.speaker').children('p').addClass('marquee')
		} else 
			$('.speaker').children('p').removeClass('marquee');{;
		}
	}

	speaker();

	$window.on('resize', function(){
		speaker();
	});

	/*$document.on('click', '#viewList', function(){
		var $this = $('#viewList'), 
			$parent = $this.parent();
		$parent.toggleClass('in').siblings().removeClass('in');
		if($parent.hasClass('in')) {
			$("body").click(function(e) {
				$parent.each(function() {
					if(!$parent.has(e.target).length) { 
						$parent.removeClass('in')
					} 
				})
			});
		}
		$('.select-list li a').each(function(i){
			$(this).click(function(){
				$('.select>a').children('span').text($('.select-list li a').eq(i).text());
				$parent.removeClass('in');
				return false;
			});
		});
	});*/

	// mCustomScrollbar
	/*var mql = window.matchMedia("screen and (min-width: 768px)");
	var _customScroll = function(){
		$('#customScrollbarTimeTable, #customScrollbarNotice').mCustomScrollbar({
			theme: 'minimal-dark'
		});
	};

	if (mql.matches) {
		_customScroll();
	}*/


});