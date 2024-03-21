
// Array Intersection: Write a program that takes two arrays as input and returns a new array containing only the elements that are present in both arrays.

// Define the first array
let firstArray = [1, 2, 3, 4, 5, 7, 8];

// Define the second array
let secondArray = [11, 2, 32, 3, 7, 4];

// Initialize an empty array to store common elements
let newArray = [];

// Loop through each element of the first array
for (let i of firstArray) {
    // Check if the current element exists in the second array
    if (secondArray.includes(i)) {
        // If it does, add the element to the newArray
        newArray.push(i);
    }
}

// Check if common elements were found
if (newArray.length >= 1) {
    // If common elements exist, print them
    console.log("The common elements of both arrays are:", newArray);
} else {
    // If no common elements were found, print a message
    console.log("No common elements found.");
}
