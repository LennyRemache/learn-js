/* Lesson 5: Arithmetic Operators */

let num1 = 4;
let num2 = 2;

let result = num1 + num2;
console.log(result);

result = num1 - num2;
console.log(result);

result = num1 / num2;
console.log(result);

result = num1 * num2;
console.log(result);

result = num1 % num2;
console.log(result);

num1 = num1 + 2;
console.log(num1);

num1 += 2;
console.log(num1);

num1++; // adds 1 which is called a post increment -> assign first before incrementing if doing something like let x = num1++, x will have original num1 val assigned and num1 value will then increment
++num1; // pre increment

num1--; // post decrement
--num1; // pre decrement

result = Math.pow(4, 3);
console.log(result);

result = 4**3
console.log(result);