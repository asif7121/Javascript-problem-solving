const arr = [ 1, 2, 3, 4, 5, 6, ]
const num = 123;
// console.log( Array.isArray( arr ) )

// console.log( arr instanceof Array )

function isArray ( array ) {
    return Object.prototype.toString.call( array ) === '[object Array]'
}
console.log(isArray(arr))
console.log(isArray(num))
