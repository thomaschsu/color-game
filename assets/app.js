let colors = generateColors(6);

const squares = document.querySelectorAll('.square');
const pickedColor = pickColor();
const message = document.querySelector('#message');
const jumbotron = document.querySelector('.jumbotron');

for(let i = 0; i < squares.length; i++) {
    // Add intial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners to squares
    squares[i].addEventListener('click', function() {
        // Grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor);
        // Compare color to pickedColor
        if(clickedColor === pickedColor) {
            message.textContent = 'You win!';
            changeColors(clickedColor);
            jumbotron.style.background = clickedColor;
        } else {
            this.style.backgroundColor = '#FFF';
            message.textContent = 'Try again!';
        }
    });
}

const rgbValue = document.getElementById('rgbValue');
rgbValue.textContent = pickedColor;

function changeColors(color) {
    // Loop through all squares
    for(let i = 0; i < squares.length; i++) {
        // Change each color to match winning color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num) {
    // Make Array
    let array = [];
    // Loop
    for(let i = 0; i < num; i++) {
        // Make random colors and push into array
        array.push(randomColor());
    }
    // Return array
    return array;
}

function randomColor() {
    // Pick a red from 0 - 255
    let r = Math.floor(Math.random() * 256);
    // Pick a green from 0 - 255
    let g = Math.floor(Math.random() * 256);
    // Pick a blue from 0 - 255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}