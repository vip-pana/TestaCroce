let resultHtml = document.getElementById("resultHtml");
// punteggi per giocatori
let playerScoreHtml = document.getElementById("playerScore");
let playerScore = 0;
let computerScoreHtml = document.getElementById("computerScore");
let computerScore = 0;
let playerWin = null;
let startGameButton = document.getElementById("startGame");

// punteggio per countoneMilion
let croceScoreHtml = document.getElementById("croceScore");
let testaScoreHtml = document.getElementById("testaScore");
let testaScore = 0;
let crociaScore = 0;


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
    let lancio = Math.random();
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

function countOneMilion(){
    for(let i = 0; i < 100000; i++){
        let difficulty = 0.50;
        let lancio = Math.random();
        if(lancio <= difficulty){
            lancio = "testa";
            testaScore++;
            testaScoreHtml.innerHTML = testaScore;
        } else {
            lancio = "croce";
            crociaScore++;
            
        }
        testaScoreHtml.innerHTML = testaScore;
        croceScoreHtml.innerHTML = crociaScore;
    }
}