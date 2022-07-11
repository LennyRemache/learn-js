/* Lesson 7: Logical Operators */

let x = 7, y = 8, z = 9;

let result = (x < y) && (x > z); // AND operator
console.log(result);

result = (x < y) || (x < z); // OR operator
console.log(result);

result = !(x < y); // NOT operator
console.log(result);