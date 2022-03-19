$(function(){
    $('#js-footer').load('https://img.eduwill.net/resources/common/module/footer/include/footer.html', function() {
        $('#js-footer').prepend('<link rel="stylesheet" href="https://img.eduwill.net/resources/common/module/footer/css/footer.css">');
    });

    var $window = $(window),
        $document = $(document),
        $base = $('html, body');

    // Open Family site list
    $document.on('click', '#viewList', function(e){
        var $this = $(this),
                $parent = $this.parent();

        e.preventDefault();
        $parent.toggleClass('in').siblings().removeClass('in');

        if($parent.hasClass('in')) {
            $("body").click(function(e) { 		 
                $parent.each(function() {
                    if(!$parent.has(e.target).length) { 
                        $parent.removeClass('in')
                    } 
                })

            });
        }
    });

    // Top Button event
    $document.on('click', '#moveTop', function(e){
        e.preventDefault();

        $base.animate({
            scrollTop : 0
        }, 500);
    });
});

