// Question:
// Write a function called calculateArea that takes two parameters, length and width, representing the length and width of a rectangle respectively. The function should calculate the area of the rectangle and return the result. Then, write a separate function called calculateVolume that takes three parameters: length, width, and height, representing the length, width, and height of a rectangular prism respectively. This function should calculate the volume of the rectangular prism and return the result.

// After writing both functions, test them by calculating the area and volume for a rectangle with length 5, width 3, and height 2. Print the results to the console. Remember, the formulas for area of a rectangle and volume of a rectangular prism are:

// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    let area = length * width;
    return area;
}

// Function to calculate the volume of a rectangular prism
function calculateVolume(length, width, height) {
    let volume = length * width * height;
    return volume;
}

// Test the functions with given parameters
let areaValue = calculateArea(5, 3);
let volumeValue = calculateVolume(5, 3, 2);

// Print the results to the console
console.log(`The area of the rectangle is ${areaValue}`);
console.log(`The volume of the rectangular prism is ${volumeValue}`);
