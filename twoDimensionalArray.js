function createTwoDimensionalArray ( rows, cols, defaultValue = null ) {
    let array = [];
    for ( let i = 0; i < rows; i++ ) { 
        let row = [];
        for ( let j = 0; j < cols; j++ ) { 
            row.push( defaultValue );
        }
        array.push( row );
    }
    return array;
}


let twoDArray = createTwoDimensionalArray(4, 5, 0);
console.log(twoDArray);