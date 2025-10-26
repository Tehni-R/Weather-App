 const APIkey = "057726f91b7af9aafad9e27d2ea03b20"

function apidata(cityName){
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`

fetch(url)
 .then(res => res.json())
 .then(res => {
console.log (res);

 var cityname=document.getElementById("cityName")

        let tempC = (res.main.temp - 273.15).toFixed(2);
        let feelsLikeC = (res.main.feels_like - 273.15).toFixed(2);
         
 cityname.innerHTML=`<div style="background: rgba(0,0,0,0.4); color: white; padding: 15px; border-radius: 10px;">
                    <h2>${res.name}, ${res.sys.country}</h2>
                    <p>🌡️ Temperature: ${tempC} °C</p>
                    <p>🍃 Feels Like: ${feelsLikeC} </p>
                    <p>💧 Humidity: ${res.main.humidity}%</p>
                    <p>☁️ Condition: ${res.weather[0].description}</p>
            </div>`

})}

function getcity(){
    var city=document.getElementById('city').value 
    apidata(city)
}