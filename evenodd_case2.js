
// Question: JavaScript Sum of Positive Even and Odd Numbers

// Write a JavaScript program to find the sum of positive even and positive odd numbers separately in a given list. Ensure your program handles edge cases.


let given_list=[1,-1,3,2,-2,4,5,2];

// initializing two variables by value 0
let sum_even=0;
let sum_odd=0;

// apply loop to get increment in variables
for (i of given_list){
    if (i%2===0 && i>0){    //must be even and greater than 0
        sum_even+=i         //increment the varible
    } else{
        if (i>0){         // if odd and greater than 0     
            sum_odd+=i
        }
    }
}

//printing the result.
console.log("sum Of Even Numbers is:",sum_even)
console.log("sum Of Odd Numbers is:",sum_odd)