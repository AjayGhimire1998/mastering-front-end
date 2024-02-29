// let user = {
//   name: "John",
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");

// console.log(JSON.stringify(descriptor, null, 2));


// Object.defineProperty(user, "name", {
//     value: "Ajay"
// })

// let descriptor2 = Object.getOwnPropertyDescriptor(user, "name");
// // console.log(user);
// console.log(JSON.stringify(descriptor2, null, 2));

// let user = {};


// Object.defineProperty(user, "name", {
//   value: "John"
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(JSON.stringify(descriptor, null, 2));

'use strict'
let user = {
     name: "Ajay", 
     age: 30
};

Object.defineProperty(user, "name", {
    configurable: false
})

// console.log(user);

// user.name = "Gh";

let descriptor = Object.getOwnPropertyDescriptors(user, "age")
console.log(JSON.stringify(descriptor, null ,3));
// // console.log(user);

Object.defineProperty(user, "name", {
    configurable: true
})

let descriptors = Object.getOwnPropertyDescriptors(user, "age")
console.log(descriptors);

// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log( descriptor);

// Object.defineProperty(Math, 'PI', {
//     configurable: true
// })

// let descriptor2 = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);

