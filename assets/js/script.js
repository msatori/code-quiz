//Variables for Quiz
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("score");
var timeLeftEl = document.getElementById("")
var feedback = document.getElementById("#feedback");

//WHEN I click the start button
    //connect button from HTML here
var startQuiz = function(){
    let score = 0;
    let timeLeft = 75;
    var correct = 0;
    var incorrect = 0;
   

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

//create a function to generate one question at a time
function showQuestions(event) {
//create element to display the question and the answers
if (i === codeQuestions.length) {
    //restart quiz
    quizReset();

}
//assign text content to the questions and answers
document.getElementById("questions").textContent = codeQuestions[i]["question"];
document.getElementById("answerA").textContent = codeQuestions[i]["answers"][0];
document.getElementById("answerB").textContent = codeQuestions[i]["answers"][1];
document.getElementById("answerC").textContent = codeQuestions[i]["answers"][2];
document.getElementById("answerD").textContent = codeQuestions[i]["answers"][3];
//add eventListeners
document.getElementById("startButton").addEventListener("click", showQuestions);
//check to see if question was correct

};
showQuestions();
};






//displayquiz





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
