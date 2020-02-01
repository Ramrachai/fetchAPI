console.log("hello api");

const weatherApi = function(location) {
  const key = "f72a35a09fffc9b1a262661c629fba16";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${key}&units=metric`;

  let city = document.querySelector(".city");
  let country = document.querySelector(".country");
  let long = document.querySelector(".long");
  let lat = document.querySelector(".lat");
  let temp = document.querySelector(".temp");
  let feel = document.querySelector(".feel");
  let max_temp = document.querySelector(".max_temp");
  let min_temp = document.querySelector(".min_temp");
  let pressure = document.querySelector(".pressure");
  let humid = document.querySelector(".humid");
  let wind = document.querySelector(".wind");
  let sunrise = document.querySelector(".sunrise");
  let sunset = document.querySelector(".sunset");
  let timeStr = document.querySelector(".time");
  let dateStr = document.querySelector(".date");

  let date = new Date();
  let timeValue = date.toLocaleTimeString();
  let dateValue = date.toLocaleDateString();
  timeStr.textContent = timeValue;
  dateStr.textContent = dateValue;
  const apiData = fetch(url)
    .then(result => result.json())
    .then(data => {
      console.log("data received");
      console.log(data);
      city.textContent = data.name;
      long.textContent = data.coord.lon;
      lat.textContent = data.coord.lat;
      temp.textContent = data.main.temp;
      feel.textContent = data.main.feels_like;
      max_temp.textContent = data.main.temp_max;
      min_temp.textContent = data.main.temp_min;
      pressure.textContent = data.main.pressure;
      humid.textContent = data.main.humidity;
      wind.textContent = data.wind.speed;
      country.textContent = data.sys.country;
      sunrise.textContent = data.sys.sunrise;
      sunset.textContent = data.sys.sunset;
    });

  return apiData;
};

weatherApi("dhaka");
