$(document).ready(function(){
	gnbUi();

	// GNB
	function gnbUi(){
		var gnb1dep = $(".hd_gnb>li>a");
		var gnb2dep = $(".hd_gnb>li>ul");
		var gnbPaper = $(".hd_menu");
		var gnbWrap = $(".hd_spot");

		$(gnb1dep).on("mouseenter focusin", function(){
			$(gnb2dep).show();
			$(gnbPaper).show();
		});

		$(gnbWrap).on("mouseleave focusout", function(){
			$(gnb2dep).hide();
			$(gnbPaper).hide();
		});
	}

	// 메인 교수소개 Tab UI
	$(".g_tab_a li a").each(function(i){
		$(this).on("click", function(){
			$(".gc_tabcon").hide();
			$(".gc_tabcon").eq(i).show();
			$(".g_tab_a li a").removeClass("active");
			$(this).addClass("active");
			return false;
		});
	});

	// 로그인팝업 닫기
	$(".close_btn").click(function(){
		$(".login_wrap").hide();
	});

	// LNB 
	$("#lnb > ul > li > a").each(function(i){
		if ( $("#lnb > ul > li").find("ul.lnb_2depth").length )
		{
			$(this).parent().addClass("arrow");
		}
		$(this).click(function(){
			if ( $("#lnb > ul > li").find("ul.lnb_2depth").length ) {
				$(this).parent().toggleClass("open");
			}
		});
	});


	// 탭메뉴
	$(".tab_cont").first().show();
	$(".g_tab_b li a").each(function(i){
		$(this).on("click", function(){
			$(".tab_cont").hide();
			$(".tab_cont").eq(i).show();
			$(".g_tab_b li").removeClass("on");
			$(this).parent().addClass("on");
			return false;
		});
	});
});

