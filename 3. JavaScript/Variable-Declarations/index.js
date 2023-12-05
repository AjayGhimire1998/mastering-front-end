"use strict";

// // var declaration
// // var fullName = "Ajay";

// // if (fullName === "Ajay") {
// //   var fullName = "Ajita";
// //   console.log(fullName); // "Ajita"
// // }
// // console.log(fullName); // "Ajita"

// var x = 1;
// function foo() {
//   var x = 2;
//   function bar() {
//     var x = 3;
//     var y = 4;
//     console.log(x); // 3 ('x' is in scope)
//     console.log(y); // 4 (`y` is in scope)
//   }
//   bar();
//   console.log(x); // 2 (`x` is in scope)
//   console.log(y); // ReferenceError, `y` is scoped to `bar`
// }
// foo();
// console.log(x); // 1 ('x' is in global scope)

// // let declaration
// function foo() {
//   let x = 1;
//   function bar() {
//     let x = 2;
//     let y = 3;
//     console.log(x); // 2 ('x' is in scope)
//     console.log(y); // 3 (`y` is in scope)
//   }
//   bar();
//   console.log(x); // 1 (`x` is in scope)
//   console.log(y); // ReferenceError, `y` is scoped to `bar`
// }
// foo();
// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined

// // const declaration
// function foo() {
//   const x = 1;
//   function bar() {
//     const x = 2;
//     const y = 3;
//     console.log(x); // 2 ('x' is in scope)
//     console.log(y); // 3 (`y` is in scope)
//   }
//   bar();
//   console.log(x); // 1 (`x` is in scope)
//   console.log(y); // ReferenceError, `y` is scoped to `bar`
// }
// foo();
// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined

// let message;
// console.log(message); //ReferenceError: message is not defined
// message = "Hello";









