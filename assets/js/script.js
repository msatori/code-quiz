//Variables for Quiz
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("score");

var feedbackEl = document.querySelector("#feedback");
var timerEl = document.querySelector("#timer");
var titleEl = document.querySelector("#question-title");
var quizQuestionsEl = document.querySelector("#questions")
var answersEl = document.querySelector("#answers");
var currentQuestionIndex = 0;
var timeLeft = 75;
 var timerId;
var score = 0;


//create function to start quiz    
var startQuiz = function () {

    setTimer();
    showQuestions();
}
    //hide questions for front page w/submit button
    function setTimer() {
        var timerInt = setInterval(function () {
            timeLeft--;
            timer.textContent = "Timer" + timeLeft;

            if (timeLeft === 0) {
                endQuiz();
                alert("You're Outta Here")
            }
            else if (i === codeQuestions.length) {
                clearInterval(timerInt);
            }
        }, 1000)
        return (score)
    }


    //create a function to generate one question at a time
    function showQuestions() {
        var currentQuestion = codeQuestions[currentQuestionIndex];

        var titleEl = document.getElementById("question-title");
        titleEl.textContent = currentQuestion.question;

        answersEl.innerHTML = "";

        //create loop for questions
        currentQuestion.answers.forEach(function (answer, i) {
            var answerNode = document.createElement("button");
            answerNode.setAttribute("class", "answers");
            answerNode.setAttribute("class", "answers");

            answerNode.textContent = i + 1 + "." + choice;

            //clicky boy
            answerNode.onclick = answerClick;
            answersEl.appendChild(answerNode);
        });
    }
    function answerClick() {
        //incorrect answer
        if (this.value !== codeQuestions[currentQuestionIndex].rightAnswer) {
            //take away ten seconds
            timeLeft -= 10;

                if (time<0) {
                    time = 0;
                }

                timerEl.textContent = time;
                
                feedbackEl.textContent = "incorrect!";
            }else {
                feedbackEl.textContent("Correct!");
                }
            //show feedback for one second
            feedbackEl.setAttribute("class", "feedback");
            setTimeout(function () {
                feedbackEl.setAttribute("class", "hide feedback");
                
            }, 1000);

            //move to next question 
            currentQuestionIndex ++;

            //see if there are still questions left

            if(currentQuestionIndex === codeQuestions.length) {
                endQuiz();
            }else {
                    showQuestions();
                }
            }
        function endQuiz () {
            //stop the time
            clearInterval(timerId);
        }
    
    


   

    
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
