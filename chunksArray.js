function chunkArray(array, chunkSize) {
  if (chunkSize <= 0) {
      return "chunkSize must be a positive integer";
  }
  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    let chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let chunkSize = 3;
let chunks = chunkArray(array, chunkSize);
console.log(chunks);
