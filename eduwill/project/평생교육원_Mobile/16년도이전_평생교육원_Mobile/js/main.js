

$(document).ready(function () {

	// 슬라이드 설정
	$("#owl-example").owlCarousel({
		singleItem : true,
		pagination: true
	
	});

	// Header Tab Button
	/*
	$(".m_g_tab a").click(function() {

		$(".m_g_tab a").removeClass("active");
		$(".m_g_content").hide();
		$(this).addClass("active");

		var activeTab = $(this).attr("href");
		$(activeTab).show();
		return false;
	});
	*/

	// $(".gnb_all a").trigger("click");

	// $(".m_g_content").find("li:odd").addClass("even");


	// Item Tab UI
	$("ul.si_tab li:first a").addClass("active");
	$(".tab_con").hide();
	$(".tab_con:first").show();

	$("ul.si_tab a").click(function() {
		$("ul.si_tab a").removeClass("active");
		$(".tab_con").hide();
		$(this).addClass("active");

		var activeTab = $(this).attr("href");
		$(activeTab).show();
		return false;
	});

});

