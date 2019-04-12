let numberSquares = 6;
let colors = generateColors(numberSquares);
let pickedColor = pickColor();

const rgbValue = document.getElementById('rgbValue');
const squares = document.querySelectorAll('.square');
const message = document.querySelector('#message');
const newColors = document.querySelector('#newColors');
const jumbotron = document.querySelector('.jumbotron');
const easyButton = document.querySelector('#easyButton');
const hardButton = document.querySelector('#hardButton');

easyButton.addEventListener('click', function() {
    message.textContent = '';
    message.classList.remove('alert-success');
    message.classList.remove('alert-danger');
    this.classList.add('btn', 'btn-dark');
    hardButton.classList.remove('btn-dark');
    numberSquares = 3
    colors = generateColors(numberSquares)
    pickedColor = pickColor();
    rgbValue.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
});
hardButton.addEventListener('click', function() {
    message.textContent = '';
    message.classList.remove('alert-success');
    message.classList.remove('alert-danger');
    this.classList.add('btn', 'btn-dark');
    easyButton.classList.remove('btn-dark');
    numberSquares = 6;
    colors = generateColors(numberSquares)
    pickedColor = pickColor();
    rgbValue.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = 'inline-block';
    };
});

function startGame() {
    rgbValue.textContent = pickedColor;
    // Remove classes for alert
    message.classList.remove('alert-success');
    message.classList.remove('alert-danger');
    for (let i = 0; i < squares.length; i++) {
        // Add intial colors to squares
        squares[i].style.backgroundColor = colors[i];
        // Add click listeners to squares
        squares[i].addEventListener('click', function () {
            // Grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            // Compare color to pickedColor
            if (clickedColor === pickedColor) {
                message.textContent = 'You win!';
                message.classList.remove('alert-danger');
                message.classList.add('alert-success');
                newColors.textContent = 'Play again?';
                changeColors(clickedColor);
                jumbotron.style.background = clickedColor;
            } else {
                this.style.backgroundColor = '#FFF';
                message.textContent = 'Try again!';
                message.classList.add('alert-danger');
            }
        });
    }
}


function changeColors(color) {
    // Loop through all squares
    for (let i = 0; i < squares.length; i++) {
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
    for (let i = 0; i < num; i++) {
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

newColors.addEventListener('click', function () {
    // Generate new colors
    colors = generateColors(numberSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change rgbValue to match picked color
    rgbValue.textContent = pickedColor;
    // Change colors of squares
    startGame();
    // Reset background of jumbotron
    jumbotron.style.backgroundColor = "";
    // Change text content back to new Colors
    this.textContent = 'New Colors';
    // Make message an empty string
    message.textContent = "";
});

startGame();