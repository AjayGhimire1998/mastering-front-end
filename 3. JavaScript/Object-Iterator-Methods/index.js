// let obj = { name: "ajay", age: 50 };
// let symbol = Symbol("id");
// obj[symbol] = "1";
// obj[Symbol.iterator] = function() {
//     let keys = Object.keys(this);
//     let index = 0;

//     return {
//         next: () => {
//             if (index < keys.length) {
//                 let key = keys[index++];
//                 return { done: false, value: this[key] };
//             } else {
//                 return { done: true };
//             }
//         }
//     };

// }

// console.log(obj);
// let obj2 = Object.assign({}, obj);
// console.log(obj2);

// console.log(obj[Symbol.iterator]().next());

// for(let item of Reflect.ownKeys(obj)){
//    console.log(item);
// // }
// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
// );

// console.log(doublePrices);

/* There is a salaries object with arbitrary number of salaries.

Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

If salaries is empty, then the result must be 0. */