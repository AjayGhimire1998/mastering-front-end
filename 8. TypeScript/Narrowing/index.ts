// function padLeft(padding: number | string, input: string): string {
//   if (typeof padding === "number") {
//     return " ".repeat(padding) + input;
//   }

//   return padding + input;
// }

// console.log(padLeft(12, "ok"));

// type guard

// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// }

// printAll(["ajay", "alice"])

// console.log(typeof 245215686561389562379857823n);

// function printAll(strs: string | string[] | null) {
//   if (strs && typeof strs === "object") {
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     console.log("null");
//   }
// }

// printAll(["ajay", "alice"]);
// printAll("ajay");

//equality narrowing

// function example(x: string | number, y: string | boolean) {
//   if (x === y) {
//     console.log(x.toUpperCase());
//     console.log(y.toUpperCase());
//   } else {
//     console.log(x);
//     console.log(y);
//   }
// }

// example("one", "one")
// example("", false);

//in operator narrowing

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}

console.log(
  move({
    swim: () => {
      return "I am swimming";
    },
  })
);


//instancof narrowing

function logVal(x: Date | string){
    if (x instanceof Date){
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
        
    }
}

logVal(new Date())