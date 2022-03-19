/* 필터 추가/삭제 */
function checkSelect(){
    var checkNum=$(".f-select :checkbox:checked").length;

    if(checkNum > 0){
        $(".f-comp > button").css("display","block");
    }else{
        $(".f-comp > button").css("display","none");
    }
}

$(document).on(//필터 체크시 ui등록하고 체크해제하면 삭제함
	"change", ".f-select :checkbox", function(){
	var thisText=$(this).next("span").text();
    var thisFilter="<li><p><span>"+thisText+"</span><button type='button'>필터삭제</button></p></li>"
    
    checkSelect();

    if($(this).is(":checked")){
        $(".f-comp > ul").append(thisFilter);
    }else{
        $(".f-comp > ul li span:contains("+thisText+")").closest("li").remove();
    }
    
});

$(document).on(//버튼에 삭제 버튼 누르면 체크도 해제됨
    "click", ".f-comp li button", function(){
        var thisText=$(this).prev("span").text();
       $(".f-select li span:contains("+thisText+")").prev(":checkbox").prop("checked",false);
       $(this).closest("li").remove();
       checkSelect();
});

$(document).on(//리셋버튼 동작
    "click", ".f-comp > button", function(){
       $(".f-comp ul li").remove();
       $(".f-select :checkbox").prop("checked",false);
       checkSelect();
});

$(document).on(//여러객채중 하나만 클래스 주기
	"click", ".click_select_on > li", function(){

	$(this).addClass("on");
	$(this).siblings().removeClass("on");
});
/* 토글클래스 end*/

/* 페이지이동 */
$(document).on(
    "click", ".page-move", function(){
        $('html,body').animate({
			scrollTop: $("#recom-slide").offset().top
		}, 500);
        return false;
});

/* sns공유 */
$(document).on(
    "click", "#btn-share", function(){
        $('.sns-pop').fadeIn(500);
});

$(document).on(
    "click", ".sns-pop > button", function(){
        $('.sns-pop').fadeOut(500);
});

/* 추천활동 스와이퍼 */
var resomSwiper = new Swiper("#recomSwiper", {
    autoplay: {
        delay: 4000,
    },
    speed:400,
    loop:true,
    slidesPerView:'auto',
    centeredSlides:true,
    spaceBetween:25,
	navigation : { 
		nextEl : '.swiper-button-next', 
		prevEl : '.swiper-button-prev', 

	},
});

/* 데이트픽커 */
$( ".datepicker-wrap :text" ).datepicker({
    dateFormat: "yy-mm-dd" 
});

/* 파일 선택기 */
$(document).on(
    "change", ".file-btn :file", function(){
       var theText=$(this).val();
       var thisFakeTxt=$(this).closest(".file-btn").find(".txt");

       thisFakeTxt.text(theText);
});