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

