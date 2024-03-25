
// Certainly! Here's a more challenging question:

// Question: Online Shopping System

// You are tasked with building an online shopping system in JavaScript. Your system should have the following functionality:

// Product Class: Create a class called Product that represents a product in the online store. Each product should have properties such as id, name, price, and quantity.


// It should have methods:
// addItem(product): Adds a product to the cart.
// removeItem(id): Removes a product from the cart based on its id.
// totalPrice(): Calculates the total price of all items in the cart.
// checkout(): Processes the payment and empties the cart.




// User Class: Create a class called User that represents a user of the online store. Each user should have properties such as id, name, and cart.

// It should have methods:
// addToCart(product): Adds a product to the user's cart.
// removeFromCart(id): Removes a product from the user's cart based on its id.
// checkout(): Initiates the checkout process.


// The prompt-sync library is imported for synchronous prompt input
let prompt = require('prompt-sync')();


class admin_Product{
    constructor(){
        this.product_list=[]
        this.id_list=[]
        this.username="admin"
        this.password="123"

    }

    
    
    // getting admin login procedure
    admin_Login(){
        let username_found=false
        while(true){
            let username=prompt("Enter Admin username To proceed (enter 0 to back):").trim()
            if (username==="0"){
                console.log("Return To Previous page...\n")
                return
            }
            if (username==this.username){
                console.log("Wait...we are checking")
                console.log("Useraname Matches Now Enter Password for further process..\n")
                username_found=true
                

                

            }if (!username_found){
                console.log("Error..Useranme Not Match.please enter valid credentials..\n")
                continue

            }while(true){
                let password=prompt("Enter Admin Password (enter 0 to back): ").trim()
                if (password==="0"){
                    console.log("Return To Previous Menu...\n")
                    return
                }if (password===this.password){
                    console.log("Congratulations Login Successfull...\n")
                    return "loginconfirm"
                }else{
                    console.log("Password Not Found.Please Enter Valid Password")
                }
            }
        }
    }


    
// this function to generate unique id everytime.
    assign_Id() {
        while (true) {   // using math.floor
            let random_number = Math.floor(Math.random() * 9000) + 1000; // Generate a random 4-digit number
            // check that this random number not in idlist
            if (!this.id_list.includes(random_number)) {
                this.id_list.push(random_number);
                return random_number.toString();    // return id number
            }
        }
    }


    //making admin add product name
    add_product_name(){
        while (true){
            let productname=prompt("Enter Product Name (enter 0 to go back):").trim()
            if (productname==="0"){
                console.log("Going to previous menu\n")
                return
            }if (productname.length>1){
                console.log("\nProduct name Added Successfully..")
                return productname

            }else{
                console.log("Please Enter product name.It is not remain blank\n")
            }

            }
        
    }

    // taking admin quantity of product

    add_product_quantity() {
        while (true) {
            let productquantity = parseInt(prompt("Enter Product Quantity (enter 0 to go back):"));
            if (productquantity === 0) {
                console.log("Going to previous menu\n");
                return 0; // Returning 0 to indicate going back
            } else if (!isNaN(productquantity) && productquantity > 0) {
                console.log("\nProduct Quantity Added Successfully.\n");
                return productquantity;
            } else {
                console.log("Please enter a non-negative number (or 0 to go back).\n");
            }
        }
    }
    

    //product price input by admin
    add_product_price() {
        while (true) {
            let productprice = parseInt(prompt("Enter Product Price (enter 0 to go back):"));
            if (productprice === 0) {
                console.log("Going to previous menu\n");
                return 0; // Returning 0 to indicate going back
            } else if (!isNaN(productprice) && productprice > 0) {
                console.log("\nProduct Price Added Successfully.");
                return productprice;
            } else {
                console.log("Please enter a non-negative number (or 0 to go back).\n");
            }
        }
    }
    


    // procdeure to add products

    products_adding_procedure(){

        let products_object={}
        let id=this.assign_Id()
        let productname=this.add_product_name()
        if (productname){
            let productquantity=this.add_product_quantity()
            if (productquantity){
                let productprice=this.add_product_price()
                if (productprice){
                    products_object={"id":id,"name":productname,"quantity":productquantity,"price":productprice}
                    this.product_list.push(products_object)
                    console.log("\t\tProduct Details.\n")
                    console.log(`\tProduct Name:${productname}\n\tquantity: ${productquantity}\n\t Price${productprice}\n `)
                    console.log("Product is added Succesffuly.For more Details Visit View Products.\n")

                }
            }
        }
    }


    // this is to show admin all products he added
    show_products_admin(){
        if (this.product_list.length===0){
            console.log("Shoppify is empty No Products added yet.Nothing to Display\n")
            return
        }else{
            console.log("\t\tAll Products Details\n\n")
            console.log("Id\t\tProduct-Name\t\tQuantity\t\tPrice")
            console.log("-----------------------------------------------------------------------")

            for (let products of this.product_list){
                console.log(`${products.id}\t\t${products.name}\t\t\t${products.quantity}\t\t\t${products.price}`)

            }
            return "products"

        }
    }

