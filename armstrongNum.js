function isArmstrongNumber(num) {
  // Convert the number to a string and get its length
  const numStr = num.toString();
  const numLength = numStr.length;

  // Initialize a variable to store the sum of digit powers
  let sum = 0;

  // Iterate over each digit in the number
  for (let i = 0; i < numLength; i++) {
    // Get the current digit
    const digit = parseInt(numStr[i]);

    // Raise the digit to the power of the number's length and add it to the sum
    sum += Math.pow(digit, numLength);
  }

  // Check if the sum of digit powers is equal to the original number
  return sum === num;
}

console.log(isArmstrongNumber(153))