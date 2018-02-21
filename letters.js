// CONSTRUCTOR FUNCTION
var game = require("./game.js");
var inclBool = false;

var gameScore = function() {
	this.cWordArr = game.gameWord.cWordArr;
	this.bWordArr = game.gameWord.makeBlanks();
	this.checkWord = function() {
		if (cWordArr.includes(input.letter)) {
			this.updateBlanks();
			inclBool = true;
		};
	};
	this.updateBlanks = function() {
		
	}
}