var letters = require("./letters.js");
var newWord = require("./words.js");
var makeArrs = require("./word.js");


function wordFunction() {

};

function letterFunction() {

};

var gameWord = new makeArrs(newWord);
console.log(gameWord.cWordArr);
console.log(gameWord.makeBlanks());
