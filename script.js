const api= "60f3f588afb31641da1931fa1b58d228" ;

async function getWeather(){
    const city = document.getElementById("city").value;
    if(!city) return alert("enter a city!");

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if(data.cod !== 200){
        alert("city not found!");
        return;
    }

    document.getElementById("cityname").innerText = data.name;
    document.getElementById("temp").innerText = `Temp : ${Math.round(data.main.temp)} °C`
    document.getElementById("description").innerText = data.weather[0].description;
    document.getElementById("feels_like").innerText = `Feels-like : ${data.main.feels_like} °C`;
    document.getElementById("wind_speed").innerText = `wind-speed : ${data.wind.speed}`;
    updateBackgorund(data.weather[0].main);
}

function updateBackgorund(weather){
    document.body.className = "";

  if (weather.includes("Clear")) {
    document.body.classList.add("sunny");
  }
  else if (weather.includes("Rain")) {
    document.body.classList.add("rainy");
  }
  else if (weather.includes("Snow")) {
    document.body.classList.add("snowy");
  }
  else if (weather.includes("Clouds")) {
    document.body.classList.add("cloudy");
  }
  else {
    document.body.classList.add("sunny"); // default
  }
}
