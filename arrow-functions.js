/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a,b) {
//     // code block here
//     return a + b;
// }

// call the function
// let sum = addTwoNumbers(3,5);
// console.log(sum);

// Arrow Function With Parameters. Define the function using "constant" plus the function name and set it equal to a set of parentheses
// that contains our parameters, then a "fat arrow" pointing to our opening curly braces with the function body, then close the curly braces.
// The function is called in the exact same way.

const addTwoNumbers = (a,b) => {
    // code block here
    return a + b;
}

// // call the function
let sum = addTwoNumbers(3,5);
console.log(sum);
// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a,b) => (a + b);

let sums = addTwoNumbers2(6,6);
console.log(sums);


// Implicit Returns
const saySomething = message => console.log(message);
saySomething("I learned a new thing");
const sayHello = () => console.log("hello");
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());