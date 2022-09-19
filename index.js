let difficulty = 0.50;
let resultHtml = document.getElementById("resultHtml");
let playerScoreHtml = document.getElementById("playerScore");
let playerScore = 0;
let computerScoreHtml = document.getElementById("computerScore");
let computerScore = 0;
let playerWin = null;
let startGameButton = document.getElementById("startGame");

function updateScore(playerWin){
    if(playerWin == true){
        playerScore++;
        playerScoreHtml.innerHTML = playerScore;
    }else{
        computerScore++;
        computerScoreHtml.innerHTML = computerScore;
    }
}

function setDifficulty(){
    console.log(difficulty)
    difficulty = document.querySelector("input[name = 'difficulty']:checked").value;}

function endScore(){
    if(playerScore > 4 || computerScore > 4){
        resultHtml.innerHTML = "Gioco finito";
        startGameButton.disabled = true;
    }
}

function startGame(){
    /* controllo se il risultato ha superato il limite */
    endScore();
    setDifficulty();
    /* inizia il gioco, seleziono la faccia, in lancio metto un valore percentuale  */
    let choice = document.querySelector("input[name = 'choice']:checked").value; 
    console.log(choice)
    let lancio = Math.random();
    console.log(lancio);
    if(lancio <= difficulty){
        lancio = "testa";
    } else {
        lancio = "croce";
    }
    if (lancio == choice){
        resultHtml.innerHTML = "hai vinto";
        updateScore(playerWin=true);
    } else {
        resultHtml.innerHTML = "hai perso";
        updateScore(playerWin=false)
    }
    endScore();
}