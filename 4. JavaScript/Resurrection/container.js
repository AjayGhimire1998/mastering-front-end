// // dec var
// let message;
// message = "POP!"
// console.log(message);


// import { log } from "console";

// //typeof
// console.log(typeof new String("hello")); //obj
// console.log(typeof undefined); //undefined

// console.log(typeof null); //obj
// console.log(typeof 5861658179587126578218756596859236568n);

// console.log( null === null); //true'
// console.log( typeof console); //obj
// console.log(typeof console.log); //undefined
// console.log(typeof log); //undefined
// console.log(typeof(2 + "a")); //string

//type casting/conversions/coercions

//implicit

// let isTrue = {} // {}, [], all other with values gives true, while 0, "", null, undefined gives false
// console.log(isTrue ? "It is true" : "It is false");

//numeric implicit
// console.log("10" / 2);

// console.log( Number("Sup")); //Nan
// console.log(typeof Number("Sup")); //number

// console.log(Number(undefined)); //Nan
// console.log(Number(null)); //0
// console.log(Number(true)); //1

//Boolean implicit
// console.log(Boolean("")); //false
// console.log(Boolean(" ")); //true
// console.log(Boolean("0")); //true
// console.log(Boolean(undefined)); //fasle

//explicit
// let val = 2;
// console.log(val); // 2 (number)
// val = String(val);
// console.log(typeof val); //stirng

// console.log(String(false)); //false
// console.log(String(undefined)); //undefined

// age = 3;
// console.log(age);

// console.log(typeof(1/0)); // number : Infinity
// const func = () => {
//     return "hello";
// };
// console.log(typeof func);

// console.log(Number(null));

// console.log(9 ** (1/2));
// console.log(Math.sqrt(9));

// console.log(-(2));

// console.log('a' =='A');

// console.log(Number(null));

// console.log(null >= 0);

// let message = "100";
// let code = 99;

// console.log(message > code);
// console.log("100" > "99");
// console.log("2" > "12");

// console.log(null ?? undefined ?? null ?? undefined)

// let a = 9;

// switch (a) {
//   case 3:
//     console.log( 'Too small' );
//     break;
//   case 4:
//     console.log( 'Exactly!' );
//     break;
//   case 5:
//     console.log( 'Too big' );
//     break;
//   default:
//     console.log( "I don't know such values" );
// }

// console.log(Boolean (undefined));

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     return n % i == 0 ? false : true;
//   }
// }

// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     console.log(i); // a prime
//   }
// }

// showPrimes(19);

// function hello(name){
//     let phrase = `Hello, ${name}`;
//     say(phrase);
// }

// function say(phrase){
//     console.log(phrase)
// }

// hello("Ajay")

// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       // ...other properties
//     };
//   }

//   let user = makeUser("John", 30);
//   console.log(typeof user)
//   console.log(user.name); // John

// let names = ["Ajay", "Elup", "KP", "Gauri"]

// for(let name of names ){
//     console.log(name);
// }

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };

//   u

//   for(let key in user){
//     console.log(key + ": " + user[key]);
//   }

// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };

//   for (let code in codes) {
//     console.log(code); // 1, 41, 44, 49
//   }

// let user = {name: "Peter Griffin"};
// let admin = user
// admin.name = "Stewie Griffin";
// console.log(admin);
// console.log(user);

// let codes = {
//   49: "Germany",
//   41: "Switzerland",
//   44: "Great Britain",
//   // ..,
//   1: "USA",
// };

// let clone = Object.assign({}, codes);
// let clone2 = {...clone}
// console.log(clone);
// console.log(clone2);

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };

//   let clone = Object.assign({}, user);

//   console.log( user.sizes === clone.sizes ); // true, same object

//   // user and clone share sizes
//   user.sizes.width = 60;    // change a property from one place
//   console.log(clone.sizes.width);

//constructor func

// function Animal(type, name){
//     this.type = type;
//     this.name = name
// }

// let animal = new Animal("Cat", "Billu");

// console.log(Object.values(animal));
// console.log(animal);

// let symbol = Symbol("ajay");
// console.log(symbol.toString());
// console.log(symbol.description);

// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123
// };

