/* 필터 추가/삭제 */
var actNum=0;
$(document).on(//필터팝업 호출
    "click", "#filter-btn", function(){

        if(actNum==0){
            $(".filter-area").stop().animate({bottom:0},500);
            actNum=1;
        }else{
            $(".filter-area").stop().animate({bottom:-100+"%"},500);
            actNum=0;
        }
        
});

$(document).on(//필터팝업 호출
    "click", ".filter-area .submit, .filter-area > button", function(){
        $(".filter-area").animate({bottom:-100+"%"},500);
        actNum=0;
});

$(document).on(
    "touchstart", "body", function(e){//필터팝업 바깥영역 클릭시 닫힘
        if(actNum==1){
            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            var theHeight=$(window).height()-$(".filter-area").innerHeight();
            if(theHeight >= touch.pageY){
                $(".filter-area").animate({bottom:-100+"%"},500); 
                setTimeout(function() {actNum=0; },500);
            }
        }
});

$(document).on(//필터 체크시 ui등록하고 체크해제하면 삭제함
	"change", ".f-select :checkbox", function(){

	var thisText=$(this).closest("li").find(".txt").text();
    var thisFilter="<li class='swiper-slide'><p><span>"+thisText+"</span><button type='button'>필터삭제</button></p></li>"
    
    if($(this).is(":checked")){
        $("#filterSwiper .swiper-wrapper").append(thisFilter);
    }else{
        $("#filterSwiper .swiper-wrapper li span:contains("+thisText+")").closest("li").remove();
    }
    
});

$(document).on(//버튼에 삭제 버튼 누르면 체크도 해제됨
    "click", "#filterSwiper li button", function(){
        var thisText=$(this).prev("span").text();
       $(".f-select li .txt:contains("+thisText+")").closest("li").find(":checkbox").prop("checked",false);
       $(this).closest("li").remove();
});

$(document).on(//리셋버튼 동작
    "click", ".filter-area .reset", function(){
       $("#filterSwiper .swiper-wrapper li").remove();
       $(".f-select :checkbox").prop("checked",false);
});

$(document).on(//필터 탭 동작
    " change", ".f-tap :radio", function(){
       var thisNum=$(this).closest("li").index();
       $(".f-select").hide();
       $(".f-select").eq(thisNum).show();
});


/* 필터 스와이퍼 */
var filterSwiper = new Swiper("#filterSwiper", {
    speed:400,
    loop:false,
    slidesPerView:'auto',
    centeredSlides:false,
    observer:true,
    spaceBetween:0
});

/* 이미지 확대 팝업 */
$(document).on(//리셋버튼 동작
    "click", ".tmp button", function(){
       $(".img_pop").fadeIn(500);
});

$(document).on(//리셋버튼 동작
    "click", ".img_pop button", function(){
       $(".img_pop").fadeOut(500);
});

/* 추천활동 스와이퍼 */
var resomSwiper = new Swiper("#recomSwiper", {
    autoplay: {
        delay: 4000,
    },
    speed:400,
    loop:false,
    slidesPerView:'auto',
    centeredSlides:false,
    spaceBetween:8,
    pagination: {
        el:"#recomSwiper .swiper-pagination",
        type:"bullets"
    },		
});

/* 페이지이동 */
$(document).on(
    "click", ".page-move", function(){
        $('html,body').animate({
			scrollTop: $("#recom-slide").offset().top-25
		}, 500);
        return false;
});

/* sns공유 */
var snsNum=0;

$(document).on(
    "click", "#btn-share", function(){//sns팝업 연결
        if(snsNum==0){
            $(".sns-pop").animate({bottom:0},500);
            snsNum=1;
        }else{
            $(".sns-pop").animate({bottom:-100+"%"},500);
            snsNum=0;
        }
});
// 1209 버튼 추가 및 스크립트 추가
$(document).on(
    "click", '.sns-pop button' , function() {
    snsNum = 0;
    $('.sns-pop').animate({bottom:-100+"%"}, 500);
});

$(document).on(
    "touchstart", "body", function(e){//sns팝업 바깥영역 클릭시 닫힘
        if(snsNum==1){
            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            var theHeight=$(window).height()-$(".sns-pop").innerHeight();
            if(theHeight >= touch.pageY){
                $(".sns-pop").animate({bottom:-100+"%"},500); 
                snsNum=0;
            }
        }
});

/* 파일 선택기 */
$(document).on(
    "change", ".file-btn :file", function(){
       var theText=$(this).val();
       var thisFakeTxt=$(this).closest(".file-btn").find(".txt");

       thisFakeTxt.text(theText);
});

/* 데이트픽커 */
$( ".cal :text" ).datepicker({
    dateFormat: "yy-mm-dd" 
});
$( ".datepicker-wrap :text").datepicker({ 
    dateFormat: "yy-mm-dd"
});

/* 스크롤시 타이틀 고정 */
function checkTop(){
	var srollNum=$(document).scrollTop();
	var eventNum=$("#header").innerHeight();
	if(srollNum >= eventNum){
		$(".contents-header").addClass("fixedTop");
	}else{
		$(".contents-header").removeClass("fixedTop");
	}
}

$(window).scroll(function(){
	checkTop();
})