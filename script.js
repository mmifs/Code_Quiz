// TO DO
// create timer
// make quiz questions appear in order
// make answers affect timer or not
// save remaining time as score
// assign score to initials

var startButton = document.getElementById("start");
var timer = document.querySelector("#timerID");
var timeLeft = 60

function startQuiz(){
    var quizTimer = setInterval(function(){
        if (timeLeft <= 1){
            clearInterval(quizTimer);
        }
        timer = timeLeft;
        timeLeft -= 1;
        document.getElementById("timerID").innerText = timeLeft;
    }, 1000);
}

document.getElementById("start").addEventListener("click", startQuiz);