var score= document.querySelector(".score");
var scoreEl = document.createElement("div");
scoreEl.textContent = "Highscore";
score.append(scoreEl);


// you select the part of the document
var timer= document.querySelector(".timer");
// you create somewhere to put it
var timerEl = document.createElement("div");
// you set what you want the content to say
timerEl.textContent = "Timer: 60";
// you attach what you created to the part of the document you selected
timer.append(timerEl);





var currentQuestion= 0;

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
        questions: "what is my name?",
        answers: ["Abby", "poop", "waaaa", "ugh"],
        correntAnswer: "Abby"

    }
]





// click event to get to next questions
// currentQuestion++;


var questions = document.querySelector(".menu");
var questionsEl = document.createElement("h1");
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
answer.appendChild(answerEl);
}


// console.log(quizContent[currentQuestion].question);

// console.log(questions[currentQuestion].correctAnswer);

// for (var i = 0; i < quizContent[currentQuestion].answers.length; i++) {
    // console.log(quizContent[currentQuestion].answers[i]); }


// nextPage.addEventListener("click", function(){





// }
// )