    // this product to remove product

    remove_product_admin() {
        if (this.product_list.length === 0) {
            console.log("Admin, It seems there are no products added yet. You can't delete anything right now.\n");
            return;
        } else {
            console.log();
            while (true) {
                this.show_products_admin();
                let productid = prompt("Enter the Product Id You want to Delete (enter 0 to go back):");
    
                if (productid === "0") {
                    console.log("Going back to the previous menu...\n");
                    return;
                }
    
                let found = false;
                for (let i = 0; i < this.product_list.length; i++) {
                    if (this.product_list[i]['id'] === productid) {
                        this.product_list.splice(i, 1); // Remove the dictionary at index i
                        found = true;
                        console.log("Product with ID " + productid + " has been deleted successfully.\n");
                        break; // Exit the loop after deletion
                    }
                }
    
                if (!found) {
                    console.log("Product with ID " + productid + " not found.\n");
                }
            }
        }
    }


    // this is for making update products

    update_products_admin() {
        if (this.product_list.length === 0) {
            console.log("Admin, It seems there are no products added yet. You can't update anything right now.\n");
        } else {
            console.log();
            while (true) {
                let productid = prompt("Enter the Product Id You want to Update (enter 0 to go back):");
    
                if (productid === "0") {
                    console.log("Going back to the previous menu...\n");
                    return;
                }
    
                let found = false;
                let product;
                // Check if the entered ID exists in the product list
                for (product of this.product_list) {
                    if (product.id === productid) {
                        found = true; // Set flag to true if ID is found
                        break;
                    }
                }
    
                if (!found) {
                    console.log("Product with ID " + productid + " not found.\n");
                    continue; // Continue to the next iteration of the outer loop
                }
                while (true){
                    console.log("\t\tWelcome To update section.\n");
                console.log("1. Update Product name.");
                console.log("2. Update Product quantity.");
                console.log("3. Update Product price.");
                console.log("4. Exit From Update area.\n");
    
                let get_update_choice = prompt("Enter Your Choice in update area:").trim();
    
                if (get_update_choice === "1") {
                    let newProductName = this.add_product_name();
                    if (newProductName) {
                        console.log("Product name updated successfully.\n");
                        product.name = newProductName;
                    }
                } else if (get_update_choice === "2") {
                    let newProductQuantity = this.add_product_quantity();
                    if (newProductQuantity) {
                        console.log("Product Quantity updated successfully.\n");
                        product.quantity = newProductQuantity;
                    }
                } else if (get_update_choice === "3") {
                    let newProductPrice = this.add_product_price();
                    if (newProductPrice) {
                        console.log("Product Price updated successfully.\n");
                        product.price = newProductPrice;
                    }
                } else if (get_update_choice === "4") {
                    console.log("Going back from update area.\n");
                    return;
                } else {
                    console.log("Invalid choice. Please select from the given options.\n");
                }
                    
                }
                
            }
        }
    }
    
    







    //making a main page for admin
    main_page_Admin(){
        console.log("\t\tWelcome To Admin Section,Login then access the portal\n")
        let admin_login_check=this.admin_Login()
        if (admin_login_check){
            console.log("\t\tWelcome To Admin Portal\n")
            while (true){
                console.log("\t1.Add Products In store.")
                console.log("\t2.view all Products In store.")
                console.log("\t3.Remove Any Product From Store.")
                console.log("\t4.Update Products In store.")
                console.log("\t5.Exit From Admin Area.\n")

                let admin_choice=prompt("Admin Please Enter Your Choice:")
                if (admin_choice==="1"){
                    this.products_adding_procedure()

                }else if (admin_choice==="2"){
                    this.show_products_admin()

                }else if (admin_choice==="3"){
                    this.remove_product_admin()

                }else if (admin_choice==="4"){
                    this.update_products_admin()

                }else if (admin_choice==="5"){
                    console.log("Admin Portakl is closing now...")
                    console.log("Good Bye!!")
                    return
                }else{
                    console.log("Invalid choice please Select from given choice.\n\n\n")

                }
            }
            

        }
      

    }

}






class User extends admin_Product{
    constructor(product_list){
        super(); // Call the constructor of the parent class
        this.cart=[]
        this.product_list = product_list; // Assigning product
        
    }



