console.log("Hello");

const decrease = document.getElementById("decrease");
console.log(decrease)
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const counter = document.getElementById("countLabel");

let count = 0;

const updateColor = () => {
  if (count > 0) {
    console.log(counter.style)
    counter.style.color = "green";
  } else if (count < 0) {
    console.log(counter.style)
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
};

increase.onclick = function() {
  count ++;
  counter.textContent = count;
  updateColor()
}

decrease.onclick = function() {
  count --;
  counter.textContent = count;
  updateColor()
}

reset.onclick = function() {
  count = 0;
  counter.textContent = count;
  updateColor()
}
