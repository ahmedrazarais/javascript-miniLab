// "Filtering and Summing Positive Even and Odd Numbers"
// task:Utilize the reduce function to partition a given list into separate arrays containing positive even and positive odd numbers, while calculating their respective sums.

let given_List=[];

// initialzing two empty list to get values of even and odd positive numbers
let odd_numbers=[];         
let even_numbers=[];

// Applying loop to append values in odd and even list according to condition

for (i of given_List){
    if (i%2===0 && i>0){   // Ensure i is even and positive
        even_numbers.push(i);

    } else{
        if (i>0){     // Add positive odd numbers to odd_numbers list
            odd_numbers.push(i)
        }
    }
}


// calculating sum using reduce function.

let sum_even=even_numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let sum_odd=odd_numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// printing list of even and odd numbers and sum respectively.
console.log("List Of Even Numbers:", even_numbers);
console.log("List Of odd Numbers:", odd_numbers);
console.log("Sum Of Even Numbers:",sum_even)
console.log("Sum Of Odd Numbers:",sum_odd)
