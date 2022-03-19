$(function() {

	var $document = $(document),
		 $window = $(window),
		 $html = $('html');
	
	// pushr event when mobile device
	$document.on('click', '.view_menu', function(e){
		var $this = $(this),
			 $target = $('#gnb');

		e.preventDefault();

		$this.toggleClass('active');
		$target.toggleClass('active_nav');
		$html.toggleClass('is_active_pushr');
	});

	// gnb for mobile device
	$document.on('touchend click', '.is_sm #gnb a.d1', function(e){
		var $this = $(this),
			 $parent = $this.parents('li.d1');

		$parent.toggleClass('in').siblings().removeClass('in');
	});


	// gnb for PC
	var _timerGnb = null;
	var _isGnbHover = false;

	$document.on('mouseover', '.is_lg #gnb a.d1', function(e) {
		var $this = $(this),
			 $d1 = $this.parents('li.d1');

		_isGnbHover = false;
		_timerGnb();
		$d1.addClass('in').siblings().removeClass('in');
	});

	$document.on('click', '.is_lg #gnb a.d1', function(e){
		var $this = $(this),
			 $parent = $this.parents('li.d1');
		$parent.addClass('in').siblings().removeClass('in');
	});

	_timerGnb = function() {
		//setTimeout(function() {
		$document.on('mouseleave', '.is_lg #gnb', function(e){
			if (_isGnbHover === false) {
				$('.is_lg #gnb li.d1.in').removeClass('in');
			}
			if ( $('.is_lg #gnb li.d2').hasClass('in') ){
				$('.is_lg #gnb li.d2.in').closest('li.d1').addClass('in');
			}
		});
		//}, 1000);
	}

	// header change when scrolling
	$window.on('scroll', function(){
		var _scroll = $(window).scrollTop();

		if (_scroll >= 100){
			$html.addClass('is_scroll');
		} else {
			$html.removeClass('is_scroll');
		}
	});

	// Top event
	$document.on('click', '#top a', function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop : 0
		}, 500);
	});

	// less than three for list thumb
	$window.on('load', function (){
		var $listThumb = $('.section_list_thumb'),
			 _target = $('.section_list_thumb .col').length;

		if ( _target <= 3 ){
			$listThumb.addClass('less_three');
		}
	});

	// open family site list
	$document.on('click', '#viewList', function(e){
		var $this = $(this),
			 $parent = $this.parent();

		e.preventDefault();
		$parent.toggleClass('in').siblings().removeClass('in');
	});

	// device check
	/*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {*/
	if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { // ipad Á¦¿Ü
		$html.addClass('is_sm'); // mobile class
	} else {
		$html.addClass('is_lg'); // pc(768~) class
	}

});