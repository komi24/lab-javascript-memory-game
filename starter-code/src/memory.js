var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
	this.cards = _.shuffle(this.cards)
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
	this.pairsClicked ++;
	if (firstCard === secondCard) {
		this.pairsGuessed++;
	}	
	return firstCard === secondCard;
}

MemoryGame.prototype.isFinished = function () {
	return this.pairsGuessed === this.cards.length / 2;
	// if (this.pairsGuessed === this.cards.length / 2) {
	// 	return true;
	// } else {
	// 	return false;
	// }
};