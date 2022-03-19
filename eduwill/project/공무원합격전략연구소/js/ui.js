$(function(){

	"use strict";

	var $window = $(window),
		$html = $('html'),
		$body = $('body'),
		$document = $(document);

	// select option ellipsis
	var _maxLength = 18;
	$('.select option').each(function(){
		if($(this).text().length >= _maxLength){
			$(this).text($(this).text().substr(0,_maxLength)+'...');
		}
	});
});
