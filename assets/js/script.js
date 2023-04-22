//parts of the code adapted from materials developed by the 2U/edX Coding Curriculum Team for use with bootcamp students.
// GIVEN I am taking a code quiz
// global variables
//timer element
const startQuizBtn = document.querySelector("#start");
const highscoreBtn = document.getElementById("highScores");
var timerEl = document.getElementById('countdown');
var correctEl = document.querySelector("#correct");
var countEl = document.querySelector("#count");
var startEl = document.getElementById('start');
var qnum = 0;
var timeLeft = 60;
var highscore = [usr];
var usr = {
    name: '',
    score: 0
};
// array of questions
const qs = [{
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

//timer function
function countdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
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
            // Call the `displayMessage()` function
            // displayMessage();
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
function qEl (){

}
// dynamically generate event listener
//create button

//fill button inner text with possible answers
//

function highscoreuser(usr) {
    usr.name = Uname.value.trim(),
        usr.score = timeLeft
}



//event listener for start button
function beginQuiz() {
    startEl.addEventListener("click", function()) {
        //hide start screen and move to questions

    }
    //populate question and answer divs while the number of qs cycled is less than the number of qs in the qs array
    if (qnum < qs.length - 1) {
        //get next question object and put it in the questions div and answers div
        qnum++;
    } else {
        endQuiz();
    }


}

function endQuiz() {

    //hide question and answer divs
    //show hight score div and call high scoore function
}
beginQuiz();
countdown();