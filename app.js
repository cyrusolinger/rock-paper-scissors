let playerScore = 0;
let computerScore = 0;

// play game
function playGame() {

    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice, getComputerChoice)
        console.log(`${playerScore} to ${computerScore}`)
    }

    if (playerScore > computerScore) {
        console.log("You Win!")
    } else if (computerScore > playerScore) {
        console.log("You lose!")
    } else {
        console.log("Tie!")
    }
}

// play round
function playRound(playerSelection, computerSelection) {
    let currPlayer = playerSelection()
    console.log(`You chose ${currPlayer}`)
    let currComputer = computerSelection()
    console.log(`Computer chose ${currComputer}`)

    if (currPlayer === currComputer) {
        return
    } else if (currPlayer === 'rock') {
        if (currComputer === 'paper') {
            computerScore++
        } else {
            playerScore++
        }
    } else if (currPlayer === 'paper') {
        if (currComputer === 'scissors') {
            computerScore++
        } else {
            playerScore++
        }
    } else if (currPlayer === 'scissors') {
        if (currComputer === 'rock') {
            computerScore++
        } else {
            playerScore++
        }
    }

}

// computer makes choice
const getComputerChoice = () => {
    const rng = Math.floor(Math.random() * 3)
    switch (rng) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// player makes choice
const getPlayerChoice = () => {
    return prompt().toLowerCase()
}

// invoke play game
playGame()