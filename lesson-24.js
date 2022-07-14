/* Lesson 24: Array Method filter map reduce */

let nums = [42,51,24,98,65,12];

//get elements that match a condition
let result = nums.filter(n => n % 2 === 0)
    .map(n => n * 2) //take a value and change it
    .reduce((a,b) => a + b); //operation to perform

console.log(result);