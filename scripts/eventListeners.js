



function checkAgeNotNegative(){
    const element = document.getElementById('age');
    const age = element.value ;

    if(age < 0){
        showMessage('age cannot be negative');
    }
}

function checkAgeIsNumber(){
    const element = document.getElementById('age');
    const age = element.value;

    if(!(!isNaN(parseFloat(age)) && isFinite(age))){
        showMessage("Age must be a number.");
    }
}

function clearMessage(){
    showMessage("");
}

function showMessage(message){

    const output = document.getElementById('output');
  
    output.textContent = message;
}

function init(){
   
    const element = document.getElementById("age");
    element.addEventListener('blur', clearMessage);
    element.addEventListener('blur', checkAgeIsNumber);
    element.addEventListener('blur', checkAgeNotNegative);

    const checkbox = document.getElementById('validation');

    checkbox.addEventListener('change', ()=> {
        if(checkbox.checked){
            element.addEventListener('blur', checkAgeIsNumber);
            element.addEventListener('blur', checkAgeNotNegative);
        } else {
            clearMessage();
            element.removeEventListener('blur', checkAgeIsNumber);
            element.removeEventListener('blur', checkAgeNotNegative);
        }
    })
}

document.addEventListener('DOMContentLoaded', init);