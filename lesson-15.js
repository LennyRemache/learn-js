/* Lesson 15: Functions, returns, and parameter passing */

// function
function greet1() {
    console.log("Hello World");
}
greet1();

// return
function greet2() {
    return "Hello World!";
}
let str = greet2();
console.log(str);

// parameter passing
function greet3(str) {
    console.log(`Hello ${str}!`);
}
let new_str = "Lenny";
greet3(new_str);