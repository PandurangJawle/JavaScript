let mydiv=document.querySelector('#mydiv');

let newElement =document.createElement('span');
newElement.textContent="Aarav "

mydiv.insertAdjacentElement('beforebegin',newElement)