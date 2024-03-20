

// reverseString 

let prompt = require('prompt-sync')();
while (true){
    let input=prompt("Enter The String to reverse it:").trim();
    if (input.length!==0){
        let reversed=input.split("").reverse().join("");
        console.log(`${input} after reverse order is ${reversed}`)
        break;

    }else{
        console.log("Invalid Input.");
    }
}

