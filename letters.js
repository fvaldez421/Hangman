// CONSTRUCTOR FUNCTION
var game = require("./game.js");
var inclBool = false;
var letFound = false;

var gameScore = function() {
	this.cWordArr = game.gameWord.cWordArr;
	this.bWordArr = game.gameWord.makeBlanks();
	this.checkWord = function() {
		if (cWordArr.includes(CLI.guessedLetter)) {
			this.updateBlanks();
			inclBool = true;
		};
	};
	this.updateBlanks = function() {
		if (inclBool = true) {
			var i = cWordArr.indexOf(CLI.guessedLetter);
			bWordArr[i] = cWordArr[i];
			letFound = true;
		};
	};
	this.letFound = letFound;
}