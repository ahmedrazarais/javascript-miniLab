// Find Missing Number: Write a program that takes an array of numbers from 1 to n (inclusive) with one number missing, and returns the missing number.

// Given array of numbers from 1 to n (inclusive) with one number missing
let given_array = [1, 2, 3, 5, 6, 7, 8, 9];

// Calculate the length of the array
let length = given_array.length;

// Calculate the expected sum using the arithmetic series formula
let expected_sum = (length + 1) * (length + 2) / 2;

// Calculate the actual sum of the given array
let actual_sum = 0;
for (let i of given_array) {
    actual_sum += i;
}

// Identify the missing number by subtracting the actual sum from the expected sum
let missing_num = expected_sum - actual_sum;

// Output the missing number
console.log("The missing number is:", missing_num);
