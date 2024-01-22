var score = document.querySelector(".score");
var scoreEl = document.createElement("a");
scoreEl.href = "./highscore.html";
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




// get the questions to display on the screen for user
function displayQuestions() {
    var questions = document.querySelector(".menu");
    var questionsEl = document.createElement("h1");
    questions.innerHTML = "";
    questionsEl.innerHTML = "";
    questionsEl.textContent = quizContent[currentQuestion].question;
    questions.append(questionsEl);

    // for loop to get the answers from the array into the document and get docking seconds if wrong
    for (var i = 0; i < quizContent[currentQuestion].answers.length; i++) {
        var indAnswers = (quizContent[currentQuestion].answers[i]);

        var answer = document.querySelector(".menu");
        var answerEl = document.createElement("li");
        answerEl.textContent = indAnswers;
        answerEl.setAttribute("type", "button");
        answerEl.setAttribute("Style", "border: 1px solid; max-width: 30%; margin: 5px auto; border-radius: 5px");
        answerEl.addEventListener("click", function (event) {


            if ((event.target.textContent) === (quizContent[currentQuestion].correctAnswer)) {
                alert("Correct Answer!")
            } else {
                secsLong -= 10;
                alert("Wrong Answer!");
            }

            if (currentQuestion < quizContent.length - 1) {
                currentQuestion++;
                displayQuestions();
            } else {
                // calling prompt to save initials to local storage
                askName();
                // after initials are saved will relocate to new window displaying high scores
                location.href = "highscore.html?score=" + secsLong
            }
        })
        answer.appendChild(answerEl);
    }
}
displayQuestions();





// functino to prompt for name at the end of the quiz but not on the highscore page has to be at end of last question for quiz 
function askName() {
    var userName = prompt("Please enter user Initials");


    // Retrieve the stored scores from localStorage
    var storedScores = localStorage.getItem("userList");
  
   // If scores are found, parse as JSON; otherwise, initialize as an empty array
   var scoresArray = storedScores ? JSON.parse(storedScores) : [];

   // Add the new score to the array
   scoresArray.push({ initials: userName, score: secsLong });

    // Store the updated scores back in localStorage
    localStorage.setItem("userList", JSON.stringify(scoresArray));

}


// works to count down timer
function setTime() {
    timerInterval = setInterval(function () {
        // here it is decreasing the time by one
        secsLong--;
        // it is adding the word timer and the secsLong var
        timer.innerHTML = "Timer: " + secsLong
        //    if the timer reaches 0 the quiz is over and you are redirected to the highscore page
        if (secsLong === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            //  the high score redirection page
            location.href = "highscore.html?score=" + secsLong
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
        userList = [{ name: playerName, score: secsLong }];
        localStorage.setItem("userList", JSON.stringify(userList));
    }
    else {
        var userListJSON = JSON.parse(userList);
        userListJSON[playerName] = secsLong;
        localStorage.setItem("userList", JSON.stringify(userListJSON));
    }

}
