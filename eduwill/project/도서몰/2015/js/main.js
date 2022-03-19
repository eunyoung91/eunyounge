
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

	//footer (selectbox style)
	$('.toggle_box .toggle_cont').hide();
	$('.toggle_box .btn_toggle').click(function() {
		if(!$(this).is('.expanded')){
			$('.toggle_box .toggle_cont').hide();
			$('.toggle_box .btn_toggle').removeClass('expanded');
			$(this).next().show();
			$(this).addClass('expanded');
		}
		else{
			$(this).next().hide();
			$(this).removeClass('expanded');
		}
	});

	$(".sel_list ul li input[type=radio]").on("click", function(){
		var status = $(this).attr("checked");

		if(status == "checked"){
			$(".sel_list ul li").removeClass("checked");
			$(this).parent().addClass("checked");
		}else{
			$(".sel_list ul li").removeClass("checked");
		}
	});

	// 사이트맵
	$(".sitemap_show").on("click", function(){
		var s_wrp = $(".sitemap");
		if(s_wrp.css("display") == "none") {
			s_wrp.slideDown();
		} else {
			s_wrp.slideUp();
		}
	});

	$(".s_close a").on("click", function(){
		$(".sitemap").slideUp();
	});


});

