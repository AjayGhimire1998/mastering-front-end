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

// let range = {
//   start: 1,
//   end: 10,
// };

// range = new Proxy(range, {
//   has(target, prop) {
//     return prop >= target.start && prop <= target.end;
//   },
// });

// console.log(2 in range);

//wrapping func apply()

// function delay(f, ms) {
//     // return a wrapper that passes the call to f after the timeout
//     return function() { // (*)
//       setTimeout(() => f.apply(this, arguments), ms);
//     };
//   }

//   function sayHi(user) {
//     console.log(`Hello, ${user}!`);
//   }

//   // after this wrapping, calls to sayHi will be delayed for 3 seconds
//   sayHi = delay(sayHi, 3000);

//   sayHi("John");

//   console.log(delay.length);

// let user = {
//     name: "John",
//   };

//   user = new Proxy(user, {
//     get(target, prop, receiver) {
//       console.log(`GET ${prop}`);
//       return Reflect.get(target, prop, receiver); // (1)
//     },
//     set(target, prop, val, receiver) {
//       console.log(`SET ${prop}=${val}`);
//       return Reflect.set(target, prop, val, receiver); // (2)
//     }
//   });

//   let name = user.name; // shows "GET name"
//   user.name = "Pete";
//   console.log(user);

//proxying a getter

// let user = {
//   _name: "Guest",
//   get name() {
//     return this._name;
//   },
// };

// let userProxy = new Proxy(user, {
//   get(target, prop, receiver) {
//     return Reflect.get(target, prop, receiver); // (*) target = user
//   },
// });

// let admin = {
//   __proto__: userProxy,
//   _name: "Admin",
// };

// console.log(userProxy.name);
// console.log(admin.name);

// let map = new Map();

// let proxy = new Proxy(map, {});

// proxy.set('test', 1);

// let map = new Map();

// let proxy = new Proxy(map, {
//   get(target, prop, receiver) {
//     let value = Reflect.get(...arguments);
//     return typeof value == 'function' ? value.bind(target) : value;
//   }
// });

// proxy.set('test', 1);
// console.log(proxy.get('test')); // 1 (works!

// class User {
//   #name = "Guest";

//   getName() {
//     return this.#name;
//   }
// }

// let user = new User();

// // console.log(user.getName());

// user = new Proxy(user, {});
// console.log(user.getName());

// class User {
//   #name = "Guest";

//   getName() {
//     return this.#name;
//   }
// }

// let user = new User();

// user = new Proxy(user, {
//   get(target, prop, receiver) {
//     let value = Reflect.get(...arguments);
//     return typeof value === "function" ? value.bind(target) : value;
//   },
// });

// console.log(user.getName());

//revocable proxy

// let object = {
//   data: "Valuable data",
// };

// let { proxy, revoke } = Proxy.revocable(object, {});

// console.log(proxy.data);

// revoke();

// console.log(proxy.data);

// let user = {
//   name: "John",
// };

// function wrap(target) {
//   return new Proxy(target, {
//     get(target, prop, receiver) {
//       if (prop in target) {
//         return Reflect.get(...arguments);
//       } else {
//         throw new ReferenceError(`Cannot find ${prop} in ${target}`);
//       }
//     },
//   });
// }

// user = wrap(user);

// console.log(user.name); // John
// console.log(user.age);

// let array = [1, 2, 3];

// array = new Proxy(array, {
//   get(target, prop, receiver) {
//     // if (prop in target) {
//     //   return Reflect.get(target, prop, receiver);
//     // } else {
//     //   return target[target.length - (Math.abs(prop))];
//     // }

//     if (prop < 0) {
//       prop = +prop + target.length;
//     }
//     return Reflect.get(...arguments);
//   },
// });

// console.log(array[-1]); // 3
// console.log(array[-2]); // 2

function makeObservable(target) {
  // 1. Initialize handlers store
  const handlers = [];

  // Store the handler function in array for future calls
  function observe(handler) {
    handlers.push(handler);
  }

  // 2. Create a proxy to handle changes
  const proxy = new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments); // forward the operation to object
      if (success) {
        // if there were no error while setting the property
        // call all handlers
        handlers.forEach((handler) => handler(property, value));
      }
      return success;
    },
  });

  return [proxy, observe];
}

const originalUser = {};
const [user, observe] = makeObservable(originalUser);

observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.name = "John";

