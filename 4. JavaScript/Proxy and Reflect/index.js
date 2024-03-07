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

//delet property trap

// let user = {
//   name: "ajay",
//   age: 25,
//   _password: "***",
//   checkPassword(value) {
//     // object method must be able to read _password
//     return value === this._password;
//   },
// };

// user = new Proxy(user, {
//   get(target, prop) {
//     if (prop.startsWith("_")) {
//       throw new Error("Access Denied!");
//     }

//     let value = target[prop];
//     return typeof value === "function" ? value.bind(target) : value;
//   },

//   set(target, prop, val) {
//     if (prop.startsWith("_")) {
//       throw new Error("Access Denied!");
//     } else {
//       target[prop] = val;
//       return true;
//     }
//   },

//   deleteProperty(target, prop) {
//     if (prop.startsWith("_")) {
//       throw new Error("Access Denied!");
//     } else {
//       delete target[prop];
//       return true;
//     }
//   },

//   ownKeys(target) {
//     return Object.keys(target).filter((key) => !key.startsWith("_"));
//   },
// });

// // "get" doesn't allow to read _password
// try {
//   console.log(user._password); // Error: Access denied
// } catch (e) {
//   console.log(e.message);
// }

// // "set" doesn't allow to write _password
// try {
//   user._password = "test"; // Error: Access denied
// } catch (e) {
//   console.log(e.message);
// }

// try {
//   delete user._password; // Error: Access denied
// } catch (e) {
//   console.log(e.message);
// }

// // "ownKeys" filters out _password
// for (let key in user) console.log(key); // name

// console.log(user.checkPassword("**"));

//inrange with has trap

let range = {
  start: 1,
  end: 10,
};

range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end;
  },
});

console.log(2 in range);
