var inquirer = require("inquirer");
var game = require("./game.js");

function gameInit() {
	console.log("\nWelcome to Hangman!\n");

	inquirer.prompt([
		{
			type: "list",
			name: "command",
			message: "Choose an option:",
			choices: ["Start game", "Exit"]
		},
	]).then(function(input) {
			var command = input.command;
			if (command === "Start game") {
				game.start();
			}else {
				game.exit();
			};
		});
};

gameInit();
