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
//https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript
let toArray = Object.keys(obj).map(function(key) { // define the result variable and set the iteration.
    return [key, obj[key]] // converts the number to an array
});

console.log(toArray);

/**
 * Code along on from lynda.com
 * Trying out some exercises.
 */

 var i = 567;
 var reps = 0;

 if ( i <= 567 ) 
 {
    do {
        ++reps;
        console.log( reps + " reps gives us" + i );
        i*=2.1;
    } while ( i < 567 );
} else {
        console.log( "i is bigger than 567." );
    }

// Break Loop example!
const MIN = 0;
const MAX = 36;
var testNumber = 15;
var i = 1;

while ( MAX ) 
{ // Math is the object, while floor and random are methods used to generate the random number.
    let randomValue = Math.floor( Math.random() * ( MAX - MIN ) ) + MIN;

    if ( randomValue == testNumber )
    {
        break; // the break statement terminates and moves out of the loop to the next code line, which is the last console.log line ref line 80.
    }
    console.log( "Round " + i + ": " + randomValue );
    i++;
}

console.log( "The script went " + i + " rounds before finding " + testNumber + "." );

// Continue Loop example