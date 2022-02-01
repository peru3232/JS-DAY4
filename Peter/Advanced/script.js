const circle = document.getElementById('circle');
const description = document.getElementById('description');

function hoover(x) {
    if (x) { description.innerHTML = "you are in the circle"
    } else {description.innerHTML = "you are outside of the circle"
    }

}

function changeBackground(color) {
    document.body.style.background = color;
}

circle.addEventListener('mouseover', function(){hoover(true)});
circle.addEventListener('mouseleave', function(){hoover(false)});
circle.addEventListener('click', function(){changeBackground('gray')});
circle.addEventListener('dblclick', function(){changeBackground('blue')});