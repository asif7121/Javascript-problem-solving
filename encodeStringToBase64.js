function encodeStrToBase64 ( str ) {
    const encodedString = Buffer.from( str, 'utf8' ).toString( 'base64' );
    return encodedString;
}

function decodeBase64ToStr ( base64 ) {
    const decodedString = Buffer.from( base64, 'base64' ).toString( 'utf8' );
    return decodedString;
}
console.log( decodeBase64ToStr( "aGVsbG8=" ) );

console.log( encodeStrToBase64( 'hello' ) );


