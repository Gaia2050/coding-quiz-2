console.log('quiz.js loaded');
var startBtn = document.querySelector("#start-btn")
var buttonA = document.querySelector("#A")
var buttonB = document.querySelector("#B")
var buttonC = document.querySelector("#C")
var question = document.querySelector("#question")
var questionSection = document.querySelector("#question-section")
var startingPage = document.querySelector("#startingPage")
var position = 0
var endPageSection = document.querySelector('#endPage')
var points = 0
var timeLeft = 20
var timerSection = document.querySelector('#timer')
var timerId;
// var submitBtn = document.querySelector("#submitBtn")
// console.log(startBtn);
startBtn.addEventListener("click", startQuiz)
function startQuiz() {
    console.log("startQuiz");
    timerSection.textContent = timeLeft;
    timerId = setInterval(timerCountdown, 1000)
    startingPage.classList.add("hide");
    questionSection.classList.remove("hide")

    questionDisplay()
}
function timerCountdown() {
    timeLeft--;
    timerSection.textContent = timeLeft
    if (timeLeft < 0) {
        clearInterval(timerId)
    }
}
function questionDisplay() {
    // console.log(quizData);
    // console.log(quizData[position])
    // console.log(quizData[position].question);
    buttonA.addEventListener("click", nextQuestion);
    buttonB.addEventListener("click", nextQuestion);
    buttonC.addEventListener("click", nextQuestion);
    question.innerText = quizData[position].question
    buttonA.innerText = quizData[position].a
    buttonB.innerText = quizData[position].b
    buttonC.innerText = quizData[position].c
}

function endGame() {
    console.log('endPage1');
    questionSection.classList.add("hide");
    endPageSection.classList.remove('hide');
    console.log('endPage2');
    endPageSection.innerHTML = "score: " + points;
    timerSection.classList.add("hide");
}
function nextQuestion() {
    console.log("click");
    console.log('before position ++', position);
    console.log(quizData[position].correct);
    var correctAnswer = quizData[position].correct
    var usersChoice = this.innerHTML
    console.log(this.innerHTML);
    if (correctAnswer === usersChoice) {
        console.log('correct');
        points += 3
        console.log(points);
    } else {
        console.log('incorrect')

    }
    if (position === quizData.length - 1) {
        console.log('lastQuestion..calling endGame');
        endGame();
    } else {
        position++
        questionDisplay();
    }
}




//  window.addEventListener('load', renderQuestion); 
const quizData = [
    {
        question: "What answer best describes what a string is?",
        a: "An object used to represent and manipulate a sequence of characters.",
        b: "An object that pulls elements together.",
        c: "An object that groups multiple properties together.",
        correct: "An object used to represent and manipulate a sequence of characters.",
        incorrect: "An object that pulls elements together.",
        incorrect: "An object that groups multiple properties together.",
    },
    {
        question: "What is the use of parseInt()?",
        a: "Function parses an array to return an integer.",
        b: "Function parses a string argument and returns an integer of the specified radix.",
        c: "Function that parses an object and returns an integer",
        correct: "Function parses a string argument and returns an integer of the specified radix."
    },
    {
        question: "What is an object?",
        a: "A class used to store various array collections.",
        b: "A class used to create different script properties.",
        c: "A class used to store various keyed collections and more complex entities.",
        correct: "A class used to store various keyed collections and more complex entities."
    },
    {
        question: "What best describes an array?",
        a: "Is a global object used in the construction of arrays.",
        b: "Is a global object used in the construction of a string.",
        c: "Is a global object used in the constructions of parseInt.",
        correct: "Is a global object used in the construction of arrays."
    },
];
