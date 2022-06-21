let weather = {
  apiKey: "409ffa1570ea964ed222806d5eff9464",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);

    document.querySelector(".city").innerHTML = `Weather in ${name}`;
    document.querySelector(".icons").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = `${temp}°C`;
    document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerHTML = `Wind Speed: ${speed} m/s`;
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
  },

  search: function () {
    this.fetchWeather(document.querySelector(".serachbar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search button")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      weather.search();
    }
  });

weather.fetchWeather("Bengaluru");
