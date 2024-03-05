
// == vs === and =! vs ==!
// console.log(10 == "10"); //true because type conversion occcurs before the comparison
// console.log(10 === "10"); //false because it strongly checks the value
// console.log( 10 != "10"); //false
// console.log( null === null);  //true
// console.log(null == undefined); //true
// console.log(undefined == undefined);
// console.log(null === undefined); //false

// let name1 = {name: "Ajay"};
// let name2 = {name: "Ajay"};
// console.log(name1 == name2); //false
// console.log(name1 === name2); //false


// console.log(null === null); //true
// console.log(NaN === NaN); //false
// console.log(10 === 10);
// console.log(0 === -0); //true


// basic operatos, maths

let x = "1"; 
x = -x;
console.log(x);

let y = -2;
let z = +y;
console.log(z);

let apples = "2";
let oranges = "3";
console.log(+apples + +oranges);