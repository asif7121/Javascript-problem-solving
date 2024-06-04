function findSquareRoot(number) {
  if (typeof number !== "number") {
    return "The input is not a number";
  }
  if (number < 0) {
    return "Square root of negative numbers is not real";
  }
  return Math.sqrt(number);
}

// Example 
let input = 16;
let squareRoot = findSquareRoot(input);
console.log(`The square root of ${input} is ${squareRoot}`);


