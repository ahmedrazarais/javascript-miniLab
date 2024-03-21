
// Array Flattening: Write a function that flattens a nested array (i.e., an array of arrays) into a single-level array. For example, given the array [[1, 2], [3, 4], [5]], the function should return [1, 2, 3, 4, 5].
let nested_array=[[1,2,3],[4,5,6],[7,8,9]]
let new_array=[]
for (i of nested_array){
    for (j of i){
        new_array.push(j)
    }
}
console.log("The Final Result Is: ",new_array)