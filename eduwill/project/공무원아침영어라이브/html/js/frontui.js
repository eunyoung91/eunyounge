$(function(){
	// mouseover img
	var $trigger = $(".target_arc ul li a, .mock_gnb ul li a, .paging a");

	$trigger.each(function(i){
		$(this).mouseover(function(){
			$(this).find("img").attr({
				"src" : $(this).find("img").attr("src").replace("_off","_on")
			});
		});

		$(this).mouseleave(function(){
			$(this).find("img").attr({
				"src" : $(this).find("img").attr("src").replace("_on","_off")
			});
		});
	});

	$("#edu_guide02 a").click(function(){
		$("#edu_guide02").hide();
		$("#edu_guide01").show();
		return false;
	});
	$("#edu_guide01 a, .btn_allLayer_close").click(function(){
		$("#edu_guide01").hide();
		$("#edu_guide02").show();
		return false;
	});
	
	// 회차슬라이딩
	//$('.number_slide').bxSlider({ pause:4000,pager:false,controls:true});

	$('.date_list ul li .list .day').on('mouseenter', function(){
		$('.date_list ul li .list .day').removeClass('on');
		$(this).addClass('on');
	});
	$('.date_list ul li .list .day').on('mouseleave', function(){
		$('.date_list ul li .list .day').removeClass('on');
	});

});
