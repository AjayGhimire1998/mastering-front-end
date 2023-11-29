
// == vs === and =! vs ==!
console.log(10 == "10"); //true because type conversion occcurs before the comparison
console.log(10 === "10"); //false because it strongly checks the value
console.log( 10 != "10"); //false
console.log( null === null);  //true
console.log(null == undefined); //true
console.log(null === undefined); //false

let name1 = {name: "Ajay"};
let name2 = {name: "Ajay"};
console.log(name1 == name2); //false
console.log(name1 === name2); //false


console.log(null === null); //true
console.log(NaN === NaN); //false
console.log(10 === 10);
console.log(0 === -0); //true


// equality algorithms