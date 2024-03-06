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

// class User {
//   name;
//   age;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }

//   get age() {
//     return this._age;
//   }

//   set age(value) {
//     this._age = value;
//   }
// }
// let user = new User("Ajay", 25);
// console.log(user.name, user.age); // John
/* The class Clock defines a clock object that can display and update the current time in hours,
minutes, and seconds. */
/* This code defines a class called `Clock` with the following methods: */

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// let clock = new Clock({ template: "h:m:s" });
// // clock.start();

// console.log(clock.hasOwnProperty('stop')); // true
// console.log(clock.hasOwnProperty('start')); // true
// console.log(clock.hasOwnProperty('render')); // true

//Class Inheritance"

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} runs with speed ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} stands still.`);
//   }
// }

// let animal = new Animal("My animal");
// animal.run(20);

// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} hides!`);
//   }
// }

// let rabbit = new Rabbit("White Rabbit");

// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.hide();

// Number.prototype[Symbol.iterator] = function () {
//   return this.toString()[Symbol.iterator]();
// };

// let num = 1234;
// for (let prop of num) {
//   console.log(prop);
// }

// let arrLike = {
//   0: "1",
//   1: "2",
//   length: 2,
//   [Symbol.iterator]() {
//     let i = 0;
//     return {
//       next: () => {
//         if (i < this.length) {
//           return { value: this[i++], done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };

// let itr = arrLike[Symbol.iterator]();
// // console.log(itr);

// // console.log(itr.next());
// // console.log(itr.next());
// // console.log(itr.next());

// for (let prop of arrLike) {
//   console.log(prop);
// }

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   // ...
// }

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     this.speed = 0;
//     this.name = name;
//     this.earLength = earLength;
//   }

//   // ...
// }

// // Doesn't work!
// let rabbit = new Rabbit("White Rabbit", 10);
// console.log(rabbit);

// let animal = {
//   name: "Animal",
//   eat() {
//     // animal.eat.[[HomeObject]] == animal
//     console.log(`${this.name} eats.`);
//   },
// };

// animal.eat();

// class PowerArray extends Array {
//   isEmpty() {
//     return this.length === 0;
//   }
//   static get [Symbol.species]() {
//     return Array;
//   }
// }

// let arr = new PowerArray(1, 2, 5, 10, 50);
// let filteredArr = arr.filter(item => item >= 10);
// console.log(filteredArr); // 10, 50
// console.log(arr.constructor === PowerArray;

// function Rabbit() {}
// let rabbit = new Rabbit();

// console.log(rabbit.__proto__);
// console.log(rabbit instanceof  Rabbit);

// console.log(Rabbit.prototype.isPrototypeOf(rabbit));
// changed the prototype
// Rabbit.prototype = {};

// let arr = []
// console.log(arr.toString());

// console.log(typeof []);

// copy toString method into a variable for convenience
// let objectToString = Object.prototype.toString;

// // what type is this?
// let arr = [];

// console.log( objectToString.call(123) );

// let user = {
//   [Symbol.toStringTag]: "User",
// };

// console.log(Object.prototype.toString.call(user));

// let Mixin1 = (superclass) =>
//   class extends superclass {
//     foo() {
//       console.log("foo from Mixin1");
//       if (super.foo) super.foo();
//     }
//   };

// let Mixin2 = (superclass) =>
//   class extends superclass {
//     foo() {
//       console.log("foo from Mixin2");
//       if (super.foo) super.foo();
//     }
//   };

// class S {
//   foo() {
//     console.log("foo from S");
//   }
// }

// class C extends Mixin1(Mixin2(S)) {
//   foo() {
//     console.log("foo from C");
//     super.foo();
//   }
// }

// new C().foo();