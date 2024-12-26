
/* start shopping cart page ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* displaying paying process when click on checkout button................................................................*/

let checkout1=document.querySelector('#checkout1');
let checkout2=document.querySelector('#checkout2');
let checkoutbtn1=document.querySelector('#checkout-btn-1');

checkoutbtn1.addEventListener('click',function(){
    checkout1.classList.add('d-none');
     checkout2.classList.remove('d-none');

});


/*................................................................*/

/* deleting cart item when click on trash icon................................................................*/

$('.fa-trash').click(function(e){
const target = e.target.getAttribute("id");
let element=$(`#${target}`).parentsUntil('.dellt')[1];
console.log(element.classList.add('d-none'));
});

/*................................................................*/

