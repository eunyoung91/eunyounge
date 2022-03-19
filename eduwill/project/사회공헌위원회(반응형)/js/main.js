$(function() {

	var $document = $(document),
		 $window = $(window),
		 $html = $('html');

	// bxSlider : visual
	$('#visualSlider').bxSlider({
		mode: 'fade',
		speed: 3000,
		pager: ($('#visualSlider li').length < 2) ? false : true,
		controls: ($('#visualSlider li').length < 2) ? false : true,
		auto: false
	});

	// bxSlider : share
	var slider,
		 _settings = {
			auto: true,
			//autoDirection: 'prev',
			speed: 800,
			startSlide: 7,
			minSlides: 1,
			maxSlides: 3,
			moveSlides: 1,
			pager: false,
			controls : true,
			onSliderLoad: function (currentIndex) {
				$('#shareSlider>li:not(.bx-clone)').eq(currentIndex).addClass('in');
			},
			onSlideAfter: function ($slideElement, oldIndex, newIndex) {
				$('#shareSlider li.in').removeClass('in'); // remove the active slide class
				$('#shareSlider>li:not(.bx-clone)').eq(newIndex).addClass('in').siblings().removeClass('in');
			}
		};

	// for PC(1024 ~ )
	function initPc(){
		_settings.maxSlides = window.outerWidth < 1024 ? 1 : 9;
	}

	// for Tablet(768 ~ )
	function initTablet(){
		_settings.maxSlides = window.outerWidth < 768 ? 1 : 5;
		console.log(1);
	}

	// for PC(1024 ~ )
	$window.resize(function() {
		if ( (window.outerWidth<1024 && window.prevWidth>=1024) || (window.outerWidth>=1024 && window.prevWidth<1024) ){
			initPc();
			slider.reloadSlider(_settings);
		}
		window.prevWidth = window.outerWidth;
	});

	// for Tablet(768 ~ )
	$window.resize(function() {
		if ( (window.outerWidth<768 && window.prevWidth>=768) || (window.outerWidth>=768 && window.prevWidth<768) ){
			initTablet();
			slider.reloadSlider(_settings);
		}
		window.prevWidth = window.outerWidth;
	});

	$document.ready(function() {
		initPc();
		initTablet();
		slider = $('#shareSlider').bxSlider(_settings);

		$document.on('click', '.section_share .bx-next, .section_share .bx-prev', function(){
			slider.stopAuto();
			slider.startAuto();
		});
	});

	// count 
	$('.count').countTo({
		from: 0,
		speed: 2000,
		formatter: function (value, options) {
			return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
		}
	});

	// 보도자료
	$document.on('click', '.bbs_collapse .item a.subject', function(e){
		var $this = $(this),
			 $parent = $this.parents('.item');

		e.preventDefault();
		$parent.addClass('in').siblings().removeClass('in');
	});

	// 보도자료 다중 말줄임
	$('.ellipsis').dotdotdot({
		watch : true,
		height: 71
	});


});