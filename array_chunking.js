// // Array Chunking: Write a program that splits an array into smaller arrays of a specified size. For example, given the array [1, 2, 3, 4, 5] and the chunk size as 2, the function should return [[1, 2], [3, 4], [5]].
// If the list is [1, 2, 3, 4, 5, 6, 7, 8] and the chunk size is 3, the output would be:

// [[1, 2, 3], [4, 5, 6], [7, 8]]

let given_array = [1, 2, 3, 4, 5, 6, 7, 8];
let new_array = [];     // Initialize an empty array to store the chunks
let counter = 3;        // Define the size of each chunk
let index = 0;          // Initialize an index to keep track of the starting point of each chunk

// Loop until the index is less than the length of the given_array
while (index < given_array.length) {
    // Slice a chunk of the given_array starting from 'index' to 'index + counter'
    let chunk = given_array.slice(index, index + counter);
    
    // Push the sliced chunk into the new_array
    new_array.push(chunk);
    
    // Move the index to the next starting point for the next chunk
    index += counter;
}

// Print the resulting array of chunks
console.log(new_array);


