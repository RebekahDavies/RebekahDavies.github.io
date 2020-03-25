let id;
let modal;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function openModal(modalId){
    id = modalId
    modal = document.getElementById(id);
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    console.log("modal style = " + modal.style.display);
    modal = document.getElementById(id);
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}