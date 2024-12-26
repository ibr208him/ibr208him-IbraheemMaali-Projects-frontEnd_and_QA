/* heart icons color becomes red when clicked .........*/

let hearticonred=document.querySelectorAll('.fa-heart');
for (let i=0; i<hearticonred.length; i++){
hearticonred[i].addEventListener('click',function(){
    if(hearticonred[i].classList.contains('text-main-color2')){
    hearticonred[i].classList.remove('text-main-color2');
    }
    else{
        hearticonred[i].classList.add('text-main-color2'); 
    }
   
})
}

/*................................................................*/