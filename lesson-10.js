/* Lesson 10: Switch Statement */

let day = "Monday";

// once a case is met it will follow through with every case following it, so you need a break statement
switch(day) {
    case 'Monday':
        console.log("7am");
        break;
    case 'Tuesday':
    case 'Wednesday':
        console.log("4am");
        break;
    default: // if no cases met a default case is executed
        console.log('No Cases Matched')
}