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