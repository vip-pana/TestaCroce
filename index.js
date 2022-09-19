let difficulty = 0.50;
let resultHtml = document.getElementById("resultHtml");


function startGame(){
    let choice = document.querySelector("input[name = 'choice']:checked").value; 
    console.log(choice);
    let lancio = Math.random();
    if(lancio <= difficulty){
        lancio = "testa";
    } else {
        lancio = "croce";
    }
    if (lancio == choice){
        resultHtml.innerHTML = "hai vinto";
    } else {
        resultHtml.innerHTML = "hai perso";
    }
}