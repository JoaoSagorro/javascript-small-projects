const temperature = document.querySelector("#temperature");
// console.log(temperature);
const tempDiv = document.querySelector("#temp-char");

const submit = document.querySelector("#button");
const celToFar = document.querySelector("#cel-far");
// console.log(celToFar.checked);
const farToCel = document.querySelector("#far-cel");
// console.log(farToCel.checked);
const celToKel = document.querySelector("#cel-kel");
// console.log(celToKel.checked);
const kelToCel = document.querySelector("#kel-cel");
// console.log(kelToCel.checked);
const result = document.getElementById("result");


const celsiusToFahrenheit = (degree) => {
  result.textContent = Math.floor(degree * 1.8 + 32) + "º F";
  checkTemperature(degree);
};

const fahrenheitToCelsius = (degree) => {
  result.textContent = Math.floor((degree - 32) * (5/9)) + "º C";
  checkTemperature(Math.floor((degree - 32) * (5/9)));
};

const celsiusToKelvin = (degree) => {
  result.textContent = Math.floor(degree + 273.15) + " K";
  checkTemperature(degree);
};

const kelvinToCelsius = (degree) => {
  result.textContent = Math.floor(degree - 273.15) + "º C";
  checkTemperature(Math.floor(degree - 273.15));
};

const convertTemperature = (input) => {
  if (celToFar.checked) {
    celsiusToFahrenheit(input);
    console.log(celsiusToFahrenheit(input))
  }
  else if (farToCel.checked) {
    fahrenheitToCelsius(input);
    console.log(fahrenheitToCelsius(input));
  }
  else if (celToKel.checked) {
    celsiusToKelvin(input);
    console.log(celsiusToKelvin(input));
  }
  else if (kelToCel.checked) {
    kelvinToCelsius(input);
    console.log(kelvinToCelsius(input));
  };
};

const checkTemperature = (input) => {
  if (input < 10) {
    tempDiv.innerHTML = `<img src="Components/Images/cold.png" alt="cold" width="100px">`;
  }
  else if (input >= 10 && input < 25) {
    tempDiv.innerHTML = `<img src="Components/Images/cool.png" alt="cold" width="100px"></img>`;
  }
  else {
    tempDiv.innerHTML = `<img src="Components/Images/hot.png" alt="cold" width="100px">`
  }
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let temp = Number(temperature.value);
  console.log(temp);
  convertTemperature(temp);
});
