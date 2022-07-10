/* Lesson 3: Data Types */

// primitive data types -> number, string, boolean, null, undefined, symbol

// Number
let data = 8; 

let num1 = 7.8; // floating point representation is also a number
console.log(num1 * 25);
console.log(typeof num1);

let num2 = 0xf; // hex number
console.log(num2);
console.log(typeof num2);

let num3 = 1e2; // 1 * 10^2
console.log(num3);

let num4 = -5/0; // - infinity
console.log(num4);

let num5 = 5/0; // infinity
console.log(num5);

console.log(Number.MAX_VALUE);

let num6 = 1050505050050505005050050501n; // n used for BigInt
console.log(num6 + 2n);

// String
let firstName = "Lenny"; // string literal
let lastName = "Remache"

console.log(typeof firstName);
console.log(firstName);

// String Concatenation
let fullName = firstName + " " + lastName;
console.log(fullName)

let user = "Lenny Remache \"Lenny1x\""; // backslash allows for reuse of double quotes by cancelling the meaning of the quotes it is used in
console.log(user);

let user1 = "Lenny\nRemache"; // new-line character
console.log(user1);

let user2 = "Lenny\tRemache"; // tab character
console.log(user2);

let user3 = "Lenny\vRemache"; // vertical-tab character
console.log(user3);

let user4 = "Lenny\b Remache"; // backspace character
console.log(user4);

// Boolean 
let bool = 5 > 6;
console.log(bool);

let bool1 = 5 < 6;
console.log(bool1);

console.log(typeof bool);

// NULL
let temp = null;
console.log(temp);
console.log(typeof temp);

// Undefined
let newTemp = undefined;
console.log(newTemp);
console.log(typeof newTemp);

//Nan -> Not A Number
console.log(5 / "abc");
console.log(typeof (5 / "abc"));