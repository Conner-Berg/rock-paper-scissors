let playerSelection;
let computerSelection;
let result;
let rps = false;

function startRockPaperScissors() {
	if (playerSelection === undefined) {
		playerSelection = prompt(
			'Hi, lets play Rock-Paper-Scissors!\nTo start playing, type "rock", "paper", "scissors".\nTo play a 5 round game, type "5".'
		);
	} else if (rps) {
		playerSelection = prompt(
			`${result}\nTo play again, type "rock", "paper", "scissors".\nTo play a 5 round game, type "5".`
		);
	}
	setTimeout(showPlayerSelection(), 1); // Chrome wouldn't console.log() between prompts() without setTimeout()
	checkPlayerSelection();
	playRound();
	startRockPaperScissors();
}

function showPlayerSelection() {
	console.log(`You typed: ${playerSelection}`);
}

function checkPlayerSelection() {
	if (playerSelection === "5") {
		game();
	} else if (
		playerSelection.toLowerCase() === "rock" ||
		playerSelection.toLowerCase() === "paper" ||
		playerSelection.toLowerCase() === "scissors"
	) {
		return (rps = true);
	} else {
		alert(
			"Hmm, I didn't understand what you typed.\nPress OK, or refresh the page to start over."
		);
		playerSelection = undefined;
		return (rps = false);
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
	if (rps) {
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
}

function game() {
	let ties = 0;
	let playerWins = 0;
	let playerLoses = 0;
	let gameScore;
	for (let gameNum = 1; gameNum <= 5; ++gameNum) {
		playerSelection = prompt(
			`Alright, round ${gameNum}!\nType "rock", "paper", "scissors".`
		);
		setTimeout(showPlayerSelection(), 1);
		checkPlayerSelection();
		playRound();
		if (result.includes("tie")) {
			ties += 1;
		} else if (result.includes("win")) {
			playerWins += 1;
		} else if (result.includes("lose")) {
			playerLoses += 1;
		}
	}
	if (playerWins > playerLoses) {
		gameScore = "Wow, you've won the game! Congratulations!";
	} else if (playerWins < playerLoses) {
		gameScore = "Unfortunately, you've lost. Better luck next time.";
	} else {
		gameScore =
			"Looks like it's a complete tie! Try again to see if you can beat the computer.";
	}
	alert(
		`And that's the game! Here's the score:\nWins: ${playerWins}\nLoses: ${playerLoses}\nTies: ${ties}\n${gameScore}`
	);
	playerSelection = undefined;
	rps = false;
}

startRockPaperScissors();
