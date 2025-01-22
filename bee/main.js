let correctGuesses = ["Bee"];

let guesses = "";
for (let i = 0; i < correctGuesses.length; i++) {
  guesses += correctGuesses[i] + "\n";
}
document.querySelector(".words").innerHTML = guesses;


function assignLetters(lttrs) {
  document.querySelector("#centerLetter").innerHTML = lttrs[0];
  document.querySelector("#topLetter").innerHTML = lttrs[1];
  document.querySelector("#toprightLetter").innerHTML = lttrs[2];
  document.querySelector("#bottomrightLetter").innerHTML = lttrs[3];
  document.querySelector("#bottomLetter").innerHTML = lttrs[4];
  document.querySelector("#bottomleftLetter").innerHTML = lttrs[5];
  document.querySelector("#topleftLetter").innerHTML = lttrs[6];
}

let letters = "FALIGNP";
assignLetters(letters);
console.log(letters[1]);