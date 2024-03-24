// function padLeft(padding: number | string, input: string): string {
//   if (typeof padding === "number") {
//     return " ".repeat(padding) + input;
//   }
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
console.log(move({
    swim: function () {
        return "I am swimming";
    },
}));
//instancof narrowing
function logVal(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
logVal(new Date());
