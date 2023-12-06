// const { describe } = require("node:test");

// function sum(a, b){
//     return a+b;
// }

// describe("sum", function(){
//     it("sums two legit numbers", function(){
//         assert.equal(sum(1,2), 3);
//         // assert.equal(sum(66.5, 1.5), 68);
//     });
// });


// function decalaration 

// function add(a,b){
//     return a+b;
// }

// console.log(add(2,5));


// //anonymous function expression
// const sum = function (a,b) {
//     return a+b
// }
// console.log(sum(3,5));


//callback fn 

// function executeMe(fn) {
//     fn();
// }

// executeMe(() => console.log("Executing right now,"))

// function getLogger() {
//     return function(val) {
//         console.log("The value: ", val);
//     }
// }

// let logger = getLogger();
// logger("AJay")



//IIFE can be anonymous
// (function(a,b){
//     console.log(a+b);
//     return a+b;
// })(1,4);


//named func expression for recursion
// const nums = [1,2,3,4,5,6];

// const fibs = nums.map(function fib(n){
//     if (n === 1) return 0;
//     if (n===2) return 1;
//     return fib(n-1) + fib (n-2);
// })

// console.log(fibs);
// console.log(fib); //reference err

// function repeatStringNumTimes(str, num) {
//     let temp = str;

//     for(let i = 0; i < num-1; i++){
//         temp += str;
//     }

//     return temp;
//   }
  
//   console.log(repeatStringNumTimes("abc", 3));

// function truncateString(str, num) {
//    if (num < str.length){
//     return str.slice(0,num) + "...";
//    }

//    return str
//   }
  
//   console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))


//this 

// function fn(){
//     console.log(this.x);
    
// }
// var x = 10;
// fn();


// console.log(this);



