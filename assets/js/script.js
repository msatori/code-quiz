//Variables for Quiz
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("score");
var timeLeftEl = document.getElementById("")

//Create objects within an array for multiple choice questions



var startQuiz = function(){
    let score = 0;
    let timeLeft = 75;
    var correct = 0;
    var incorrect = 0;
    var question = document.createElement("h2", question);
    var answers =  document.createElement("button", answers);

    
    var codeQuestions = [
        {
            question: "Commonly used data types do NOT inclue:",
            answers: {
                a: "strings",
                b: "booleans",
                c: "alerts",
                d: "numbers",
            },
             rightAnswer: "c"
        
        },
        {
            question: "Arrays in JavScript can be used to store _________.",
            answers:{
                a: "numbers and strings",
                b: "other arrays",
                c: "booleans",
                d: "all of the above",
            },
            rightAnswer: "d"
        },
        { 
            question: "String values must be enclosed within ______ when being assigned to variables.",
            answers: { 
                a: "commas",
                b: "curly brackets",
                c: "quotes",
                d: "parenthesis",
            },
        rightAnswer: "d"
        },
        {
            question: "A very useful school use during the development and debugging for printing content to the debugger is:",
            answers: { 
                a: "JavaScript",
                b: "terminal/bash",
                c: "for loops",
                d: "console.log",
            },
        rightAnswer: "d",
        }
        
    ];
    document.appendChild(question);
    document.appendChild(answers);
function showQuestions (codeQuestions, quizContainer) {
    var output = [];
    var answers;

    for(var i=0; i<codeQuestions.length; i++){
        var userSelect = document.textContent(questions[i].answers)

        if(userSelect == questions[i].answers){
            score ++
            textContent="Correct!";
        }
        else {
            textContent = "Incorrect!";
        }

 
};



};


}
startQuiz();

//displayquiz


//WHEN I click the start button
    //connect button from HTML here


//Click the HighScore button to see the highscore button 
    //local storage for HTML

//THEN a timer starts and I am presented with a question

//DO NOT USE A LOOP FOR QUESTIONS
    //1. count down
    //2. stop quiz when times up
    //3. decremenet goes down when question is answered incorrectly

//WHEN I answer a question
    //if question is correct
    //apply the button effect to the switch effect 
        //add submit event listener to check button
        //feedback "Correct"
        //goes to next question


        //if answer is incorrect
        //time is subtracted from the clock
        //feedback "Wrong"
        //if !=== deduct time from the quiz
        //if timer is less than 0 then the quiz ends 
    
        //add feedback for correct or incorrect answers before moving to next question

        //THEN I am presented with another question
        //ideas: function and return
        //switch 
    




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
