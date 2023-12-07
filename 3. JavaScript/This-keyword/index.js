//this kleyword

// console.log(this);


// function sayHello(){
//     console.log(this);
// }
// sayHello();  //global obj


// "use strict"

// function sayHello(){
//     console.log(this); 
// }
// sayHello(); //unddefined


//this in event

// var button = {
//     innerHTML: "Click Me", // Set button text
//     id: "myButton", // Set button ID
//     addEventListener: function(event, callback) {
//       console.log("Event listener added for", event);
//       // Simulating an event listener
//       callback();
//     }
//   };

// button.addEventListener('click', function() {
//     console.log(this.innerHTML);

// })


//this in obj method refers to the obj

// const person = { 
//     firstName: "Ajay",
//     lastName: "Ghimire",
//     getName(){
//         return this.firstName + this.lastName;
//     }
// }

// console.log(person.getName());

//tthis binding

function func () {
    return this;
}
const obj1 = {name: "obj1"}

obj1.func = func;

console.log(obj1.func());

// console.log(func());