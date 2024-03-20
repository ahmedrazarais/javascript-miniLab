
// Write a program that counts the number of vowels in a given string using a loop.

let prompt = require('prompt-sync')();

while (true) {
    let string = prompt("Enter The String To Check Vowels: ");
    if (string.length !== 0) {
        let count = 0;
        for (let i of string) {
            if (i === "a" || i === "e" || i === "o" || i === "u" || i === "i" || 
                i === "A" || i === "E" || i === "O" || i === "U" || i === "I") {
                count += 1;
            }
        }
        console.log(`Total Vowels in "${string}" are ${count}`);
        break;
    } else {
        console.log("Please Enter a valid String.");
        console.log();
    }
}