function getFileExtension ( filename ) {
    return ( /[.]/.exec( filename ) ) ? /[^.]+$/.exec( filename )[ 0 ] : '';
}

console.log(getFileExtension("example.document.txt"));