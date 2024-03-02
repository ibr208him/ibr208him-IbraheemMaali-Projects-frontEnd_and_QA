
/* navbar backgorund color change when scrolling................................*/
let navbarr=document.querySelector('.navbar-reg');
let scrollPointt=document.querySelector('#scroll-pointt');

window.addEventListener('scroll', function(){

    if(this.window.scrollY>scrollPointt.offsetTop){
    navbarr.classList.add('bg-white');
    }
    else{
        navbarr.classList.remove('bg-white');
    }
    });


