let playerSelection;
let computerSelection;
let result;
let playerScore = 0;
let computerScore = 0;
let player = document.getElementById("player");
let computer = document.getElementById("computer");

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()* 3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        notification.textContent = "Draw!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore += 1;
            notification.textContent = "You Lose! Paper beats Rock";
        } else {
            playerScore += 1;
            notification.textContent = "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore += 1;
            notification.textContent = "You Lose! Scissors beats Paper";
        } else {
            playerScore += 1;
            notification.textContent = "You Win! Paper beats Scissors";
        }
    } else {
        if (computerSelection === "rock") {
            computerScore += 1;
            notification.textContent = "You Lose! Rock beats Scissors";
        } else {
            playerScore += 1;
            notification.textContent = "You Win! Scissors beats ";
        }
    }
    player.textContent = `You: ${playerScore}`;
    computer.textContent = `Computer: ${computerScore}`;
}       

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', () => {
    const img = document.querySelector("img")
    playerSelection = img.alt.toLowerCase();
    playRound(playerSelection, computerSelection);
    if (playerScore === 5) {
        notification.textContent = "Victory!";
        notification.style.color = "green";
        resetGame();
    } else if (computerScore === 5) {
        notification.textContent = "Defeated!";
        notification.style.color = "red";
        resetGame();
    }
}));

const notification = document.querySelector("#notification");
