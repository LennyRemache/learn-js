/* Relational Operators */

// Number compared to Number
console.log(7 > 6);
console.log(7 < 6);

let data = 7 >= 6;
console.log(data);

console.log(7 <= 6);

let x = "Pen";
let y = "Book";

// String compared to String
let data2 = x > y; // compares each letter's ASCII value
console.log(data2);

// String compared to Number
let i = "2"; // converts to a number
let j = 1;

let data3 = i > j;
console.log(data3);

x = 3;
y = 3;

// Equality Operator ==, checks only data
data = x == y;
console.log(data);

x = "3";
y = 3;

data = x == y;
console.log(data);

// Strict Equality Operator ===, checks data and type
x = "3";
y = 3;

data = x === y;
console.log(data);
