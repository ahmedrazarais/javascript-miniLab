// Import the prompt-sync library for synchronous prompt input
let prompt = require('prompt-sync')();

// Initialize an empty array to store the numbers
let marks_List = [];

// Loop to get input from the user
while (true) {
    let num = parseInt(prompt("Enter a number (enter 0 to exit): "));
    if (num === 0) {
        break;
    }
    if (!isNaN(num)) {
        marks_List.push(num);
    }
}

// Check if the list is not empty
if (marks_List.length !== 0) {
    // Initialize the result variable to store the sum of numbers in the list
    let result = 0;

    // Loop through the list to calculate the sum
    for (let i of marks_List) {
        result += i;
    }

    // Calculate the average
    let average = result / marks_List.length;
    console.log("Average:", average);
} else {
    console.log("List is empty.");
}
