const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

function countKeys(obj) {
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

console.log(countKeys(person)); 
