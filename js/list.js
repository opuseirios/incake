$(function () {
    $('.list-categories .content a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
})