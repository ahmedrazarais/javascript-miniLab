// Merge Arrays: Write a program that merges two sorted arrays into a single sorted array.



//case 1 
const first_array_1=[77,21,3 ,4];
const second_array_1=[21,44,33];
// Sort the arrays in ascending order with a comparison function
first_array_1.sort((a, b) => a - b)
second_array_1.sort((a, b) => a - b)
final_array=first_array_1.concat(second_array_1)
final_array.sort((a, b) => a - b)
console.log("Final Merged Sorted Array is",final_array)



///case 2


const first_array = [77, 21, 3, 4];
const second_array = [21, 44, 33];

// Sort the arrays in ascending order with a comparison function
first_array.sort((a, b) => a - b);
second_array.sort((a, b) => a - b);

let merge_array = [];
let i = 0;
let j = 0;

// Merge the arrays while keeping them sorted
while (i < first_array.length && j < second_array.length) {
    if (first_array[i] <= second_array[j]) {
        merge_array.push(first_array[i]);
        i++;
    } else {
        merge_array.push(second_array[j]);
        j++;
    }
}

// Add remaining elements from first_array, if any
while (i < first_array.length) {
    merge_array.push(first_array[i]);
    i++;
}

// Add remaining elements from second_array, if any
while (j < second_array.length) {
    merge_array.push(second_array[j]);
    j++;
}

console.log("Final Merged Sorted Array is", merge_array);