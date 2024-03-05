// function sumAll(...args) {
//   // args is the name for the array
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }

// console.log(sumAll(1,2,3,4,4));

// let arrLike = {
//   0: "Hi",
//   1: "Hello",
//   length: 2,
//   [Symbol.iterator]: function () {
//     let count = 0;
//     return {
//       next: function () {
//         if (count < this.length) {
//           return { done: false, value: this[count++] };
//         }
//         return { done: true, value: undefined };
//       },
//     };
//   },
// };


// console.log(Object.assign({}, arrLike));
// for (let item of arrLike) {
//   console.log(item);
// }
// console.log(Array.from(arrLike));


// let num = 12345; 

// Number.prototype[Symbol.iterator] = function(){
//     return this.toString()[Symbol.iterator]();
// }

// console.log([...num]);


// let arr = [1,2,3];
// let arrCopy = [...arr]

// // let arrCopy2 = Object.assign([], arr)
// // console.log(arrCopy2);

// console.log(arr === arrCopy);


// let obj = { a: 1, b: 2, c: 3 };

// let objCopy = {...obj, d: 4};
// console.log(objCopy);

