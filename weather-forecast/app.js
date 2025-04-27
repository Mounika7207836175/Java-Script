const apiKey = "86b086898d44486d057e44ee6f9461e7";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("ip1");
const searchBtn = document.getElementById("bt1");
const weatherIcon = document.querySelector(".weather-icon");
//inorder to take the input from user
//and pass pass it to the function
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block"; //inorder to display data when we click
    document.querySelector(".error").style.display = "none"; //inorder to hide the error msg
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
// https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=86b086898d44486d057e44ee6f9461e7&units=metric
