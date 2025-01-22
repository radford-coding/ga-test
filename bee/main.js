function writeGuesses(guessArray) {
  // currently assumes alphabetical input
  let guesses = "";
  for (let i = 0; i < guessArray.length; i++) {
    guesses += guessArray[i] + "<br>";
  }
  document.querySelector(".words").innerHTML = guesses;
}

let correctGuesses = ["Bee", "Beer", "Beets", "Battlestar Galactica"];
writeGuesses(correctGuesses);




function assignLetters(inputString) {
  document.querySelector("#center").innerHTML = inputString[0];
  document.querySelector("#top").innerHTML = inputString[1];
  document.querySelector("#topright").innerHTML = inputString[2];
  document.querySelector("#bottomright").innerHTML = inputString[3];
  document.querySelector("#bottom").innerHTML = inputString[4];
  document.querySelector("#bottomleft").innerHTML = inputString[5];
  document.querySelector("#topleft").innerHTML = inputString[6];
}

// initialize the board
let letters = "FALIGNP";
assignLetters(letters);