//Make a  to do list


// The prompt-sync library is imported for synchronous prompt input
let prompt = require('prompt-sync')();

// make the empty list to get tasks of users
let task_List=[]
//make id list to get unique id every time.
let id_list=[]

// function to display user choices
function main_Choices(){
    console.log("\t\tWelcome To To-do List System")
    console.log("\t1.Add Any Task To List:")
    console.log("\t2.Remove Any Task From List:")
    console.log("\t3.View All Tasks Of Your List:")
    console.log("\t4.Update Task Details.")
    console.log("\t5.To Exit:exit from the system.")
    console.log()

}




// this function to generate unique id everytime.
function assign_Id(id_list) {
    while (true) {   // using math.floor
        let random_number = Math.floor(Math.random() * 9000) + 1000; // Generate a random 4-digit number
        // check that this random number not in idlist
        if (!id_list.includes(random_number)) {
            id_list.push(random_number);
            return random_number;    // return id number
        }
    }
}
// this is to take task name input
function add_task_name(){
    while(true){     // use loop to stuck him there
        let task_Name=prompt("Enter The Task Name (enter 0 to back):").trim()
        console.log()
        if (task_Name==="0"){
            return // if he want to go back
        }
        //checking mustt be something in task name
        if (task_Name.length>=1){
            return task_Name    // after successfull input return

        // printing error if no input
        }else{
            console.log("Please Enter Something For task.")
        }

    }

}
function add_task_date() {
    while (true) {
        let task_date = prompt("Enter The Task Ending-year:");
        if (task_date === "0") {
            return; // if the user wants to go back
        }
        if (task_date.length === 4 && !isNaN(task_date)  && task_date>=2024) {
            return parseInt(task_date); // return the input if it's a valid 4-digit year
        } else {
            console.log("Please Enter a valid 4-digit year (e.g., 2024, 2025).");
            console.log("Ending Year Must Be Greater Than 2024.")
            console.log();
        }
    }
}

// function to take assignne name input
function add_task_assignee() {
    while (true) {
        let task_assignee = prompt("Enter The Task assignee name:").trim();
        if (task_assignee === "0") {
            return; // If user wants to go back
        }
        // Regular expression to check if the input contains only alphabetic characters
        let alphabeticRegex = /^[A-Za-z]+$/;
        if (alphabeticRegex.test(task_assignee)) {
            return task_assignee; // If input is valid, return the task assignee name
        } else {
            console.log("Invalid input. Please enter only alphabetic characters.");
        }
    }
}


// to add task status
function add_task_status(){
    while (true) {          // use loop to stuck him there
        let task_status = prompt("Enter The Task status (Complete,pending):").trim().toLowerCase();
        if (task_status === "0") {
            return;        //if he want to go back
        
        // checking must be completed or not completed in input
        }if ((task_status!=="complete") && task_status!=="pending"){
            console.log("Please Enter Correct word (complete,pending) ")
            console.log()

        }else{
            return task_status           // if get valid input

        }
        
    }

}
// process adding tasks
function add_Tasks_to_list(task_List){

    // ake an empty object
    let users_dic={}
    // call our function ton store results in variable
    let unique_id=assign_Id(id_list)
    let task_Name=add_task_name()

    // checking if get something in return then calling the functions
    if (task_Name){
        let task_date=add_task_date()
        if (task_date){
            let task_assignee=add_task_assignee()
            if (task_assignee){
                let task_status=add_task_status()
                if (task_status){

                    // after getting all input write data in dictionary and append dictionary in list
                    users_dic={"taskid":unique_id,"taskname":task_Name,"taskdate":task_date,"taskassignee":task_assignee,"taskcompletion":task_status}
                    task_List.push(users_dic)
                    console.log("Task Added Suuccessfully.")
                    console.log()

                }

            }

        }

    }
 

}  

// function to display user his tasks list
function show_Tasks(task_List){
    if (task_List.length===0){    // checking if there is no task added yet
        console.log("No tasks Added Yet!! Add some Tasks Then Come back.")
        console.log()
        return   // return if list is empty

    }else{   // if list has something. in it
        console.log("Here Are Your Complete task Details...")
        console.log("Task ID\t  Task Name\tTask Year\tTask Assignee\tTask Completion");
        console.log("-------\t---------\t---------\t-------------\t----------------");
        for (task  of task_List){   // iterate over list
            // accessing objects keys value.
            console.log(`${task.taskid}\t${task.taskname}\t\t${task.taskdate}\t\t${task.taskassignee}\t\t${task.taskcompletion}`);
        console.log()
        }
  

        
}}

