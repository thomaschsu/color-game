let numberSquares = 6;
let colors = generateColors(numberSquares);
let pickedColor = pickColor();
const rgbValue = document.getElementById('rgbValue');
const squares = document.querySelectorAll('.square');
const message = document.querySelector('#message');
const newColors = document.querySelector('#newColors');
const jumbotron = document.querySelector('.jumbotron');
const modeButtons = document.querySelectorAll('.mode');

for(let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
        modeButtons[0].classList.remove('btn-dark');
        modeButtons[1].classList.remove('btn-dark');
        this.classList.add('btn-dark');
        this.textContent === 'Easy' ? numberSquares = 3 : numberSquares = 6;
        reset();
    });
}

function reset() {
    // Generate new colors
    colors = generateColors(numberSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Reset background of jumbotron
    jumbotron.style.backgroundColor = "";
    // Change text content back to new Colors
    newColors.textContent = 'New Colors';
    // Make message an empty string
    message.textContent = "";
    // Change colors of squares
    startGame();
}

function startGame() {
    rgbValue.textContent = pickedColor;
    // Remove classes for alert
    message.classList.remove('alert-success');
    message.classList.remove('alert-danger');
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'inline-block';
            // Add intial colors to squares
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    checkWin();
}

function checkWin() {
    for (let i = 0; i < squares.length; i++) {
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
            };
        });
    };
}


function changeColors(color) {
    // Loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // Change each color to match winning color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    // Picks a random color out of the colors array;
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
    reset();
});

// Initiate game
startGame();