/* Lesson 14: For In Loop */

let obj = {
    name: "Lenny",
    tech: "JS",
    laptop: {
        cpu: "i7",
        ram: 4,
        brand: "Asus",
    }
};

for (let key in obj) {
    console.log(key, obj[key]);
}

for (let key in obj.laptop) {
    console.log(key, obj.laptop[key]);
}