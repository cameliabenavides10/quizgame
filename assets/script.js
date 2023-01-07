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
        question: "What does H20 make?",
        answers: ["water", "dirt", "air", "clouds"],
        correctAnswer: "water"

    },
    {
        question: "What color is not in the rainbow?",
        answers: ["red", "blue", "black", "yellow"],
        correctAnswer: "black"

    },
    {
        question: "Whats at the end of the rainbow",
        answers: ["pot of gold", "a dog", "a cup", "dogs"],
        correctAnswer: "pot of gold"

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



// works to count down timer
function setTime() {
    timerInterval = setInterval(function() {
        // here it is decreasing the time by one
        secsLong--;
        // it is adding the word timer and the secsLong var
        timer.innerHTML= "Timer: " + secsLong
    //    if the timer reaches 0 the quiz is over and you are redirected to the highscore page
        if(secsLong === 0) {
            // Stops execution of action at set interval
         clearInterval(timerInterval);
        //  the high score redirection page
         location.href= "highscore.html?score=" + secsLong
        };
   }, 1000);
 };
//  calling the function 
 setTime();










 const urlParams = new URLSearchParams(window.location.search);
 let userInitials = urlParams.get("userInitials");


 function saveScore() {
    var playerName = document.getElementById("initial-box").value;
    // localStorage.setItem(playerName, secondsLeft);
    var userList = localStorage.getItem("userList");
    if (userList === undefined || userList === null) {  
        userList = [{name: playerName, score: secsLong}];
        localStorage.setItem("userList", JSON.stringify(userList));
    }
    else {
        var userListJSON = JSON.parse(userList);
        userListJSON[playerName] = secsLong;
        localStorage.setItem("userList", JSON.stringify(userListJSON));
    }
    
 }
