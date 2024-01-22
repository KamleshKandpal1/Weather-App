const apiKey = "8785c205647a0be1e122820fbf1a50f2";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputBox = document.querySelector("input");
const searchBox = document.querySelector(".search");
const weatherIcon = document.querySelector(".weather-img");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".box-middle").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);

    document.querySelector(".temperature").innerHTML =
      Math.floor(data.main.temp) + `°c`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML =
      Math.floor(data.wind.speed) + `km/h`;

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "src/img/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "src/img/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "src/img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "src/img/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "src/img/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "src/img/snow.png";
    }

    document.querySelector(".box-middle").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBox.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
