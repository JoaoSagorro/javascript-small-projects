const temperature = document.querySelector("#temperature");
// console.log(temperature);

const submit = document.querySelector("#button");
const celToFar = document.querySelector("#cel-far");
// console.log(celToFar.checked);
const farToCel = document.querySelector("#far-cel");
// console.log(farToCel.checked);
const celToKel = document.querySelector("#cel-kel");
// console.log(celToKel.checked);
const kelToCel = document.querySelector("#kel-cel");
// console.log(kelToCel.checked);


const celsiusToFahrenheit = (degree) => {
  return degree * 1.8 + 32;
};

const fahrenheitToCelsius = (degree) => {
  return (degree - 32) * (5/9);
};

const celsiusToKelvin = (degree) => {
  return degree + 273.15;
};

const kelvinToCelsius = (degree) => {
  return degree - 273.15;
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
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let temp = Number(temperature.value);
  console.log(temp);
  convertTemperature(temp);
});
