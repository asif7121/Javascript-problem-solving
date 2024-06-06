const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
}

const address = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
}

function mergeProp ( obj1, obj2 ) {
    // merge objects using assing method
    // return Object.assign({}, obj1, obj2);

    // merge objects using spread operator
    return { ...obj1, ...obj2 };
}

console.log( mergeProp( person, address ) );