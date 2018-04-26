
var wordArr = ["computer", "keyboard", "desktop", "macintosh", "microsoft"];

module.exports = {

	//Returns a random word from array
	New: function() {
		let word = wordArr[Math.floor(Math.random() * wordArr.length)];
		return word;
	} 
}