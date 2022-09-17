/*
player inputs choice between rock, paper and scissors
computer makes a random choice between rock, paper and scissors
a string should be rerturned to indicate whether player loses or wins
the game should be played in 5 rounds and the one with the most wins is the overall winner
*/


// function game(player, computer){
        
// }
function compareChoices(player, computer, choiceArray){
    if (player === computer) {
      alert("It's a draw");
    } else if(player === choiceArray[0]) {
        if(computer === choiceArray[1]){
            alert('you lost!, paper covers rock.');
            computerWins += 1;
        }else{
            alert('you won!, rock smashes scissors.');
            playerWins += 1;
        };
    } else if(player === choiceArray[1]){
        if(computer === choiceArray[2]){
            alert('you lost!, scissors cuts paper');
            computerWins += 1;
        }else{
            alert('you win!, paper covers rock.')
            playerWins += 1;
        }
    } else if(player === choiceArray[2]){
        if (computer === choiceArray[0]){
            alert('you lost!, rock smashes scissors.')
            computerWins += 1;
        }else{
            alert("you won!, scissors cuts paper");
            playerWins += 1;
        }
    }
}
function startGame(){
    let playerWins = 0;
    let computerWins = 0;
    let roundCount = prompt('How many rounds do you want to play?')
    for (let i = 0; i<roundCount; i++){
        let choices = ["rock", "paper", "scissors"];
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let playerChoice = playerSelection.trim().toLowerCase();
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        compareChoices(playerChoice, computerChoice, choices);
    }
    if (playerWins > computerWins){
        alert('you won!!!\nreload to play again')
    }else if(playerWins === computerWins){
    alert("it was a draw!!\nreload to try again");
    } else{
        alert("alas, you lost!\nreload to try again");
    }
    console.log(computerChoice);
    console.log(playerWins, computerWins)
}

    console.log(playerWins, computerWins);
    // game(playerChoice, computerChoice);

startGame()