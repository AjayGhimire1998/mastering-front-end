

// prototypical inheritance

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

let longTail = {
    tailLength: 10
}