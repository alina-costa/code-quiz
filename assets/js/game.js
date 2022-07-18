var startButton = document.getElementById("button-start");
var homePage = document.getElementById("home-page");
var questionContainerEl = document.getElementById("questionContainer");
var questionEl = document.getElementById("question");
var answerChoicesEl = document.getElementById("answerChoices");
var answerButtonsEl = Array.from(
  document.getElementsByClassName("answer-button")
);
var allQuestions = [];
var currentQuestion = {};
const rightAnswer = 10;
var selectAnswer = false;
var totalQuestions = 3;
var questionCounter = 0;

let questionArr = [
  {
    question: "What is 2+2?",
    choice1: "4",
    choice2: "is this the real life? is this just fantasy?",
    choice3: "13",
    choice4: "24",
    answer: 1,
  },
  {
    question: "What is 3+3?",
    choice1: "stacys mom has got it goin on",
    choice2: "6",
    choice3: "13",
    choice4: "24",
    answer: 2,
  },
  {
    question: "What is 12+12?",
    choice1: "4",
    choice2: "6",
    choice3: "am i more than you bargained for yet",
    choice4: "24",
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
    return window.alert("quiz complete! your score is ___");
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

    e.target.classList.add(addClass);

    setTimeout(() => {
      e.target.classList.remove(addClass);
      nextQuestion();
    }, 1000);

    console.log(addClass);
  });
});

// create a function for the timer
// if statement answer !== correct answer, timer -10

// timer counts down from 60 seconds
// save and load high scores
