/* Lesson 20: this Keyword */


let laptop2 = {
    cpu: "i7",
    ram: 16,
    brand: "Apple"
}

let laptop = {
    cpu: "i9",
    ram: 16,
    brand: "HP",

    // this keyword did not work within an anonymous arrow function
    getConfig: function() {
        console.log(this.cpu);
    },
    compare: function(other) {
        if (this.cpu > other.cpu) {
            console.log(this);
        }
        else {
            console.log(other);
        }
    }
}

laptop.getConfig();
laptop.compare(laptop2);