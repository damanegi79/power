// JavaScript Document
$(document).ready(function(){
    init();
})

function init() {
    $('#gnb>ul>li>.subNav>ul>li.active').parents('.subNav').show().parent().addClass('active')
    $('.dataBlock .blockTitle .selectChart dt').on('click',function(){
        $(this).next().slideToggle(200)
        return false;
    })
    $('.selectChart ul li a').on('click',function(){
        var text = $(this).text()
        $(this).parents('dd').prev().find('input').val(text);
        $(this).parents('dd').slideUp()
//        alert(text)
    })
}
