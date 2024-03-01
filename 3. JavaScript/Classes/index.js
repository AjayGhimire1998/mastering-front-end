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

// class User {
//   constructor(name) {
//     // invokes the setter
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }
// }

// let user = new User("John");
// console.log(user.name); // John

// user = new User(""); // Name is too short.

class User {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
}
let user = new User("Ajay", 25);
console.log(user.name, user.age); // John
