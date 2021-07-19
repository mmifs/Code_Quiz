// TO DO
// create timer
// make quiz questions appear in order
// make answers affect timer or not
// save remaining time as score
// assign score to initials

var startButton = document.getElementById("start");
var timer = document.querySelector("#timerID");
var timeLeft = 60
var questions = [
    "Commonly used data types DO NOT include:",
    "The condition in an if / else statement is enclosed within ____.",
    "Arrays in javascript can be used to store ____",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
]

function createBtn(x, y){
    var x = document.createElement("button");
    x.setAttribute("id", i)
    var y = document.createTextNode(q1Answers[i])
    x.appendChild(y);
    document.body.appendChild(x);
}

var q0Answers = [
    "strings",
    "numbers",
    "alerts", // correct
    "booleans"
]

var q1Answers = [
    "Parentheses", // correct
    "Curly Brackets",
    "Square Brackets",
    "Single/Double Quotations"
]

var q2Answers = [
    "Strings",
    "Numbers",
    "Other Arrays",
    "All of the above", // correct
]

var q3Answers = [
    "For loops",
    "Terminal bash",
    "Javascript",
    "console.log()" // correct
]

var answerIndex = [
    q0Answers,
    q1Answers,
    q2Answers,
    q3Answers
]

function startQuestion0(){
    document.getElementById("question").innerText = questions[1]
    for (i = 0; i <= 3; i++){
        createBtn();
    }
    document.getElementById("1").addEventListener("click", timeLeft -= 10)
}

function startQuiz(){
    var quizTimer = setInterval(function(){
        if (timeLeft <= 1){
            clearInterval(quizTimer);
        }
        timer = timeLeft;
        timeLeft -= 1;
        document.getElementById("timerID").innerText = timeLeft;
    }, 1000);

    startQuestion0()

}

document.getElementById("start").addEventListener("click", startQuiz);