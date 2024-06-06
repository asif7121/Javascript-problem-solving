const fruits = ["apple", "banana", "orange"];
const value = "apple";

if (fruits.some((fruit) => fruit === value)) {
  console.log(`The array contains ${value}.`);
} else {
  console.log(`The array does not contain ${value}.`);
}
