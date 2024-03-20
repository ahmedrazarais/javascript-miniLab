// Write a program that takes three sides of a triangle as input and determines if it's an equilateral, isosceles, or scalene triangle.
// The prompt-sync library is imported for synchronous prompt input
let prompt = require('prompt-sync')();

// Declaring variables for sides of the triangle
let first_Side,second_Side,third_Side;

//apllying loop to make sure must enter proper sides of triangle

while(true){
    first_Side=parseFloat(prompt("Enter First Side Of Triangle:"));
    if (!isNaN(first_Side) && first_Side>0){
        console.log()
        break;
    
    }else{
        console.log("Invalid Input Please Write In Digits.")
    }

}
//apllying loop to make sure must enter proper sides of triangle
while(true){
    second_Side=parseFloat(prompt("Enter Second Side Of Triangle:"));
    if (!isNaN(second_Side) && second_Side>0){
        console.log()
        break;
    
    }else{
        console.log("Invalid Input Please Write In Digits.")
    }

}
//apllying loop to make sure must enter proper sides of triangle
while(true){
    third_Side=parseFloat(prompt("Enter Third Side Of Triangle:"));
    if (!isNaN(third_Side) && third_Side>0){
        console.log()
        break;

    
    }else{
        console.log("Invalid Input Please Write In Digits.")
    }

}
// Checking the type of triangle
if (first_Side === second_Side && second_Side === third_Side) {
    console.log("It is an equilateral triangle.");
}else if (first_Side === second_Side || first_Side === third_Side || second_Side === third_Side) {
    console.log("It is an isosceles triangle.");
}else {
    console.log("It is a scalene triangle.");
}