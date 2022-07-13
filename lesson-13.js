/* Lesson 13: Objects */

// Object Literal
let alien = {
    name: "Lenny",
    tech: "JS",
    'work exp': 1
};

console.log(alien);
console.log(alien.name);
console.log(alien['name']);

console.log(alien['work exp']);

let input = 'name';
console.log(alien[input]);

// Complex Object -> object within an object
let obj = {
    name: "Lenny",
    tech: "JS",
    laptop: {
        cpu: "i7",
        ram: 4,
        brand: "Asus",
    }
};

console.log(obj);
console.log(obj.laptop);
console.log(obj.laptop.brand);
console.log(obj.laptop.brand?.length); //? prevents error if 'brand' did not exist

// delete
delete obj.laptop;

console.log(obj);