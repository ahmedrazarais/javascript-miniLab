// Temperature converter.
// 
// using prompt sync library to take input 
let prompt = require('prompt-sync')();
console.log("\t\tWelcome to Temperature Converter.")

// Outer loop for choice handling
while (true){   //display menu options
    console.log("\t\tTemperature Converter");
    console.log("----------------------");
    console.log("1. Celsius to Kelvin");
    console.log("2. Kelvin to Celsius");
    console.log("3. Celsius to Fahrenheit");
    console.log("4. Fahrenheit To celsius");
    console.log("5. To Exit from program.");
    
    // taking users input choice use trim to remove whitespaces
    let get_Choice=prompt("Please Enter The Choice :").trim();
    console.log()

    // perform operations according to choices
    if (get_Choice==="1"){
        console.log("Celsius To Kelvin Conversion..");
        console.log()
        // inner loop to stuch in choice till that he want to go back
        while (true){
            console.log();
            temp_Input=parseFloat(prompt("Enter Temperature In celsius (Enter 0 to back):"));
            if (temp_Input===0){   // if he want to go backk
                break;

            // if getting valid input converting celsius to kelvin
            }if (!isNaN(temp_Input)){
                let kelvin_temp = (temp_Input + 273.15);
                console.log(`Temperature of celsius ${temp_Input}'C is equivalent to ${kelvin_temp}K`);
                console.log();
                break;   // break after successfuul conversion
            }else{
                console.log()
                console.log("Getting Invalid Temperature Value.Please Enter In Number.");
            }
        }


    }else if(get_Choice==="2"){
        console.log(" Kelvin  to Celsius Conversion..");
        console.log();
          // inner loop to stuch in choice till that he want to go back
        while (true){
            console.log()
            temp_Input=parseFloat(prompt("Enter Temperature In Kelvin (Enter 0 to back):"));
            if (temp_Input===0){
                break;    //if he want to go back

             // if getting valid input converting  kelvin-celsius    
            }if (!isNaN(temp_Input)){
                let celsius_temp = ( temp_Input - 273.15);
                console.log(`Temperature of celsius ${temp_Input}K is equivalent to ${celsius_temp}'c`);
                console.log();
                break;        // break after successfuul conversion
            }else{
                console.log();
                console.log("Getting Invalid Temperature Value.Please Enter In Number.");
            }
        }
        

    }else if (get_Choice==="3"){
        console.log("Celsius to Farhenheit Conversion..");
        console.log();
        while (true){
            console.log()
            temp_Input=parseFloat(prompt("Enter Temperature In  Celsius (Enter 0 to back):"));
            if (temp_Input===0){
                break;                    //if he want to go back

             // if getting valid input converting  celsius-farhenheit
            }if (!isNaN(temp_Input)){
                let farhenheit = ( (temp_Input * 9/5) + 32);
                console.log(`Temperature of celsius ${temp_Input} 'C is equivalent to ${farhenheit} F`);
                console.log();
                break;             // break after successfuul conversion
            }else{
                console.log();
                console.log("Getting Invalid Temperature Value.Please Enter In Number.");
            }
        }

    }else if(get_Choice==="4"){
        console.log(" Farhenheit to Celsius Conversion..");
        console.log();
        while (true){
            console.log()
            temp_Input=parseFloat(prompt("Enter Temperature In Farhenheit (Enter 0 to back):"));
            if (temp_Input===0){
                break;                   //if he want to go back

             // if getting valid input converting  farhenheit
            }if (!isNaN(temp_Input)){
                let celsius_temp = ( (temp_Input - 32) * 5/9);
                console.log(`Temperature of farhenheit ${temp_Input} F is equivalent to ${celsius_temp}'c`);
                console.log();
                break;                // break after successfuul conversion
            }else{
                console.log()
                console.log("Getting Invalid Temperature Value.Please Enter In Number.");
            }
        }

    }else if(get_Choice==="5"){
        console.log();
        console.log("Thanks For Using Our System.");
        break;
    }else{
        console.log()
        console.log("Invalid Choice.Please Select From Given Choice.")
    }

}