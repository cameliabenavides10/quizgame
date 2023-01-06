var score = document.querySelector(".score");
var scoreEl = document.createElement("a");
scoreEl.textContent = "View Highscores";
score.append(scoreEl);

var secsLong = 60;
// you select the part of the document
var timer = document.querySelector(".timer");
// you create somewhere to put it
var timerEl = document.createElement("div");
// you set what you want the content to say
timerEl.textContent = "Timer: " + secsLong;
// you attach what you created to the part of the document you selected
timer.append(timerEl);




var currentQuestion = 0;

var quizContent = [
    {
        question: "What is 2 + 2?",
        answers: ["55", "4", "5", "22"],
        correctAnswer: "4"
    },
    {
        question: "What color is the sky?",
        answers: ["blue", "green", "purple", "yellow"],
        correctAnswer: "blue"
    },
    {
        question: "what is my name?",
        answers: ["Abby", "poop", "waaaa", "ugh"],
        correctAnswer: "Abby"

    }
]





function displayQuestions() {
    var questions = document.querySelector(".menu");
    var questionsEl = document.createElement("h1");
    questions.innerHTML = "";
    questionsEl.innerHTML = "";
    questionsEl.textContent = quizContent[currentQuestion].question;
    questions.append(questionsEl);

    // for loop to get the answers from the array into the document 
    for (var i = 0; i < quizContent[currentQuestion].answers.length; i++) {
        var indAnswers = (quizContent[currentQuestion].answers[i]);
        console.log(indAnswers);
        var answer = document.querySelector(".menu");
        var answerEl = document.createElement("li");
        answerEl.textContent = indAnswers;
        answerEl.setAttribute("type", "button");
        answerEl.setAttribute("Style", "border: 1px solid; max-width: 30%; margin: 5px auto; border-radius: 5px");
        answerEl.addEventListener("click", function (event) {
            console.log(indAnswers);
            console.log((quizContent[currentQuestion].correctAnswer));
            if ((event.target.textContent) === (quizContent[currentQuestion].correctAnswer)) {
                alert("Correct Answer!")
            } else {
                secsLong -= 10;
                alert("Wrong Answer!");
            }


            if (currentQuestion < quizContent.length-1) {
                currentQuestion++;
                displayQuestions();
            } else{
                location.href= "highscore.html?score=" + secsLong
            }
        })
        answer.appendChild(answerEl);
    }
}
displayQuestions();





function setTime() {
    timerInterval = setInterval(function() {
        secsLong--;
        timer.innerHTML= "Timer: " + secsLong
        if(secsLong === 0) {
            // Stops execution of action at set interval
         clearInterval(timerInterval);
         location.href= "highscore.html?score=" + secsLong
        };
   }, 1000);
 };
 setTime();



//  promt:enter INitials
// save initials to local storage and score. 
// retireve from local storgae and display the scores using a for loop. 