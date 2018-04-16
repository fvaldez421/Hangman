

module.exports = {
// ________ Makes a blank array with new word _________
	makeWord: function(word) {
		let cWordArr = word.split("");
		let bWordArr = [];

		for (let i = 0; i < cWordArr.length; i++) {
			bWordArr.push("_");
		};
		let bWord = bWordArr.toString();

		while (bWord.includes(",")) {
			bWord = bWord.replace(",", " ");
		}
		return bWord;
	},
// _________ Checks letter against current verion of gameWord, 
// returns boolean ___________
	checkWord: function(gameWord, letter) {
		if (gameWord.includes(letter)){
			return true;
		}else {
			return false;
		}
	},
// Removes guessed letter from gameWord, 
// replaces blank space in blankWord,
// formats words for next cycle
	updateWords: function(gWordArr, bWordArr, letter) {
		while (gWordArr.includes(letter)) {
			let i = gWordArr.indexOf(letter);

			bWordArr[i] = letter;
			gWordArr.splice(i, 1, "_");
		}

		let bWord = bWordArr.toString();
		let gWord = gWordArr.toString();

		while (bWord.includes(",")) {
			bWord = bWord.replace(",", " ");
		}

		while (gWord.includes(",")) {
			gWord = gWord.replace(",", "");
		}
		return [gWord, bWord];
	},
// Checks if letter has been recorded in wordBank before
// Returns boolean
	checkBank: function(bank, letter) {
		if (bank.includes(letter)) {
			return true;
		}else {
			return false;
		}
	}


}


