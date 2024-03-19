// multiplication table.

let number=6;

for (let i=1;i<=10;i++){
    result=number*i
    console.log(number , "*", i ,"=", result )
}
console.log()
// checking for prime number

input_number = 4;
is_prime = true;     // initilaize it to true
count = 0;

// Iterate from 2 to the square root of the number
for (let j = 2; j * j <= input_number; j++) {
  if (input_number % j === 0) {
    is_prime = false;  
    break;   //breaking from loop
  }
}

//Printing according to conditions
if (is_prime) {
  console.log(`${input_number} is a prime number`);
} else {
  console.log(`${input_number} is not a prime number`);
}
