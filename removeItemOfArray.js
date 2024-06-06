
function removeItemFromArray(arr, item) {
  const newArray = arr.filter(function (value) {
    return value !== item;
  });
  return newArray;
}
const array = [ 1, 2, 3, 4, 5, 6, 7 ]
const itemToRemove = 4
const newArr = removeItemFromArray( array, itemToRemove )
console.log(newArr)