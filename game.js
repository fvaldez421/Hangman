var inquirer = require("inquirer");
var clc = require("cli-color");
var letters = require("./letters.js");
var newWord = require("./words.js");
var makeArrs = require("./word.js");

var gameWord = new makeArrs(newWord);
console.log(gameWord.cWordArr);
console.log(gameWord.makeBlanks());

function gameInit() {
	console.log(clc.red("\nWelcome to Hangman!\n"));

	inquirer.prompt([
		{
			type: "list",
			name: "command",
			message: "Choose an option:",
			choices: ["Start game", "Exit"]
		},
	]).then(function(response) {
			var command = response.command;
			if (command === "Start game") {
				// game.Start();
				console.log("Start game function accessed.");
			}else {
				exit();
			};
		});
};


function exit() {
	console.log("Goodbye!");
};

module.exports = {
	gameInit: gameInit,
}