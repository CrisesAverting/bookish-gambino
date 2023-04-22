//parts of the code adapted from materials developed by the 2U/edX Coding Curriculum Team for use with bootcamp students.
// GIVEN I am taking a code quiz
// global variables
//timer element
var timerEl =document.getElementById('countdown')
var correctEl = document.querySelector("#correct");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");
// array of questions
var qs = []
var timeLeft = 60;
usr = {
    name: '',
    score: 0
}

// WHEN I click the start button

// THEN a timer starts and I am presented with a question
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
function userinfo(){
//new usr object name property=textboxname.content 
//usr object score = timeLeft when q array index = array -1
}
function displayMessage(){
    timerEl.textContent = timeLeft
}
//  Select increment and decrement button elements


// Updates count on page
// Attach event listener to buttons with Correct answer class element
correctEl.addEventListener("click", function () {
    timeLeft=timeLeft+5;
    displayMessage();
});

// Attach event listener to wrong answer class button element
decrementEl.addEventListener("click", function () {
    // Action will fire if timeLeft is greater than  0
    if (timeLeft > 0) {
        timeLeft=timeLeft-5;
        displayMessage();
    }
});


countdown();
//event listener for start button
function begin(){

}
//event listener for correct and incorrect answers by class?

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score