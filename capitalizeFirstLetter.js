//this function capitalize the first letter of all words in a string
function capitalizeFirstLetterOfEachWord(string) {
    return string.split(' ').map(word => {
        return capitalizeFirstLetter(word);
    }).join(' ');
}

//this function capitalize only the first letter of a string
function capitalizeFirstLetter(string) {
    if (string.length === 0) {
        return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}


let sentence = "hello world from javascript";
let capitalizedSentence = capitalizeFirstLetterOfEachWord(sentence);
console.log( capitalizedSentence );

console.log(capitalizeFirstLetter(sentence))
