//variable hoisting
// console.log(greeting); // ReferenceError:  Cannot access 'greeting' before initialization
// let greeting = "Hello!!";

// let greeting_two;
// console.log(greeting_two); //undefined
// greeting_two = "Hyy!!";

// console.log(PI); //ReferenceError: Cannot access 'PI' before initialization
// const PI = 3.14;


//functions hoistng
console.log(greet()); // Hello!!
function greet() {
  return "Hello!!";
}

function sayHelloToAjay() {
//   console.log(who); 
  who = "Hello" + AJAY;
  console.log(AJAY);
  const AJAY = "AJAY";
}
sayHelloToAjay(); //ReferenceError: who is not defined
