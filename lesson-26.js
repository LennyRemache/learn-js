/* Lesson 26: Maps */

// key value pair
// unique keys
let map = new Map();

map.set(1, 'Lenny');
map.set("world", 21);

console.log(map);
console.log(map.keys());

console.log(map.has('Lenny'));
console.log(map.has('world'));

for (let [k,v] of map) {
    console.log(k, v);
}

map.forEach((value, key) => {
    console.log(key, " : ", value);
})