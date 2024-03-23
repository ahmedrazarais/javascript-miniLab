//making some bank classes
// Importing the prompt-sync library for synchronous prompt input
let prompt = require('prompt-sync')();

// Class representing a Bank System
class BankSystem {
    constructor() {
        // Initialize attributes for account
        this.pin = 0; // Initialize PIN to default value
        this.balance = 0; // Initialize account balance to zero
        this.depositmoney = 0; // Initialize deposited money to zero
        this.amountwithdraw = 0; // Initialize withdraw money to zero

    }

    // Method to set the PIN for the account
    set_Pin() {
        console.log("Here You can set your PIN.");
        while (true) {
            let pin = prompt("Enter Your PIN (Must Be Four Digits): ").trim();
            let digits = /^\d+$/; // Regular expression to match digits only
            // Validate the PIN format..
            if (pin.length === 4 && digits.test(pin)) {
                console.log(`Congratulations Your PIN Successfully set to ${pin}`);
                this.pin = pin; // Set the PIN
                return pin; // Return the PIN
            } else {
                console.log("Invalid PIN. Must Be a 4 Digit Value like (1234), (4567).");
            }
        }
    }

    // Method to check the account balance
    check_balance() {
        console.log("Here You can Check Your Account Balance.");
        // Check if the balance is zero
        if (this.balance === 0) {
            console.log("Your Account has no balance at this moment.");
        } else {
            console.log(`Total Balance: ${this.balance} PKR.`);
        }
    }

    // Method to deposit money into the account
    deposit_Money() {
        console.log("Here You can Deposit Money.");
        while (true) {
            let money = parseFloat(prompt("Enter How much money You want to deposit: "));
            // Validate the input for deposit amount
            if (!isNaN(money) && money > 0) {
                console.log(`Congratulations! You Deposited ${money} PKR.`);
                console.log()
                this.depositmoney += money; // Update deposited money
                this.balance += money; // Update account balance
                return; // Exit the loop
            } else {
                console.log("Please Enter a valid amount in digits. Must be greater than 0.");
                console.log()
            }
        }
    }

    // Method to withdraw money from the account
    withdraw_Money() {
        console.log("Here You can withdraw Money from your account.");
        // Check if the balance is zero
        if (this.balance === 0) {
            console.log("Your Account Is empty. You can't withdraw at the moment.");
        } else {
            while (true) {
                let money = parseFloat(prompt("Enter How much money You want to Withdraw: "));
                // Validate the input for withdrawal amount
                if (!isNaN(money) && money > 0) {
                    if (this.balance < money) {
                        console.log("Sorry! You don't have enough balance to withdraw that amount.");
                        console.log()
                    } else {
                        this.balance -= money; // Deduct withdrawal amount from balance
                        console.log(`Congratulations! You withdrew ${money} PKR.`);
                        console.log(`Your account balance after withdrawal is ${this.balance} PKR.`);
                        console.log()
                        this.amountwithdraw=money
                        return; // Exit the loop
                    }
                } else {
                    console.log("Please Enter a valid amount in digits. Must be greater than 0.");
                    console.log()
                }
            }
        }
    }

    // Method to view account details
    view_account_details() {
        console.log("\t\tAccount Details");
        console.log()
        console.log(`\tAccount PIN : ${this.pin}`);
        console.log(`\tAccount Balance : ${this.balance} PKR.`);
        console.log(`\tAmount Deposited : ${this.depositmoney} PKR.`);
        console.log(`\tAmount Withdraw : ${this.amountwithdraw} PKR.`);
        console.log()
        console.log()
    }

    // Main program to interact with the user
    main_program() {
        console.log("\t\tWelcome To Bank Management System.");
        while (true) {
            // Display menu options
            console.log("\t1. Set Your Account PIN.");
            console.log("\t2. Deposit Money into Account.");
            console.log("\t3. Withdraw Money from Account.");
            console.log("\t4. Check Your Account Details.");
            console.log("\t5. Exit From System.");
            console.log();

            // Prompt user for choice
            let get_Choice = prompt("Enter Your Desired Choice: ").trim();

            // Handle user choice
            if (get_Choice === "1") {
                this.set_Pin();
            } else if (get_Choice === "2") {
                this.deposit_Money();
            } else if (get_Choice === "3") {
                this.withdraw_Money();
            } else if (get_Choice === "4") {
                this.view_account_details();
            } else if (get_Choice === "5") {
                console.log("Platform is Exiting...");
                console.log();
                return;
            } else {
                console.log("Invalid Option. Please select from the given choices.");
                console.log();
            }
        }
    }
}

// Create an instance of BankSystem class
let bank_system = new BankSystem();
// Start the main program
bank_system.main_program();
