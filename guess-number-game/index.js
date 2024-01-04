const minNumb = 1;
const maxNumb = 100;

const randomNumb = Math.floor(Math.random() * (maxNumb - minNumb + 1));
const guess = document.querySelector("#number-input");
const button = document.querySelector("#guess-button");
const div = document.querySelector(".guess-div");
const text = document.querySelector("#result");
const tip = document.querySelector("#tip-message");
const tryAgain = `<button type="submit" id="try-again-button" class="btn btn-primary">Try again</button>`
const newGame = `<button type="submit" id="new-game-button" class="btn btn-primary">New game</button>`
const numberGuessed = document.querySelector("#numbers-guessed");
const answers = ["Wrong answer! Try again...", "No, not that number, try again!", "Well, not that one! Try again"]
const gameOver = "I'm sorry, but you lost the game!"
let count = 0;
const tries = document.querySelector("#attempts");
console.log(tries.textContent)
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
  text.textContent = "Congratulations you won 🥳";
  div.insertAdjacentHTML("beforeend", tryAgain);
  const reset = document.querySelector("#try-again-button");
  reset.addEventListener("click", () => {
      location.reload();
    });
};

const youLost = () => {
  guess.remove();
  button.remove();
  text.textContent = gameOver;
  div.insertAdjacentHTML("beforeend", newGame);
  const anotherGame = document.querySelector("#new-game-button");
  anotherGame.addEventListener("click", () => {
    location.reload();
  });
};

const higher = () => {
  let number = parseInt(guess.value);
  console.log(number);
  text.textContent = answers[Math.floor(Math.random() * answers.length)];
  if (randomNumb - number <= 5) {
    tip.innerHTML = `<p>Just a little higher!</p>`
    console.log("A little higher!");
  } else {
    tip.innerHTML = `<p>Higher!</p>`
    console.log("higher");
  };
  guess.value = "";
};

const lower = () => {
  let number = parseInt(guess.value);
  console.log(number);
  text.textContent = answers[Math.floor(Math.random() * answers.length)];
  if (number - randomNumb <= 5) {
    tip.innerHTML = `<p>Just a little lower!</p>`
    console.log("a little lower!");
  } else {
    tip.innerHTML = `<p>Lower!</p>`
    console.log("lower");
  };
  guess.value = ""
};

const attempts = (count) => {
  const numberOfTries = parseInt(tries.attributes[0].value);
  tries.textContent = `You have ${numberOfTries - count} left!`
}

// print the messages in the card
button.addEventListener("click", () => {
  let number = parseInt(guess.value);
  count ++;
  console.log(count);
  attempts(count);
  if (count < 3 && isNaN(number)) {
    alert("You need to put a number!");
    console.log("You need to put a number!");
  } else if (count <= 3 && number < randomNumb) {
    higher();
  } else if (count <= 3 && number > randomNumb) {
    lower();
  } else if (count <= 3 && number == randomNumb) {
    youWon();
  } else {
    console.log("hello again");
    youLost();
  };
});
