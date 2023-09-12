// list of words to choose from, array with list of words, 'strings' = snow, cat...
const words = ['rat', 'snow', 'silence', 'rock', 'paper', 'scissor', 'offence', 'defence', 'cat'];

// randomly select a word from 'words' array
const word = words[Math.floor(Math.random()*words.length)];

// selected word split into wordArray
const wordArray = word.split("");
// length of array
const wordLength = wordArray.length;

// variables, store guessed letters
let guesses = [];
let lives = 10;

// array displaying underscores for each letter, 'for' loop that repeats _ for each letter
let underscoresArray = [];
for (let i = 0; i < wordLength; i++) {
  underscoresArray[i] = "_";
}

// connecting javascript variables to html elements, 'variables' = wordPlaceholder, message, guessInput...
const wordPlaceholder = document.getElementById("word");
const message = document.getElementById("message");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const guessesElement = document.getElementById("guesses");
const remainingLives = document.getElementById("remaining");

wordPlaceholder.innerHTML = underscoresArray.join(" ");
remainingLives.innerHTML = lives;

// following happens when clicking "guess" button (click enter)
guessButton.addEventListener("click", function() {

  // check if game has ended
  if (message.innerHTML === "You won !!" || message.innerHTML === "You lost !!") {
    return;
  }
  const guess = guessInput.value;

  // to make "you already tried that letter" message go away when a new letter is guessed
  message.innerHTML = ""; //clear previous message

  // if guess not in the 'guesses' array, the guess is added to the 'guesses' array and shows on screen
  if (!guesses.includes(guess)) {
    guesses.push(guess);
    guessesElement.innerHTML = `Guesses: ${guesses.join(", ")}`;

    // if guess is not in the selected word, -1 life
    if (!wordArray.includes(guess)) {
      lives--;
      remainingLives.innerHTML = lives;
    } else { // 'for' loop, if guess is in the selected word, replace _ with the guessed letter
      for (let i = 0; i < wordLength; i++) {
        if (wordArray[i] === guess) {
          underscoresArray[i] = guess;
        }
      }

      wordPlaceholder.innerHTML = underscoresArray.join(" ");
    }

    // message if guess made before, 'string' = message
  } else {
    message.innerHTML = "You already tried that letter.";
  }

  // check if won, 'string' = message
  if (!underscoresArray.includes("_")) {
    message.innerHTML = "You won !!";
  }

  // check if lost, 'string' = message
  if (lives === 0) {
    message.innerHTML = "You lost !!";
  }

// disable input and button if game has ended
  if (message.innerHTML === "You won !!" || message.innerHTML === "You lost !!") {
    guessInput.disabled = true;
    guessButton.disabled = true;
  }
  guessInput.value = "";
})

// event listener triggers on the button when 'enter' keypress
var input = document.getElementById("guessInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("guessButton").click();
  }
})

// event listener reloads page when 'click'
document.querySelector('.restart-btn').addEventListener('click', function(){
  window.location.reload();
  return false;
})