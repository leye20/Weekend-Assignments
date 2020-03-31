/**
 * Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
 * 
 * The solution however is not running on edabit, but brings out the desired result here, so not sure why.
 * referenced stackoverflow and freecodepen.
 */

function makeTitle(str) {
    let changeStr = str.toLowerCase().split(' ');
    for (let i = 0; i < changeStr.length; i++) {
        changeStr[i] = changeStr[i].charAt(0).toUpperCase() + changeStr[i].substring(1);  // function that takes the first character in each word  
    }
    return changeStr.slice(' '); // this return's the combine string
 }
 
 return makeTitle("learn javascript by the day!");


 /**
  * 
  */