$(function(){

    menuMobile();
    inputMask();

    function menuMobile(){
        $('.menu-mobile').click(function(){ 
            $('.menu-mobile ul').slideToggle();
        });
    }

    function inputMask(){
        $('input[name=telefone]').mask('(99)99999-9999');
    }
});