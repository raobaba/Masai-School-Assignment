// Custom implementation of the map function
function customMap(array, callback) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(callback(array[i], i, array));
    }
    return mappedArray;
}

// Example usage of custom map function
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = customMap(numbers, num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
