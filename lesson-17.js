/* Lesson 17: Local-Global Variables and Default Parameters */

// str is a local variable
function greet3(str = "Default Name") {
    console.log(`Hello ${str}!`);
    let num = 0; // local variable can not be used outside of the function
}

// Global Variable
let new_str = "Lenny";
greet3(new_str);
greet3();