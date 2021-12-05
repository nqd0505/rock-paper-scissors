function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()* 3)];
    return choice;
}

function playRound() {
    let selection = prompt("Enter your choice: ");
    let playerSelection = selection.toLowerCase();
    let computerSelection = computerPlay();
    if( playerSelection === computerSelection) {
        result = "Draw!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore += 1;
            result = "You Lose! Paper beats Rock";
        } else {
            playerScore += 1;
            result = "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if(computerSelection === "scissors") {
            computerScore += 1;
            result = "You Lose! Scissors beats Paper";
        } else {
            playerScore += 1;
            result = "You Win! Paper beats Scissors";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore += 1;
            result = "You Lose! Rock beats Scissors";
        } else {
            playerScore += 1;
            result = "You Win! Scissors beats ";
        }
    } else {
        result = "You entered the wrong choice!";
    }
    console.log(result);
    return result;
}

let playerScore = 0, computerScore = 0;

function game() {
    for (let n=0; n<5; n++) {
        playRound();
        score = playerScore + " - " + computerScore;
        console.log(score);
    }
    if (playerScore > computerScore) {
        return "Victory!"
    } else if (playerScore < computerScore) {
        return "Defeated"
    } else {
        return "Draw!"
    }
}