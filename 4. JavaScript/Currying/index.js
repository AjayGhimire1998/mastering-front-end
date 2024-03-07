// function curry(f) {
//   return function (a) {
//     return function (b) {
//       return f(a, b);
//     };
//   };
// }

// function sum(a, b) {
//   return a + b;
// }

// let curried = curry(sum);

// console.log(curried(1)(2));

// function log(date, importance, message) {
//   console.log(
//     `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
//   );
// }

// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

// function sum(a, b, c) {
//     return a + b + c;
//   }

//   let curriedSum = curry(sum);

//   console.log( curriedSum(1, 2, 3) ); // 6, still callable normally
//   console.log( curriedSum(1)(2,3) ); // 6, currying of 1st arg
//   console.log( curriedSum(1)(2)(3) );

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

// function add(a, b, c) {
//   return a + b + c;
// }

// const curriedAdd = curry(add);

// console.log(curriedAdd(1)(2)(3)); // Output: 6
// console.log(curriedAdd(1, 2)(3)); // Output: 6
// console.log(curriedAdd(1)(2, 3)); // Output: 6
// console.log(curriedAdd(1, 2, 3)); // Output: 6
// console.log(curriedAdd(1, 2, 3, 4)); //output 6

// function add(a, b, c) {
//   console.log(this); // 'this' value inside add function
//   return a + b + c;
// }

// add(1,2,3)

// const sum = (a) => (b) => (b ? sum(a + b) : a);
// console.log(sum(1)(2)(3)(4)(100)());

// let user = {
//   name: "John",
//   hi() {
//     console.log(this.name);
//   },
//   bye() {
//     console.log("Bye");
//   },
// };

// user.hi()
// (user.name == "John" ? user.hi : user.bye)();

// let user = {
//   name: "John",
//   go: function () {
//     console.log(this.name);
//   },
// };

// user.go();

// const bigint = 1234567890123456789012345678901234567890n;
// let big = 10n
// console.log(big);

// console.log(3n / 2n);

// console.log(-(-2));

// console.log('𝒳' );
