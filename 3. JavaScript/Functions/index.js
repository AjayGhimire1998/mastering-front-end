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


//func scope and stack

//recursion

// let x = 0; 
// while (x < 10) {
//     console.log(x);
//     x++;
// }

// function loop(x) {
//     //break point 
//     if (x >= 10){
//         return;
//     }
//     // console.log(`begin: ${x}`);
//     loop(x + 1);
//     console.log(`end: ${x}`);
// }
// loop(0)

//nested and closures

// function multiplySums(a,b){
//     function sum(x,y){
//         return x+y;
//     }
//     return sum(a,b) * sum(a,b)
// }

// console.log(multiplySums(2,4));


// function outside(x){
//     function inside(y){
//         return x+y;
//     }
//     return inside;
// }

// console.log(outside(2)(3));

//argument object 


// function myConcat(separator) {
//     let result = "";

//     for(let arg of arguments) {
//         result += arg + separator
//     }
//     return result;
// }

// console.log(myConcat("+", "red", "green", "blue"));


//params

// function multiply(a,b = 2){
//     return a* b;
// }

// console.log(multiply(5, 6));

//rest params 
// function add(adder, ...otherArgs){
//     return otherArgs.map((x) => adder+x);
// }

// console.log( add(2,3,4,5))


//arrow functions

// const arr = ["H", "He", "Li", "Be"];

// const arr2 = arr.map(function(e) {
//     return e.length
// })

// console.log(arr2);

// const arr3 = arr.map((e) => e.length)
// console.log(arr3);

//this binding

// function Person(){
//     const that = this;
//     that.age = 0;

//    setInterval(function growUp(){
//     that.age++;
//     // console.log(that.age);
//    }, 1000)
    
// }

// const p = new Person();

// console.log(p);

// let limit = 0;
// function checkRecurLimit(){
// limit++;
// console.log(limit);
// checkRecurLimit();
// }

// checkRecurLimit();


//lexical scope 

// const fullName = "AJay G";

// function profile(){
//     const fullName = "Mr. AJ"
//     function sayMyName(){
//         const fullName = "Heisenberg"
//         function writeName() {
//             return fullName;
//         }
//         return writeName();
//     }
//     return sayMyName();
// }
// console.log( profile());


// var a = 'static';

// function f1() {
//    console.log(a);
// }

// function f2() {
//    var a = 'dynamic';
//    f1();
// }

// f2();


// var largestOddNumber = function(num) {
//     if (num.length === 0)  return "";

//     if (+num % 2 === 1) return num;

//     for(let i = num.length-1; i >= 0; i--){
//         if (+num[i] % 2 === 1) {
            
//             return num.slice(0, i+1)
//         }
//     }
//     return "";

// };

// console.log(largestOddNumber());

var twoSum = function(nums, target) {
    


    for(let i = 0 ; i < nums.length-1; i++){
        for (let j = 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target && i !== j) {
                return [i,j];
            }
        }
    }
    return null;
};

console.log(twoSum([2,5,5,11], 10));

