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
		$(".g_body").css("height",$("#wrap").height() - 135 +"px");
		$(".dim").show();
		$("#wrap").addClass("fixed");
		$("#gnb").show();
		$("#gnb").css("box-shadow","5px 0 50px 0 #000");
		$("#gnb").animate({
			left: 0
		}, 500, function(){
			$(".close_gnb").show();
		});
		return false;
	});

	$(".close_gnb, .dim").on("click", function(){
		$("#gnb").css("box-shadow","0 0 0 0");
		$("#gnb").animate({
			left: "-70%"
		}, 300, function(){
			$(".close_gnb").hide();
		});
		$(".sidemenu").css("height",0);
		$(".g_body").css("height",0);
		$("#wrap").removeClass("fixed");
		$(".dim").hide();
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

	// 결제방법 선택시 내용변경
	$('.method_list li label').each(function(i){
		$(this).on("click", function(){
			$(".method_desc").hide();
			$(".method_desc").eq(i).show();
			$(".method_list li").removeClass("on");
			$(this).parent().addClass("on");
		});
	});

	// footer
	$('.bottomTel>a').click(function(){
		if ( !$(this).hasClass('open') ) {
			$(this).addClass('open');
			$('.bottomTel>ul').slideDown(300);
			$('.dimm').show();
		} else {
			$(this).removeClass('open');
			$('.bottomTel>ul').slideUp(300);
			$('.dimm').hide();
		}
		return false;
	});

});