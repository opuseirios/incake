$(function () {

    //2.banner图轮播
    var timer = null;
    var index = 0;
    var imgWidth = $('.imgs img').width();
     timer = setInterval(scroll,3000);
    function scroll() {
        if(index>=3){
            index=-1;
        }
        index++;
        $('.imgs').animate({left:-index*imgWidth},'slow');
        $('.roll li').eq(index).addClass('current')
            .siblings().removeClass('current');
    }
    $('.banner').mouseenter(function () {
        clearInterval(timer);
    })
    $('.banner').mouseleave(function () {
        timer = setInterval(scroll,3000);
    })
    $('.roll li').click(function () {
        clearInterval(timer);
        index = $(this).index();
        $('.imgs').animate({left:-index*imgWidth},'slow');
        $('.roll li').eq(index).addClass('current')
            .siblings().removeClass('current');
    })

    /*3.点击购物车，弹出界面*/
    var infos = [
        {
            'lineone':'14CM*14CM*4.5CM≈6寸,约510g',
            'linetwo':'免费赠送5份餐具',
            'linethree':'4-5人食用',
            'price':'189'
        },
        {
            'lineone':'17.5CM*17.5CM*4.5CM≈8寸,约950g',
            'linetwo':'免费赠送10份餐具',
            'linethree':'7-8人食用',
            'price':'279'
        },
        {
            'lineone':'23CM*23CM*4.5CM≈12寸,约1.4kg',
            'linetwo':'免费赠送15份餐具',
            'linethree':'11-12人食用',
            'price':'429'
        },
        {
            'lineone':'30CM*30CM*4.5CM≈14寸,约2.3kg',
            'linetwo':'免费赠送20份餐具',
            'linethree':'15-20人食用',
            'price':'709'
        }
    ];
    var flag = true;
    $('.cart').click(function () {
        if(flag){
            $(this).parent().siblings('.img').children('.productBuy').animate({'top':'0'},1000);
            flag = !flag;
        }else {
            $(this).parent().siblings('.img').children('.productBuy').animate({'top':'100%'},1000);
            flag = !flag;
        }
    })
    $('.productBuy .close').click(function () {
        $(this).parent().animate({'top':'100%'},1000);
        flag = true;
    })
    $('.productBuy .product-size li').click(function () {
        $(this).addClass('select').siblings().removeClass('select');
        var str = '';
        str+=' <li>'+infos[$(this).index()].lineone+'</li>';
        str+=' <li>'+infos[$(this).index()].linetwo+'</li>';
        str+=' <li>'+infos[$(this).index()].linethree+'</li>';
        $('.productBuy .comment-list').html(str);
        $('.spec-count .price').text(infos[$(this).index()].price);
        $('.count').val(1);
    })
    $('.productBuy .add').click(function () {
        var count = $(this).siblings('.count').val();
        if(count>1){
            $(this).siblings('.minus').attr({
                'disabled':'false',
                "background":"url(../images/icon_sub_enabled.png) no-repeat"
            });
        }
            $(this).siblings('.count').val( +count+1);
            var price = $(this).siblings('.sum').children('.price').text()/count;
            $(this).siblings('.sum').children('.price').text(+price*((+count)+1));

    });
    $('.productBuy .minus').click(function () {
        var count = $(this).siblings('.count').val();
        if(count==='1'){
            $(this).attr({
                'disabled':'true',
                "background":"url(../images/icon_sub_disabled.png) no-repeat"
            })
        }else {
            $(this).attr({
                'disabled':'false',
                "background":"url(../images/icon_sub_enabled.png) no-repeat"
        })
            $(this).next('.count').val(count-1);
            var price = $(this).siblings('.sum').children('.price').text()/count;
            $(this).siblings('.sum').children('.price').text(+price*((+count)-1));
        }
    })
})