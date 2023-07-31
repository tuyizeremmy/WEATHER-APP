const apikey="ab9020b5dea7749b4aa1adfe1774e62f";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


    async function checkWeather(location){
        const response = await fetch(apiurl + location + `&appid=${apikey}`);
       
        if(response.status == 404){
          document.querySelector(".notification").style.display = "block";
          document.querySelector(".weather").style.display = "none";

        }else{
            var data = await response.json();

document.querySelector(".temperature-value").innerHTML = Math.round(data.main.temp) + "◦c";
document.querySelector(".location").innerHTML = data.name;
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


if(data.weather[0].main=="Clouds"){
weatherIcon.src ="icons/clouds.png";
}
else if(data.weather[0].main=="Clear"){
weatherIcon.src ="icons/clear.png";
}
else if(data.weather[0].main=="Rain"){
weatherIcon.src ="icons/rain.png";
}
else if(data.weather[0].main=="Drizzle"){
weatherIcon.src ="icons/drizzle.png";
}
else if(data.weather[0].main=="mist"){
weatherIcon.src ="icons/mist.png";
}
document.querySelector(".weather").style.display="block";
document.querySelector(".notification").Style.display = "block";


        }
        
    }

    searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
