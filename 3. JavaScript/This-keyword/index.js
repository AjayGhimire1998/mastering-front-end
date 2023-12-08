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

//Using apply() to append an array to another 

// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9,10];

// // console.log(arr1.push(arr2)); //6 
// console.log(arr1.concat(arr2)); //return new array

// arr1.push.apply(arr1, arr2)
// console.log(arr1); // append arr2 to arr1


// var mergeTwoLists = function(list1, list2) {
//     let list = Array.prototype.concat(list1, list2)

//     return list.sort()[0];
// };

// console.log(mergeTwoLists([1,2,4], [1,3,4]));


// var isPalindrome = function(x) {
//     let numStr = String(x);
//     console.log(numStr);

//     for(let i = 0; i <= numStr.length; i++){
//     if (numStr[i] !== numStr[numStr.length - 1 - i]){
//         console.log(numStr[i]);
//         console.log(numStr[numStr.length - 1-i]);
//         return false
//     }
//     }
//     return true;
// };

// console.log(isPalindrome(11121))


//bind()

// const mod = {
//     x: 42,
//     getX: function(){
//         return this.x;
//     }
// }

// const unboundGetX = mod.getX;
// console.log(unboundGetX()); //undefined

// const boundGetX = unboundGetX.bind(mod)
// console.log(boundGetX); // 42


//function burrowing
// class Dog {
//     constructor(name, age, breed) {
//       this.name = name
//       this.age = age
//       this.breed = breed
//     }
//     tellUsAboutYourSelf() {
//       return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`
//     }
  
//     woof() {
//       return "WOOF!!!"
//     }
//   }

// let fido = new Dog("Fido", 3, "dachshund")
// console.log(fido.tellUsAboutYourSelf());

// class Cat {
//     constructor(name, age, breed) {
//       this.name = name
//       this.age = age
//       this.breed = breed
//     }
  
//     meow() {
//       return "MEOW!!!"
//     }
//   }
  
//   let sparkles = new Cat("Sparkles", 5, "Siamese")
// //   console.log(sparkles.tellUsAboutYourSelf()); // not the cat's func

// console.log(fido.tellUsAboutYourSelf.call(sparkles)); //My name is Sparkles. I am a Siamese and I am 5 years old.
// console.log(fido.tellUsAboutYourSelf.apply(sparkles)); //My name is Sparkles. I am a Siamese and I am 5 years old.
// const describeSparkles = fido.tellUsAboutYourSelf.bind(sparkles);
// console.log(describeSparkles()) //My name is Sparkles. I am a Siamese and I am 5 years old.


// Array.prototype.slice burrowing


// function findO(){
//     let args = Array.prototype.slice.call(arguments)
//     return args.filter(a => a.includes('o'))
// }

// let result = findO("orchid", "tulip", "rose", "lily")

// console.log(result);