// /*primitive string vs Wrapper String */

// const stringOne = "First Text"; //primitve
// const stringTwo = "Second Text"; //primitve
// const stringThree = `Third Text`; //primitive

// console.log(stringOne[0]); // F: gets the character at that index

// const stringFour = new String("Fourth String");

// const stringFive = stringFour + " " + stringThree;
// console.log(stringFive);

// //when methods like chartAt, or other String methods are called on the primitive strings, JS automatically wrap the string primitive and call the methods on the wrapper object instead

// console.log(stringThree.charAt(7)); //e

// console.log(typeof stringOne); //string
// console.log(typeof stringFour); //object

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(9007199254740992 === 9007199254740993 );  //false

/*Symbol Primitive type */

// const symbol1 = Symbol("foo");
// const symbol2 = Symbol("foo");
// console.log(symbol1.toString().slice(7, -1));


// const tokenSymbol = Symbol("token");
// console.log(Symbol.keyFor(Symbol.for('token')) === "token");

// const firstName = Symbol("First Name");
// const lastName = Symbol("Last Name");

// const person= {
//     [firstName]: "Ajay",
//     [lastName]: "Ghimire"
// }

// console.log(firstName.description);
// console.log(Symbol.toString(firstName));

// console.log(Object.getOwnPropertySymbols(person));


//adding symbols to the object
const person = {
    name: "Chuck Norris",
    age: 54
}
const SECURITYCODE = Symbol("security_id");
person[SECURITYCODE] = "34X6je4bbap8900"; //setting symbol value
person.SECURITYCODE = "HEHE" //setting same name key as the reference of the sybmol
person.security_id = "24afs"; //setting same key name as the description of the sybmol



console.log(person);
person.age = 90;
console.log(person);

person[SECURITYCODE] = "newidloose"; //updating the value of the sybmol
console.log(person);




