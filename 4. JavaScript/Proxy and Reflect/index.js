// let target = {};

// let proxy = new Proxy(target, {}); //empty handler

// proxy.test = 5;

// console.log(proxy);
// console.log(target);

// for(let key in proxy){
//     console.log(key);
// }

// let arr = [1, 2, 3];
// // console.log(arr[4]); //undefined

// arr = new Proxy(arr, {
//   get(target, prop) {
//     if (prop in target) {
//       return target[prop];
//     } else {
//       return 0;
//     }
//   },
// });

// console.log(arr[6]); //0

//get trap
// let dictionary = {
//   Hello: "Hola",
//   Bye: "Adiós",
// };

// dictionary = new Proxy(dictionary, {
//   get(target, prop) {
//     if (prop in target) {
//       return target[prop];
//     } else {
//       return prop;
//     }
//   },
// });

// console.log(dictionary["SUPP"]);

//set trap

// let numbers = [];

// numbers = new Proxy(numbers, {
//   set(target, prop, val) {
//     if (typeof val === "number") {
//       target[prop] = val;
//       return true;
//     } else {
//       return false;
//     }
//   },
// });

// numbers.push(1);
// numbers.push(2);
// console.log(numbers);

// let user = {
//   name: "ajay",
//   age: 25,
//   _password: "***",
// };

// user = new Proxy(user, {
//   ownKeys(target) {
//     return Object.keys(target).filter((key) => !key.startsWith("_"));
//   },
// });

// for(let key in user){
//     console.log(key);
// }
// console.log(Object.getOwnPropertyDescriptor(user, "name"))


