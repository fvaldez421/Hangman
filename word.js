
var words = require("./words.js");
var bWordArr = [];

var newWord = function(word) {
	this.chosenWord = word;
	this.cWordArr = this.chosenWord.split("");
	this.makeBlanks = function() {
		for (var i = 0; i < this.cWordArr.length; i++) {
			bWordArr.push("_ ");
		};
		return bWordArr;
	};
};

module.exports = newWord;