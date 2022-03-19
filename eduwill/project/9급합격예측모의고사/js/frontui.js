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

	// 공지사항
	$(".notice_zone li a").each(function(a){
		$(this).click(function(){
			$(".notice_layer, .dimm").show();
			return false;
		});
	});

	// 에듀윌 명중신화 팝업
	$(".target_arc ul li > a").each(function(i){
		$(this).click(function(){
			$(".target_pop").hide();
			$(".target_pop").eq(i).show();
			return false;
		});
	});

	$(".close_pop").click(function(){
		$(".target_pop").hide();
		return false;
	});

	// 이미지 슬라이드
	$('#slider').bxSlider({
		mode: 'horizontal',
		auto: true,
		pause: 5000,
		pagerCustom: '#bx-pager',
		onSliderLoad: function(){
		}
	});

	$(".tab_a li a").each(function(idx){
		$(this).click(function(){
			$(".tab_cont").hide();
			$(".tab_cont").eq(idx).show();
			$(".tab_a li").removeClass("on");
			$(this).parent().addClass("on");
			$(".item_section").hide();
			return false;
		});
	});

	$(".tab_a li.t1 a").click(function(){
		$(".item_section").show();
	});

	$(".tab_b li a").each(function(idx){
		$(this).click(function(){
			$(".tab_b li").removeClass("on");
			$(this).parent().addClass("on");
			return false;
		});
	});

	$(".tab_c.type1 li a").each(function(idx){
		$(this).click(function(){
			$(".tab_c.type1 li").removeClass("on");
			$(this).parent().addClass("on");
			return false;
		});
	});

	$(".tab_c.type2 li a").each(function(idx){
		$(this).click(function(){
			$(".tab_c.type2 li").removeClass("on");
			$(this).parent().addClass("on");
			return false;
		});
	});

	// select box
	var select = $(".select_box .selectText");
	select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("label").text(select_name);
	});

	$(".close_nocie_layer").click(function(){
		$(".notice_layer, .dimm").hide();
		return false;
	});

	// 검색
	$("#keyword").on("focusin click", function(){
		$(this).val(" ");
	}).blur(function(){
		if( $(this).val() == " ") { $(this).val("검색어를 입력해 주세요"); }
	});

});
