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
function printId(id) {
    console.log("ID is: " + id);
}
printId("ajay123");
printId(234);
// printId({id: 123})
