//Displays the Day and Time

"use strict";

let now = new Date();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let day = now.getDay();

date.innerHTML = `${weekdays[day]} ${hours}:${minutes}`;

//change city name

function displayWeatherCondition(response) {
  try {
    console.log(response.data);
    document.querySelector("#description").innerHTML =
      response.data.weather[0].description;
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document
      .querySelector("#icon")
      .setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );

    celsiusTemperature = response.data.main.temp;
  } catch (error) {
    console.error(error);
  }
}

function search(city) {
  let apiKey = "210d99196a88b9257ed8cb3535a0a0c5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayFahrenheitTemperture(event) {
  event.preventDefault();
  //alert("Link Clicked");
  let temperatureElement = document.querySelector("#temperature");
  let fahrenheitTemperture = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperture);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperture);

search("New Orleans");