    add_to_cart(){        
            if (this.product_list.length===0){
                console.log("Shoppify is empty at that moment Admin has not add any products yet\n")
                return
            }
            let id=super.assign_Id()
            let user_cart={}      
            console.log("Welcome Customer Now you can add products to cart.\n")
            while (true){
                super.show_products_admin()
                console.log()
                let purchaseid=prompt("Enter Product Id You want to Purchse (enter 0 to back):").trim()
                if (purchaseid==="0"){
                    console.log("Going To previous menu...\n")
                    return
                }
                let id_found=false
                let products
                for (products of this.product_list){
                    if (products.id===purchaseid){
                        console.log("Product Is avalaible in shoppify\n")
                        id_found=true
                        break;
                    }
                }
                if (!id_found){
                    console.log("Invalid id.Please enter corect id.\n")
                    continue
                }
                if (products.quantity===0){
                    console.log(`product ${products.name} is out of stock now...\n`)
                    continue
                }
                while (true){
                    let quantity=parseInt(prompt("Enter How much you want to purchse:"))
                    if (quantity===0){
                        console.log("Going To previous menu...")
                        return
                    }if (quantity<=products.quantity){
                        console.log(`\nItem ${products.name} with quantity ${quantity} is added to your cart.\n`)
                        products.quantity-=quantity
                        let bill=products.price*quantity
                        user_cart={"id":id,"name":products.name,"quantity":quantity,"bill":bill}
                        this.cart.push(user_cart)
                        return


                    }else{
                        console.log("Invalid Quantity please enter valid quantity.\n")
                    }
                }
            }
     
    }

    //usercartdisplay

    display_Cart(){
        if (this.cart.length===0){
            console.log("Sorry,Dear Customer Your cart is empty nothing to display...\n")
            return
        }else{
            console.log("\t\tCART DETAILS\n\n")
            console.log("Id\t\tProduct-Name\t\tQuantity\t\tInitial-Bill")
            console.log("----------------------------------------------------------------------------")

            for (let items of this.cart){
                console.log(`${items.id}\t\t${items.name}\t\t\t${items.quantity}\t\t\t\t${items.bill}`)
            }
        }
    }


    //user can remove any product
    remove_from_cart() {
        if (this.cart.length=== 0) {
            console.log("Customer, It seems there are no products added yet. You can't delete anything right now.\n");
            return;
        } else {
            console.log();
            while (true) {
                this.display_Cart()
                let productid = prompt("Enter the Product Id You want to Delete (enter 0 to go back):");
    
                if (productid === "0") {
                    console.log("Going back to the previous menu...\n");
                    return;
                }
    
                let found = false;
                for (let i = 0; i < this.cart.length; i++) {
                    if (this.cart[i]['id'] === productid) {
                        this.cart.splice(i, 1); // Remove the dictionary at index i
                        found = true;
                        console.log("Product with ID " + productid + " has been deleted successfully.\n");
                        break; // Exit the loop after deletion
                    }
                }
    
                if (!found) {
                    console.log("Product with ID " + productid + " not found.\n");
                }
            }
        }
    }


    // calculating total bill
    calculating_Bill(){
        let bill_list=[]

        for (let products of this.cart){
            let price=products.bill
            bill_list.push(price)
            
        }

        let result = 0;

        // Loop through the list to calculate the sum
        for (let i of bill_list) {
            result += i;
        }
        console.log(`Total Bill After calculation : ${result} PKR`)

    }

   

     //checkout mehtod
    checkout(){
        if (this.cart.length===0){
            console.log("What are you doing here..nothing in your cart..\n")
            return

        }else{
            console.log("Here is your final cart details.")
            this.display_Cart()
            console.log()
            this.calculating_Bill()
            while (true){
                let confimation=prompt("Are you sure you want to checkout (Y/N):").trim().toLowerCase()
                if (confimation==="y"){
                    console.log("Shoppify is ending ...we will hope to see you again.")
                    return
                    
    
                }else if (confimation==="n"){
                    console.log("\nAlright continue shopping!Happy shopping.\n")
                    break;
    
                }else{
                    console.log("Please select from given word (y/n)\n")
                }

            }
           
        }
    }

    // main page of users

    main_page_users(){
        while (true){
            console.log("\t1.Add Products To cart.")
            console.log("\t2.View your shopping cart.")
            console.log("\t3.Remove Products From cart.")
            console.log("\t4.Proceed To Checkout.")
            console.log("\t5.See Shoppify Product List.")
            console.log("\t6.Exit From application.\n")
            let get_user_choice=prompt("Enter Your Choice:").trim()
            if (get_user_choice==="1"){
                this.add_to_cart()

            }else if (get_user_choice==="2"){
                this.display_Cart()

            }else if (get_user_choice==="3"){
                this.remove_from_cart()

            }else if (get_user_choice==="4"){
                this.checkout()



            }else if (get_user_choice==="5"){
                super.show_products_admin()



            }else if (get_user_choice==="6"){
                console.log("Shoppify is now ending...See You Soon.")
                return

            }else{
                console.log("Invalid Choice.please select from given choice.\n")
                
            }
        }
    }








}























let admin=new admin_Product
let user = new User(admin.product_list);



function main_loop(){
    while (true){
        console.log("\t\tWelcome To Shoppify!!")
        console.log("\t1.Proceed as admin.")
        console.log("\t2.Proceed as User.")
        console.log("\t3.Exit From Shoppify.\n")
        let get_input=prompt("Enter Your Option:")
        if (get_input==="1"){
            admin.main_page_Admin()
    
        }else if (get_input==="2"){
            user.main_page_users()
    
        }else if (get_input==="3"){
            console.log("Shoppify is ending now...see you soon.\n")
            break;
        }else{
            console.log("Invalid Choice.please select from given choice.\n")
        }
    
    }

}
main_loop()
