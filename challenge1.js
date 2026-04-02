var todaysWeather = {
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
}

// Log today's high temperature to the console.
console.log(todaysWeather.temperature.high)
// Log today's low temperature to the console.
console.log(todaysWeather.temperature.low)
// Log today's conditions to the console.
console.log(todaysWeather.conditions)
// Log today's sunrise time to the console.
console.log(todaysWeather.astronomy.sunrise)
// Use string template literals to create a more detailed description of today's weather.
console.log(`Today is ${todaysWeather.temperature.high} degree F and ${todaysWeather.conditions}, the sun rises at ${todaysWeather.astronomy.sunrise}`)