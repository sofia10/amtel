$(document).ready(function () {
    // Bootstrap Select
    var $selectpicker = $('.selectpicker');
    $selectpicker.selectpicker();

    $('.burger-btn').click(function(){
        $('.burger-nav').addClass('active');
    });

    $('.close-btn').click(function(){
        $('.burger-nav').removeClass('active');
    });
});