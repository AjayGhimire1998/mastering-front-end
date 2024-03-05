// function sayHiBye(firstName, lastName) {

//     // helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }

//     console.log( "Hello, " + getFullName() );
//     console.log( "Bye, " + getFullName() );

//   }

//   sayHiBye("ajay", "ghimire");

// function makeCounter(){
//   let count = 0;

//   return function(){
//     return count++;
//   }
// }

// let counter = makeCounter();
// console.log(counter());
// console.log(counter());

// function f(){
//   let value = 123;

//   return function(){
//     console.log(value);
//   }
// }

// let g = f();
// g();

// let g = f();
// let arr = [f(), f(), f()];
// for(let f of arr){
//   console.log(f());
// }

// let value = "AJay";

// function f() {
//   // let value = "Kumar";
//   // console.log(value);
//   function g() {
//     let value = "Ghimire";
//     // console.log(value);
//     return function h() {
//       return value;
//     }
//   }
//   return g;
// }

// let fn = f();
// console.log(fn());

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
//   sayHi()
// }

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(sum(1));
// console.log(sum(1)(2));

/* .. your code for inBetween and inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// console.log(arr.filter(inBetween(3,6)));

// function inArray(arr){
//   return function (x){
//     return arr.includes(x);
//   }
// }

// console.log( arr.filter(inArray([1, 2, 10])) )
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];
// function byField(field) {
//   return function(a,b){
//     return a[field] > b[field] ? 1 : -1;
//   }
// }

// console.log(users.sort(byField('surname')));

// function sayHi() {
//   phrase = "Hello";

//   console.log(phrase);

//   var phrase;
// }
// sayHi();


// function hello(name, gh){
//   var name = "AJay";
//   console.log("hello " + name);
// }


// let sayHi = function() {
//   alert("Hi");
// };
// console.log(sayHi.name);

// var name = "Ajay"
// globalThis.name = "AJAYYY"

// console.log(globalThis.hello);
// console.log(globalThis.name);


// if(!global.Promise){
//   console.log("you are old");
// } else {
  // console.log(global);
// }