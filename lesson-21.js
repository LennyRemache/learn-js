/* Lesson 21: Constructor Function */

function Alien(name, tech) {
    this.name = name;
    this.tech = tech;

    this.work = function() {
        console.log('Hi lol');
    }
    //return this; // returning object not necessary, something done automatically but we can't see. skips if not returning an object
}
// every new object you create you must use the new keyword
let alien1 = new Alien('Lenny', 'JS');
let alien2 = new Alien('Julissa', 'Python');

console.log(alien1);
console.log(alien2);

alien1.work();