// Largest Number in Array: Write a function that takes an array of numbers as input and returns the largest number in the array.

//case 1
// let given_array=[1,22,3,4,555,6,7,8];
// let maximum_number=Math.max(...given_array)
// console.log(maximum_number)


//case2 

let numbers_array = [1, 22, 3, 4, 555, 6, 7, 8];
let initial_value = 0;

for (let i of numbers_array) {
    if (i > initial_value) {
        initial_value = i;
    }
}

console.log("Maximum value:", initial_value); // Output: Maximum value: 555

