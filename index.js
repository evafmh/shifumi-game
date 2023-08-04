/* --- VARIABLES --- */
const choices = ['✊', '🤚', '✌️']
const player1 = document.getElementById('player-1')

/* 1a. */
const player2 = document.getElementById('player-2')

/* 1b. */
const resultArea = document.getElementById('result-area')

/* 1c. */
const playBtn = document.getElementById('play-btn')

/* ----------------------------------------------- */

/* --- FUNCTIONS --- */

const generateChoice = () => {
    let r = Math.floor(Math.random() * 3)
    return choices[r]
}

const insertHTML = (choice1, choice2, result) => {
    player1.innerHTML = choice1
    player2.innerHTML = choice2
    resultArea.innerHTML = result.message

    // Clear any previous 🏆 icons
    player1.classList.remove('winner')
    player2.classList.remove('winner')

    // Apply 🏆 icon to the winner's container
    if (result.winner === 'player1') {
        player1.classList.add('winner')
    } else if (result.winner === 'player2') {
        player2.classList.add('winner')
    }
}

const decideWinner = (a, b) => {
    if (
        (a === '✊' && b === '✊') ||
        (a === '🤚' && b === '🤚') ||
        (a === '✌️' && b === '✌️')
    ) {
        /* 3a. */
        return { message: "It's a tie! Try again.", winner: null }
    } else if (
        (a === '✊' && b === '✌️') ||
        (a === '🤚' && b === '✊') ||
        (a === '✌️' && b === '🤚')
    ) {
        /* 3b. */
        return { message: 'Player 1 wins!', winner: 'player1' }
    } else {
        /* 3c. */
        return { message: 'Player 2 wins!', winner: 'player2' }
    }
}

const play = () => {
    let choice1 = generateChoice()
    let choice2 = generateChoice()
    let result = decideWinner(choice1, choice2)

    insertHTML(choice1, choice2, result)
}

/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */

/* 2. */
playBtn.addEventListener('click', play)

/* ------------------------------- */
