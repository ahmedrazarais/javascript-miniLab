// Social Media Profile Management:
// Build a class UserProfile that represents a user's profile on a social media platform. It should have properties like username, bio, followers, following, and methods to update the profile information, follow other users, and display the profile details.

// Importing the prompt-sync library for synchronous prompt input
let prompt = require('prompt-sync')();

// Class representing a user's profile on a social media platform
class UserProfile {
    constructor() {
        // Initialize profile attributes
        this.username = "";
        this.bio = "";
        this.followers = 0;
        this.following = 0;
    }

    // Method to set the username for the profile
    set_Username() {
        console.log("Here You Can Set Your username...");
        while (true) {
            // Prompt the user to enter a username
            let username = prompt("Enter Your username:").trim();
            let alphabets = /^[a-zA-Z]+$/;
            // Validate the username format
            if (username.length > 1 && alphabets.test(username)) {
                // If the username is valid, set it and notify the user
                this.username = username;
                console.log(`Congratulations!! Your username is set to ${username}`);
                return username;
            } else {
                // If the username is invalid, prompt the user to enter again
                console.log("Username is mandatory and only alphabets allowed.");
            }
        }
    }

    // Method to set the profile bio
    set_Bio() {
        console.log("Here You Can Set Your Bio...");
        while (true) {
            // Prompt the user to enter a bio
            let bio = prompt("Enter Your profile Bio:").trim();
            // Validate the bio
            if (bio.length > 1) {
                // If the bio is valid, set it and notify the user
                this.bio = bio;
                console.log(`Congratulations!! Your Bio is set to ${bio}`);
                return bio;
            } else {
                // If the bio is invalid, prompt the user to enter again
                console.log("Profile Bio is mandatory.");
            }
        }
    }

    // Method to set the number of users the profile is following
    set_Following() {
        console.log("Here You Can Increase Your Followings")
        while (true) {
            // Prompt the user to enter the number of following
            let following = prompt("Enter Your profile Following Numbers:").trim();
            let digits = /^\d+$/;
            // Validate the input for following count
            if (digits.test(following) && following >= 0) {
                // If the input is valid, set the following count and notify the user
                this.following = following;
                console.log(`Congratulations!! Your following count is set to ${following}`);
                return following;
            } else {
                // If the input is invalid, prompt the user to enter again
                console.log("Following Number is mandatory, only non-negative digits allowed.");
            }
        }
    }

    // Method to set the number of followers for the profile
    set_followers() {
        console.log("Here You Can Increase Your Followers")
        while (true) {
            // Prompt the user to enter the number of followers
            let followers = prompt("Enter Your profile Followers Numbers:").trim();
            let digits = /^\d+$/;
            // Validate the input for followers count
            if (digits.test(followers) && followers >= 0) {
                // If the input is valid, set the followers count and notify the user
                this.followers = followers;
                console.log(`Congratulations!! Your followers count is set to ${followers}`);
                return followers;
            } else {
                // If the input is invalid, prompt the user to enter again
                console.log("Followers Number is mandatory, only non-negative digits allowed.");
            }
        }
    }

    // Method to view the profile details
    view_Profile() {
        console.log("Here You can See Your Profile view");
        // Display username
        if (this.username === "") {
            console.log("Username is not set yet!");
        } else {
            console.log(`Username: ${this.username}`);
        }

        // Display bio
        if (this.bio === "") {
            console.log("Profile bio is not set yet!");
        } else {
            console.log(`Profile Bio: ${this.bio}`);
        }
        // Display followers and following count
        console.log(`Followers: ${this.followers}`);
        console.log(`Following: ${this.following}`);
    }

    // Main program to interact with the user
    main_Program() {
        console.log("Welcome To Social Media Platform.");
        while (true) {
            // Display menu options
            console.log("\t1. View Your Profile");
            console.log("\t2. Set Your Profile Username");
            console.log("\t3. Set Your Profile Bio");
            console.log("\t4. Set Your Profile Following");
            console.log("\t5. Set Your Profile Followers");
            console.log("\t6. Exit From Program");
            console.log();

            // Prompt user for choice
            let get_Choice = prompt("Enter Your Desired Choice: ").trim();

            // Handle user choice
            if (get_Choice === "1") {
                this.view_Profile();
            } else if (get_Choice === "2") {
                this.set_Username();
            } else if (get_Choice === "3") {
                this.set_Bio();
            } else if (get_Choice === "4") {
                this.set_Following();
            } else if (get_Choice === "5") {
                this.set_followers();
            } else if (get_Choice === "6") {
                // Exit the program
                console.log("Platform is Exiting...");
                console.log();
                return;
            } else {
                // Handle invalid input
                console.log("Invalid Option. Please select from the given choices.");
                console.log();
            }
        }
    }
}

// Create an instance of UserProfile class
let instagram = new UserProfile();

// Start the main program
instagram.main_Program()
