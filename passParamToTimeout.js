function setTimeoutWithParam ( callback, delay, ...args ) {
    return setTimeout( () => {
        callback(...args)
    },delay)
}

function greet ( name ) {
    console.log(`Hello, ${name}!`);
}

setTimeoutWithParam(greet,2000,"Asif")
