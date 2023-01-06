let playerSelection;
let computerSelection;
let result;

function startRockPaperScissors() {
	if (playerSelection === undefined) {
		let gamePrompt =
			'Hi, lets play Rock-Paper-Scissors!\nTo start playing, type "rock", "paper", "scissors".\nTo play a round of 5 games, type "5".\nTo learn how to play, type "?".';
	} else if (playerSelection === 5) {
		let gamePrompt = `Time for round ${gameNum}!\nType "rock", "paper", "scissors".`;
	} else if (
		playerSelection === "rock" ||
		playerSelection === "paper" ||
		playerSelection === "scissors"
	) {
		let gamePrompt = `${result}\nTo play again, type "rock", "paper", "scissors".\nTo play a round of 5 games, type "5".`;
	}
	getInput();
}

function getInput() {
	playerSelection = prompt(gamePrompt);
	showInput();
}

function showInput() {
	console.log(`You typed: ${playerSelection}`);
	checkInput();
}

function checkInput() {
	if (playerSelection === "" || playerSelection === null) {
		alert(
			"Oops, it looks like you didn't enter anything.\nPress OK, or refresh the page to start over."
		);
		playerSelection = undefined;
		startRockPaperScissors();
	} else if (
		playerSelection.toLowerCase() === "rock" ||
		playerSelection.toLowerCase() === "paper" ||
		playerSelection.toLowerCase() === "scissors"
	) {
		playRound();
		startRockPaperScissors();
	} else if (playerSelection === 5) {
		game();
	} else if (playerSelection === "?") {
		showRules();
	} else {
		alert(
			"Hmm, I didn't understand what you typed.\nPress OK, or refresh the page to start over."
		);
		playerSelection = undefined;
		startRockPaperScissors();
	}
}

function getComputerSelection() {
	computerSelection = Math.floor(Math.random() * 3);
	if (computerSelection === 0) {
		return (computerSelection = "rock");
	} else if (computerSelection === 1) {
		return (computerSelection = "paper");
	} else {
		return (computerSelection = "scissors");
	}
}

function playRound() {
	getComputerSelection();
	if (playerSelection === computerSelection) {
		result = "It's a tie!";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		result = "You win!";
	} else {
		result = "You lose!";
	}
	result = `The computer picked ${computerSelection}. ${result}`;
	console.log(result);
	return result;
}

function game() {
	let playerGamesWon = 0;
	let computerGamesWon = 0;
	let gamesTied = 0;
	for (let gameNum = 1; gameNum <= 5; gameNum++) {
		startRockPaperScissors();
		playRound();
		if (result === "It's a tie!") {
			gamesTied += 1;
		} else if (result === "You win!") {
			playerGamesWon += 1;
		} else if (result === "You lose!") {
			computerGamesWon += 1;
		}
	}
}

function showRules() {
	// In progress
}

startRockPaperScissors();
