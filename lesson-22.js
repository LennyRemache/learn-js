/* Lesson 22: Arrays */

// Creating Array
// let values = new Array();
let values = [5,7,8];

console.log(values.length);
values.push(10);
values.push(10);
console.log(values);

// Fetching Elements 
console.log(values[0]);
console.log(values[3]);

let data = ['Lenny', 'Julissa', 'Kirby', 8, {tech: 'JS'}, true, function(){console.log('hello world')}];
data[4] = 'Hi lol';
data.push('Jason');
console.log(data);
console.log(data[0][0]);

data[6]();

// Array Methods
let new_data = [5,7,8,9,4];
console.log(new_data.push(2)); // returns length of array with newly pushed element
console.log(new_data); 

console.log(new_data.pop()); // LIFO -> returns element being removed
console.log(new_data); 

console.log(new_data.shift());
console.log(new_data); // shifts the array to the left, which ends up removing any elements on the first left

console.log(new_data.unshift(2)); // unshifts the array and adds the element to the first position of the array
console.log(new_data);

console.log(new_data.splice(3)); // removes everything from index defined to the end of the array
console.log(new_data);

console.log(new_data.splice(2,1)); // removes everything from index defined to the the number of the elements defined to remove
console.log(new_data);

// for of loop accesses the values whereas for in accesses keys
let nums = []; 
nums[0] = 5;
nums[99] = 9;

for(let n of nums) {
    console.log(n);
}

for(let i in nums) { // get the index values as keys of the array values
    console.log(i);
}
for(let i in nums) { // get the index values as keys of the array values
    console.log(nums[i]);
}

// Array destructuring
let myArr = [5,7,2,4];
//console.log(myArr);

// destructuring
let [a,b,,d] = myArr;
console.log(a,b,d);

let x = 5;
let y = 6;
[x,y] = [y,x]; // swapping 
console.log(x,y);

// split method to make string into array of strings
let words = "My name is Lenny Remache".split(' ');

let [e,f,, ...h] = words;
console.log(words);
console.log(h);