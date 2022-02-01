// Basic 1
const firstName = document.getElementById('fn');
const lastName = document.getElementById('ln');
const age = document.getElementById('age');
const output = document.getElementById('combinated');

const inputfields = document.getElementById('inputfields');

function combineValues () {
    output.innerHTML = `${firstName.value} ${lastName.value} is ${age.value} years old`
    let textColor = 'red';
    if (lengthCheck(firstName.value)) {textColor = 'green'};
    output.style.color = textColor;
    output.style.margin = "10px";
}

function lengthCheck (string) {
    if (string.length > 5) {return true};
    return false;
}

inputfields.addEventListener("change", combineValues);