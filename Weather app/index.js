
const apikey = "c9bd85365c584128a3a3a4e6a747d124";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C ";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="clouds.png";

    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src="clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="mist.png";
    }

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


