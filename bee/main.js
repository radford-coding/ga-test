function writeGuesses(guessArray) {
  // currently assumes alphabetical input
  let guesses = "";
  for (let i = 0; i < guessArray.length; i++) {
    guesses += guessArray[i] + "<br>";
  }
  document.querySelector(".words").innerHTML = guesses;
};

// explicit placeholder for guessed words
let correctGuesses = [];
writeGuesses(correctGuesses);



// function to display letters on the hexes
function assignLetters(inputString) {
  document.querySelector("#center").innerHTML = inputString[0];
  document.querySelector("#top").innerHTML = inputString[1];
  document.querySelector("#topright").innerHTML = inputString[2];
  document.querySelector("#bottomright").innerHTML = inputString[3];
  document.querySelector("#bottom").innerHTML = inputString[4];
  document.querySelector("#bottomleft").innerHTML = inputString[5];
  document.querySelector("#topleft").innerHTML = inputString[6];
};

// initialize the board
let letters = "FALIGNP";
assignLetters(letters);

// fisher-yates shuffle, but leave the first letter (yellow) in place
function shuffle(stringToShuffle) {
  let a = stringToShuffle.split(""),
      n = a.length;
  // stop loop at index 1
  for (let i = n - 1; i > 1; i--) {
    // random index from 1 to i
    let j = Math.floor(Math.random() * i + 1);
    let x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a.join("");
};

// button: shuffle
document.querySelector("#shuffle").onclick = function() {
  letters = shuffle(letters);
  assignLetters(letters);
};


// buttons add letters to the guess
let currentGuess = "";
document.querySelector("#center").onclick = function() {
  currentGuess += document.querySelector("#center").innerHTML;
  document.querySelector(".guess").innerHTML = currentGuess;
};
document.querySelector("#top").onclick = function() {
  currentGuess += document.querySelector("#top").innerHTML;
  document.querySelector(".guess").innerHTML = currentGuess;
};
document.querySelector("#topright").onclick = function() {
  currentGuess += document.querySelector("#topright").innerHTML;
  document.querySelector(".guess").innerHTML = currentGuess;
};
document.querySelector("#bottomright").onclick = function() {
  currentGuess += document.querySelector("#bottomright").innerHTML;
  document.querySelector(".guess").innerHTML = currentGuess;
};
document.querySelector("#bottom").onclick = function() {
  currentGuess += document.querySelector("#bottom").innerHTML;
  document.querySelector(".guess").innerHTML = currentGuess;
};
document.querySelector("#bottomleft").onclick = function() {
  currentGuess += document.querySelector("#bottomleft").innerHTML;
  document.querySelector(".guess").innerHTML = currentGuess;
};
document.querySelector("#topleft").onclick = function() {
  currentGuess += document.querySelector("#topleft").innerHTML;
  document.querySelector(".guess").innerHTML = currentGuess;
};


// button: delete
document.querySelector("#delete").onclick = function() {
  currentGuess = currentGuess.slice(0, -1);
  document.querySelector(".guess").innerHTML = currentGuess;
};

// button: enter
document.querySelector("#enter").onclick = function() {
  // need to check the guess for correctness
  // replace this with just an addGuess function that inserts the guess into its alphabetical place
  // rather than push()
  correctGuesses.push(currentGuess.charAt(0).toUpperCase() + currentGuess.slice(1).toLowerCase());
  writeGuesses(correctGuesses);
  currentGuess = "";
  document.querySelector(".guess").innerHTML = currentGuess;
};