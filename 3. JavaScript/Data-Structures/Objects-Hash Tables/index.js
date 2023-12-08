

// // prototypical inheritance

// const { log } = require("console");
// const { prototype } = require("events");

// let animal = {
//     eats: true,
//     walk(){
//         console.log("Animal walks");
//     }
// }

// animal.walk(); //Animal walks

// let cat = {
//     jumps: true,

// }

// cat.__proto__ = animal;

// cat.walk()

// cat.walk = () => {
//     console.log("meowyy walks");
// }
// cat.walk()
// let longTail = {
//     tailLength: 10,
//     __proto__: cat
// }
// console.log(longTail.jumps);
// longTail.walk()


// let user = {
//     name: "Ajay",
//     age: 25
// }

// let key = "likes bird";
// user[key] = true
// console.log(user["likes bird"]);


// console.log("age" in user);

// let codes = {
//     "dbc": "Germany",
//     "aca": "Switzerland",
//     "kgh": "Great Britain",
//     // ..,
//     "1": "USA"
//   };
  
//   for (let code in codes) {
//     console.log(code); // 1, 41, 44, 49
//   }

// let user = {
//     "name": "John",
//     "surname": "Smith"
//   };
//   user.age = 25; // add one more
  
//   // non-integer properties are listed in the creation order
//   for (let prop in user) {
//     console.log( prop ); // name, surname, age
//   }


//object refeence and copying

// let a = {};
// let b = {}; // two independent objects

// console.log( a === b ); // false