// email and mobile number validation.
// using prompt sync library to take input 
// Password criteria:
// It checks if the password length is at least 6 characters.
// It checks if the password contains at least one digit, one uppercase letter, one lowercase letter, and one special character.
// If all criteria are met, it prints "Alright Your password is set!!" and "Accessing to system..." to the console, and breaks out of the loop.
// If any criteria are not met, it provides appropriate feedback to the user.


// The prompt-sync library is imported for synchronous prompt input
let prompt = require('prompt-sync')();

console.log("Enter Correct credentials to access the system.");

// initialize varible to false

let valid_Gmail=false;
while (true){
    let gmail=prompt("Enter Your Gmail Address:").trim();
    if (gmail.length!==0){    // checking gmail fiels must not be blank

        if (gmail.includes(".")){   // checking it must contain . symbol

            if (gmail.endsWith("@gmail.com")){    // checking it must ends with @gmail.com
                //if all validation succeed then change traker to true

                console.log("valid Gmail..Now Enter password.");
                valid_Gmail=true;
                break;      // break after valid gmail

            }else{
                console.log("Gmail Must End With @gmail.com");
            }
        }else{       // error message if he didnt complete requirements.
            console.log("You Might Missing . in gmail.");
        }
    }else{
        console.log("Required Information: Please Complete.");
    }

}
if (valid_Gmail) { // Check if valid Gmail is provided
    function isStrongPassword(password) { // Function to check if password is strong
        // Regular expressions for checking password strength criteria
        let numbers = /\d/;
        let upper = /[A-Z]/;
        let lower = /[a-z]/;
        let special_Char = /[^a-zA-Z0-9]/;
        // Check if password meets all criteria
        return password.length >= 6 && numbers.test(password) && upper.test(password) && lower.test(password) && special_Char.test(password);
    }

    while (true) { // Loop to repeatedly prompt for password until a strong password is provided
        let password = prompt("Enter Strong Password:").trim(); // Prompt user for password
        
        if (isStrongPassword(password)) { // Check if password is strong
            console.log("Alright! Your password is set!!");
            console.log("Accessing the system...");
            break; // Break out of the loop if password is strong

        } else { // If password is not strong, provide specific error messages
            if (password.length < 6) {
                console.log("Password must contain at least 6 characters.");
            }
            if (!/\d/.test(password)) {
                console.log("Password must contain at least one number.");
            }
            if (!/[A-Z]/.test(password)) {
                console.log("Password must contain at least one uppercase letter.");
            }
            if (!/[a-z]/.test(password)) {
                console.log("Password must contain at least one lowercase letter.");
            }
            if (!/[^a-zA-Z0-9]/.test(password)) {
                console.log("Password must contain at least one special character.");
            }
        }
    }
}
