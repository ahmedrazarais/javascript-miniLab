
// The prompt-sync library is imported for synchronous prompt input
let prompt = require('prompt-sync')();







// Write a program that determines if a given year is a leap year.

//use loop to stuck him to make sure correct input get
while (true){
    let year = parseInt(prompt("Enter The Year To Check Leap Year:"));

// checking must be positive number input
if (!isNaN(year) && (year)>0){
    //conditions for leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap Year.");
        break;   // if leap year found.break 
    } else {
        console.log("Its Not A leap Year.");
    }

}else{     // if not get correct output.
    console.log("Invalid Year Input.Please Enter Correct one.")
    console.log();
}
}




// // Write a program that determines if a given string is a palindrome.

//use loop to stuck him to make sure correct input get
while (true){
    let string=prompt("Enter The string To Check Palindrome:");

//checking must be something in input
if (string.length!==0){
    //condition for palindrome
    let reversed_string=string.split("").reverse().join("");
if (string===reversed_string){
    console.log("Getting Palindrome");
    break;  // break after getting palindrome.

}else{
    console.log('Not a palindrome');
}

}else{    // if get null input.
    console.log("Enter Something To Check..");
    console.log();
}

}
