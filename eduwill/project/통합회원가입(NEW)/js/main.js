$(document).ready(function () {
	// �ϴ�footer
	$(".partnership h4 a").each(function(a){
		$(this).click(function(){
			$(".alliance").hide();
			$(".alliance").eq(a).show();
			return false;
		});
	});

	$(".close_layer").click(function(){
		$(".alliance").hide();
		return false;
	});
});

