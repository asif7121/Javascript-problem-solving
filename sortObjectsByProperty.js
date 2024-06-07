

function sortObjectsByProperty ( objArray, property, order = 'asc' ) {
    if ( !objArray || !objArray.length ) return [];
    if (!property) return objArray;
     const sortOrder = order === "asc" ? 1 : -1;

     const sortedObject = objArray.sort((a, b) => {
       if (a[property] < b[property]) {
         return -1 * sortOrder;
       } else if (a[property] > b[property]) {
         return 1 * sortOrder;
       } else {
         return 0;
         }
        });
        return sortedObject
}

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 }
];

// Sort by age in ascending order (default)
const sortedByAgeAsc = sortObjectsByProperty(users, 'age');
console.log(sortedByAgeAsc);

// Sort by age in descending order
const sortedByAgeDesc = sortObjectsByProperty(users, 'age', 'desc');
console.log(sortedByAgeDesc);

// Sort by name in ascending order (default)
const sortedByNameAsc = sortObjectsByProperty(users, 'name');
console.log(sortedByNameAsc);
