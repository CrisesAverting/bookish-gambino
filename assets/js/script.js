//parts of the code adapted from materials developed by the 2U/edX Coding Curriculum Team for use with bootcamp students.
// GIVEN I am taking a code quiz
// global variables
//timer element
const startQuizBtn = document.querySelector("#start");
const highscoreBtn = document.getElementById("show-highscores");
var countEl = document.getElementsByClassName("container");
let currentQuestion;
let answer;
var highscoreEl = document.getElementById("highScores")
var timerEl = document.getElementById('countdown');
var verdEl = document.getElementById('verdict');
var startEl = document.getElementById('start');
var qEl = document.getElementById("options");
var qnum = 0;
var timeLeft = 60;
let timeInterval;
var usr = {
    name: '',
    score: 0
};
var highscore = [usr];
// array of questions
const questionList = [{
    //the question
    question: "My Dogs name is:",
    //the possible answers to the question
    Choices: ["Steve", "Sophia", "Sophie"],
    //the correct answer to the question
    Correct: "Sophie"
},
{
    question: "My name is:",
    Choices: ["Nicco", "Steve"],
    Correct: "Nicco"
},
{
    question: "My Cats name is:",
    Choices: ["You don't have a cat", "Laura"],
    Correct: "You don't have a cat",
}
];
startQuizBtn.addEventListener("click", beginQuiz);
highscoreBtn.addEventListener("click", highscoreboard);
//timer function
function timer() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to a game over string
            timerEl.textContent = 'Times up';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
        }
    }, 1000);
}

function userinfo() {
    //new usr object name property=textboxname.content 
    //usr object score = timeLeft when q array index = array -1
}
function displayMessage() {
    timerEl.textContent = timeLeft
}
function populateQuestions() {
    //set the variable current question to the question object at index qnum in the questions list array
    qEl.innerHTML = "";
    verdEl.innerText = "";
    if (qnum === questionList.length) {
        endQuiz()
    } else {
        currentQuestion = questionList[qnum];
        //set answer to the currentQuestion objects correct paramenter
        answer = currentQuestion.Correct;
        //create a new h2 element call curqTitle
        let curqTitle = document.createElement("h2");
        // set the curqTitle inner text to the question parament of the current question
        curqTitle.innerText = currentQuestion.question;
        //append the new element to the choices article
        qEl.append(curqTitle)
        //create a div to seperate the choices from the question for css purposes
        let choiceDiv = document.createElement("div");
        curqTitle.append(choiceDiv);
        //iterate though the questions while the index of the current question is less than the length of the choices array for the current question
        for (let i = 0; i < currentQuestion.Choices.length; i++) {
            //create button choice button and set inner text of choice button to the index of i in the choices array for the current question
            let chosenBtn = document.createElement("button");
            chosenBtn.innerText = currentQuestion.Choices[i];
            choiceDiv.append(chosenBtn);
            chosenBtn.addEventListener("click", function (e) {
                e.preventDefault();
                checkAnswer(answer, this.innerText)
            })

            //add event listen for each button with event.target.innertext reads the inner text of the button that is clicked  
            document.getElementById("options").classList.add("show")
        }
    }
    function checkAnswer(a, b) {
        if (a == b) {
            verdEl.textContent = 'Correct ';
        } else {
            verdEl.textContent = 'Incorrect ';
            if (timeLeft < 5) {
                timeLeft = 0;

            } else {
                timeLeft = timeLeft - 5;

            }
        }
        qnum++;
        setTimeout(populateQuestions, 1000);
    }
}

function highscoreboard() {

console.log("showing leaderboard");
//remove all element in options article
//hide countdown element
}



//event listener for start button
function beginQuiz(e) {
    //hide start screen and move to questions
    e.preventDefault();
    document.getElementById("splash-screen").classList.add("hide")
    timer();
    console.log("starting your quiz dave")
    populateQuestions();
}

function endQuiz() {
    var scr = timeLeft;
    timeLeft = 0;
    let initialsEntry = document.createElement("INPUT");
    initialsEntry.setAttribute("type", "text");
    highscoreEl.append(initialsEntry);

    let initials = initialsEntry.innerText;

    // if (initials.innerText === "") {
    //     alert("please enter your initials");
    // } else if (timeLeft == 0) {
    //     alert("badluck you ran out of time");
    // } else {
    //     alert("Good Job" + "Your Score is : " + scr);

    //     localStorage.setItem("email", email);
    //     localStorage.setItem("score", timeLeft);
    //     highscoreboard();
    // }
}
