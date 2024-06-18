let playerScore = 0;
let computerScore = 0;
const img = document.querySelector('.img');
const score = document.querySelector('#score');

//Creating the score
const containerDiv = document.createElement('div');
const newDiv = document.createElement('div');
newDiv.textContent = '0';
const anotherNewDiv = document.createElement('div');
anotherNewDiv.textContent = '0';
containerDiv.appendChild(newDiv);
containerDiv.appendChild(anotherNewDiv);
score.appendChild(containerDiv);
const result = document.createElement('div');
document.body.appendChild(result);

//Styling the score
result.style.textAlign = 'center';  
result.style.marginTop = '24px';
result.style.fontSize = '24px'
containerDiv.style.display = 'flex';
containerDiv.style.justifyContent = 'center';
containerDiv.style.alignItems = 'center';
containerDiv.style.gap = '96px';
containerDiv.style.marginTop = '24px';
containerDiv.style.fontSize = '36px';
score.style.textAlign = 'center';
score.style.fontSize = '24px';

//Creating the button
const buttonDiv = document.createElement('div');
const button = document.createElement('button');
buttonDiv.appendChild(button);
document.body.appendChild(buttonDiv);

//Styling the button
button.style.backgroundColor = 'rgb(0,100,155)';
button.style.height = '48px';
button.style.width = '240px';
button.textContent = 'Play Again';
button.style.color = 'white';
button.style.borderRadius = '12px';
buttonDiv.style.display = 'flex';
buttonDiv.style.justifyContent = 'center';
buttonDiv.style.alignItems = 'center';
button.classList.add('btn');
buttonDiv.style.marginTop = '36px';

//Creating the footer
const haeckel = document.createElement('div');
haeckel.textContent = 'Made by Haeckel';
document.body.appendChild(haeckel);

//Styling the footer
haeckel.style.display = 'flex';
haeckel.style.justifyContent = 'center';
haeckel.style.alignItems = 'center';
haeckel.style.color = 'lightgrey';
haeckel.style.fontFamily = 'cursive';
haeckel.classList.add('haeckel');
haeckel.style.height = '48px';

const rock = document.querySelector('.rock');
rock.addEventListener('click', rockEvent);

const paper = document.querySelector('.paper');
paper.addEventListener('click', paperEvent);

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', scissorsEvent);

const options = ['rock', 'paper', 'scissors'];
const computerPlay = () => {
    return options[Math.floor(Math.random() * options.length)];
};

function playRound (playerSelection, computerSelection) {
    if (playerSelection ==='rock' && computerSelection === 'rock') {
        result.textContent = 'Tie. Better luck next time!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        anotherNewDiv.textContent = ++computerScore;
        result.textContent = 'Lose. No luck of the draw unfortunately.';

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        newDiv.textContent = ++playerScore;
        result.textContent = 'Win! Great job!';
}

    if (playerSelection ==='paper' && computerSelection === 'paper'){
        result.textContent = 'Tie. Better luck next time!';

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        anotherNewDiv.textContent = ++computerScore;
        result.textContent = 'Lose. No luck of the draw unfortunately.';

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        newDiv.textContent = ++playerScore;
        result.textContent = 'Win! Great job!';
        
}

    if (playerSelection ==='scissors' && computerSelection === 'scissors'){
        result.textContent = 'Tie. Better luck next time!';

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        anotherNewDiv.textContent = ++computerScore;
        result.textContent = 'Lose. No luck of the draw unfortunately.';

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        newDiv.textContent = ++playerScore;
        result.textContent = 'Win! Great job!';
    };

    if (playerScore === 5 || computerScore === 5) {
     if (playerScore > computerScore) {
         result.textContent = 'Player wins the game!';
        rock.removeEventListener('click', rockEvent);
        paper.removeEventListener('click', paperEvent);
        scissors.removeEventListener('click', scissorsEvent);         
     }  else if (computerScore > playerScore) {
         result.textContent = 'Computer clinches victory!';
        rock.removeEventListener('click', rockEvent);
        paper.removeEventListener('click', paperEvent);
        scissors.removeEventListener('click', scissorsEvent);   
     };   
    };
};


function rockEvent() {
    const playerSelection = 'rock';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
};


function paperEvent() {
    const playerSelection = 'paper';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
};

function scissorsEvent() {
    const playerSelection = 'scissors';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
};


function playAgain () {
    playerScore = 0;
    computerScore = 0;
    newDiv.textContent = playerScore;
    anotherNewDiv.textContent = computerScore;
    rock.addEventListener('click', rockEvent);
    paper.addEventListener('click', paperEvent);
    scissors.addEventListener('click', scissorsEvent);
};

button.addEventListener('click', playAgain);
