var $ = jQuery.noConflict();

$(function(){
	// 탭메뉴 컨트롤
	$(".tab_cont").first().show();
	$(".g_tab_a li a, .g_tab_b li a, .g_tab_c li a").each(function(i){
		$(this).on("click", function(){
			$(".tab_cont").hide();
			$(".tab_cont").eq(i).show();
			$(".g_tab_a li, .g_tab_b li, .g_tab_c li").removeClass("on");
			$(this).parent().addClass("on");
			return false;
		});
	});

	// 좌측 GNB메뉴
	$(".btn_gnb").on("click", function(){
		$(".sidemenu").css("height",$("#wrap").height()+"px");
		$(".g_body").css("height",$("#wrap").height() - 100 +"px");
		$(".dim").show();
		$("#wrap").addClass("fixed");
		$("#gnb").show();
		$("#gnb").animate({
			left: 0
		}, 500, function(){
			$(".close_gnb").show();
		});
		return false;
	});

	$(".close_gnb, .dim").on("click", function(){
		$(".sidemenu").css("height",0);
		$(".g_body").css("height",0);
		$("#wrap").removeClass("fixed");
		$(".dim").hide();
		$("#gnb").animate({
			left: "-85%"
		}, 300, function(){
			$(".close_gnb").hide();
		});
		return false;
	});

	// 우측 수강신청메뉴
	$(".btn_myinfo").on("click", function(){
		$("#apply").show();
		$(".a_body").css({
			"height" : $("#wrap").height() - 100 +"px",
			"overflow-y" : "scroll"
		});
		return false;
	});
	
	$(".close_layer").on("click", function(){
		$("#apply").hide();
		return false;
	});

	// 로그인 키보드키판 보기
	$(".keyboard li a").each(function(e){
		var activeMenu = $(this).attr("href");

		$(this).click(function(){
			$(".key_img").hide();
			$(activeMenu).show();
			return false;
		});
	});

	// 관심과정선택
	$(".join_step01 .favorite_box .item_list li a").each(function(i){
		$(this).click(function(){
			if ( $(this).parent("li").hasClass("on") ){
				$(this).parent("li").removeClass("on")
			} else {
				$(this).parent("li").addClass("on")
			}
		});
	});

});