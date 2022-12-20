function playGame() {

    let playerScoreTotal = 0; // player in-game score total
    let computerScoreTotal = 0; // computer in-game score total

    let playerScore = document.querySelector('.player-score span')
    let computerScore = document.querySelector('.computer-score span')

    window.addEventListener('click', function (e) {

        const playerPick = e.target.className

        const computerPick = getComputerChoice()


        if (playerPick === computerPick) {
            return
        } else if (playerPick === 'rock') {
            if (computerPick === 'paper') {
                computerScoreTotal++
            } else {
                playerScoreTotal++
            }
        } else if (playerPick === 'paper') {
            if (computerPick === 'scissors') {
                computerScoreTotal++
            } else {
                playerScore++
            }
        } else if (playerPick === 'scissors') {
            if (computerPick === 'rock') {
                computerScoreTotal++
            } else {
                playerScoreTotal++
            }
        }

        playerScore.textContent = playerScoreTotal
        computerScore.textContent = computerScoreTotal


        if (playerScoreTotal === 5 || computerScoreTotal === 5) {
            if (playerScoreTotal > computerScoreTotal) {
                announceWinner('Player')
            } else {
                announceWinner('Computer')
            }
        }
    })
}

const announceWinner = (winner) => {
    const div = document.createElement('h2')
    const body = document.querySelector('body')
    div.textContent = `${winner} wins!`
    body.appendChild(div)
}

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

playGame() // start game