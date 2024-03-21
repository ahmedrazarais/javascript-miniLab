// Question:
// Write a function called generateFibonacci that takes a number n as input and returns an array containing the first n Fibonacci numbers. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers. For example, if n is 5, the function should return [0, 1, 1, 2, 3]. After writing the generateFibonacci function, test it with different values of n to ensure it produces the correct Fibonacci sequence.

// Function to generate the first n Fibonacci numbers
function generateFibonacci(n) {
    let fibonacciArray = [0, 1]; // Initialize the array with the first two Fibonacci numbers

    // Loop to generate subsequent Fibonacci numbers
    for (let i = 2; i < n; i++) {
        let nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextFibonacci);
    }

    return fibonacciArray;
}

// Test the function with different values of n
let n = 5;
console.log(`Fibonacci sequence for n = ${n}:`, generateFibonacci(n));

n = 10;
console.log(`Fibonacci sequence for n = ${n}:`, generateFibonacci(n));

