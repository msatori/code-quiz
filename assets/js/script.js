//Variables for Quiz
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("score");
var introPage = document.querySelector("#intro-title");
var quizPage = document.querySelector("#quiz-section");
var finalScoreEl = document.querySelector("#score");
var feedbackEl = document.querySelector("#feedback");
var timerEl = document.querySelector("#timer");
var titleEl = document.querySelector("#question-title");
var quizQuestionsEl = document.querySelector("#questions")
var answersEl = document.querySelector("#answers");
var startButton = document.querySelector("#startButton");
var submitButton = document.querySelector("#submit-initials");
var currentQuestionIndex = 0;
var timeLeft = 75;

var score = 0;

//create function to start quiz    
var startQuiz = function () {
    introPage.setAttribute("class", "hide");

    quizPage.setAttribute("class", "show");

    timerId = setInterval(setTimer, 1000)
    timer.textContent = time;
    showQuestions();
}
    //hide questions for front page w/submit button

    function setTimer() {
        time--;

        timerEl.textContent = time;

        if (time <=0)
        endQuiz()
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

            answerNode.textContent = i + 1 + "." + rightAnswer;

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

                if (timeLeft<0) {
                    timeLeft = 0;
                }

                timerEl.textContent = time;
                
                feedbackEl.textContent = ("incorrect!");
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

            var highScoreEl = document.querySelector("#highscore-section");
            highScoreEl.setAttribute("class", "show");

            //show final score
            var finalScoreEl = document.querySelector("#score");
            finalScoreEl.textContent = time;

            //hide the questions
            quizPage.setAttribute("class", "hide");
        }
    
    

document.getElementById("startButton").addEventListener("click", showQuestions);

   

    
//displayquiz

//add eventListeners




//Click the HighScore button to see the highscore button 
