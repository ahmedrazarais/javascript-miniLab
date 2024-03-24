// Certainly! Here's a more complex problem involving classes, objects, and algorithms:

// Suppose you are tasked with designing a class for a library system. The class should be able to handle the following functionalities:

// Add books to the library inventory.
// Remove books from the library inventory.
// Search foll books currently available in the library.
// Design thr books by title, author, or category.
// Display ae class LibrarySystem along with methods to implement the above functionalities. Make sure to use appropriate data structures and algorithms for efficient book management. Additionally, provide an example demonstrating the usage of your LibrarySystem class with sample operations.

// The prompt-sync library is imported for synchronous prompt input
let prompt = require('prompt-sync')();


class library{
    constructor(){
        this.librarycatalog=[]
        this.id_list=[]
        
    }





    // this function to generate unique id everytime.
    assign_Id() {
        while (true) {   // using math.floor
            let random_number = Math.floor(Math.random() * 9000) + 1000; // Generate a random 4-digit number
            // check that this random number not in idlist
            if (!this.id_list.includes(random_number)) {
                this.id_list.push(random_number);
                return random_number;    // return id number
            }
        }
    }


    view_Books(){
        if (this.librarycatalog.length==0){
            console.log("There Are No Books To show at this moment.")
            console.log("Come Back later...")
            console.log()
            return

        }else{
            console.log("\t\tHere are details of all books you added yet!!")
            console.log()
            console.log()
            console.log("Key\t\tBook-Name\t\tAuthors\t\tEdition\t\tTitle")
            console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")

            for (let books of this.librarycatalog){
                console.log(`${books.key}\t\t ${books.name}\t\t ${books.author}\t\t ${books.edition} \t\t${books.title}`)
            }
        }
    }


  

    book_name_input(){
        console.log("Book Name input....\n")
        while (true){
                let alphabets = /^[a-zA-Z]+$/;
                let book_name=prompt("Enter Book Name (enter 0 to back)")
                if (book_name=="0"){
                    console.log("Going To Previous menu...\n")
                    return
                }
                if ((book_name.length>0)&&(alphabets.test(book_name))){
                    console.log()
                    console.log(`Book Name set to ${book_name}\n`)
                    return book_name
                }else{
                    console.log("\nPlease Enter Book Name.Only Alphabets are allowed.\n")
                    
                }               
        }
    }
   // book author input
    book_author_input(){
        console.log("Book Author input....\n")
        while (true){
                let alphabets = /^[a-zA-Z]+$/;
                let book_author=prompt("Enter Book Author Name (enter 0 to back)")
                if (book_author=="0"){
                    console.log("Going To Previous menu...\n")
                    return
                }

                if ((book_author.length>0)&&(alphabets.test(book_author))){
                    console.log()
                    console.log(`Book Author Name set to ${book_author}\n`)
                    return book_author
                }else{
                    console.log("\nPlease Enter Book Author Name.Only Alphabets are allowed.\n")
                    
                }               
        }
    }
   // book title input
    book_title_input(){
        console.log("Book Title input....\n")
        while (true){
                let alphabets = /^[a-zA-Z]+$/;
                let book_title=prompt("Enter Book Title (enter 0 to back)")
                if (book_title=="0"){
                    console.log("Going To Previous menu...\n")
                    return
                }

                if ((book_title.length>0)&&(alphabets.test(book_title))){
                    console.log()
                    console.log(`\nBook Title set to ${book_title}\n`)
                    return book_title
                }else{
                    console.log("\nPlease Enter Book Title.Only Alphabets are allowed.\n")
                    
                }               
        }
    }
    // book edition input
    book_edition_input(){
        console.log("Book Edition input....\n")
        while (true){

                let digits = /^\d+$/;
                let book_edition=prompt("Enter Book Edition (enter 0 to back)")
                if (book_edition=="0"){
                    console.log("Going To Previous menu...\n")
                    return
                }

                if ((book_edition.length==4)&&(digits.test(book_edition))){
                    console.log()
                    console.log(`\nBook Edition set to ${book_edition}\n`)
                    return book_edition
                }else{
                    console.log("\nPlease Enter Book Edition.Only Alphabets are allowed.\n")
                    console.log("It must be like 1293 , 2029...")

                    
                }               
        }
    }

    

 
    add_Books_process(){
        console.log("\t\twelcome,Here You can Add Books TO Library Inventory.")
        console.log()
        let books_object={}
        let key=this.assign_Id()
        let bookname=this.book_name_input()
        if (bookname){
            let bookauthor=this.book_author_input()
            if (bookauthor){
                let bookedition=this.book_edition_input()
                if (bookedition){
                    let booktitle=this.book_title_input()
                    books_object={"key":key,"name":bookname,"author":bookauthor,"edition":bookedition,"title":booktitle}
                    this.librarycatalog.push(books_object)
                    console.log("\nCongratulations.Book Added Successfully to catalog.\n")
                    return
                }
            }
        }
               
    }



