/* Lesson 23: Array forEach method */

let nums = [42,51,24,98,65,12];

// gives one value of the array at a time, which then has a function perform actions on each element one at a time
// function within a function
nums.forEach((n, i ,nums) => {
    console.log(n, i , nums);
});

console.log(nums);