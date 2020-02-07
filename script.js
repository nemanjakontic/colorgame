var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgb = document.getElementById("rgb");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var btnReset = document.getElementById("reset");
var btnEasy = document.getElementById("easy");
var btnHard = document.getElementById("hard");


rgb.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            btnReset.textContent = "Play Again?";
        } else {
            messageDisplay.textContent = "Try Again!";
            this.style.backgroundColor = "#232323";
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        var color = randomColor();
        arr.push(color);
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

btnReset.addEventListener("click", function () {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    rgb.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    btnReset.textContent = "New Colors";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
});

btnEasy.addEventListener("click", function () {
    btnEasy.classList.add("selected");
    btnHard.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    rgb.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        if (i > 2) {
            squares[i].style.display = "none";
        }
    }
});

btnHard.addEventListener("click", function () {
    btnHard.classList.add("selected");
    btnEasy.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    rgb.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        if (i > 2) {
            squares[i].style.display = "block";
        }
    }
});