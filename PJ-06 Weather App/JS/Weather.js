const apiKey= "Enter your API";
const apiURL= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchInt=document.querySelector(".search input");
let searchBtn= document.querySelector(".search button");
let imageBrowse=document.querySelector(".weather-icon");



async function checkWeather(city){
    const response= await fetch(apiURL + city + `&appid=${apiKey}`);
if (city==""){
    alert("Please enter city name!"); 
}

else if (response.status==404){
    alert("Invalid city name, Try again!");
}
else {

let data = await response.json();

document.querySelector(".city").innerHTML=data.name || "Enter City Name";
document.querySelector(".temp").innerHTML=Math.round (data.main.temp) + "°C" ;
document.querySelector(".humidity").innerHTML=data.main.humidity + "%" ?? "0";
document.querySelector(".wind").innerHTML=data.wind.speed + "km/h" ?? "0";


if (data.weather[0].main == "Clouds")
    {  
     imageBrowse.src="/Images/clouds.png";
    }
    else if (data.weather[0].main == "Rain")
        {
imageBrowse.src="/Images/rain.png";
    }
     else if (data.weather[0].main == "Clear")
        {
imageBrowse.src="/Images/clear.png";
    }
     else if (data.weather[0].main == "Drizzle")
        {
imageBrowse.src="/Images/drizzle.png";
    }
       else if (data.weather[0].main == "Snow")
        {
imageBrowse.src="/Images/snow.png";
    }
       else if (data.weather[0].main == "Mist")
        {
imageBrowse.src="/Images/mist.png";
    }

}

}
searchBtn.addEventListener('click',()=>{
checkWeather(searchInt.value);
})

  
