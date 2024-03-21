// Array Rotation: Write a  that rotates an array to the right by a given number of steps. For example, given the array [1, 2, 3, 4, 5] and the number of steps as 2, the answer should [4, 5, 1, 2, 3].

let given_array = [1, 2, 3, 4, 5];
let step_count = 2;

// Calculate the actual number of steps by taking modulo to handle cases where step_count > array length
let actual_steps = step_count % given_array.length;

// No need to calculate a negative modification
let splice_array = given_array.slice(-actual_steps);
let remaining_array = given_array.slice(0, -actual_steps);

// Concatenate the two parts to get the rotated array
let final_array = splice_array.concat(remaining_array);

console.log(final_array);
