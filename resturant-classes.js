//Making resturant classes
// The prompt-sync library is imported for synchronous prompt input
let prompt = require('prompt-sync')();


class resturant_System{
    constructor(){    // set menulist attribute insiide constructor.
        this.menu_list= [{"key":"1","dish":"fries","quantity":5,"price":1000},
                        {"key":"2","dish":"burger","quantity":5,"price":1200},
                        {"key":"3","dish":"pizza","quantity":3,"price":1500},
                        {"key":"4","dish":"wraps","quantity":5,"price":800}]
        

    }

    

    show_Menu(){
            console.log()
            console.log("\tWelcome To Our Delezia")
            console.log()
            console.log("Key\t\tDish Name\t\tQuantity\t\tPrice")
            console.log("---------------------------------------------------------------------------------------------")
            for (let dishes of this.menu_list){
                console.log(`${dishes.key} \t\t${dishes.dish}\t\t\t ${dishes.quantity}\t\t\t${dishes.price}`)
            }
            return "dishes"
            
        }
    

    place_order(){
        // Check if the menu is available
        let check = this.show_Menu();
        if (check){
            console.log("Welcome! Now You Can Place an Order...");
            console.log();
            // Loop to continuously prompt for order until an order is successfully placed
            while (true){
                // Prompt user to enter the key of the dish they want to order
                let key_menu = prompt("Enter the key of the dish you want to order:").trim();
                let dishFound = false;
                // Iterate through the menu list to find the dish
                for (let dishes of this.menu_list){
                    if (dishes.key === key_menu){
                        console.log(`You Want To Order...${dishes.dish}`);
                        console.log(`1 serve of ${dishes.dish} = ${dishes.price} pkr`);
                        // Check if the dish is out of stock
                        if (dishes.quantity <= 0){
                            console.log("Sorry, this dish is out of stock.");
                            break;
                        } else {
                            // If dish is available, prompt for the quantity
                            while (true){
                                let quan_input = prompt("Enter how many serves you want to order:").trim();
                                // Validate the quantity input
                                if (quan_input > 0 && quan_input <= dishes.quantity){
                                    console.log("Please wait for a while...");
                                    console.log();
                                    console.log("\t\tOrder details");
                                    console.log();
                                    // Calculate and display order details
                                    let bill = dishes.price * quan_input;
                                    console.log(`Dish name : ${dishes.dish}\nTotal serves: ${quan_input}\nBill : ${bill}`);
                                    // Update the quantity of the ordered dish
                                    dishes.quantity -= quan_input;
                                    console.log("Order Placed Successfully.");
                                    return;
                                } else {
                                    console.log("Please enter a valid quantity.");
                                    console.log();
                                }
                            }
                        }
                        dishFound = true;
                        break;
                    }
                }
                // If dish is not found in the menu
                if (!dishFound) {
                    console.log("Sorry, the dish you entered is not available.");
                    console.log();
                }
            }
        }
    }
    


    // place_order(){
    //     let check=this.show_Menu()
    //     if (check){
    //         console.log("Welcome Now You Can Place Order..")
    //         console.log()
    //         while (true){
    //             let key_menu=prompt("Enter the key of dish you want to order:").trim()
    //             for (let dishes of this.menu_list){
    //                 if (dishes.key===key_menu){
    //                     console.log(`You Want To Order...${dishes.dish}`)
    //                     console.log(`1 serve of ${dishes.dish} = ${dishes.price} pkr`)
    //                     if (dishes.quantity<0){
    //                         while (true){
    //                             let quan_input=prompt("Enter How Many serves you want to order:").trim()
    //                             if ((quan_input<=dishes.quantity)&& quan_input>0){
    //                                 console.log("wait for a while...")
    //                                 console.log()
    //                                 console.log("\t\tOrder details")
    //                                 console.log()
    //                                 let bill=dishes.price*quan_input
    //                                 console.log(`Dish name : ${dishes.dish}\nTotal serves: ${quan_input}\nBill : ${bill}`)
    //                                 dishes.quantity-=quan_input
    //                                 console.log("Order Placed Successfully.")
    //                                 return
    
    
    //                             }else{
    //                                 console.log()
    //                                 console.log("Please enter smaller quantity we dont have enough serves,")
    //                                 console.log()
    //                             }
    //                         }
    //                     }
                        
    //                 }
    //             }

    //         }
           
    //     }
    



    // }


    main_menu(){
        console.log("\tWelcome to our resturant.")
        while (true){
            console.log("\t1.see our menu list.")
            console.log("\t2.Place The Order.")
            console.log("\t3.Exit From resturant application.")
            console.log()

            let get_choice=prompt("Enter Your Choice:").trim()
            if (get_choice==="1"){
                this.show_Menu()

            }else if (get_choice==="2"){
                this.place_order()

            }else if (get_choice==="3"){
                console.log("Apllication is exiting...")
                console.log()
                return

            }else{
                console.log("Invalid Choice.please select correct choice")
                console.log()
            }
    

        }
       
    }







}


delizia=new resturant_System()
delizia.main_menu()