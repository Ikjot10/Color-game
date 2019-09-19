var numSquares = 6;
var colors = generateColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickColor()];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("Easy");
var hardBtn = document.getElementById("Hard");

easyBtn.addEventListener("click", function() {
	numSquares = 3;
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = generateColors(numSquares);
	pickedColor = colors[pickColor()];
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function() {
	numSquares = 6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateColors(numSquares);
	pickedColor = colors[pickColor()];
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function () {
	//gen new colors
	colors = generateColors(numSquares);
	//pick new color
	pickedColor = colors[pickColor()];
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
	//adds initial colors
	squares[i].style.backgroundColor = colors[i];
	}
	//remove h1 color
	h1.style.backgroundColor = "steelblue";

	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
})

colorDisplay.textContent = pickedColor;
setColors();

function setColors() {
	for (var i = 0; i < squares.length; i++) {
	//adds initial colors
	squares[i].style.backgroundColor = colors[i];

	//adds click event
	squares[i].addEventListener("click", function () {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor ===pickedColor) {
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}
}

function changeColors(color) {
	for (var  i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	return Math.floor(Math.random()*colors.length);
}

function generateColors(num) {
	var rancolors = []

	for (var i = 0; i < num; i++) {
		rancolors.push(randomColor());
	}
	return rancolors;
}

function randomColor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb" + "(" + r+ ", " + g +", " + b+ ")";
}
