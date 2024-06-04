function calculator(num1, num2, operator) {
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    return "Invalid input";
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      result = "Invalid operator";
  }

  return result;
}

const calc = calculator(5,2,'%')
console.log(calc);