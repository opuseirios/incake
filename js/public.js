//1.nav滑动显示内容
$('.header-nav li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
})
$('.header-nav li').mouseenter(function () {
    $(this).find('.subNav').fadeIn();
});
$('.header-nav li').mouseleave(function () {
    $(this).find('.subNav').fadeOut();
});
$('.basket').click(function () {
    $(this).children('.arrow-up').toggle();
    $('.checkBasket').slideToggle();
})
$('.locator').click(function () {
    $(this).children('.arrow-up').toggle();
    $('.cities').slideToggle();
})