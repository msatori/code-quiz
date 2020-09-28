//Variables for Quiz
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("score");
var feedback = document.querySelector("#feedback");
var timer = document.getElementById("timer");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var answers = document.getElementById("answers");
var i = 0;
var timeLeft = 75;
var score = 0;

//create function to start quiz    
var startQuiz = function(){
//hide questions for front page w/submit button
function setTimer() {
    var timerInt = setInterval(function(){
        timeLeft--;
        timer.textContent = "Timer" + timeLeft;

        if (timeLeft === 0) {
        endQuiz();
        }
        else if (i === codeQuestions.length) {
            clearInterval(timerInt);
        }
    }, 1000)
    return (score)
    }
//Create objects within an array for multiple choice questions
    var codeQuestions = [
        {
            question: "Commonly used data types do NOT inclue:",
            answers: [
                "strings",
                "booleans",
                "alerts",
                "numbers",
            ],
             rightAnswer: "c"
        
        },
        {
            question: "Arrays in JavScript can be used to store _________.",
            answers:[
                "numbers and strings",
                "other arrays",
                "booleans",
                "all of the above",
                ],
            rightAnswer: "d"
        },
        { 
            question: "String values must be enclosed within ______ when being assigned to variables.",
            answers:[ 
                "commas",
                "curly brackets",
                 "quotes",
                 "parenthesis",
             ],
        rightAnswer: "d"
        },
        {
            question: "A very useful school use during the development and debugging for printing content to the debugger is:",
            answers: [
                 "JavaScript",
                 "terminal/bash",
                 "for loops",
                 "console.log",
            ],
        rightAnswer: "d",
        }
      
    ];
    console.log(codeQuestions);
   
//create a function to generate one question at a time
function showQuestions() {
    answerA.hidden = false;
    answerB.hidden = false;
    answerC.hidden = false;
    answerD.hidden = false;
//create element to display the question and the answers
if (i === codeQuestions.length) {
    //restart quiz
    quizReset();
}
else {
//assign text content to the questions and answers
document.getElementById("questions").textContent = codeQuestions[i]["question"];
document.getElementById("answerA").textContent = codeQuestions[i]["answers"][0];
document.getElementById("answerB").textContent = codeQuestions[i]["answers"][1];
document.getElementById("answerC").textContent = codeQuestions[i]["answers"][2];
document.getElementById("answerD").textContent = codeQuestions[i]["answers"][3];
}
//check to see if question was correct
document.getElementById("answerA").addEventListener("click", function () {
    if (codeQuestions[i]["question"][0]=== codeQuestions[i]["rightAnswer"]) {
        feedback.textContent = "Correct!";
        score ++;
    }
    else {
        feedback.textContent = "Incorrect!";
    }
    i++;
    showQuestions();
})

};

document.getElementById("answerA").addEventListener("click", function () {
    if (codeQuestions[i]["question"][1]=== codeQuestions[i]["rightAnswer"]) {
        feedback.textContent = "Correct!";
        score ++;
    }
    else {
        feedback.textContent = "Incorrect!";
    }
    i++;
    showQuestions();
})
document.getElementById("answerA").addEventListener("click", function () {
    if (codeQuestions[i]["question"][2]=== codeQuestions[i]["rightAnswer"]) {
        feedback.textContent = "Correct!";
        score ++;
    }
    else {
        feedback.textContent = "Incorrect!";
    }
    i++;
    showQuestions();
})

document.getElementById("answerA").addEventListener("click", function () {
    if (codeQuestions[i]["question"][3]=== codeQuestions[i]["rightAnswer"]) {
        feedback.textContent = "Correct!";
        score ++;
    }
    else {
        feedback.textContent = "Incorrect!";
    }
    i++;
    showQuestions();
})
document.getElementById("startButton").addEventListener("click", showQuestions);
document.getElementById("startButton").addEventListener("click", setTimer);
};

function endQuiz(){
    var initialInput = document.createElement("input");
    initialInput = ("type", "required");

}

startQuiz();
//displayquiz

//add eventListeners




//Click the HighScore button to see the highscore button 
    //local storage for HTML

//THEN a timer starts and I am presented with a question

//DO NOT USE A LOOP FOR QUESTIONS
    //1. count down
    //2. stop quiz when times up
    //3. decremenet goes down when question is answered incorrectly


    




//WHEN the game is over
    //display "Quiz Complete"
    //display score
    //add textbox for initials
    //add Submit button 
    //Try again button 

//THEN I can save my initials and score
        //connect local storage 
            //get user initials
            //commit user initils and high score

//event listeners for quiz
