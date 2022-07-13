/* Lesson 12: While Loop, Do While Loop, and For loop */

let i = 0;

// while loop
while (i < 3) {
    console.log(i);
    ++i;
    if (i === 3) {
        console.log('Reached the end');
    }
}

// do while loop -> does the action first before checking condition
i = 3;
do {
    console.log(i);
    ++i;
    if (i === 3) {
        console.log('Reached the end');
    }
}
while (i < 3);

// For Loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}