//create a new button elemenet.Give a text click me,background color of red and text color white
//insert  button as first element inside body tag.

// Create a new button element
let new_button = document.createElement("button");

// Set the text of the button to "Click Me"
new_button.innerText = "Click Me";

// Set the text color of the button to white
new_button.style.color = "white";

// Set the background color of the button to red
new_button.style.backgroundColor = "red";

// Insert the button as the first element inside the body tag
document.querySelector("body").prepend(new_button);
