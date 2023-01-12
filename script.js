let playerSelection;
let computerSelection;
let result;

function startRockPaperScissors() {
	if (playerSelection === undefined) {
		playerSelection = prompt(
			'Hi, lets play Rock-Paper-Scissors!\nTo start playing, type "rock", "paper", "scissors".'
		);
	} else if (
		playerSelection === "rock" ||
		playerSelection === "paper" ||
		playerSelection === "scissors"
	) {
		playerSelection = prompt(
			`${result}\nTo play again, type "rock", "paper", "scissors".`
		);
	}
	showPlayerSelection();
}

function showPlayerSelection() {
	setTimeout(console.log(`You typed: ${playerSelection}`), 1); // Chrome wouldn't console.log() between prompts() without setTimeout()
	checkPlayerSelection();
}

function checkPlayerSelection() {
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
		getComputerSelection();
		playRound();
		startRockPaperScissors();
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

startRockPaperScissors();
