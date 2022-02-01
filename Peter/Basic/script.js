// Basic 1
const firstName = document.getElementById('fn');
const lastName = document.getElementById('ln');
const age = document.getElementById('age');
const output = document.getElementById('combinated');

const inputFields = document.getElementById('inputfields');

function combineValues () {
    output.innerHTML = '';
    if (firstName.value && lastName.value && age.value) {
        output.innerHTML = `${firstName.value} ${lastName.value} is ${age.value} years old`
        let textColor = 'red';
        if (lengthCheck(firstName.value)) {textColor = 'green'};
        output.style.color = textColor;
        output.style.margin = "10px";
    }    
}

function lengthCheck (string) {
    if (string.length > 5) {return true};
    return false;
}

inputFields.addEventListener("change", combineValues);


//Basic 2
const profInputfields = document.getElementById('profession');
const prof = document.querySelectorAll('input[type=radio]')

function bgChange () {
    for (let i = 0; i < prof.length; i++) {
        if (prof[i].checked) {break}
    }
    
}


profInputfields.addEventListener('change', bgChange)
