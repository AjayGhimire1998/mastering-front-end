/*primitive string vs Wrapper String */

const stringOne = "First Text"; //primitve
const stringTwo = "Second Text"; //primitve
const stringThree = `Third Text`; //primitive

const stringFour = new String("Fourth String");
console.log(stringOne[0]); // F: gets the character at that index

//when methods like chartAt, or other String methods are called on the primitive strings, JS automatically wrap the string primitive and call the methods on the wrapper object instead

console.log(stringThree.charAt(7)); //e
