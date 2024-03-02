/*................................................................*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


/*scroll disapper while loading window................................................................*/
var loading=document.querySelector('.loading');
window.addEventListener('load', function(){
setTimeout(function(){
loading.classList.add('d-none');
 document.body.style.overflow='auto';
},2000)
});
/*................................................................*/

/* Jquery scroll to top button................................................................*/

$('.scroll-up').show();

$(window).scroll(function(){
if($(window).scrollTop()<$('.header-title').offset().top){
   $('.scroll-up').fadeOut(1500);
}
else{
 $('.scroll-up').fadeIn(1500);
 }

});

$('.scroll-up').click(function(e){

$('html').animate(
   {
       scrollTop: 0,
       behavior:'smooth',

},2000)
})

/*................................................................*/

/* Jquery theme................................................................*/

$('.theme i').click(function(){

    var w=$('.options').outerWidth();
    var lft=$('.theme').offset().left;
    
    if(lft===0){
    
        $('.theme').animate({
            left:-w,
        },1000)
    }
    else{
        $('.theme').animate({
            left:0,
        },1000)
    }
    
    })
    
    colors=['#fef0ef','#9EDDFF','#94A684','#95979b','#9D76C1'] //https://colorhunt.co/   color pallet website
    
    for(var i=0;i<colors.length;i++){
        $('.options li').eq(i).css('backgroundColor',colors[i]); 
    }
    
    $('.options li').click(function(){
        var colorTheme= $(this).css('backgroundColor');
    $('html').attr('style',`--main-color:${colorTheme}`);
    
        // var r = document.querySelector(':root');
        // r.style.setProperty('--main-color',colorTheme);
           
    });
    

/* ....................................................................... */


