
function sortWordsAlphabetically(words) {
  const sort = words.sort();
  return sort;
}

let words = ["banana", "apple", "orange", "mango", "grape"];
let sortedWords = sortWordsAlphabetically(words);
console.log(sortedWords);