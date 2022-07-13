/* Lesson 16: Function Expression */

//anonymous function is a function that has no specified name
// anonymous function assigned to a variable/object
let add = function(num1, num2) { // function expression
    return num1 + num2;
};

let result = add(5, 2);
console.log(result);

let sum = add;
console.log(sum(5,5));