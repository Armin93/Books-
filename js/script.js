// Sticky Navigation
$(document).ready(function(){

let navbar = $(".navbar");

$(window).scroll(function(){
    let oTop =$('.section-2').offset().top - window.innerHeight;
    if($(window).scrollTop() > oTop){
        navbar.addClass('sticky');
    }else{
        navbar.removeClass('sticky');
    }
})

// Counter Animation
let nCount = (selector)=>{
    $(selector).each(()=>{
        $(this).animate({
            Counter:$(this).text()
        },
        {
            duration:4000,
            easing:'swing',
            step:function(value){
                $(this).text(Math.ceil(value))
            }
        })
    })
}
let a=0;
$(window).scroll(function(){
    let oTop =$('.numbers').offset().top - window.innerHeight;
    if(a==0 && $(window).scrollTop()>=oTop){
        a++;
        nCount();

    }

})
})