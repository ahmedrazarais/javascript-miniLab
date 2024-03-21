// Remove Duplicates:from an array and make a new array with all duplicate elements removed.
//case1 
let array=[1,2,2,3,1,5,4,3,4];
let modified_array=[...new Set(array)]
console.log("The New Array after Modification is:",modified_array)







//case 2
let given_array=[1,2,2,3,1,5,4,3,4];
let new_array=[]
for (i of given_array){
    if (new_array.includes(i)){
        
    }else{
        new_array.push(i);
    }
}
console.log("The New array after remove duplicate elements are ",new_array)
