function celsiusToFahrenheit(celsius) {
  // Check if the input is a number
  if (typeof celsius !== "number" || isNaN(celsius)) {
    return "Please provide a valid number";
  }

  // Convert Celsius to Fahrenheit
  const fahrenheit = (celsius * 9) / 5 + 32;

  return `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
}

// Example usage:
let celsius = 25;
console.log(celsiusToFahrenheit(celsius));

celsius = 0;
console.log(celsiusToFahrenheit(celsius));

celsius = "abc"; // Invalid input
console.log(celsiusToFahrenheit(celsius));




function fahrenheitToCelsius(fahrenheit) {
  // Check if the input is a number
  if (typeof fahrenheit !== "number" || isNaN(fahrenheit)) {
    return "Please provide a valid number";
  }

  // Convert Fahrenheit to Celsius
  const celsius = ((fahrenheit - 32) * 5) / 9;

  return `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C.`;
}

// Example usage:
let fahrenheit = 77;
console.log(fahrenheitToCelsius(fahrenheit));

fahrenheit = 32;
console.log(fahrenheitToCelsius(fahrenheit));

fahrenheit = "abc"; // Invalid input
console.log(fahrenheitToCelsius(fahrenheit));
