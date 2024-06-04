function swapVariables (a, b) {
    [a,b]= [b,a]
    return [ a, b ];
}

let x = 4;
let y = 5;
console.log( `Before Swap: x = ${ x } and y = ${ y }` );
[ x, y ] = swapVariables( x, y );
console.log( `After Swap: x = ${ x } and y = ${ y }` );