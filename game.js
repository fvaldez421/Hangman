let inquirer = require("inquirer");
let clc = require("cli-color");
let wordTools = require("./Words.js");
let wordMaker = require("./wordBank.js");
let lives = 10;
let letterBank = [];


function start() {
	let newWord = "";
	let blankWord = ""
	newWord = wordMaker.New()
	blankWord = wordTools.makeWord(newWord);

	console.log("Starting game!");
	console.log("Lives: " + lives);
	console.log(blankWord);

	playGame(newWord, blankWord);
};

function playGame(gameWord, blankWord) {
	console.log("\n--------------------------------------------");
	inquirer.prompt([
		{
			type: "input",
			message: "Guess a letter: ",
			name: "userGuess"
		},
		]).then(function(input) {
			let letter = input.userGuess.toLowerCase();
			let gameWordArr = gameWord.split("");
			let blankWordArr = blankWord.split(" ");

			if (letter === "") {
				console.log("Enter a valid character!");
				playGame(gameWord, blankWord);
				
			}else if (wordTools.checkWord(gameWord, letter)) {
				console.log("\nGood Job!");
				console.log("Lives: " + lives);
				console.log("Letters used: " + letterBank.toString() + "\n");

				words = wordTools.updateWords(gameWordArr, blankWordArr, letter);
				gWord = words[0];
				bWord = words[1];

				if (!bWord.includes("_")) {
					console.log("Winner!");
					console.log("The word was: " + bWord + "\n");
					gameEnd();
				}else {
					console.log(bWord);
					playGame(gWord, bWord);
				}

			}else if (!wordTools.checkWord(gameWord, letter)) {
				lives --;

				if (wordTools.checkBank(letterBank, letter)) {
					console.log("\nLetter already used! Try again.");
					console.log("Lives: " + lives);
					console.log("Letters used: " + letterBank.toString() + "\n");
					console.log(blankWord);

					if (lives === 0) {
						console.log("Loser!");
						console.log("The word was: " + bWord + "\n");
						gameEnd();
					}else {
						playGame(gameWord, blankWord);
					}
					
				}else {
					letterBank.push(letter);
					console.log("\nYou're getting heavier...");
					console.log("Lives: " + lives);
					console.log("Letters used: " + letterBank.toString() + "\n");
					console.log(blankWord);

					if (lives === 0) {
						console.log("\nLoser!\n");
						gameEnd();
					}else {
						playGame(gameWord, blankWord);
					}				
				}
			}


		});

}

function gameEnd() {
	inquirer.prompt([
		{
			type: "list",
			message: "Play again?",
			choices: ["Yes", "No"],
			name: "answer"
		},
		]).then(function(input) {
			if (input.answer === "Yes") {

				lives = 10;
				letterBank = [];
				start();
			}else {
				exit();
			}

		});	
}




function exit() {
	console.log("Goodbye!");
};

module.exports = {
	start: start,
	exit: exit,
};