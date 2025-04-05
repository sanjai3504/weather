const apiKey = "YOUR_API_KEY"; // 🔑 Replace with your actual OpenWeatherMap API key



async function getWeather() {

  const cityInput = document.getElementById("cityInput");

  const weatherResult = document.getElementById("weatherResult");

  const city = cityInput.value.trim();



  if (!city) {

    alert("Please enter a city name");

    return;

  }



  const url = https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric;



  try {

    const response = await fetch(url);



    if (!response.ok) {

      throw new Error(HTTP error! Status: ${response.status});

    }



    const data = await response.json();



    if (data.cod !== 200) {

      weatherResult.innerHTML = <p>City not found. Please try again.</p>;

      return;

    }



    // Display the weather info

    weatherResult.innerHTML = `

      <h2>${data.name}, ${data.sys.country}</h2>

      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>

      <p><strong>Weather:</strong> ${data.weather[0].main} - ${data.weather[0].description}</p>

      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>

      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>

    `;

  } catch (error) {

    console.error("Error fetching weather:", error);

    weatherResult.innerHTML = <p>Something went wrong. Please check your connection or API key.</p>;

  }

} 