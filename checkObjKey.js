const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
};

function hasKey ( obj, key ) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
console.log(hasKey(person, 'name'))