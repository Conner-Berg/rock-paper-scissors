function setResult() {
	if (playerWins === 5) {
		rock.remove();
		paper.remove();
		scissors.remove();
		result.textContent = `Wow, you've won the game! Congratulations!`;
	} else if (playerLoses === 5) {
		rock.remove();
		paper.remove();
		scissors.remove();
		result.textContent = `Unfortunately, you've lost. Better luck next time.`;
	} else {
		result.textContent = `${resultStr}`;
	}
}

function setScore() {
	score.textContent = `YOU: ${playerWins}\r\nCPU: ${playerLoses}\r\nTIES: ${ties}`;
}

function setRock() {
	playerSelection = "rock";
	playRound();
}

function setPaper() {
	playerSelection = "paper";
	playRound();
}

function setScissors() {
	playerSelection = "scissors";
	playRound();
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
		resultStr = "It's a tie!";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		resultStr = "You win!";
	} else {
		resultStr = "You lose!";
	}
	resultStr = `The computer picked ${computerSelection.toUpperCase()}.\r\n${resultStr}`;
	if (resultStr.includes("tie")) {
		ties += 1;
	} else if (resultStr.includes("win")) {
		playerWins += 1;
	} else if (resultStr.includes("lose")) {
		playerLoses += 1;
	}
	setResult();
	setScore();
}

let playerSelection;
let computerSelection;
let resultStr;
let playerWins = 0;
let playerLoses = 0;
let ties = 0;

let result = document.querySelector(".result");

let score = document.querySelector(".score");

let rock = document.querySelector(".rock");
rock.addEventListener("click", setRock);

let paper = document.querySelector(".paper");
paper.addEventListener("click", setPaper);

let scissors = document.querySelector(".scissors");
scissors.addEventListener("click", setScissors);
