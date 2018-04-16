
var wordArr = ["computer", "keyboard", "desktop", "macintosh", "microsoft"];

module.exports = {
	New: function() {
		let word = wordArr[Math.floor(Math.random() * wordArr.length)];
		return word;
	} 
}