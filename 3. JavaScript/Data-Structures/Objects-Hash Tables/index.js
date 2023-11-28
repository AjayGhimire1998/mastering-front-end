

// prototypical inheritance

const { log } = require("console");
const { prototype } = require("events");

let animal = {
    eats: true,
    walk(){
        console.log("Animal walks");
    }
}

animal.walk(); //Animal walks

let cat = {
    jumps: true,
}

cat.__proto__ = animal;

cat.walk()
let longTail = {
    tailLength: 10,
    __proto__: cat
}
console.log(longTail.jumps);
longTail.walk()