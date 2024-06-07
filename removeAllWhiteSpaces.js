function removeAllWhiteSpaces ( text ) {
    return text.replace(/\s+/g, '');
}

console.log(removeAllWhiteSpaces('  hello my fellow co-worker'))