// let clone = Object.assign({}, user);
// console.log(clone[id]);
// console.log(clone.valueOf());

// console.log(Object.getOwnPropertySymbols(clone))

// let user = {
//   name: "ajay",
//   age: 25,
//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint === "string" ? `name: "${this.name}"` : this.age;
//   },
// };

// console.log(user);
// console.log(+user);
// console.log(user + 500);

// let user = {
//     name: "John",
//     money: 1000,

//     // for hint="string"
//     toString() {
//       return `{name: "${this.name}"}`;
//     },

//     // for hint="number" or "default"
//     valueOf() {
//       return this.money;
//     }

//   };

// console.log(user);
// console.log(+user);
// console.log(user + 500);

// console.log(1e-3 === 1 / 1000);

// console.log(0b11111111)
// let num = 0b11111111
// console.log(num.toString(8));
// console.log(parseInt(0xfffffff))

// let num = 573889235876853;
// console.log(num.toString(36));
// console.log(parseInt(num.toString(36), 36));

// console.log(+(0.10 + 0.20).toFixed(2));

//strings
// let str = 'widget with id';
// console.log(str.indexOf('id'));

// let x = 1;
// console.log(x++);
// console.log(x);

// let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits.at(1));

// console.log([]);

// console.log(null == undefined);

// console.log(1 == "1");

// console.log([] == '');

// let fruits = ["Apple", "Orange", "Plum"];

/* Let’s try 5 array operations.
Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process: */

// let styles = [ "Jazz", "Blues"]
// styles.push("Rock-nRoll");
// console.log(styles);
// styles[Math.floor((styles.length - 1) / 2)] = "classics"
// console.log(styles);
// styles.shift()
// console.log(styles);
// styles.unshift("Rap","Reggae")
// console.log(styles);

/* Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero. */

// const readline = require("readline");

// function sumInput() {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   const numbers = [];

//   function recurrInput() {
//     rl.question("Enter a number: ", (input) => {
//       if (input.trim() === "" || isNaN(input)) {
//         rl.close();
//         const sum = numbers.reduce((acc, num) => acc + num, 0);
//         console.log(sum);
//       } else {
//         numbers.push(parseInt(input));
//         recurrInput()
//       }
//     });
//   }
//   recurrInput();
// }
// sumInput();
/* 
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)
If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

getMaxSubSum([-1, -2, -3]) = 0 */

//slow
// function getMaxSubSum(arr) {
//   let maxSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let fixedSum = 0;
//     for (let j = i; j < arr.length; j++) {
//       fixedSum += arr[j];
//       maxSum = Math.max(maxSum, fixedSum);
//     }
//   }
//   return maxSum;
// }

//fast
// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;

//     for (let item of arr) { // for each item of arr
//       partialSum += item; // add it to partialSum
//       maxSum = Math.max(maxSum, partialSum); // remember the maximum
//       if (partialSum < 0) partialSum = 0; // zero if negative
//     }

//     return maxSum;
// }

// console.log(getMaxSubSum([100, -9, 2, -3, 5]));

// function maskify(cc) {
//   if (cc.length <= 4) {
//     return cc;
//   }
//   let result = "";
//   for (let i = 0; i < cc.length; i++) {
//     if (i + 4 >= cc.length) {
//       result += cc[i];
//       continue;
//     }
//     result += "#";
//   }
//   return result;
// }

// console.log(maskify("faskdfgagsf"));
/* 
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number) */

// function persistence(num) {
// //   let str = String(num).split("");

// //   if (str.length === 1) {
// //     return 0;
// //   }
// //   let result = 0;
// //   while (str.length !== 1) {
// //     let mult = 1;
// //     for (const num of str) {
// //       mult *= num;
// //     }
// //     str = String(mult).split("");
// //     result++;
// //   }
// //   return result;
//     let result = 0;
//     let str = num.toString();
//     while(str.length > 1){
//         result++;
//         str = String(str.split("").reduce((acc, s) => +s * acc, 1));

//         console.log(str);
//     }
//     return result
// }

// console.log(persistence(999));

//methods

// let arr = ["I", "study", "JavaScript"];

// console.log(arr.splice(0,1));

// let arr = ["I", "study", "JavaScript", "right", "now"];

