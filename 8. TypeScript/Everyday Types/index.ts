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

const names: Array<string> = ["ajay", "alice", "bob"];

names.forEach((s: string) => {
  console.log(s.toUpperCase());
});
