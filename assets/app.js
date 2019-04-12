let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

const squares = document.querySelectorAll('.square');
const pickedColor = pickColor();
const message = document.querySelector('#message');

for(let i = 0; i < squares.length; i++) {
    // Add intial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners to squares
    squares[i].addEventListener('click', function() {
        // Grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        
        // Compare color to pickedColor
        if(clickedColor === pickedColor) {
            message.textContent = 'You win!';
            changeColors(clickedColor);
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

function pickColor(){
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}