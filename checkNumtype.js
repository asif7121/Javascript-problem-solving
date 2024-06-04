function checkNum ( num ) {
    if ( typeof num !== 'number' ) {
        return `Please prove a valid number!`
    }
    if ( num < 0 ) {
        return `${ num } is a negative number`
    } else if ( num > 0 ) {
        return `${num} is positive number`
    } else {
        return `You've entered number zero`
    }
}

console.log( checkNum( 9 ) );
console.log( checkNum( -9 ) );
console.log( checkNum( 0 ) );