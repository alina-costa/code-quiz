var startButton = document.getElementById("button-start");
var homePage = document.getElementById("home-page");
var questionContainerEl = document.getElementById("questionContainer");
var questionEl = document.getElementById("question");
var answerChoicesEl = document.getElementById("answerChoices");
var answerButtonsEl = Array.from(
  document.getElementsByClassName("answer-button")
);
const rightAnswer = 10;

let questionArr = [
  {
    question: "What is 2+2?",
    choice1: "4",
    choice2: "6",
    choice3: "13",
    choice4: "24",
    answer: 1,
  },
  {
    question: "What is 3+3?",
    choice1: "4",
    choice2: "6",
    choice3: "13",
    choice4: "24",
    answer: 2,
  },
  {
    question: "What is 12+12?",
    choice1: "4",
    choice2: "6",
    choice3: "13",
    choice4: "24",
    answer: 4,
  },
];

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  window.alert("start quiz");
  homePage.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  questionCounter = 0;
  allQuestions = [...questionArr];
  nextQuestion();
  console.log(allQuestions);
}

function nextQuestion() {
  questionCounter++;
  var questionNum = Math.floor(Math.random() * allQuestions.length);
  currentQuestion = allQuestions[questionNum];
  questionEl.innerText = currentQuestion.question;
  console.log(nextQuestion);

  answerButtonsEl.forEach((choice) => {
    // where does he get "choice" from??
    var number = choice.getAttribute("data-num");
    choice.innerText = currentQuestion["choice" + number];
  });
}

function answerSelect() {}

// create a function for the timer
// if statement answer !== correct answer, timer -10
