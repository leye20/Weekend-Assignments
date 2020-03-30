/*
* Assignment 1
* Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
*/

function calculator (num1, operator, num2) {
    if ( operator == '*' ); // Assign the operator
    return num1 * num2;
}
// Replicating for division
function mathOperation (num1, operator, num2) {
    if ( operator == '/' ); // Assign the operator
    return num1 / num2;
}

console.log(calculator(3, '*', 6));
console.log(mathOperation(6, '/', 13));

/**
 * Assignment 2
 * Write a function that converts and object into an array, where each element represents a key-value pair.
 */

// Declare the object value (JSON)

let obj = {
    'blue':    7,
    'red':     6,
    'green':   5,
    'yellow':  4,
    'violet':  3,
    'crimson': 2,
    'orange':  1
}
// selecting the object properties (reference path of the codelines below was gotten from stack overflow)
let toArray = Object.keys(obj).map(function(key) { // define the result variable and set the iteration.
    return [key, obj[key]] // converts the number to an array
});

console.log(toArray);