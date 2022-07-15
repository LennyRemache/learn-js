/* Lesson 25: Sets */

// sets contain unique elements, do not have indices, ordered in JS only
let nums = new Set("bookkeeper");

nums.add(3)
nums.add(4)
nums.add(3)
nums.add(4)
nums.add(3)
nums.add(8)
nums.add(9)

console.log(nums);

nums.forEach(value => console.log(value));

console.log(nums.has(3));