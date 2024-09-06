
let computerScore = 0;
let humanScore = 0;
const RPS = ['rock', 'paper', 'scissors'];
let numberOfRound = 1;


function getComputerChoice(){
    let computerChoice = RPS[Math.floor(Math.random()*(RPS.length))];
    return computerChoice;
}

// function getHumanChoice(){
//     let promptchoice = prompt ('rock, paper, or scissors?');
//     let choice = promptchoice.toLowerCase();
    
//     if(choice != 'rock' && choice != 'paper' && choice != 'scissors') {
//         alert(`${choice}` + ' is not a valid choice');
//         choice = getHumanChoice();
//     }   
//     else{
//         console.log("🚀 You chose: ", choice)
//         return choice;
//     }

//     return choice;
// }

function playRound(human) {
    let computer = getComputerChoice();
    // let human = getHumanChoice()
    let result = '';

    if (human === computer) {
        result = 'Round is tie';
    } else if (human == 'rock' && computer == 'scissors') {
        humanScore++;
        result = 'you won round';
    } else if (human == 'paper' && computer == 'rock') {
        humanScore++;
        result = 'you won round';
    } else if (human == 'scissors' && computer == 'paper') {
        humanScore++;
        result = 'you won round';
    
    } else {
        computerScore++;
        result = 'computer won round';
    }

    const GameDisplayElement = document.querySelector('#GameDisplay');
    GameDisplayElement.setAttribute('style','white-space:pre;');
    GameDisplayElement.textContent = `Round ${numberOfRound}`;
    GameDisplayElement.textContent += `\r\nYou Chose: ${human}`;
    GameDisplayElement.textContent += `\r\nComputer Chose: ${computer}`;
    GameDisplayElement.textContent += `\r\n${result}`;
    GameDisplayElement.textContent += `\r\nYour Score: ${humanScore}`;
    GameDisplayElement.textContent += `\r\nComputer Score: ${computerScore}`;

    numberOfRound++;

    if(humanScore == 5 || computerScore == 5){
        const gameResultsElement = document.createElement('div');
        if(humanScore > computerScore)          gameResultsElement.textContent = 'You Win Game';
        else                                    gameResultsElement.textContent = 'Computer Wins Game';
        document.body.appendChild(gameResultsElement);
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;

        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset Game';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', () => {
            location.reload();
        })
    }

    return result;
}

const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');

buttonRock.addEventListener('click', () => {
    playRound('rock');
})
buttonPaper.addEventListener('click', () => {
    playRound('paper');
})
buttonScissors.addEventListener('click', () => {
    playRound('scissors');
})

// function playGame(){
//     let round = 0;
//     for (let i = 0; i < 5; i++) {
//         round++;
//         console.log('round:', round);
//         playRound();
//         if(round <5){
//             if (humanScore == 3){
//                 console.log('You Win Game. Best 3 out of 5');
//                 break;
//             }
//             else if (computerScore == 3){
//                 console.log('Computer Wins Game. Best 3 out of 5');
//                 break;
//             }
//         }
//         else if(round == 5){
//             if(humanScore > computerScore)          console.log('You Win Game');
//             else if (computerScore > humanScore)    console.log('Computer Wins Game');
//             else                                    console.log('Game is tie');
//         }
//     }
    
// }

// playGame();