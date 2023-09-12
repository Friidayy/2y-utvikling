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
