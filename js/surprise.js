$(function () {
    $('.turnpages li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('#dowebok').fullpage({
        afterLoad:function (anchorLink,index) {
            if(index===1){
                $('.public-header').fadeIn();
            }
            $('.turnpages li').eq(index-1).triggerHandler('mouseenter');
        },
        onLeave:function (index,nextIndex) {
            if(nextIndex>1){
                $('.public-header').hide();
            }
        }
    });
})
