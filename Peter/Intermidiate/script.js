// Exercise 1
const matrixArray = document.getElementsByName('santa');

function disappearItem() {
    // console.log(this)
    if (this.style.opacity == "1") {
    this.style.opacity= "0";
    this.style.transition = "500ms";
    } else {this.style.opacity= "1"}
}

for (let index = 0; index < matrixArray.length; index ++) {
    matrixArray[index].addEventListener('click', disappearItem);
    matrixArray[index].style.opacity = "1";
}


//Exercise 2
const button = document.getElementById('button');
const main = document.getElementsByTagName('main');

function randomColorValue() {
    return Math.round((Math.random() * 255));
}

function changeBackground() {
    const value = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
    main[0].style.background = value;
}

button.addEventListener("click", changeBackground);