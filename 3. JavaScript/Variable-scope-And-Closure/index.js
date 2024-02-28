// function sayHiBye(firstName, lastName) {

//     // helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//     console.log( "Hello, " + getFullName() );
//     console.log( "Bye, " + getFullName() );
  
//   }

//   sayHiBye("ajay", "ghimire");


// function makeCounter(){
//   let count = 0; 

//   return function(){
//     return count++;
//   }
// }

// let counter = makeCounter();
// console.log(counter());
// console.log(counter());


// function f(){
//   let value = 123; 

//   return function(){
//     console.log(value);
//   }
// }


// let g = f();
// let arr = [f(), f(), f()];
// for(let f of arr){
//   console.log(f());
// }