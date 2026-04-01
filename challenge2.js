var weatherForecast = [
 {
  day: "Today",
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
 },
 {
  day: "Saturday",
  temperature: {
    high: 50,
    low: 29
   },
  conditions: "cloudy",
  astronomy: {
    sunrise: "7:44 AM",
    sunset: "5:08 PM"
  }
 },
 {
  day: "Sunday",
  temperature: {
    high: 47,
    low: 35
   },
  conditions: "chance of rain",
  astronomy: {
    sunrise: "7:45 AM",
    sunset: "5:07 PM"
  }
 }
]

// Log today's weather conditions to the console.
console.log(weatherForecast[0].conditions)
// Log Saturday's high temperature to the console.
console.log(weatherForecast[1].temperature.high)
// Log Saturday's sunrise time to the console.
console.log(weatherForecast[1].astronomy.sunrise)
// Log Sunday's conditions to the console.
console.log(weatherForecast[2].conditions)
// Log Sunday's sunset time to the console.
console.log(weatherForecast[2].astronomy.sunset)
// Use string template literals to build few sentences about the weather forecast for Sunday. (Example: "The high on Sunday will be 47 and the low will be 35. We're predicting a chance of rain. The sun will rise at 7:45 AM and set at 5:07 PM.")
console.log(`The high on ${weatherForecast[2].day} will be ${weatherForecast[2].temperature.high} and the low will be ${weatherForecast[2].temperature.low}. We're predicting a ${weatherForecast[2].conditions}. The sun will rise at ${weatherForecast[2].astronomy.sunrise} and set at ${weatherForecast[2].astronomy.sunset}.`)