// function to remove any task
function remove_Task(task_List){
    if (task_List.length === 0){
        console.log("No tasks Added Yet!! Add some Tasks Then Come back to remove.")
        console.log()
        return; // Return if the list is empty
    } else { // If tasks in the list
        console.log();
        show_Tasks(task_List); // Call show task function to show user his tasks
        console.log();
        console.log("Enter The Id Of task To Delete That Task. Press enter to come back");
        console.log();
        while (true){
            let id_input = prompt("Enter The Id Of Task To delete That task:").trim();
            if (id_input === "") { // If user presses enter to go back
                return;
            }
            let int_id = parseInt(id_input); // Typecast id to an integer
            let found = false; // Flag to check if the task with the given ID is found
            for (let i = 0; i < task_List.length; i++){
                if (task_List[i].taskid === int_id){ // Check if the id matches
                    console.log("id found.wait we are deleting That task...");
                    console.log()
                    task_List.splice(i, 1); // Remove the task at index i
                    console.log("Task Deleted Successfully.");
                    console.log();
                    found = true;
                    break; // Exit the loop once the task is deleted
                }
            }
            if (!found) { // If task with given ID is not found
                console.log("Id Not Found. Please Enter a valid Id.");
                console.log();
            } else {
                break; // Exit the loop if the task is found and deleted
            }
        }
    }
}


// function to give user choice to update thier task details

function update_Tasks_Details(task_List) {
    if (task_List.length === 0) { // if no task added yet
        console.log("Your Task List Is empty. Nothing to update.");
        console.log();
        return;
    } else {
        while (true) {
            let task_id = false; // initial it to false
            show_Tasks(task_List); // call show task function
            console.log();
            let get_id = prompt("Enter The Task Id You Want to update (enter 0 to go back):").trim();
            get_id = parseInt(get_id); // Typecast id to an integer
            if (get_id === 0) { // if he want to go back
                console.log("Going To Previous Options..");
                return;
            }
            // checking for id match
            for (task of task_List) {
                if (task.taskid === get_id) {
                    task_id = true; //if id matches then make it true
                    break;
                }
            }
            if (!task_id) {
                console.log("Id Not Found. Please Enter valid Id.");
                console.log();
                continue; // Prompt the user for ID input again
            }
            console.log("Welcome to update area.");
            while (true) {
                console.log("\t1. Update task name:");
                console.log("\t2. Update Ending Year:");
                console.log("\t3. Update assignee name:");
                console.log("\t4. Update task status:");
                console.log("\t5. Exit From Update area:");
                console.log();
                //taking user choice
                let update_Choice = prompt("Please Enter Your Choice In Update area:").trim();
                // working on respective choices
                if (update_Choice === "1") {
                    console.log("Update task name:");
                    let new_task_name=add_task_name(task_List)    //calling taskname function
                    
                    //check if something in return
                    if (new_task_name){
                        let index = task_List.findIndex(task => task.taskid === get_id);
                        if (index !== -1) {
                            task_List[index].taskname = new_task_name;
                            console.log("Task name updated successfully.");
                            
                    }}

                } else if (update_Choice === "2") {
                    console.log("Update Ending Year:");
                    let new_year=add_task_date()            //calling ending year function
                    if (new_year){   //checking that specific obect update
                        let index = task_List.findIndex(task => task.taskid === get_id)
                        if (index!==-1){
                            task_List[index].taskdate = new_year;
                            console.log("Task Year updated successfully.");

                        }


                    }
                    
                    

                } else if (update_Choice === "3") {
                    console.log("Update assignee name:");
                    let new_assignee=add_task_assignee()         //calling assignee function
                    if (new_assignee){ //checking that specific obect update
                        let index = task_List.findIndex(task => task.taskid === get_id)
                        if (index!==-1){
                            task_List[index].taskassignee = new_assignee;
                            console.log("Task Assignee updated successfully.");

                        }


                    }

                } else if (update_Choice === "4") {
                    console.log("Update task status:");
                    let new_status=add_task_status()             //calling status function
                    if (new_status){ //checking that specific obect update
                        let index = task_List.findIndex(task => task.taskid === get_id)
                        if (index!==-1){
                            task_List[index].taskcompletion = new_status;
                            console.log("Task Status updated successfully.");

                        }


                    }

                } else if (update_Choice === "5") {
                    console.log("Going Back From Update Section..");
                    console.log();
                    return;   // if he want to exit

                } else {
                    console.log("Invalid Choice.");   // if not valid input.
                }
            }
        }
    }
}













































function main_Loop(){
    //call main choice function to show choices
    while (true){
        main_Choices()
        // get user choice what he want to perform
        let user_Choice=prompt("Enter Your Desired Choice:")

        // calling the respective functions on choices
        if (user_Choice==="1"){
            console.log("Welcome To Add Area.")
            console.log()
            add_Tasks_to_list(task_List)
        }else if (user_Choice==="2"){
            console.log("Welcome To remove task Area ")
            console.log()
            remove_Task(task_List)
            
        }else if (user_Choice==="3"){
            console.log("Welcome To view The task Section.")
            console.log()
            show_Tasks(task_List)
        }else if (user_Choice==="4"){
            console.log("Welcome To Update Area.")
            update_Tasks_Details(task_List)
        }else if (user_Choice==="5"){
            console.log("Hope You Got Satisfied By Our Services")
            console.log("GoodBye!")
            console.log()
            return    //if he want to exit
        // if invalid choice.
        }else{
            console.log()
            console.log("Invalid Choice Please Select From Given Choice.")
            console.log()
        }

    }
  
    
}

main_Loop()