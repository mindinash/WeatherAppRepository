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
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  //let temperature = Math.round(response.data.main.temp);
  //let temperatureElement = document.querySelector("#tempElement");
  //temperatureElement.innerHTML = `Word ${temperature}`;
}

function search(event) {
  event.preventDefault();
  //let cityElement = document.querySelector("#city");
  //let cityInput = document.querySelector("#city-text-input");
  //cityElement.innerHTML = cityInput.value;
  let apiKey = "210d99196a88b9257ed8cb3535a0a0c5";
  let city = document.querySelector("#city-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let inputCity = document.querySelector("#city-form");
inputCity.addEventListener("submit", search);

// change temperature

//function showPosition(position) {
//console.log(position.coords.latitude);
//console.log(position.coords.longitude);
//let lat = position.coords.latitude;
//let lon = position.coords.longitude;
//let units = "metric";
//let apiKey = "210d99196a88b9257ed8cb3535a0a0c5";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
//console.log(apiUrl);
//axios.get(apiUrl).then(dispayWeatherCondition);
//}

//navigator.geolocation.getCurrentPosition(showPosition);
