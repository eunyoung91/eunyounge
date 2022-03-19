$(function(){ 
    headerInit();
	bannerInit();
});

function headerInit(){
    headerLayer();
}

function headerLayer(){
    $('[data-header-layer]').each(function(){
        var _data = $(this).data('headerLayer'),
            $parent = $(this).parent();

        if( _data == 'toggle' ){
            $(this).click(function(){
                $parent.toggleClass('active');
                $parent.siblings().removeClass('active');
            });
        } else if( _data == 'hover' ){
            $parent.mouseenter(function(){
                $parent.addClass('active');
                $parent.siblings().removeClass('active');
                // console.log('hover');
            }).mouseleave(function(){
                $parent.removeClass('active');
                if( $('.header-layer').mouseout ){
                    $parent.removeClass('active');
                    //console.log('out');
                }
            });
        }
    });

    $('.btn-series-tg a').on('click', function(){
        $('.series-list').slideToggle();
        $('.btn-series-tg').toggleClass('off');
        return false;
    });

    $('.series-box .series-toggle').on('click', function(e){
        e.preventDefault();

        $(this).siblings().slideToggle();
        $(this).parent().toggleClass('fold');

        if( $('.series-box').hasClass('fold')) {
            $(this).find('span').text('열기');
        } else {
            $(this).find('span').text('닫기');
        }
    });
}


function bannerInit(){
	$(".banner-wrap .swiper").each(function(index, ele){
		var $this = $(this);
		$this.addClass('banner-' + index);
		var swiper = new Swiper(".banner-" + index, {
			lazy : {
				loadPrevNext : true
			},
			spaceBetween: 15,
			observer: true,
			observeParents: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});

		var len = $('.banner-wrap .banner-' + index).find(".swiper-slide").length;
		if(len > 1){
			 $('.banner-wrap .banner-' + index).find(".swiper-pagination").show();
		}else{
			 $('.banner-wrap .banner-' + index).find(".swiper-pagination").hide();
		}
		
	});
}
