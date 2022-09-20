let resultHtml = document.getElementById("resultHtml"); //stampa se hai vinto o perso
let gifHtml = document.getElementById("gifHtml");
let cardsHtml = document.getElementById("cards");
// punteggi per giocatori e html
let playerScoreHtml = document.getElementById("playerScore");
let playerScore = 0;
let computerScoreHtml = document.getElementById("computerScore");
let computerScore = 0;

let startGameButton = document.getElementById("startGame"); // bottone di lancio moneta

// punteggio per countOneMilion
let croceScoreHtml = document.getElementById("croceScore");
let testaScoreHtml = document.getElementById("testaScore");
let testaScore = 0;
let croceScore = 0;
let retryHtml = document.getElementById("retry");

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
    difficulty = document.querySelector("input[name = 'difficulty']:checked").value;
    return difficulty;
}

function end(){
    resultHtml.innerHTML = "<center>Gioco finito</center>";
    startGameButton.disabled = true;
    retryHtml.hidden = false
}

function endScore(){
    if(playerScore > 4 || computerScore > 4){
        end()
    }
}

function compare(difficulty, lancio){
    let choice = document.querySelector("input[name = 'choice']:checked").value; 
    if(choice == "testa"){
        if(lancio >= difficulty){
            lancio = "testa";
        } else {
            lancio = "croce";
        }
    } else {
        if(lancio <= difficulty){
            lancio = "testa";
        } else {
            lancio = "croce";
        }
    }
    if (lancio == choice){
        resultHtml.innerHTML = "hai vinto";
        updateScore(playerWin=true);
    } else {
        resultHtml.innerHTML = "hai perso";
        updateScore(playerWin=false)
    }
}

function loading() {
    cardsHtml.hidden = false;
    gifHtml.hidden = true;
    let difficulty = setDifficulty();
    let lancio = Math.random();
    compare(difficulty, lancio);
}

function startGame(){
    /* controllo se il risultato ha superato il limite  e inserisco la difficolta */
    endScore();
    setTimeout(loading, 3500)
    /* inizia il gioco, seleziono la faccia, in lancio metto un valore percentuale  */
    cardsHtml.hidden = true;
    gifHtml.hidden = false;
    endScore();
}

function countOneMilion(){
    
    setTimeout(counting, 1000)
    
    cardsHtml.hidden = true;
    gifHtml.hidden = false;
    
    }


function counting(){
    cardsHtml.hidden = false;
    gifHtml.hidden = true;
    for(let i = 0; i < 100000; i++){
        let difficulty = 0.50;
        let lancio = Math.random();
        if(lancio <= difficulty){
            lancio = "testa";
            testaScore++;
        } else {
            lancio = "croce";
            croceScore++;
        }
        testaScoreHtml.innerHTML = testaScore;
        croceScoreHtml.innerHTML = croceScore;
        end();
        
}
}