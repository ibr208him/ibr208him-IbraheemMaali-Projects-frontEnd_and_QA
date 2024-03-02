/* footer lists dispappers when screen<576px..............................*/
console.log(screen.width)
let footerHeading=document.querySelectorAll('.footer-heading');
let categoryLink=document.querySelectorAll('.category-links');
 if( screen.width<500){

for(let i=0; i<categoryLink.length; i++){

 footerHeading[i].addEventListener('click',function(){
    if(footerHeading[i].classList.contains('active')){
    footerHeading[i].classList.remove('active');
    categoryLink[i].classList.remove('d-none');
    categoryLink[i].classList.remove('d-block');

    categoryLink[i].classList.add('d-none');
     }
 else{
    footerHeading[i].classList.add('active'); 
    categoryLink[i].classList.remove('d-none');
    categoryLink[i].classList.remove('d-block');
    categoryLink[i].classList.add('d-block');

 }

 })
 
 }
}