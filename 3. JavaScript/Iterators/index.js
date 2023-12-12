

// let nums = [1,2,3,10];
// for(let i = 0 ; i < nums.length; i++){
//     console.log(nums[i]);
// }

//for..of iterator

// for(let num of nums){
//     console.log(num);
// }

// const str = "hello";

// for(let char of str){
//     console.log(char.toUpperCase());
// }

// var uint8 = new Uint8Array([15, 192, 16]);

// for (var byte of uint8) {
//     console.log(byte);
//    console.log(byte.toString(2));
// }


//a simple iterator

// let nums = [1,5,167];

// function makeIterator( nums ) {
// let count = 0;

// return {
//     next(){
//         if(count > nums.length - 1){
//             return {value: undefined, done: true}
//         }
//         return {value: nums[count++], done: false}
//     }
// }
// }
// let iter = makeIterator(nums);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


//using symbol.iterator

// let str = "Ajay Ghimire";

// let itr = str[Symbol.iterator]();

// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

// console.log(itr.next());console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());


//working of for...of loop
// var nums = [1, 5, 16];

// for (
//    // initialisation
//    var iter = nums[Symbol.iterator](),
//    next = iter.next(),
//    num = next.value;

//    // iterative check
//    !next.done;

//    // iterative expressions
//    next = iter.next(),
//    num = next.value
// )

// {
//    console.log(num);
// }


// function isIterable (o) {

//     return Symbol.iterator in Object(o);
// }

// console.log(isIterable([]));


//makeing numbers iterable


// Number.prototype[Symbol.iterator] = function() {
//    return this.toString()[Symbol.iterator]();
// }
// let num = 135353;

// for(let n of num){
//     console.log(n);
// }


//making obj iterable


// let o = {x: 10, y: 20, z: 30}

// Object.prototype[Symbol.iterator] = function () {
//     return Object.values(this)[Symbol.iterator]();
// }

// for (let v of o) {
//    console.log(v);
// }

//Generators

//normal geenrator func

// function positiveInts(n){
//     let i = 1;
//     let max = (n < 1 || typeof n !== "number") ? 1 : n;
//     return {
//         next: function() {
//             if (i > max) return {value: undefined, done: true}
//             return {value: i++,  done: false};
//         }
//     }
// }

// let seq = positiveInts(3);

// // for(let num of seq){
// //     console.log(num);
// // }

// console.log(seq.next());
// console.log(seq.next());
// console.log(seq.next());
// console.log(seq.next());
// console.log(seq.next());

//ES6 generator

// function * sequence() {
//     console.log("Started!");
//     yield 1;
//     yield 2; 
//     yield 10;
// } 

// let seq = sequence();

// for (var num of seq) {
//     console.log(num);
//  }

// console.log(seq.next());
// console.log(seq.next());
// console.log(seq.next());
// console.log(seq.next());


// function* sequence() {
//     console.log("First!");
//     yield 1; //pauses exceution after logging line 1 and yeilding value to the first next() method
 
//     console.log("Second!");
//     yield 3;
 
//     console.log("Third!");
//     yield 5;
 
//     console.log("Done!");
//  }
 
//  var seq = sequence();
//  console.log(seq.next());
//  console.log(seq.next());
//  console.log(seq.next());
//  console.log(seq.next());
//  console.log(seq.next());


//infinte sequences

// function* positiveInts (){
//     for(let i = Number.MAX_SAFE_INTEGER- 1; true; i++){
//         console.log("yielding now: ", i);
//         yield i;
//     }
// }

// let seq = positiveInts();
// console.log(seq.next()); 
// console.log(seq.next()); 
// console.log(seq.next()); 
// console.log(seq.next()); 

//args to next()-yeild

// function* gen(){
//     yield yield 10;
// }

// let seq = gen();

// console.log(seq.next());
// console.log(seq.next(30));

// var x;

// function* gen() {
//     console.log(x);
//    x = yield 30;
   

// }

// var seq = gen();

// /* `console.log(seq.next());` is calling the `next()` method on the generator object `seq` and logging
// the result to the console. The `next()` method returns an object with two properties: `value` and
// `done`. The `value` property contains the value yielded by the generator, and the `done` property
// indicates whether the generator has finished executing (`true` if it has, `false` otherwise). */
// // console.log(seq.next());

// console.log(seq.next(10)); // second time'
// // console.log(seq.next());


