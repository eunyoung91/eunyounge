
// Slide Menu
$(document).ready(function () {

	// GNB Tab Button
	$(".gnb_label a").click(function() {

		$(".gnb_label a").removeClass("active");
		$(".sub_menu").hide();
		$(this).addClass("active");

		var activeTab = $(this).attr("href");
		$(activeTab).show();
		$(".sub_wrap").show();
		return false;
	});

	// GNB Tab Close
	$(".close_layer").click(function() {

		$(".sub_menu").hide();
		$(".sub_wrap").hide();
		$(".gnb_label a").removeClass("active");

		return false;
	});

	// Select Box Jquery Plugin
	$('select.g_select').selectric();

});

