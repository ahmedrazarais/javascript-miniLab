// Make a program to perform currency exchange


// using prompt sync library to take input 
let prompt = require('prompt-sync')();

console.log("\t\tWelcome In Currency Converter");
// Using While loop to get him stuck in program
while (true){
    console.log("a. Convert Rupees To Dollar\nb. Convert Rupees To Pounds\nc. Convert Rupees To Riyal\nd. To Exit:exit from Program.");
    console.log()

    // General choice input from user to perform operations lowerrcase and trim to avoid conflicts
    let choice_input=prompt("Enter Your Preferred Choice:").toLowerCase().trim();
    
    // conversion rupees to dollar
    if (choice_input==="a"){
        console.log();
        console.log("Rupees To Dollar Conversion..");
        let price_input=parseFloat(prompt("Enter Price In Rupees to convert into Dollar:"));
        
        // condition to work if only positive number
        if (price_input>0 && (!isNaN(price_input))){
            let exchange_rate_usd = 0.0036; // Assuming 1 USD = 274 PKR
            // convert pkr into dollar
            let amount_in_usd = price_input * exchange_rate_usd;
            console.log(`Equivalent amount in Dollar: $${amount_in_usd}`);
            console.log()
        // if not getting positive number in input.
        }else{
            console.log("Invalid Price. Please Enter Correct Price.");
            console.log();
        }

              
    // conversion rupees to pounds
    }else if (choice_input==="b"){
        console.log("Rupees To Pounds Conversion..");

        let price_input=parseFloat(prompt("Enter Price In Rupees to convert into pounds:"));

         // condition to work if only positive number

        if (price_input>0 && (!isNaN(price_input))){
            let  exchangeRate_pounds = 0.0028;
            // Convert Rupees to Pounds
            let price_in_pounds = price_input * exchangeRate_pounds;
            console.log(`Equivalent amount in Pounds: ${price_in_pounds} pounds.`)
            console.log();
        // if not getting positive number in input.
        }else{
            console.log();
            console.log("Invalid Price. Please Enter Correct Price.");
            console.log();

        }
       
        
    // conversion ruppes to riyal
    }else if (choice_input==="c"){
        console.log("Rupees To Riyal Conversion..");

        let price_input=parseFloat(prompt("Enter Price In Rupees to convert into riyal:"));
        
         // condition to work if  only positive number
        if (price_input>0 && (!isNaN(price_input))){
              // Assuming the exchange rate is 1 PKR = 0.013
            let  exchangeRate_riyal = 0.013;
        // Convert Rupees to riyal
            let price_in_riyal = price_input * exchangeRate_riyal;
            console.log();
            console.log(`Equivalent amount in Riyal: ${price_in_riyal} riyal`);
            console.log();

        // // if not getting positive number in input.
        }else{
            console.log()
            console.log("Invalid Price. Please Enter Correct Price.");
            console.log();

        }
      
      

       
        

    // If he want to exit the system than break
    }else if (choice_input==="d"){
        console.log()
        console.log("Thank You For Using Our Services\nGood BYe!!");
        break;
    // for invalid choice print error message
    }else{
        console.log();
        console.log("Invalid Choice.Please Select From Given Choice.");
        console.log();
    }
}
