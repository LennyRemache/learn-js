/* Lesson 4:  Type Conversion and Type Coercion */

// Explicit Type Conversion
// Number to String
let num = 6;
console.log(num, typeof num);

num = String(num);
console.log(num, typeof num);

// String to Number
let num2 = "123";
console.log(num2, typeof num2);

num2 = Number(num2);
console.log(num2, typeof num2);

// Type Coercion
let x;
console.log(x, typeof x);

x = 8;
console.log(x, typeof x);

// number + string is string
x = x + "";
console.log(x, typeof x);

// string - number is number
x = x - 2;
console.log(x, typeof x);

// !number is false
x = !x;
console.log(x, typeof x);

// boolean of all pos/neg numbers is true besides 0
console.log(Boolean(7));
console.log(Boolean(0));

// boolean(null) is false
console.log(Boolean(null));

// boolean + number is number because false treated as 0 and true treated as 1
x = x + 2;
console.log(x, typeof x);

x = "8" + 2;
console.log(x, typeof x);

// Unary operator to try to change "8" from string to number before adding 2
x = +"8" + 2;
console.log(x, typeof x);

let y = "123 Lenny";
console.log(y, typeof y);

y = Number(y);
console.log(y, typeof y);

y = "123 Lenny";
y = parseInt(y); // get the numbers from the start of the string
console.log(y, typeof y);

y = "a 123 Lenny"; // wont work because does not start with numbers NaN
y = parseInt(y);
console.log(y, typeof y);