//Variables for Quiz
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("score");
var submitButton = document.getElementById("submit");
//Create objects within an array for multiple choice questions
var codeQuestions = [
    {
        question: "Commonly used data types do NOT inclue:",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers",
     },
         rightAnswer: "3"
    
    },
    {
        question: "Arrays in JavScript can be used to store _________.",
        answers:{
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above",
        },
        rightAnswer: ""
    },
    { 
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: { 
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis",
    },

    rightAnswer: ""
    },
{
        question: "A very useful school use during the development and debugging for printing content to the debugger is:",
        answers: { 
        1: "JavaScript",
        2: "terminal/bash",
        3: "for loops",
        4: "console.log",
},
    rightAnswer: "",
},

];

function buildQuiz() {

};

function showScore () {
;
}


//displayquiz
buildQuiz();
//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score