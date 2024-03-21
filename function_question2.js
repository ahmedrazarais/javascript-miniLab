// Question:
// Write a function called capitalizeWords that takes an array of words as input and returns a new array where each word is capitalized (the first letter of each word is capitalized). For example, if the input array is ["apple", "banana", "cherry"], the function should return ["Apple", "Banana", "Cherry"]. After writing the capitalizeWords function, test it with different arrays of words to ensure it works correctly.

// Write your solution below.

// Function to capitalize the first letter of each word in an array
function capitalizeWords(wordsArray) {
    // Initialize an empty array to store capitalized words
    let capitalizedArray = [];

    // Iterate through each word in the input array
    for (let word of wordsArray) {
        // Capitalize the first letter of the word and concatenate it with the rest of the word
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        
        // Push the capitalized word into the new array
        capitalizedArray.push(capitalizedWord);
    }

    // Return the array of capitalized words
    return capitalizedArray;
}

// Test the function with the provided array of words
let fruitsArray = ["apple", "banana", "cherry"];
console.log(capitalizeWords(fruitsArray)); 
