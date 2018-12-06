var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Diplay = document.querySelector("#p1Display");
var p2Diplay = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
        p1Diplay.classList.add("winner");
        gameOver = true;
    }
    p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
        p2Diplay.classList.add("winner");
        gameOver = true;
    }
    p2Diplay.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Diplay.textContent = 0;
    p2Diplay.textContent = 0;
    p1Diplay.classList.remove("winner");
    p2Diplay.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});