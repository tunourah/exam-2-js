//fetch wether api 
const weatherApi = {
    key: "b3d9f8d0e8c1d3c4e6b9d7f1c3d4c4d5",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
    }
    fetchWeather = (city) => {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(response => response.json())
    .then(result => {
    console.log(result);
    showWeather(result);
    }
    )
    }
    //show weather  
    showWeather = (weather) => {
    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let temperature = document.getElementById('temp');
    }
    