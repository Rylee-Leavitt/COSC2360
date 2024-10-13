"use strict";

/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Rylee Leavitt
      Date:   10/12/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
const quizTime = 90;

// Declare timeID variable
let timeID;

// Declare questionList variable using querySelectorAll
const questionList = document.querySelectorAll("div#quiz input");

// and the correct answers to each quiz question
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startQuiz");
let quizClock = document.getElementById("quizClock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Add onclick event handler to startQuiz
startQuiz.onclick = function() {
    overlay.className = "showquiz";
    timeID = setInterval(countdown, 1000); // Repeat countdown every 1 second
};

// Function to update the quiz clock
function countdown() {
    if (timeLeft === 0) {
        clearInterval(timeID); // Cancel the timed command
        let totalCorrect = checkAnswers();
        if (totalCorrect === correctAnswers.length) {
            alert("Congratulations! You got 100%");
        } else {
            alert(`You got ${correctAnswers.length - totalCorrect} out of ${correctAnswers.length} questions wrong.`);
            timeLeft = quizTime; // Reset timeLeft
            quizClock.value = timeLeft; // Update quizClock value
            overlay.className = "hidequiz"; // Hide the quiz overlay
        }
    } else {
        timeLeft -= 1; // Decrease timeLeft by 1
        quizClock.value = timeLeft; // Update clock
    }
}

// Function to check the student answers
function checkAnswers() {
    let correctCount = 0;
    for (let i = 0; i < questionList.length; i++) {
        if (questionList[i].value === correctAnswers[i]) {
            correctCount++;
            questionList[i].className = "correctAnswer";
        } else {
            questionList[i].className = "wrongAnswer";
        }
    }
    return correctCount;
}