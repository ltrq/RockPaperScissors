
let computerScore = 0;
let humanScore = 0;
const RPS = ['rock', 'paper', 'scissors'];
const numberOfRound = 5;


function getComputerChoice(){
    let computerChoice = RPS[Math.floor(Math.random()*(RPS.length))];
    return computerChoice;
}

function getHumanChoice(){
    let promptchoice = prompt ('rock, paper, or scissors?');
    let choice = promptchoice.toLowerCase();
    
    if(choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        alert(`${choice}` + ' is not a valid choice');
        choice = getHumanChoice();
    }   
    else{
        console.log("🚀 You chose: ", choice)
        return choice;
    }

    return choice;
}

function playRound() {
    let computer = getComputerChoice();
    let human = getHumanChoice();
    let result = '';

    if (human === computer) {
        result = 'round is tie';
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
    console.log("🚀 computer chose:", computer)
    console.log("🚀 round result:", result)
    console.log("🚀 Your Score is: ", humanScore)
    console.log("🚀 Computer Score is: ", computerScore)
    return result;
}

function playGame(){
    let round = 0;
    for (let i = 0; i < 5; i++) {
        round++;
        console.log('round:', round);
        playRound();
        if(round <5){
            if (humanScore == 3){
                console.log('You Win Game. Best 3 out of 5');
                break;
            }
            else if (computerScore == 3){
                console.log('Computer Wins Game. Best 3 out of 5');
                break;
            }
        }
        else if(round == 5){
            if(humanScore > computerScore)          console.log('You Win Game');
            else if (computerScore > humanScore)    console.log('Computer Wins Game');
            else                                    console.log('Game is tie');
        }
    }
    
}

playGame();