let playerScore = 0;
let computerScore = 0;



const options = ['rock', 'paper', 'scissors'];
const computerPlay = () => {
    return options[Math.floor(Math.random() * options.length)];
};

function playRound (playerSelection, computerSelection) {
    if (playerSelection ==='rock' && computerSelection === 'rock') {
        return 'Tie.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'lose';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors')) {
        return 'win';
}

    if (playerSelection ==='paper' && computerSelection === 'paper'){
        return 'tie';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'lose';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'win';
}

    if (playerSelection ==='scissors' && computerSelection === 'scissors'){
        return 'tie';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'lose';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'win';
    };
};
   
const playerSelection = prompt('Choose wisely!').toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

