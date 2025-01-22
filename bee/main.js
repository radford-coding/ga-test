let correctGuesses = ["Bee"];

let guesses = "";
for (let i = 0; i < correctGuesses.length; i++) {
  guesses += correctGuesses[i] + "\n";
}
document.querySelector(".words").innerHTML = guesses;


function assignLetters(lttrs) {
  document.querySelector("#center").innerHTML = lttrs[0];
  document.querySelector("#top").innerHTML = lttrs[1];
  document.querySelector("#topright").innerHTML = lttrs[2];
  document.querySelector("#bottomright").innerHTML = lttrs[3];
  document.querySelector("#bottom").innerHTML = lttrs[4];
  document.querySelector("#bottomleft").innerHTML = lttrs[5];
  document.querySelector("#topleft").innerHTML = lttrs[6];
}

let letters = "FALIGNP";
assignLetters(letters);
console.log(letters[1]);