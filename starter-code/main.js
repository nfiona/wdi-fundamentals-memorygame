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

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
		board.appendChild(cardElement);
	}
}






















