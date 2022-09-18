/*
whichever choice button the player clicks should trigger the game,
computer choice and then the winner for each round should be
displayed,
the winner should be whoever scores 5 first
 */
function game(){
    let choices = ["Rock", "Paper", "Scissors"];
    //getting elements from DOM
    let rock = document.querySelector('#rock');
    let paper = document.querySelector('#paper');
    let scissors = document.querySelector('#scissors');
    let statement = document.querySelector('#statement');
    let playerscore = document.querySelector("#playerscore");
    let computerScore = document.querySelector("#computerScore");
    let scoreContainer = document.querySelector(".score-container");
    let buttons = [rock, paper, scissors]


    let playerWins = 0;
    let computerWins = 0;
    function startGame(player, computer, choiceArray) {
      if (player === computer) {
        statement.textContent = "it's a draw!";
      } else if (player === choiceArray[0]) {
        if (computer === choiceArray[1]) {
          statement.textContent = "you lost!, paper covers rock.";
          computerScore.innerHTML = computerWins += 1;
        } else {
          statement.textContent = "you won!, rock smashes scissors.";
          playerscore.innerHTML = playerWins += 1;
        }
      } else if (player === choiceArray[1]) {
        if (computer === choiceArray[2]) {
          statement.textContent = "you lost!, scissors cuts paper";
          computerScore.innerHTML = computerWins += 1;
        } else {
          statement.textContent = "you win!, paper covers rock.";
          playerscore.innerHTML = playerWins += 1;
        }
      } else if (player === choiceArray[2]) {
        if (computer === choiceArray[0]) {
          statement.textContent = "you lost!, rock smashes scissors.";
          computerScore.innerHTML = computerWins += 1;
        } else {
          statement.textContent = "you won!, scissors cuts paper";
          playerscore.innerHTML = playerWins += 1;
        }
      }
      console.log(computer);
      gameOver(playerWins,computerWins);
    }

    // function that triggers game on each click of a button
    buttons.forEach((button) =>{
        button.addEventListener("click", () =>{
            let computerRandom = Math.floor(Math.random() * choices.length);
            let computerChoice = choices[computerRandom];
            startGame(button.innerText, computerChoice, choices);
        });})
    
        // function for determining who scores 5 first
    function gameOver(playerWin, computerWin){
        let reloadbtn = document.querySelector('.reload');

        if (playerWin === 5 && playerWin > computerWin){
            statement.textContent = 'You Win!!'
            reloadbtn.style.display = 'block';
        } else if(computerWin === 5 && computerWin > playerWin){
            statement.textContent = "You lose!!";
            reloadbtn.style.display = "block";
        }
        reloadbtn.addEventListener('click', ()=>{
            window.location.reload()})
    }
}
game()
