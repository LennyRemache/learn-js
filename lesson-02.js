/* Lesson 2: Constants */

let radius = 5;
const pi = 3.14; // const prefix prevents variable from being modified
let area;

radius = 6;
pi = 3.22; // will cause error because const variable can not be re-assigned
area = pi * radius**2;

console.log(area);