var startBtn = document.querySelector("#start-btn")
var buttonA = document.querySelector("#a")
var buttonB = document.querySelector("#b")
var buttonC = document.querySelector("#C")
var question = document.querySelector("#question") 
var questionSection = document.querySelector("#question-section")
console.log(startBtn);
startBtn.addEventListener("click", startQuiz)
function startQuiz() {
    console.log("startQuiz");
    questionDisplay()
}
function questionDisplay() {
console.log(quizData);
console.log(quizData[0])
console.log(quizData[0].question);
questionSection.classList.remove("hide")
    question.innerText = quizData[0].question
    buttonA.innerText = quizData[0].a
    buttonB.innerText = quizData[0].b
    buttonC.innerText = quizData[0].c

} 



const quizData = [
    {
        question: "What answer best describes what a string is?",
        a: "An object used to represent and manipulate a sequence of characters.",
        b: "An object that pulls elements together.",
        c: "An object that groups multiple properties together.",
        correct: "a",
    },
    {
        question: "What is the use of parseInt()?",
        a: "Function parses an array to return an integer.",
        b: "Function parses a string argument and returns an integer of the specified radix.",
        c: "Function that parses an object and returns an integer",
        correct: "b",
    },
    {
        question: "What is an object?",
        a: "A class used to store various array collections.",
        b: "A class used to create different script properties.",
        c: "A class used to store various keyed collections and more complex entities.",
        correct: "c",
    },
    {
        question: "What best describes an array?",
        a: "Is a global object used in the construction of arrays.",
        b: "Is a global object used in the construction of a string.",
        c: "Is a global object used in the constructions of parseInt.",
        correct: "a",
    },
];

const quiz = document.getElementById('section1')
const answerEls = document.getElementById('answer')
const questionEl = document.getElementById('question1')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')

let currentSection1 = 0
let score = 0

// loadSection1() 

function loadSection1() {

    // deselectANswers()

    const currentQuizData = [currentSection1] 

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c

}



function getSelected() {
    let answer 
    answerEls.forEach(answerEl => {
        if(answerEL.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()
//     if(answer) {
//         if(answer === quizData[currentSection1].correct) {
//             score++

//         }
//         if(section1 < quizData.length) {
//             loadQuiz()
//         }else {
//             h2.innerHTML =
            // <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            // <button onClick="location.reload(">Reload</button>

//         }
//     }
// })

const sect = document.querySelector('section');