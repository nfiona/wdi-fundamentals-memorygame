console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


var element = document.getElementById('game-board');

for (var i = 0; i < 4; i++) {
	var divElement = document.createElement('Div');
	divElement.className = ("card");
element.appendChild(divElement);
}

function createCards (x) {
	var element = document.getElementById('game-board');

for (var i = 0; i < 4; i++) {
	var divElement = document.createElement('Div');
	divElement.className = ("card");
element.appendChild(divElement);
}
}



















