// Array Partitioning: Write a program that partitions an array into two subarrays, one containing all the even numbers and the other containing all the odd numbers, while maintaining the original order of elements.

// Define the given array
let given_array = [1, 3, 2, 5, 5, 8, 10];

// Initialize arrays to store even and odd numbers
let odd = [];
let even = [];

// Loop through each element of the given array
for (let i of given_array) {
    // Check if the current element is even
    if (i % 2 === 0) {
        // If it's even, add it to the even array
        even.push(i);
    } else {
        // If it's odd, add it to the odd array
        odd.push(i);
    }
}

// Print the arrays containing even and odd numbers
console.log("Even numbers:", even);
console.log("Odd numbers:", odd);
