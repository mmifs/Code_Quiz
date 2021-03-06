// TO DO
// create timer
// make quiz questions appear in order
// make answers affect timer or not
// save remaining time as score
// assign score to initials
var button0 = document.getElementById("0")
var button1 = document.getElementById("1")
var button2 = document.getElementById("2")
var button3 = document.getElementById("3")
var startButton = document.getElementById("start");
var timer = document.querySelector("#timerID");
var intialsInput = document.createElement("input");
var timeLeft = 60;
var userInitials = "";
var makeButton = document.createElement("button");
var user = showNames();
var storedScores = [Object.entries(localStorage)];
var textNode = document.createTextNode("")
var textNode2 = document.createTextNode("")
makeButton.type = "button";
makeButton.textContent = "submit";
makeButton.id = "submitButton";
intialsInput.type = "text";
intialsInput.value = "";

var questions = [
    "Commonly used data types DO NOT include:",
    "The condition in an if / else statement is enclosed within ____.",
    "Arrays in javascript can be used to store ____",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
]

function createBtn(){
    var x = document.createElement("button");
    x.setAttribute("id", i)
    var y = document.createTextNode(q0Answers[i])
    x.appendChild(y);
    document.getElementById("answers").appendChild(x);
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

function wrong(){
    timeLeft -= 10;
}

function eventReset(){
    document.getElementById("0").removeEventListener("click", wrong);
    document.getElementById("1").removeEventListener("click", wrong);
    document.getElementById("2").removeEventListener("click", wrong);
    document.getElementById("3").removeEventListener("click", wrong);
    document.getElementById("2").removeEventListener("click", startQuestion1);
    document.getElementById("0").removeEventListener("click", startQuestion2);
    document.getElementById("3").removeEventListener("click", startQuestion3);
    document.getElementById("3").removeEventListener("click", endQuiz)
}

function startQuestion0(){
    document.getElementById("question").innerText = questions[0]
    for (i = 0; i <= 3; i++){
        createBtn();
    }
    document.getElementById("0").addEventListener("click", wrong);
    document.getElementById("1").addEventListener("click", wrong);
    document.getElementById("2").addEventListener("click", startQuestion1);
    document.getElementById("3").addEventListener("click", wrong);
}

function startQuestion1(){
    eventReset();
    document.getElementById("question").innerText = questions[1]
    document.getElementById("0").innerText = q1Answers[0]
    document.getElementById("1").innerText = q1Answers[1]
    document.getElementById("2").innerText = q1Answers[2]
    document.getElementById("3").innerText = q1Answers[3]

    document.getElementById("0").addEventListener("click", startQuestion2);
    document.getElementById("1").addEventListener("click", wrong);
    document.getElementById("2").addEventListener("click", wrong);
    document.getElementById("3").addEventListener("click", wrong);
}

function startQuestion2(){
    eventReset();
    document.getElementById("question").innerText = questions[2]
    document.getElementById("0").innerText = q2Answers[0]
    document.getElementById("1").innerText = q2Answers[1]
    document.getElementById("2").innerText = q2Answers[2]
    document.getElementById("3").innerText = q2Answers[3]

    document.getElementById("0").addEventListener("click", wrong);
    document.getElementById("1").addEventListener("click", wrong);
    document.getElementById("2").addEventListener("click", wrong);
    document.getElementById("3").addEventListener("click", startQuestion3);
}

function startQuestion3(){
    eventReset()
    document.getElementById("question").innerText = questions[3]
    document.getElementById("0").innerText = q3Answers[0]
    document.getElementById("1").innerText = q3Answers[1]
    document.getElementById("2").innerText = q3Answers[2]
    document.getElementById("3").innerText = q3Answers[3]

    document.getElementById("0").addEventListener("click", wrong);
    document.getElementById("1").addEventListener("click", wrong);
    document.getElementById("2").addEventListener("click", wrong);
    document.getElementById("3").addEventListener("click", endQuiz);
}

function showNames(){
    var userNames = []
    keys = Object.keys(localStorage)
    i = keys.length;
    while (i--) {
        userNames.push(localStorage.getItem(keys[i]));
        console.log(userNames[i]);
    }
    return userNames;
}

function showScores(){
    var userScores = []
    scores = Object.values(localStorage)
    i = scores.length;
    while (i--) {
        userScores.push(localStorage.getItem(scores[i]));
        console.log(userScores[i]);
    }
    return userScores;
}

function endQuiz(){
    var button0 = document.getElementById("0");
    var button1 = document.getElementById("1");
    var button2 = document.getElementById("2");
    var button3 = document.getElementById("3");
    button0.remove();
    button1.remove();
    button2.remove();
    button3.remove();
    clearInterval(quizTimer);
    document.getElementById("question").innerText = "Enter your Initials!";
    intialsInput.setAttribute("id", "userID");
    document.getElementById("question").appendChild(intialsInput);
    document.getElementById("question").appendChild(makeButton);
    document.getElementById("submitButton").addEventListener("click", submitInitials);
}

function startQuiz(){
    quizTimer = setInterval(function currentTime(){
        if (timeLeft <= 1){
            clearInterval(quizTimer);
        }
        timer = timeLeft;
        timeLeft -= 1;
        document.getElementById("timerID").innerText = timeLeft;
    }, 1000);

    startQuestion0()

}


function submitInitials(){
    var userInitials = document.getElementById("userID").value;
    console.log("initials are", userInitials)
    console.log("score is", timer - 1)
    localStorage.setItem(userInitials, JSON.stringify(timer - 1));
}

function postScores(){
    for (var i = 0; i < 9; i++){
        document.getElementById("scores").appendChild(textNode)
        textNode.textContent = storedScores[0][i][0];
        document.getElementById("scores").appendChild(textNode)
        textNode.textContent = storedScores[0][i][1]
        //textnode.tex(Object.entries(localStorage)[i][2]);
    //}
    }
}

//function collectInfo(){
    //var userInitials = document.querySelector("#userID").value;
    //console.log(userInitials)
//}

//showNames();
//showScores();
//postScores();
document.getElementById("start").addEventListener("click", startQuiz);