    remove_books() {
        if (this.librarycatalog.length == 0) {
            console.log("Library catalog Is Already Empty\nPlease Add Some books then came back here\n");
        } else {
            console.log("\t\tAll Books That Added Yet!!\n\n");
            this.view_Books();
            console.log("\n");
            console.log("Enter The Id Of Book To Delete That Book. Press 0 to come back\n\n");

            while (true) {
                let id_input = prompt("Enter The Id Of Book To delete (enter 0 to back):").trim();

                if (id_input === "0") {
                    return;
                }

                let int_id = parseInt(id_input);
                let found = false;

                for (let i = 0; i < this.librarycatalog.length; i++) {
                    if (this.librarycatalog[i].key === int_id) {
                        console.log("Id found. Deleting the book...");
                        console.log();
                        this.librarycatalog.splice(i, 1);
                        console.log("Book Deleted Successfully.");
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    console.log("Id Not Found. Please Enter a valid Id.");
                } else {
                    break;
                }
            }
        }
    }






    



    update_choice(){
        console.log("\n\t1.Update Book Name.")
        console.log("\t2.Update Book author name.")
        console.log("\t3.Update Book edition.")
        console.log("\t4.Update Book Title.")
        console.log("\t5.Exit From Update Area.\n")

    }

    update_process(){
        if (this.librarycatalog.length===0){
            console.log("There Are no books added yet in catalog.\n")
            return

        }else{
            console.log("Welcome To Updtae Section.Entere key of book to unlock more features.\n")
            console.log()
            while (true) {
                let task_id = false; // Flag to track if book ID is found
                this.view_Books()
                console.log();
                // Prompt user to enter the ID of the book to be updated
                let get_id = prompt("Enter The Book Id You Want to update (enter 0 to go back):").trim();
                get_id = parseInt(get_id);
                // If user wants to go back, return
                if (get_id === 0) {
                    console.log("Going To Previous Options..");
                    return;
                }
                let task
                // Check if the entered ID exists in the task list
                for ( task of this.librarycatalog) {
                    if (task.key === get_id) {
                        task_id = true; // Set flag to true if ID is found
                        break;
                    }
                }
                // If entered ID does not exist, prompt user again
                if (!task_id) {
                    console.log("Id Not Found. Please Enter valid Id.");
                    console.log();
                    continue;
                }
                console.log("Welcome to update area.");
                // Loop to handle specific updates for the selected task
                while (true) {
                    this.update_choice()
                    
                    // Prompt user to choose an update option
                    let update_Choice = prompt("Please Enter Your Choice In Update area:").trim();
                    // Handle the chosen update option
                    if (update_Choice === "1") {
                        
                        
                        let newbookname = this.book_name_input();
                        // Update task name if user input is valid
                        if (newbookname) {
                            task.name = newbookname; // Directly update task name for the matched task
                            console.log("Book name updated successfully.");
                        }
                    } else if (update_Choice === "2") {
                       
                     
                        let newauthor= this.book_author_input()
                        // Update ending year if user input is valid
                        if (newauthor) {
                            task.author = newauthor; // Directly update ending year for the matched task
                            console.log("Author Name updated successfully.");
                        }
                    } else if (update_Choice === "3") {
                        
                        let newedition = this.book_edition_input()
                        // Update assignee name if user input is valid
                        if (newedition) {
                            task.edition = newedition; // Directly update assignee name for the matched task
                            console.log("Book Edition Updated Successfully.\n");
                        }
                    } else if (update_Choice === "4") {
                   
                        let title = this.book_title_input();
                        // Update task status if user input is valid
                        if (title) {
                            task.title = title; // Directly update task status for the matched task
                            console.log("Book Title updated successfully.\n");
                        }
                    } else if (update_Choice === "5") {
                        console.log("Going Back From Update Section..");
                        console.log();
                        return;
                    } else {
                        console.log("Invalid Choice.");
                    }
                }
            }
            
            
        }


    }




    main_System(){
        console.log("\t\tWelcome To Our Library Management System.\n")
        while (true){
            console.log("\t1.View All Book You Added.")
            console.log("\t2.Add Book To Inventory.")
            console.log("\t3.Remove Any Book From Inventory.")
            console.log("\t4.Update Any Book Details")
            console.log("\t5.Exit From Libarary inventory.\n\n")
            let get_choice=prompt("Enter Your Choice What You Want to do:").trim()
            if (get_choice=="1"){
                this.view_Books()
            }else if (get_choice=="2"){
                this.add_Books_process()
            }else if (get_choice==="3"){
                this.remove_books()

            }else if (get_choice=="4"){
                this.update_process()

            }else if (get_choice=="5"){
                console.log("Inventory System Is ended now...\n")
                return

            }else{
                console.log("\nInvalid Option.please Select From Given Choice\n\n")
            }
        }

    }


}  

let inventory=new library()
inventory.main_System()






