const questions = [
  {
      question: 'Jeg vil ha gratis SFO',
      enig: { MDG: 2, A: 2, SP: 1, },
      littenig: { MDG: 1, A: 0, SP: 2, KRF: 1 },
      littuenig: { H: 1, },
      uenig: { H: 2, },                                                           
      nøytral: {}  
  },
  {
      question: 'Jeg vil ha gratis skolemat',
      enig: { H: 0, MDG: 2, A: 2, SP: 0, KRF: 0 },
      littenig: { H: 0, MDG: 0, A: 0, SP: 1, KRF: 0 },
      uenig: { H: -2, MDG: 0, A: 0, SP: 0, KRF: 0 },
      littuenig: { H: 0, MDG: 0, A: 0, SP: 0, KRF: 0 },
      nøytral: {}
  },
  {
      question: 'Jeg vil ha økt skatt',
      enig: { H: 0, MDG: 2, A: 2, SP: 0, KRF: 0 },
      littenig: { H: 0, MDG: 0, A: 0, SP: 1, KRF: 0 },
      uenig: { H: -2, MDG: 0, A: 0, SP: 0, KRF: 0 },
      littuenig: { H: 0, MDG: 0, A: 0, SP: 0, KRF: -1 },
      nøytral: {}
  },
  {
      question: 'Jeg er for gratis kollektivtransport',
      enig: { H: 0, MDG: 2, A: 2, SP: 0, KRF: 0 },
      littenig: { H: 1, MDG: 0, A: 0, SP: 1, KRF: 1 },
      uenig: { H: 0, MDG: 0, A: 0, SP: 0, KRF: 0 },
      littuenig: { H: 0, MDG: 0, A: 0, SP: 0, KRF: 0 },
      nøytral: {}
  }
  // Add more questions here...
];

let partyScores = {
  MDG: 0,
  A: 0,
  H: 0,
  SP: 0,
  KRF: 0
};

const questionT = document.getElementById('question');
const btnNext = document.getElementById('btnNext');
const rbAnswer = document.getElementsByName('answer');

btnNext.addEventListener('click', nextQuestion);

let qidx = 0;
questionT.innerHTML = questions[qidx].question;

function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked');

    if (radioChecked) {
        qidx++;
        calculateResult(qidx - 1, radioChecked.value);
        if (qidx < questions.length) {
            questionT.innerHTML = questions[qidx].question;
            radioChecked.checked = false;
        } else {
            // All questions are answered; you can display the results here or take any other action.
            displayResults();
        }
    }
}

function calculateResult(qidx, chosen) {
    let partyChoices = questions[qidx][chosen];
    for (let party in partyChoices) {
        partyScores[party] += partyChoices[party];
    }
}

function displayResults() {
    // Calculate the winning party or display results in a meaningful way.
    let winner = Object.keys(partyScores).reduce((a, b) => partyScores[a] > partyScores[b] ? a : b);
    document.getElementById('result').innerHTML = `Ditt valg: ${winner}`;
}







document.getElementById("next-button").addEventListener("click", nextQuestion);
document.getElementById("start-button").addEventListener("click", showQuizForm);
document.getElementById("return-button").addEventListener("click", returnToStart);
document.getElementById("toggle-css-button").addEventListener("click", toggleCSS);

const toggleButton = document.getElementById("toggle-css-button");

toggleButton.addEventListener('click', toggleCSS);
nextButton.addEventListener('click', nextQuestion);

function toggleCSS() {
  const mainStyles = document.getElementById("main-styles");
  const alternateStyles = document.getElementById("alternate-styles");

  if (mainStyles.disabled) {
    mainStyles.removeAttribute("disabled");
    alternateStyles.disabled = true;
    toggleButton.textContent = "Toggle Alt CSS";
  } else {
    mainStyles.disabled = true;
    alternateStyles.removeAttribute("disabled");
    toggleButton.textContent = "Toggle Mid CSS";
  }
}

function showQuizForm() {
  document.getElementById("start-form").style.display = "none";
  document.getElementById("quiz-form").style.display = "block";
}




// Existing code until showQuizForm function


const nextButton = document.getElementById("next-button");
let currentQuestion = 0;

nextButton.addEventListener("click", showNextQuestion);

function showNextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    // Show the result or any other final screen
    showResult();
  }
}

function showQuestion(questionIndex) {
  const currentQuestionData = questions[questionIndex];
  const questionContainer = document.getElementById(`question${questionIndex + 1}`);
  questionContainer.innerHTML = `
    <p>${currentQuestionData.question}</p>
    ${currentQuestionData.options.map((option, index) => `
      <input type="radio" name="q${questionIndex + 1}" value="${option}"> ${option}<br>
    `).join("")}
  `;
}

function showResult() {
  // Similar to the existing calculateResult function, display the result
  // You can use the existing calculateResult function or modify it
}

// Other functions and event listeners remain unchange








function returnToStart() {
    document.getElementById("quiz-form").style.display = "none";
    document.getElementById("quiz-form").reset();
    document.getElementById("start-form").style.display = "block";
    document.getElementById("result").textContent = "";
}

document.getElementById("submit-button").addEventListener("click", calculateResult);