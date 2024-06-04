function kilometersToMiles(kilometers) {
  // Check if the input is a number
  if (typeof kilometers !== "number" || isNaN(kilometers)) {
    return "Please provide a valid number";
  }

  // Conversion factor
  const conversionFactor = 0.621371;

  // Convert kilometers to miles
  const miles = kilometers * conversionFactor;

  return `${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`;
}

// Example usage:
let kilometers = 5;
console.log(kilometersToMiles(kilometers));

kilometers = 10;
console.log(kilometersToMiles(kilometers));

kilometers = "abc"; // Invalid input
console.log(kilometersToMiles(kilometers));
