var inquirer = require("inquirer");
var game = require("./game.js");

//Initializes game upon startup
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

		//allows user to begin a game session or exit application from the start
			var command = input.command;
			if (command === "Start game") {
				game.start();
			}else {
				game.exit();
			};
		});
};

gameInit();
