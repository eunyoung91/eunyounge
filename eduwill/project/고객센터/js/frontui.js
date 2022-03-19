$(function(){
	// gnb menu
	$('#gnb').on('mouseenter focusin', function(){
		$(this).parent().parent().stop().animate({ height : 521 + 'px'}, 100);
	});
	$('#gnb').on('mouseleave focusout', function(){
		$(this).parent().parent().stop().animate({ height : 207 + 'px'}, 100);
	});
	$('#gnb > ul > li').each(function(idx){
		$(this).on('mouseenter focusin', function(){
			$('#gnb > ul > li').removeClass('current');
			$(this).addClass('current');
		});
		$(this).on('mouseleave focusout', function(){
			$(this).removeClass('current');
		});
	});

	$('.mquick li a').each(function(e){
		$(this).on('mouseenter', function(){
			$('.mquick li a').each(function(){
				$(this).find('img').attr({
					'src' : $(this).find('img').attr('src').replace('_on', '_off')
				});
			});
			$(this).find('img').attr({
				'src' : $(this).find('img').attr('src').replace('_off', '_on')
			});
		});
		$(this).on('mouseleave', function(){
			$(this).find('img').attr({
				'src' : $(this).find('img').attr('src').replace('_on', '_off')
			});
		});
	});

	$('.itemgroup>a').click(function(){
		if (  $('#itemLayer').is(':hidden')) {
			$('#academyLayer').hide();
			$('#itemLayer').show();
		} else {
			$('#itemLayer').hide();
		}
		return false;
	});

	$('.academy>a').click(function(){
		if (  $('#academyLayer').is(':hidden')) {
			$('#itemLayer').hide();
			$('#academyLayer').show();
		} else {
			$('#academyLayer').hide();
		}
		return false;
	});
});
