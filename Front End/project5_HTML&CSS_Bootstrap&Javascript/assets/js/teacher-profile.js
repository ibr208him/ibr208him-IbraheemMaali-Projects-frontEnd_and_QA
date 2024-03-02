/* follow button color becomes red when clicked ......*/


let follow=document.querySelector('.followbutton');

follow.addEventListener('click',function(){

    if(follow.classList.contains('bg-main-color2')){
        follow.classList.remove('bg-main-color2','text-white');
    }
    else{
   
    follow.classList.add('bg-main-color2','text-white');
    }


// follow.style.cssText="background-color:#F56962;color:white";
});



