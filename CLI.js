var inquirer = require("inquirer");
// var prompt = require("prompt");
var clc = require("cli-color");
var game = require("./game.js");


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
				console.log("Start game funtion accessed.");
			}else {
				exit();
			};
		});
};

function exit() {
	console.log("Goodbye!");
};
gameInit();