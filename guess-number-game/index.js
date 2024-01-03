const minNumb = 1;
const maxNumb = 100;

const randomNumb = Math.floor(Math.random() * (maxNumb - minNumb + 1));
const guess = document.querySelector("#number-input");
const button = document.querySelector("#guess-button");
const div = document.querySelector(".guess-div");
const text = document.querySelector("#result");
const tryAgain = `<button type="submit" id="try-again-button">Try again</button>`
// console.dir(div);
// console.log(text);
// console.log(button);
// console.log(guess);
console.log(randomNumb);

const youWon = () => {
  console.log("it's working!")
  guess.remove()
  button.remove()
  text.textContent = "You won";
    div.insertAdjacentHTML("beforeend", tryAgain);
    const reset = document.querySelector("#try-again-button");
    reset.addEventListener("click", () => {
      location.reload();
    })
};

const youLost = () => {
  guess.remove()
  button.remove()
  text.textContent = "Wrong answer! Try again...";
  div.insertAdjacentHTML("beforeend", tryAgain);
  const reset = document.querySelector("#try-again-button");
  console.log(reset);
  reset.addEventListener("click", () => {
    reset.remove();
    text.remove();
    div.insertAdjacentHTML("afterbegin", guess.outerHTML);
    div.insertAdjacentHTML("beforeend", button.outerHTML);
  })
};


button.addEventListener("click", () => {
  // console.log("hello")
  if (guess.value == randomNumb) {
    // console.log("hello again")
    youWon()
  } else {
    console.log("hello again")
    youLost()
}
});
