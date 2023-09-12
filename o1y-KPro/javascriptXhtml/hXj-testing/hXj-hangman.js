const word = "javascript";
const wordArray = word.split("");
const wordLength = wordArray.length;
let underscoresArray = [];
for (let i = 0; i < wordLength; i++) {
  underscoresArray[i] = "_";
}

let guesses = [];
let lives = 5;

const wordPlaceholder = document.getElementById("word");
const message = document.getElementById("message");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const guessesElement = document.getElementById("guesses");
const remainingLives = document.getElementById("remaining");

wordPlaceholder.innerHTML = underscoresArray.join(" ");
remainingLives.innerHTML = lives;

guessButton.addEventListener("click", function() {
  const guess = guessInput.value;

  if (!guesses.includes(guess)) {
    guesses.push(guess);
    guessesElement.innerHTML = `Guesses: ${guesses.join(", ")}`;

    if (!wordArray.includes(guess)) {
      lives--;
      remainingLives.innerHTML = lives;
    } else {
      for (let i = 0; i < wordLength; i++) {
        if (wordArray[i] === guess) {
          underscoresArray[i] = guess;
        }
      }

      wordPlaceholder.innerHTML = underscoresArray.join(" ");
    }
  } else {
    message.innerHTML = "You already tried that letter.";
  }

  if (!underscoresArray.includes("_")) {
    message.innerHTML = "You win!";
  }

  if (lives === 0) {
    message.innerHTML = "You lose.";
  }

  guessInput.value = "";
});
