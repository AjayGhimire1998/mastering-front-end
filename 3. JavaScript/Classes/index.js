// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }

// console.log(typeof User);

// // ...or, more precisely, the constructor method
// console.log(User === User.prototype.constructor); // true

// // The methods are in User.prototype, e.g:
// console.log(User.prototype.sayHi); // the code of the sayHi method

// // there are exactly two methods in the prototype
// console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// let user = new User();
// console.log(user.sayHi === User.prototype.sayHi);

// function User(name) {
//   this.name = name;
// }

// User.prototype.sayHi = function () {
//   return this.name;
// };

// let user = new User("ajay");


// for(let prop in user){
//     console.log(prop);
// }

// console.log(user.sayHi == User.prototype.sayHi);
// console.log(user.sayHi());
