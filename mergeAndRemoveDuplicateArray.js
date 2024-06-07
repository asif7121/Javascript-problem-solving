const a1 = [ 1, 2, 3, 4, 5 ]
const a2 = [4,5,6,7,8,9]

function mergeAndRemoveDuplicate ( arr1, arr2 ) {
    let mergedArr = [ ...arr1, ...arr2 ];
    let uniqueArr = [ ...new Set( mergedArr ) ];
    return uniqueArr;
}

console.log(mergeAndRemoveDuplicate(a1,a2))