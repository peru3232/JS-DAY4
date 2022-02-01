// Exercise 1
const matrixArray = document.getElementsByName('santa');

function diappearItem() {
    // console.log(this)
    this.style.opacity= "0";
    this.style.transition = "500ms";
}

for (let index = 0; index < matrixArray.length; index +=1) {
    matrixArray[index].addEventListener('click', diappearItem)
}

