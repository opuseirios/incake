$(function () {
    //1放大镜
    $('.xzoom,.xzoom-gallery').xzoom({
        scroll:false,
        Xoffset:50,
        zoomWidth:400,
        zoomHeight:400,
        tint:'#fff',
        tintOpacity:.5
    });
    // 2.左右按键
    var index = 0;
    var count = $('.thumbs-images').find('li').length-4;
    $('.btn-next').click(function () {
        index++;
        if(index>count){
           index = count;
        }
        $('.thumbs-ul').animate({'left':-index*120})
    })
    $('.btn-prev').click(function () {
        index--;
        if(index<0){
            index = 0;
        }
        $('.thumbs-ul').animate({'left':-index*120})
    })
    //3.切换磅数
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
    $('a.spec').click(function () {
        var index = $(this).index();
        var str = '';
        $(this).addClass('active').siblings().removeClass('active');
        $('#price').text(infos[index].price);
        str+=' <li>'+infos[index].lineone+'</li>';
        str+=' <li>'+infos[index].linetwo+'</li>';
        str+='<li>'+infos[index].linethree+'</li>';
        str+=' <li>至少提前1天预定</li>';
        $('.tips').html(str);
    })
    //4.加减按钮
    var count = $('.num-wrap .count').val();
    $('.num-wrap .count').on('oninput',function () {
        console.log(count);
    })
    $('.num-wrap .add').click(function () {
        count++;
        $('.num-wrap .count').val(count);

    })
    $('.num-wrap .minus').click(function () {
        if(count<=1){

            return false;
        }
        count--;

        $('.num-wrap .count').val(count);
    })
    //5.点击商品详情和商品评价，不同页面
    $('.header a').click(function () {
       $(this).addClass('active').siblings().removeClass('active');
       $('.c-wrap').eq($(this).index()).addClass('active').siblings().removeClass('active');
    })
    //评论数据
    var comments = [
        {
            'tel':'138****3026',
            'comment':'味道不错，五星'
        },
        {
            'tel':'139****5299',
            'comment':'家人都很喜欢'
        },
        {
            'tel':'138****8292',
            'comment':'味道不错，送货快'
        },
        {
            'tel':'139****0410',
            'comment':'incake的口味是家人一直喜欢的，所以我也是忠实客户了。这次评论是特地给送货员点攒，“菜鸟驿站”苏州金阊区负责三元新村地区的小哥，手机号是199*****215，非常感谢他。送货时有礼貌，给老人家贺元旦快乐，他不知道他的一个举动，给元旦无法陪伴公婆过节我弥补了好多，让老人家非常开心。再次谢谢送货小哥，也祝你的家人一切安康！'
        },
        {
            'tel':'138****8292',
            'comment':'很满意，蛋糕超级好吃，以后还会选他'
        }
    ];
    for(var j=1;j<comments.length;j++){
        var index = j;
        $('.comments').append('<li></li>');
        var str = '  <div class="comment-header">';
        str +=' <span class="icon"></span>';
        str +='  <span class="tel">'+comments[j].tel+'</span>';
        str +=' <span class="rating">';
        str +='<i></i><i></i><i></i><i></i><i></i>';
        str +='</span>';
        str +='  </div>';
        str +=' <P class="comment-text">'+comments[j].comment+'</P>';
        $('.comments li').eq(index).html(str);
    }
})