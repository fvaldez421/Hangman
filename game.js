let inquirer = require("inquirer");
let clc = require("cli-color");
let wordTools = require("./Words.js");
let wordMaker = require("./wordBank.js");
let lives = 10;
let letterBank = [];

//Begins game when called upon (should be called upon by CLI.js) 
function start() {

	//Resets newWord and blankWord incase the game is finished and restarted
	let newWord = "";
	let blankWord = "";

	//Reassigns newWord to a fresh random word that is returned by wordMaker.New()
	newWord = wordMaker.New();

	//Pushes newWord into the makeWord() function inside wordTools to return a string of blanks
	blankWord = wordTools.makeWord(newWord);

	//Communicates game start with user, displays lives and the string of blanks
	console.log("Starting game!");
	console.log("Lives: " + lives);
	console.log(blankWord);

	//Begins game cycle with newWord and blankWord
	playGame(newWord, blankWord);
};

//The major game function, prompts user to enter letters, checks letters against gameWord,
//If letter mathes a letter in gameWord, it will replace it with a _ in the game word and 
//replace he pertaining _ in the blankword with the chosen letter

function playGame(gameWord, blankWord) {
	console.log("\n--------------------------------------------");
	inquirer.prompt([
		{
			type: "input",
			message: "Guess a letter: ",
			name: "userGuess"
		},
		]).then(function(input) {

			//Assigns user guess to a letter
			let letter = input.userGuess.toLowerCase();

			//Splits the gameWord and blankWord parameters into arrays in preparation for future use
			let gameWordArr = gameWord.split("");
			let blankWordArr = blankWord.split(" ");

		//Checks that user's guess is a valid response, no blanks, spaces or more than one character
			if (letter === "" || letter === " " || letter.length > 1) {
				console.log("Enter a valid character!");
				playGame(gameWord, blankWord);

		//IF USER'S GUESS IS CORRECT:
		//Uses checkWord function that returns a true if letter matches one in gameWord
			}else if (wordTools.checkWord(gameWord, letter)) {
				console.log("\nGood Job!");
				console.log("Lives: " + lives);
				console.log("Letters used: " + letterBank.toString() + "\n");

				//If this condition is met, updateWords is called and fed gameWordArr, blankWordArr from 
				//before and the game letter. This is where the two words are updated (more info in Words.js),
				//returns an array with the two updated words.
				words = wordTools.updateWords(gameWordArr, blankWordArr, letter);
				gWord = words[0];
				bWord = words[1];

				//The following is one of the game status checkers. This checks that the blankWord or its 
				//updated version (bWord) still includes a "_" if upon the last correct guess and update, 
				//it cleared the last "_" then the word is complete and the game is over.
				if (!bWord.includes("_")) {
					console.log("Winner!");
					console.log("The word was: " + bWord + "\n");
					gameEnd();

				//If the above condition is not met and the bWord still contains a "_", then the main game 
				//function will be called again for the next cycle
				}else {
					console.log(bWord);
					playGame(gWord, bWord);
				}
		//IF USER'S GUESS IS INCORRECT:
		//Used the same checkWord function as before, in this case it would return false
			}else if (!wordTools.checkWord(gameWord, letter)) {

				//subtracts one life in case of any valid but incorrect user guess
				lives --;

				//Checks user's guess against array of previously incorrect letters.
				//If found, returns true and alerts user
				if (wordTools.checkBank(letterBank, letter)) {
					console.log("\nLetter already used! Try again.");
					console.log("Lives: " + lives);
					console.log("Letters used: " + letterBank.toString() + "\n");
					console.log(blankWord);

					//Second game status checker, checks for amount of lives remaining after most recent 
					//update if lives reach 0, game is over
					if (lives === 0) {
						console.log("Loser!");
						console.log("The word was: " + bWord + "\n");
						gameEnd();
					}else {
						playGame(gameWord, blankWord);
					}
				
				//If letter is not found in letterBank, it is pushed into array and user is alerted
				}else {
					letterBank.push(letter);
					console.log("\nYou're getting heavier...");
					console.log("Lives: " + lives);
					console.log("Letters used: " + letterBank.toString() + "\n");
					console.log(blankWord);

					//Game status is checked again under this conditional
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

//Asks user if they'd like to play again
function gameEnd() {
	inquirer.prompt([
		{
			type: "list",
			message: "Play again?",
			choices: ["Yes", "No"],
			name: "answer"
		},
		]).then(function(input) {

			//If yes, resets lives and letterBank, calls on start function all over again.
			if (input.answer === "Yes") {

				lives = 10;
				letterBank = [];
				start();
			}else {
				exit();
			}
		});	
}



//Ends game with a final console log.
function exit() {
	console.log("Goodbye!");
};

module.exports = {
	start: start,
	exit: exit,
};