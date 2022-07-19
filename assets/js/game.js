var startButton = document.getElementById("button-start");
var homePage = document.getElementById("home-page");
var questionContainerEl = document.getElementById("questionContainer");
var questionEl = document.getElementById("question");
var answerChoicesEl = document.getElementById("answerChoices");
var answerButtonsEl = Array.from(
  document.getElementsByClassName("answer-button")
);
var score = 0;
var allQuestions = [];
var currentQuestion = {};
const rightAnswer = 10;
var selectAnswer = false;
var totalQuestions = 5;
var questionCounter = 0;
var resultsPageEl = document.getElementById("results-container");
var finalScore = localStorage.getItem("finalScore");
var saveScoreButton = document.getElementById("save-score-btn");
var saveInput = document.getElementById("initials");
var yourScoreEl = document.getElementById("your-score");

let questionArr = [
  {
    question:
      "Inside the HTML document, where do you place your JavaScript code?",
    choice1: "Inside the <script> element",
    choice2: "In the <footer> element",
    choice3: "Inside the <link> element",
    choice4: "Inside the <head> element",
    answer: 1,
  },
  {
    question: "What operator is used to assign a value to a declared variable?",
    choice1: "Question mark (?)",
    choice2: "Double-equal (==)",
    choice3: "Equal sign (=)",
    choice4: "Colon (:)",
    answer: 3,
  },
  {
    question: "What are the six primitive data types in JavaScript?",
    choice1: "sentence, int, truthy, bigInt, symbol, undefined",
    choice2: "string, num, falsy, bigInt, symbol, undefined",
    choice3: "sentence, float, data, bigInt, symbol, undefined",
    choice4: "string, number, boolean, bigInt, symbol, undefined",
    answer: 4,
  },
  {
    question: "How do we declare a conditional statement in JavaScript?",
    choice1: "while loop",
    choice2: "if...else",
    choice3: "difference...between",
    choice4: "for loop",
    answer: 2,
  },
  {
    question:
      "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
    choice1: "0",
    choice2: "2",
    choice3: "3",
    choice4: "1",
    answer: 4,
  },
];

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  homePage.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  questionCounter = 0;
  allQuestions = [...questionArr];
  nextQuestion();
}

function nextQuestion() {
  if (questionCounter >= totalQuestions) {
    localStorage.setItem("finalScore", score);
    resultsPageEl.classList.remove("hide");
    questionContainerEl.classList.add("hide");
    var getFinalScore = localStorage.getItem("finalScore", score);
    yourScoreEl.innerText = getFinalScore;
    return;
  }
  questionCounter++;
  var questionNum = Math.floor(Math.random() * allQuestions.length);
  currentQuestion = allQuestions[questionNum];
  questionEl.innerText = currentQuestion.question;

  answerButtonsEl.forEach((choice) => {
    var number = choice.dataset["num"];
    choice.innerText = currentQuestion["choice" + number];
  });

  allQuestions.splice(questionNum, 1);

  selectAnswer = true;
}

answerButtonsEl.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!selectAnswer) return;

    selectAnswer = false;
    var answerChosen = e.target.dataset["num"];

    // correct/incorrect
    if (answerChosen == currentQuestion.answer) {
      var addClass = "correct";
    } else if (answerChosen != currentQuestion.answer) {
      addClass = "incorrect";
    }

    if (addClass === "correct") {
      incrementScore(rightAnswer);
    }
    e.target.classList.add(addClass);

    setTimeout(() => {
      e.target.classList.remove(addClass);
      nextQuestion();
    }, 1000);
  });
});

function incrementScore(num) {
  score += num;
}

function saveHighscore(event) {
  event.preventDefault();
  var getFinalScore = localStorage.getItem("finalScore", score);
  saveInput.innerText = initials.value;
  console.log(initials.value);
  console.log(getFinalScore);
}

saveScoreButton.addEventListener("click", saveHighscore);

// create a function for the timer
// if statement answer !== correct answer, timer -10

// timer counts down from 60 seconds
// save and load high scores
