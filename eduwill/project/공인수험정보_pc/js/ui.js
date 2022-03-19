$(function(){
	init();
});

function init(){
	create();
	addEvent();
}

var _w;
var _document;
var _gnb;
var _openMenu;

var _popupSchedule;
var _tabList;
var _tabView;
function create(){
	_w = $(window);
	_document = $(document);
	_gnb = $(".gnb").find("li");
	_openMenu = $(".gnb").find(".menu");

	_popupSchedule = $("#popupSchedule");
	_tabList = _popupSchedule.find(".tab-list").children("li");
	_tabView= _popupSchedule.find(".tab-view");

	var _maxLength = 18;
	$('.select option').each(function(){
		if($(this).text().length >= _maxLength){
			$(this).text($(this).text().substr(0,_maxLength)+'...');
		}
	});

}

function addEvent(){
	_gnb.on("click", gnbEvent);

	$(".step_box").children("a").on("click",stepEvent);
	
		// search
	_document.on('click', '.search>a', function(){
		$('.search_layer').show();
		$('.search_layer input').focus();
		return false;
	});

	// tab
	_document.on('click', '.tab_list li a', function () {
		var $this = $(this),
			$tabList = $this.parents('ul'),
			_idx = $this.closest('li').index();

		$tabList.children().eq(_idx).addClass('in').siblings().removeClass('in');
		$tabList.next().children().eq(_idx).addClass('in').siblings().removeClass('in');
		return false;
	});
	
	//  영상팝업삭제
	$(".layer-close").on("click", function(){
        $(".layer-box").empty();
        popupClose('.dimmed','layerVideo');
	});

	//  커리큘럼 팝업 열기
	$(".btn_schedule").on("click",function(){
		var dataTitle;
		var dataText1;
		var dataText2;
		
		if($(":radio[name='term']:checked").length < 1){
            alert('선택이 완료되지 않았습니다. 원하시는 수험기간을 선택 후 진단하기를 클릭 해 주시기 바랍니다.');
            return;
        }else{
			var radioId = $(":radio[name='term']:checked").attr("id");
			var idx = radioId.charAt(radioId.length-1);

			$(".tab-group").hide();
			$("#tabGroup"+idx).show();

			tabControl(0);

			switch(idx){
				case "1":
					dataTitle = "불가능을 가능으로 만들 당신";
					dataText1 = "님, 단기 합격을 목표로 하고 계시군요!";
					dataText2= "막막한 당신을 위해 세분화 된 맞춤 커리큘럼을 제시합니다.";
					break;
				case "2":
					dataTitle = "단기 합격을 목표로 하는 당신";
					dataText1 = "님, 단기 합격을 목표로 하고 계시군요!";
					dataText2 = "막막한 당신을 위해 세분화 된 맞춤 커리큘럼을 제시합니다.";
					break;
				case "3":
					dataTitle = "안정적인 합격을 목표로 하는 당신";
					dataText1 = "님, 안정적인 합격을 목표로 하고 계시군요!";
					dataText2 = "막막한 당신을 위해 세분화 된 맞춤 커리큘럼을 제시합니다.";
					break;
				case "4":
					dataTitle = "여유로운 합격을 목표로 하는 당신";
					dataText1 = "님, 첫 해에는 1차 과목을,";
					dataText2 = "2년째에는 2차 과목을 준비하는 커리큘럼을 제시합니다.";
					break;
				case "5":
					dataTitle = "여유로운 합격을 목표로 하는 당신";
					dataText1= "님, 첫 해에는 1차 과목을, ";
					dataText2= "2+n년째에는 2차 과목을 준비하는 커리큘럼을 제시합니다.";
					break;
				default:break;

			}

			$(".data-title").text(dataTitle);
			$(".data-text1").text(dataText1);
			$(".data-text2").text(dataText2);
			
			popupOpen('.dimmed', 'popupSchedule');
		}
	
	});

	//  커리큘럼 팝업닫기
	$(".popup-close").on("click", function(){
		$(":radio[name='term']").prop("checked", false);
		popupClose('.dimmed','popupSchedule');
	});

	//  팝업 내 탭제어
	_tabList.on("click", function(){
		var idx = $(this).index();
		tabControl(idx);
	});
	
	pageMove(".page_move");

}

function tabControl(idx){
	_tabList.removeClass("on");
	_tabList.eq(idx).addClass("on");

	(idx == 1)?$(".special").show():$(".special").hide();
 
//	_tabView.hide();
//	_tabView.eq(idx).show();

}

function stepEvent(){
	var idx = $(this).index();
	$(".step_box").children("a").removeClass("active");
	$(this).addClass("active");

	var stepTitle = ["기초이론", "기본이론", "심화이론", "기출공략&핵심정리", "문제풀이", "동형모의고사", "마무리특강"];
	var stepText = [
		"용어 해설 및 기초 개념 정리를 통해 수험 준비의 기틀을 마련하는 강의",
		"과목별 기본 개념을 꼼꼼히 살펴보며 체계적으로 정리하는 이론 필수 강의",
		"기본이론 복습 및 심화 개념 보충 학습, 고득점을 위한 이론 완성 강의",
		"기출, 핵심정리를 통해 주요개념을 빠르게 훑어볼 수 있는 강의",
		"문제풀이 강의",
		"모의고사를 통해 부족한 부분을 점검, 실전능력을 강화시키는 강의",
		"시험 직전 최종 실력 점검 및 합격을 위한 마무리 정리학습"
	];

	$(".step").find(".desc_title").text(stepTitle[idx]);
	$(".step").find(".desc_text").text(stepText[idx]);

	$(".timetable").hide();
	$(".timetable").eq(idx).show();
}


function gnbEvent(){
	var idx = $(this).index();
	_gnb.removeClass("in");
	$(this).addClass("in");

	if(idx >= 3){
		if(	$(this).children(".menu").hasClass("active")){
			$(this).children(".menu").removeClass("active");
		}else{
			_openMenu.removeClass("active");
			$(this).children(".menu").addClass("active");	
		}
	}else{
		_openMenu.removeClass("active");
	}
}

function layerVideo($url){
    $('.layer-box').empty();
    if ($url.indexOf('.mp4') != -1) {
        $('.layer-box').html('<video autoplay loop controls playsinline="" class="video-background" poster="https://img.eduwill.net/Img2/mobile/brand/item/main/common/video_poster.png"><source src="'+$url+'" type="video/mp4"></video>');
    }else{
        $('.layer-box').html('<iframe src="'+$url+'" frameborder="no" scrolling="no" marginwidth="0" marginheight="0" width="100%" height="100%" allowfullscreen></iframe>');
    }

    setTimeout(function(){
        popupOpen('.dimmed', 'layerVideo');
    },500);
}



