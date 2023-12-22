"use strict"

// Edit Car details toggle
const editButton = document.getElementById('editUser');
const editCarDetails = document.getElementById('editCarDetails');
const date = document.getElementById('date');
const appointSubmit = document.getElementById('appointSubmit');

if (editButton) {
    editButton.addEventListener('click', ()=>{
        if (editCarDetails.classList.contains('hidden')){
            editCarDetails.classList.remove('hidden');
            editButton.innerText = "Hide Edit";
        }else {
            editCarDetails.classList.add('hidden');
            editButton.innerText = "Edit Car Info";
        }
    });
};

// Fomrat date for display
if(date){
    let dated = date.innerHTML;
    if(dated.length > 0){
        let datee = new Date(dated).toUTCString();
        let datearray = datee.split(' ',4);
        date.innerHTML = `${datearray[0]} ${datearray[1]} ${datearray[2]}, ${datearray[3]}`;
    } else {
        date.innerHTML = 0;
    }
}
