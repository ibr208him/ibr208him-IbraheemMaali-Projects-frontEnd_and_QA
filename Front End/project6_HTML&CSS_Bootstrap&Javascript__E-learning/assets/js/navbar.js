/* navbar backgorund color change when scrolling................................*/
let navbar=document.querySelector('.navbar');
let scrollPoint=document.querySelector('#scroll-point');

window.addEventListener('scroll', function(){

    if(this.window.scrollY>scrollPoint.offsetTop){
    navbar.classList.add('bg-white');
    }
    else{
        navbar.classList.remove('bg-white');
    }
    });
    let navToggle=document.querySelector('.navbar-toggler-icon');
    navToggle.addEventListener('click',function(){
    navbar.classList.add('bg-white');
    }
    );
/*................................................................*/