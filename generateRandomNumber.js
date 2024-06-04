function generateNumber(min, max) {
  if (
    typeof min !== "number" ||
    typeof max !== "number" ||
    isNaN(min) ||
    isNaN(max)
  ) {
    return `Please provide a valid number for the range`;
  }
  // Ensure min is less than max
  if (min > max) {
    [min, max] = [max, min];
  }
  // Generate a random integer between min and max
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}
const r1 = generateNumber(5, 15);
const r2 = generateNumber(10, 1); // Should handle the range inversion
console.log(r1);
console.log(r2);