// let del = arr.splice(0, 3, "Let's", "dance");

// console.log(arr);
// console.log(del);
// console.log(arr);

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });

// console.log("Gandalf".lastIndexOf("a", 0));
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];

//   let user = users.find(item => item.id == 1);

//   console.log(user.name); // John

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }
// let arr = [ 1, 9, 15 ];
// arr.sort(compareNumeric);
// console.log(arr);

// console.log("Ajay".split(''));

// let names = 'Bilbo, Gandalf, Nazgul';
// console.log(names.split(','));

// let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
// let arr2 = ['Bilbo', 'Gandalf', 'Nazgul'];
// let arrr = arr.concat(arr2);
// console.log(arrr);

/* importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back. */

// function camelize(str) {
//   let arr = str.split("");

//   if(arr[0] === "-"){
//     arr.shift();
//     arr[0] = arr[0].toUpperCase()
//   }

//   let occurInd = arr.indexOf("-")

//   for(let i = occurInd; i < arr.length;i++ ){
//         if(arr[i] === "-"){
//             arr.splice(i, 1);
//             arr[i] = arr[i].toUpperCase()
//         }
//   }
// //   console.log(occurInd);
// //   console.log(arr);
// return arr.join("");

// }
// console.log(camelize("-webkit-transition"));
// console.log(camelize("background-color"));

/* Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified) */

// function filterRange(arr, a, b){
//     return arr.filter((item) => item >=a && item<=b);

// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);

/* Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1] */

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return arr;
// }

// let arr = [1,2,3];
// console.log(filterRangeInPlace(arr, 1, 4));

// let arr = [5, 2, 1, -10, 8];

// console.log(arr.sort((a,b) => b-a));
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((user) => user.name)

// console.log( names ); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((user) => {
//   return {
//     fullName: user.name + " " + user.surname,
//     id: user.id,
//   };
// });

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// function sortByAge(arr) {
//     return arr.sort((a,b) => a.age - b.age)
// }

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5)
// }

// let arr = [1, 2, 3];

// shuffle(arr);

// console.log(arr);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// function getAverageAge(arr) {
//   return arr.reduce((acc, val) => acc + val.age, 0) / arr.length;
// }

// console.log(getAverageAge(arr));

// function unique(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// console.log(unique(strings)); // Hare, Krishna, :-O

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];
// function groupById(arr) {
//   let result = {};
//   arr.forEach((element) => {
//     result[element.id] = element;
//   });
//   return result
// }
// let usersById = groupById(users);
// console.log(usersById);

// let range = {
//   from: 1,
//   to: 5,
// };

// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,
//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true, value: undefined };
//       }
//     },
//   };
// };
// const itr = range[Symbol.iterator]();

// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

// for(let num of range){
//     console.log(num);
// }

// let nums = [1,2,3,4,5]
// function makeIterator(arr){
//     let i = 0;
//     return {
//         next: () => {
//             if (i > arr.length - 1){
//                 return {done: true, value: undefined}
//             }
//             return {done: false, value: arr[i++]};
//         }
//     }
// }

// let itr = makeIterator(nums);

// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

//making number iterable

// Number.prototype[Symbol.iterator] = function () {
//   return this.toString()[Symbol.iterator]();
// };

// let nums = 12345;
// for (let n of nums) {
//   console.log(n);
// }

// let str = "okok123";

// for(let s of str){
//     console.log(s);
// }

// let arrayLike = {
//   // has indexes and length => array-like
//   0: "Hello",
//   1: "World",
//   length: 2,
//   [Symbol.iterator]: function () {
//     let index = 0;
//     return {
//       next: () => {
//         if (index < this.length) {
//           return { done: false, value: this[index++] };
//         }
//         return { done: true, value: undefined };
//       },
//     };
//   },
// };

// const itr = arrayLike[Symbol.iterator]();

// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
//   };

//   let realArr = Array.from(arrayLike, str => str.toUpperCase());
//   console.log(realArr);

// let str = "hello";
// let strArray = str.split("");  // Convert string to array
// strArray.splice(0, 2, 'c', 'e');  // Use splice to replace the first two elements
// let modifiedStr = strArray.join("");  // Join the array back into a string
// console.log(modifiedStr);
