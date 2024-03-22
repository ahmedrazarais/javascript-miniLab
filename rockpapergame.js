// The prompt-sync library is imported for synchronous prompt input
let prompt = require('prompt-sync')();


//function to take player 1 input.
function first_Player_Input(){
    while (true){   // aplly loop to stuck player till that input not recieved

        // use trim to remove whitespaces and convert to lower case to avoid conflicts
        let player_1=prompt("Player 1 Enter (R/P/S):").trim().toLowerCase()
        if (player_1==="r" ||player_1==="p" ||player_1==="s"){
            return player_1         // returning player 1 after correct input

        }else{        // if not get valid input.
            console.log("Player 1, please enter either 'R', 'P', or 'S'.")
            console.log()
        }

    }
    
}
//function to take player 2 input.
function second_Player_Input(){
    while (true){             // aplly loop to stuck player till that input not recieved

        // use trim to remove whitespaces and convert to lower case to avoid conflicts
        let player_2=prompt("Player 2 Enter (R/P/S):").trim().toLowerCase()
        if (player_2==="r" ||player_2==="p" ||player_2==="s"){
            return player_2           // returning player 2 after correct input


        }else{              // if not get valid input.
            console.log("Player 2, please enter either 'R', 'P', or 'S'.")
            console.log()
        }

    }
    
}




//function to check winning conditions
function check_Winner(first_side,second_side){
    // checking for teid conditions
    if ((first_side==="r" && second_side==="r")||(first_side==="p" && second_side==="p")||(first_side==="s" && second_side==="s")){
        
        console.log("Game Is Tied")
        console.log()

    // checking if player 1 wins
    }else if((first_side==="r" && second_side==="p")||(first_side==="r" && second_side==="s")){
        console.log("Player 1 wins the game.")
        console.log()


    }else{   // if not tied or not player 1 wins so obviously player2  wins
        console.log("Player 2 wins The Game")
        console.log()
    }

}




//main game loop
function game_Loop(){
    while (true){
        // get the return values of both functions in varible
        let first_side=first_Player_Input()
        let second_side=second_Player_Input()
        //call check winner function
        check_Winner(first_side,second_side)

        //after every game play ask for another play
        while(true){
            console.log();
            let another_Try = prompt("Do you want to play again (Y/N): ").trim().toLowerCase();

            // if not getting valid input
            if (another_Try !== "y" && another_Try !== "n"){
                console.log("Please enter either 'Y' or 'N'.");
            
            // if want to play again
            } else if (another_Try === "y"){
                console.log("Alright, play again!!");
                break;
            // if he dont want to play.
            } else {
                console.log("Goodbye!!");
                return
            }
        }
        
        
    }

}
game_Loop()    //calling main game loop


