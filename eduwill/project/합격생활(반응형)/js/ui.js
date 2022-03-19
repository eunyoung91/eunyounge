$(function(){

	"use strict";

	var $window = $(window),
		$html = $('html'),
		$body = $('body'),
		$document = $(document);

	// select option ellipsis
	var _maxLength = 18;
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

		$target.toggleClass('in');
		if ( $(this) == false ){
			$target.removeClass('in');
		}
	});

	// modal-confirm scroll event
	if($('#modalConfirm').length > 0) {
		$window.scroll(function(){
			var $modal = $('#modalConfirm .modal-wrap'), 
				_parent = $('#modalConfirm').parent(),
				_top =_parent.offset().top,
				_bottom = _top + _parent.outerHeight() - $modal.outerHeight() - 100;

			if( $(this).scrollTop() >= _top && !($(this).scrollTop() >= _bottom) ){
				$modal.addClass('fixed');
				$modal.css('top', '');
			} else {
				$modal.removeClass('fixed');
				if( $(this).scrollTop() > _bottom ){
					$modal.css('top', _parent.outerHeight() - $modal.outerHeight() - 100 );
				}
			}
		});
	}

	// modal-plan scroll event
	$('#modalPlan input[type="text"]').on('focus click', function(){
		var _height = $('#modalPlan').prop('scrollHeight');
		$('#modalPlan').animate({
			scrollTop: _height
		}, 500);
	});

	// progress
	var _progressValue = $('#progressbar').data('value');
	$('#progressbar').progressbar({
		value: _progressValue
	});

	$('.progressbar').each(function(){
		$(this).progressbar({
			value: $(this).data('value')
		});
	});


	// mymenu active
	$('[data-toggle-menu]').on('click', function(e){
		e.preventDefault();

		var $myMenu = $('#myMenu');
		var _core = function() {
			$html.toggleClass('is-mymenu');
		};
		_core();
	});

	// plan shortcut
	if($('#planAction').length > 0) {
		var _planTop = $('#planAction').offset().top;

		$('[data-shortcut]').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({ scrollTop: _planTop }, 500);
		});

		$window.on({
			'resize' : function(){
				_planTop = $('#planAction').offset().top;
			},
			'scroll' : function(){
				var scrollHeight = $(document).height();
				var windowHeight = $(window).height();
				var scrollPosition = windowHeight + $(window).scrollTop();
				
				if( $(window).scrollTop() >= (_planTop-windowHeight) || (scrollHeight - scrollPosition) / scrollHeight === 0){
					$('[data-shortcut]').parent().fadeOut();
				}else{
					$('[data-shortcut]').parent().fadeIn();
				}
			}
		});
	}


	if($('#tutorialSlider').length > 0) {
		var tutorialSlider = $('#tutorialSlider').bxSlider({
			mode: 'horizontal',
			infiniteLoop: false,
			auto: false,
			pause: 4000,
			controls: true,
			nextText: '다음으로',
			prevText: '이전으로',
			hideControlOnEnd: true,
			pagerCustom: $('#tutorialPager'),
		});
	}

});

/* bxSlider 콘텐츠 초기화 - ECO로부터 배너를 로드 후 초기화 할 수 있도록 함수로 변경.*/
var bxSliderInit = function(){
	var _condition = ($('[id=bannerSlider] li').length < 2) ? false : true // if only one slide
	$('[id=bannerSlider]').bxSlider({
		mode: 'horizontal',
		auto: _condition,
		pause: 4000,
		controls: true,
		pager: _condition,
		touchEnabled: _condition,
		oneToOneTouch: _condition
	});

}

/* 합격계획표 차트 초기화 - 각 요소값을 설정하여 차트를 그릴 수 있도록 변경. */
var planChartInit = function(names, values){
	var config = {
		type: 'doughnut',
		data: {
			datasets: [{
				data: values,
				backgroundColor: [
					'#fed637',
					'#fe8e2e',
					'#ed7066',
					'#a26fd8',
					'#5286e2',
					'#1abb77',
					'#42d9b4'
				],
				hoverBackgroundColor: [
					'#fed637',
					'#fe8e2e',
					'#ed7066',
					'#a26fd8',
					'#5286e2',
					'#1abb77',
					'#42d9b4'
				],
				hoverBorderColor: '#fff'
			}],
			labels: names,
		},
		options: {
			responsive: true,
			legendCallback: function(chart) {
				var text = [];
				//text.push('<ul class="' + chart.id + '-legend">');
				text.push('<ul class="legend">');

				var data = chart.data;
				var datasets = data.datasets;
				var labels = data.labels;

				if (datasets.length) {
					for (var i = 0; i < datasets[0].data.length; ++i) {
						text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
						if (labels[i]) {
							//text.push(labels[i] + ' ' +datasets[0].data[i] + '%');
							text.push(labels[i]);
						}
						text.push('</li>');
					}
				}
				text.push('</ul>');
				return text.join('');
			},
			legend: {
				// since you're providing your own legend
				display: false,
			},
			title: {
				display: false,
				//text: 'Chart.js Doughnut Chart'
			},
			tooltips: {
				bodyFontSize: 16
			},
			cutoutPercentage: 65, // chart width
			animation: {
				animateScale: true,
				animateRotate: true,
				onComplete: (function(){
					$('#grapthInfo').fadeIn(); // info show
				})
			}
		}
	};

	var $doughnutChart =  document.getElementById('doughnutChart');

	if (typeof($doughnutChart) != 'undefined' && $doughnutChart != null){
		var ctx = document.getElementById('doughnutChart').getContext('2d');
		window.myDoughnut = new Chart(ctx, config);
		var legend = myDoughnut.generateLegend();
		document.getElementById('doughnutChartLegend').innerHTML = legend;
	
	}else{
		//console.log("$doughnutChart is undefined or null!");
	}
}