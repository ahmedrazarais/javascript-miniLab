// Write a function called uniqueOccurrences that takes an array of integers as input and returns true if the number of occurrences of each value in the array is unique, and false otherwise.

// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // Output: true
// console.log(uniqueOccurrences([1, 2])); // Output: false
// console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])); // O


function uniqueOccurrences(array) {
    // Store the occurrences of each element in an object
    const occurrences = {};
    for (let i of array) {
        if (occurrences[i] === undefined) {
            occurrences[i] = 1;
        } else {
            occurrences[i]++;
        }
    }

    // Check if the counts of occurrences are unique
    const occurrenceCounts = Object.values(occurrences);
    const uniqueCounts = new Set(occurrenceCounts);
    return occurrenceCounts.length === uniqueCounts.size;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // Output: true
console.log(uniqueOccurrences([1, 2])); // Output: false
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])); // Output: false
