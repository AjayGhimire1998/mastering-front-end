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

// function func () {
//     return this;
// }
// const obj1 = {name: "obj1"}

// obj1.func = func;

// console.log(obj1.func());

// const obj2 = {
//     __proto__:obj1,
//     name: "ob2"
// }

// console.log(obj2.func());
// console.log(func());\


//strict function context

// function getThisStrict() {
//     // "use strict"; // Enter strict mode
//     return this;
//   }

//   Number.prototype.getThisStrict = getThisStrict;
//   console.log(typeof (1).getThisStrict()); //object
//   console.log(getThisStrict() === globalThis) //true

// const obj = {
//     getThis(){
//         const getter = () => this;
        
//         return getter;
//     }
// }
// const fn = obj.getThis();
// console.log(fn());


//explicit binding

// function expBind(){
//     console.log("Explciit Binding");
//     return this;
// }

// const obj = {
//     a: 2,
// }
// console.log(expBind.call(obj)); // obj as obj referes to this in this case
// console.log(expBind());


//call

// function Product(name, price){
//     this.name = name;
//     this.price = price
// }

// function Food (name, price){
//     Product.call(this, name, price);
//     this.category = 'food';
// }
// console.log(new Food('cheese',5)); // Food {name: "cheese", price: 5, category: "food"}

//Using call() to invoke a function and specifying the this value

// function greet() {
//     console.log(this.animal, "does meow");
// }

// const obj = {
//     animal: "cats"
// }

// greet.call(obj)


//Using call() to invoke a function without specifying the first argument

// function display () {
//     console.log(`value of this in this func: ${this}`); //globalThis
// }

// display.call();


//apply()

// const nums = [5,6,2,3,7];
// const max = Math.max.apply(null, nums) 
// console.log(max); //7

