const obj = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
}

function loop (object) {
    for ( let key in object ) { 
        console.log(`${key}: ${object[key]}`);
    }
}
loop(obj)