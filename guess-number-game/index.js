const minNumb = 1;
const maxNumb = 100;

const randomNumb = Math.floor(Math.random() * (maxNumb - minNumb + 1));
const guess = document.querySelector("#number-input");
const button = document.querySelector("#guess-button");
const div = document.querySelector(".guess-div");
const text = document.querySelector("#result");
const tryAgain = `<button type="submit" id="try-again-button">Try again</button>`
const numberGuessed = document.querySelector("#numbers-guessed");
// console.dir(div);
// console.log(text);
// console.log(button);
// console.log(guess);
console.log(numberGuessed);
console.log(randomNumb);


const youWon = () => {
  console.log("it's working!");
  guess.remove();
  button.remove();
  text.textContent = "You won";
  div.insertAdjacentHTML("beforeend", tryAgain);
  const reset = document.querySelector("#try-again-button");
  reset.addEventListener("click", () => {
      location.reload();
    });
};

const higher = () => {
  console.log("higher");
  console.log(parseInt(guess.value));
  guess.value = "";
};

const lower = () => {
  if (randomNumb - parseInt(guess.value) <= 5) {
    console.log("a little lower!");
  } else {
    console.log("lower");
  };
};

const youLost = () => {
  const answers = ["Wrong answer! Try again...", "No, not that number, try again!", "Well, not that one! Try again"]
  guess.value = ""
  text.textContent = answers[Math.floor(Math.random() * answers.length)];
};


  button.addEventListener("click", () => {
  // console.log("hello")
  if (guess.value == isNaN(NaN)) {
    console.log("You need to put a number!");
    // console.log("hello again")
  } else if (guess.value < randomNumb) {
    higher();
  } else if (guess.value > randomNumb) {
    lower();
  }

  else {
    console.log("hello again");
    youLost();
}
});
