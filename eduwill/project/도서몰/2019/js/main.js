var ClassBrowserUtil = function() {

	var addFavorite = function() {
		var title = document.title; // 현재 보고 있는 페이지의 TITLE
		var url = location.href; // 현재 보고 있는 페이지의 URL

		if (window.sidebar && window.sidebar.addPanel) { // FIREFOX
			window.sidebar.addPanel(title, url, "");
		} else if ( window.opera && window.print) { // OPERA 브라우저
			var elem = document.getElement('a');

			elem.setAttribute('href',url);
			elem.setAttribute('title',title);
			elem.setAttribute('rel','sidebar');
			elem.click();
		} else if (document.all ) { // MS IE
			window.external.AddFavorite( url, title);
		} else {
			alert("해당브라우저는 즐겨찾기 추가기능이 지원되지 않습니다.\n\n수동으로 즐겨찾기에 추가해주세요.");
			return true;
		}
	};

	return {

		addFavorite : addFavorite
	};
};

// Slide Menu
$(document).ready(function () {

	// GNB Tab Button
	$(".gnb_label a").mouseenter(function() {

		$(".gnb_label a").removeClass("active");
		$(".sub_menu").hide();
		$(this).addClass("active");

		var activeTab = $(this).attr("href");
		$(activeTab).show();
		$(".sub_wrap").show();
		return false;
	});

	$(".gnb").mouseleave(function(){
		$(".gnb_label a").removeClass("active");
		$(".sub_wrap").hide();
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

var browserUtil = new ClassBrowserUtil();