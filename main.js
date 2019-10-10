const texts = ['Luqmaan Hassan','Web Developer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText =texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('#typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 300);
}());


//contact modal popup
//get the modal element
const modal = document.getElementsByClassName('contact-modal')[0];
//get the open modal button
const modalBtn =document.getElementById('openContactModal');
//close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click 
modalBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', closeModal);
//listen for outside click
window.addEventListener('click', outsideClick);

//open modal function
function openModal(){
    modal.style.display = 'block';
}

//close modal function
function closeModal(){
    modal.style.display = 'none';
}

//close modal on click out
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}