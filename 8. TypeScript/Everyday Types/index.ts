/* The commented code block is written in TypeScript and demonstrates various concepts such as variable
declaration, functions, async functions, type annotations, union types, type aliases, and type
checking. */
// let myName: string = "Ajay";
// console.log(myName);

// //functions

// function greet(name: string): string {
//   return "hy " + name;
// }

// // console.log(greet(myName, 35));
// // console.log(greet(42));

// async function getNum(): Promise<number> {
//   return new Promise((res, rej) => res(26));
// }

// getNum().then((res) => {
//   console.log(res);
// }).then(() => {
//     console.log(27);

// })

// const names: Array<string> = ["ajay", "alice", "bob"];

// names.forEach((s: string) => {
//   console.log(s.toUpperCase());
// });

// function printCoords(pt: { x: number; y: number }) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }

// printCoords({ x: 3, y: 7 });

// function printName(obj: { first: string; last?: string }) {
//   console.log(obj.first + obj.last);
// }

// function printName(obj: { first: string; last?: string }) {
//   // Error - might crash if 'obj.last' wasn't provided!
//   console.log(obj.last?.toUpperCase());
//   if (obj.last !== undefined) {
//     // OK
//     console.log(obj.last.toUpperCase());
//   }

//   // A safe alternative using modern JavaScript syntax:
//   console.log(obj.last?.toUpperCase());
// }
// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });

//union types

// function printId(id: string|number){
//   console.log("ID is: " + id);
// }

// printId("ajay123")
// printId(234);
// printId({id: 123})

// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     // Here: 'x' is 'string[]'
//     console.log("Hello, " + x.join(" and "));
//   } else {
//     // Here: 'x' is 'string'
//     console.log("Welcome lone traveler " + x);
//   }
// }
// welcomePeople(["alice", "jhane"])
// welcomePeople("ajay");

//type aliases

// type Name = {
//   first: string,
//   last: string
// }

// function printName(name: Name){
//   console.log(name.first + " " + name.last );
// }

// printName({first: "Ajay", last: "Ghimire"});

//or

// type ID = number | string;

// /**
//  * The function `printID` takes an `ID` parameter and prints it in uppercase if it is a string.
//  * @param {ID} id - The `id` parameter is of type `ID`, which is expected to be a string.
//  */
// function printID(id: ID) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   }
//   console.log(id);
// }

// printID("ajay123");
// printID(2445);

//interfaces
/**
 * The function `getBear` takes in a `Bear` object and returns it.
 * @param {Bear} bear - The `bear` parameter in the `getBear` function is of type `Bear`, which extends
 * the `Animal` interface and includes an additional property `honey` of type boolean.
 * @returns The function `getBear` is returning an object with the properties `{name: "Bear1", honey:
 * false}`.
 */

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal{
//   honey: boolean;
// }

// function getBear(bear: Bear){
//   return bear;
// }

// console.log(getBear({name: "Bear1", honey: false}));

// interface Animal {
//   name: string;
// }

// interface Animal {
//   honey: boolean;
// }

// function getBear(bear: Animal){
//   return bear;
// }

// console.log(getBear({name: "Bear1"}));

//type assertions
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// let x = "hello" as any as number;

// // x = 2;

// console.log(x);

//literal types

// let x : "hola" = "hello";
// // x = "hola";
// console.log(x);

// function compare(a: string, b: string): -1 | 0 | 1 {
//   return a === b ? 0 : a > b ? 1 : -1;
// }

//literal types inference

// function handleReq(url: string, method: "GET" | "POST"): void {
//   console.log(url, method);
// }

// const req = { url: "www.xyx.com", method: "GET" };

// handleReq(req.url, req.method as "GET");

// const req2 = { url: "www.xyx.com", method: "POST" } as const;

// handleReq(req2.url, req2.method);

//null and undefined

// function doSome(x:string | null | undefined){
//   if(x === null || x === undefined){
//     console.log("Null detected");
    
//   } else {
//     console.log("Hello " + x.toUpperCase());
//   }
// }

// doSome("ok");
