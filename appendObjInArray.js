const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];

const newUser1 = { name: "Bob", age: 35 };
const newUser2 = { name: "Alice", age: 40 };

// Using spread syntax
const updatedUsers = [...users, newUser1, newUser2];

// Using concat()
// const updatedUsers = users.concat(newUser1, newUser2);

console.log(updatedUsers);
