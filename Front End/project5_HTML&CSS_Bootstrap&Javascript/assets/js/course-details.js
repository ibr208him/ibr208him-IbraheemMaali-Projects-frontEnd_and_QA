/* displaying/hiding the list items in Curriculum ........*/

let itemHeaderContent=document.querySelectorAll('.item-header-content')
let navContent2Ul=document.querySelectorAll('.nav-content2-ul');

for(let i=0; i<itemHeaderContent.length; i++) {

itemHeaderContent[i].addEventListener('click',function(){
    if(itemHeaderContent[i].classList.contains('active')){
 itemHeaderContent[i].classList.remove('active');
 itemHeaderContent[i].style.backgroundColor ='transparent';
 navContent2Ul[i].classList.remove('d-block');
    navContent2Ul[i].classList.add('d-none');
}
else{
 

 itemHeaderContent[i].classList.add('active');
 itemHeaderContent[i].style.backgroundColor ='#EFEFF6';
 navContent2Ul[i].classList.remove('d-none');
    navContent2Ul[i].classList.add('d-block');
 }
});

}
/*................................................................*/



/* owl carousel plugin............................................................. */

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
           
        }
    }
})

