const playerMove = process.argv[2]?.toLowerCase();
const validMoves = ['rock', 'paper', 'scissors'];

if (!validMoves.includes(playerMove)) {
    console.log("Invalid move! Please choose rock, paper, or scissors.");
    process.exit(1);
}

const randomIndex = Math.floor(Math.random() * 3);
const computerMove = validMoves[randomIndex];

let result;
if (playerMove === computerMove) {
    result = "It's a draw!";
} else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'scissors' && computerMove === 'paper') ||
    (playerMove === 'paper' && computerMove === 'rock')
) {
    result = "You win!";
} else {
    result = "You lose!";
}

console.log(`You chose ${playerMove}. Computer chose ${computerMove}. ${result}`);
