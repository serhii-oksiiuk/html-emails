//my scripts
$(function(){
    hamburger();
    
});

function hamburger(){
    $('.btn-hamburger').on('click',function(){
        $('.btn-hamburger').toggleClass('active');
        $('.menu ul').toggleClass('active');
    })
}

