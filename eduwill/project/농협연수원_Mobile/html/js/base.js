$(function(){
	//전체메뉴
	/* 메뉴 클릭시 */
	$("a.all").click(function(){ 
		$(".gnbbg").fadeIn(500);
		$(".gnbs").css('display','block').animate({left: "+=100%"},500);
		$('.gnb>li:first-child ul').slideDown(0).parent().addClass('gnbov');
	})
	/* 메뉴 닫을시 */
	$("a.close").click(function(){ 
		$(".gnbbg").fadeOut(500);
		$(".gnbs").animate({left: "-=100%"},500);
		$('.gnb>li').removeClass('gnbov').children('ul').slideUp();
	})
	/* 메뉴 on/off */
	$('.gnb>li>a').click(function(){
		if ($(this).parent().children('ul').is(":hidden")) {			
			$('.gnb>li').removeClass('gnbov').children('ul').slideUp();			
			$(this).parent().addClass('gnbov').children('ul').slideDown();
		} else {			
			$(this).parent().removeClass('gnbov').children('ul').slideUp();		
		}
	})	
	
	//메인 비주얼
	$('.visual').bxSlider({  auto: ($('.visual').children().length < 2) ? false : true, pause: 4000, pager: ($('.visual').children().length < 2) ? false : true, controls:false, autoStart: true, autoControls: false});

	//메인 공지사항
	$('.mnotice ul').bxSlider({ auto: true, pause: 4000, pager: false, controls:false, autoStart: true, autoControls: false, mode: 'vertical'});

	//메인 팝업	
	$('#pop_close').click(function(){
		var chk = $('#ch_pop').is(':checked');
		if(chk){ setCookie("pop","no",1); }
		$('#pop').fadeOut(0); $('.popbg').fadeOut(0);}
	);
	function setCookie(name, value, expiredays){
		var todayDate = new Date();
		todayDate.setDate(todayDate.getDate()+expiredays);
		document.cookie = name+"="+escape(value)+"; path=/; expires="+todayDate.toGMTString()+";";
	}
	$('#pop div div label').click( function(){
		$('#pop div div input').click();
		$('#pop_close').click();
	})		

	//이용약관
	$('.use1b').click( function(){ if ($('.use1').is(":hidden")) { $('.use1').show(); position = $("#header").offset();$('html,body').animate( { scrollTop:position.top },'slow' );return false; } else { $('.use1').hide(); } })
	$('.use2b').click( function(){ if ($('.use2').is(":hidden")) { $('.use2').show(); position = $("#header").offset();$('html,body').animate( { scrollTop:position.top },'slow' );return false; } else { $('.use2').hide(); } })
	$('.use3b').click( function(){ if ($('.use3').is(":hidden")) { $('.use3').show(); } else { $('.use3').hide(); } })
	$('.use4b').click( function(){ if ($('.use4').is(":hidden")) { $('.use4').show(); } else { $('.use4').hide(); } })

	//훈련생유의사항 팝업	
	$('#hun_close').click(function(){
		var chk = $('#ch_hun').is(':checked');
		if(chk){ setCookie("hun","no",1); }
		$('#hun').fadeOut(0);}
	);
	function setCookie(name, value, expiredays){
		var todayDate = new Date();
		todayDate.setDate(todayDate.getDate()+expiredays);
		document.cookie = name+"="+escape(value)+"; path=/; expires="+todayDate.toGMTString()+";";
	}
	$('#hun div label').click( function(){
		$('#hun div input').click();
		$('#hun_close').click();
	})		

	//로그인 PC키보드
	$('.pckey>dt').click(function(){
		if ($(this).parent().children('dd').is(":hidden")) {			
			$('.pckey>dt span').css('background','url(../image/pckey_up.gif) no-repeat center').css('background-size','8.5px');
			$('dd.key1').addClass('keyon');
			$(this).parent().children('dd').show(0);
			$('dd.key1 img').show(0);
			$('dd.key2 img').hide(0);
		} else {			
			$('.pckey>dt span').css('background','url(../image/pckey_down.gif) no-repeat center').css('background-size','8.5px');
			$(this).parent().children('dd').removeClass('keyon').hide(0);
		}
	})
	$('.pckey>dd>a').click(function(){
		$('.pckey>dd img').hide(0);
		$('.pckey>dd').removeClass('keyon');
		$(this).parent().addClass('keyon').children('img').show(0);
	})

	//약관동의
	$('.jall').click( function(){
		$('.jcheck').prop('checked', this.checked );
	})	

	//나의강의실
	$('.myok').click( function(){
		$(this).hide(0);
		$(this).parent().children('.myshow').show(0);
		$(this).parent().children('ul.myul').children('li:last-child').show(0);
	})	
	//$('.myshow>a').click( function(){
		//$(this).parent().parent('.mypro2').hide(0);
	//})	

	//퀴즈 해설보기
	$('.qcon a').click(function(){
		if ($(this).parent().children('div').is(":hidden")) {	
			$('.qcon>div').hide(0);
			$('.qsee').show(0);
			$('.qclo').hide(0);
			$(this).parent().children('div').show(0);
			$(this).children('.qsee').hide(0);
			$(this).children('.qclo').show(0);
		} else {			
			$(this).parent().children('div').hide(0);
			$(this).children('.qsee').show(0);
			$(this).children('.qclo').hide(0);
		}
	})

	//동영상강의
	$('.video dt').click(function(){
		if ($(this).parent().children('dd').is(":hidden")) {	
			$('ul.video dl').removeClass('vdt');
			$('ul.video dd').slideUp(0);
			$(this).parent().parent().children('dl').addClass('vdt').children('dd').slideDown(0);	
		} else {			
			$(this).parent().parent().children('dl').removeClass('vdt').children('dd').slideUp(0);
		}
	})
	//동영상처음보기이어보기
	$('.vi3').click(function(){
		if ($('.vpop').is(":hidden")) {	
			$('.vbg').show(0);
			$('.vpop').show(0);
		} else {			
			$('.vbg').hide(0);
			$('.vpop').hide(0);
		}
	})

	$('.bdel').hide(0);
	//북마크
	$('.bedit').click( function(){
		$(this).hide(0);
		$('.bplay').hide(0);
		$('.bcomp').show(0);
		$('.bdel').show(0);
	})
	$('.bcomp').click( function(){
		$(this).hide(0);
		$('.bdel').hide(0);
		$('.bedit').show(0);
		$('.bplay').show(0);
	})	
	//$('.bdel').click( function(){
		//$(this).parent('li').hide(0);
	//})	

	//게시판 내용보기
	$('.blist>li>dl>dt').click(function(){
		if ($(this).parent().children('dd').is(":hidden")) {				
			$('.blist>li>dl>dd').slideUp(0);
			$('.bbtn').slideUp(0);
			$(this).parent().children('dd').slideDown(0);
			$(this).parent().parent().children('.bbtn').slideDown(0);
		} else {						
			$(this).parent().children('dd').slideUp(0);
			$(this).parent().parent().children('.bbtn').slideUp(0);
		}
	})
	
	//이메일 직접 입력
	$('#bmj').click(function(){
		if ($('#bmail3').is(":hidden")) {	
			$('#bmail2').hide(0);
			$('#bmail3').show(0);
		} else {			
			$('#bmail2').show(0);
			$('#bmail3').hide(0);
		}
	})
})

//인증숫자카운트
function flowtime(){
   chantime_m = setTimeout("timedown()", 1000);
}

function timedown(){
	var ti = document.all.timedowni.value;
	ti = ti - 1;
	if(ti>-1){
		window.document.all.timedowni.value = ti;
		chantime = setTimeout("timedown()", 1000);
	}
}