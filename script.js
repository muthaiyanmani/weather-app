/**
 * Weather App
 * Done: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const Full_url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  //CODE GOES HERE
  const weatherPromise = fetch(Full_url);
  return weatherPromise.then((response)=>{
    return response.json()
  })
}

searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
  .then((response)=>{
    showWeatherData(response)
    console.log(response)
  })
  .catch((error)=>{
    console.log("Error:\n",error)
  })

}


showWeatherData = (weatherData) => {
 
  document.getElementById("city-name").innerText=weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main
  document.getElementById("temp").innerText = weatherData.main.temp
  document.getElementById("min-temp").innerText = weatherData.main.temp_min
  document.getElementById("max-temp").innerText = weatherData.main.temp_max
  
}

