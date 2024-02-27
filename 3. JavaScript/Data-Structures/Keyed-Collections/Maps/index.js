// /* 
// Map is a collection of key-value pairs where the key can be of any type. 
// Map remembers the original order in which the elements were added to it, 
// which means data can be retrieved in the same order it was inserted in.

// In other words, Map has characteristics of both Object and Array:
// Like an object, it supports the key-value pair structure.
// Like an array, it remembers the insertion order. */

// //creating map
// const map = new Map();
// console.log(map); //Map(0){}

// //initailising map
// const infoMap = new Map([
//   ["name", "Ajay"],
//   ["age", 16],
//   ["type", "Person"],
// ]);
// console.log(infoMap);

// //adding values to a map
// const newMap = new Map();
// newMap.set("name", "Ajay");
// newMap.set("age", 16);
// newMap.set("type", "Person");
// newMap.set("age", 25); // duplicate key replaces the previous value
// console.log(newMap);

// //getting value from the map
// const age = newMap.get("age");
// console.log(age); //25

// //keys can be of any types
// newMap.set(99, "IQ Score"); //number as key
// newMap.set(true, "Is Male ?"); //boolean as key
// let hobbiesObj = { hobbies: ["Writing Code, Walking, Listening to Music"] };
// newMap.set(hobbiesObj, true); //object as key
// hobbiesObj = null; // even though reference is changed, it still is accessbile in the newMap;
// console.log(newMap);

// /* A regular JavaScript object always treats the key as a string. 
// Even when you pass it a primitive or object, 
// it internally converts the key into a string: */
// const funObj = {};
// funObj[360] = "Angle of a circle";
// console.log(funObj); //{ '360': 'Angle of a circle' }
// console.log(funObj[360] === funObj["360"]); //true
// console.log(typeof funObj[360]); //string

// /* 
// Map Properties and Methods in JavaScript
// JavaScript's Map has in-built properties and methods that make it easy to use. 
// Here are some of the common ones:

// Use the size property to know how many elements are in a Map:
// Search an element with the has(key) method:
// Remove an element with the delete(key) method:
// Use the clear() method to remove all the elements from the Map at once: */

// const newMapCopy = newMap; //from line 23
// console.log(newMapCopy.size); //6

// // has() method returns true, if map has an element with the key given as argument
// console.log(newMapCopy.has(99)); //true
// console.log(newMapCopy.has("education")); //false

// //deleting a key-value pair, passing the key as the arugument of delete() method
// newMapCopy.delete(99); //deletes the element with key 99
// console.log(newMapCopy);

// //removing all elements
// newMapCopy.clear();
// console.log(newMapCopy); // Map(0) {}

// /* MapIterator: keys(), values(), and entries() in JavaScript:
// The methods keys(), values() and entries() methods return a MapIterator, 
// which is excellent because you can use a for-of or forEach loop directly on it. */
// const ageMap = new Map([
//   ["Jack", 20],
//   ["Alan", 34],
//   ["Bill", 10],
//   ["Sam", 9],
// ]);

// //getting all the keys:
// console.log(ageMap.keys());
// //getting all the values:
// console.log(ageMap.values());
// //getting all the entries (key-value pairs):
// let ageMapIterator = ageMap.entries();
// console.log("ageMapIterator:", ageMapIterator);

// /* How to Iterate Over a Map in JavaScript:
// You can use either the forEach or for-of loop to iterate over a Map: */
// //with forEach
// ageMap.forEach((value, key) => {
//   console.log(`${key} is ${value} years old.`);
// });

// //with for-of
// for (const [key, value] of ageMap) {
//   console.log(`${key} is ${value} years old.`);
// }

// /* How to Convert an Object into a Map in JavaScript */
// //You can use the method entries of Object to do that:
// const address = {
//   Tapas: "Bangalore",
//   James: "Huston",
//   Selva: "Srilanka",
// };
// const addressMap = new Map(Object.entries(address));
// console.log(addressMap);

// /* How to Convert a Map into an Object in JavaScript
// If you want to do the reverse, you can use the fromEntries method: */
// const addressBackToObj = Object.fromEntries(addressMap);
// console.log(addressBackToObj);

// /* How to Convert a Map into an Array in JavaScript
// There are a couple of ways to convert a map into an array:
// Using Array.from(map):
// Using the spread operator: */

// const quantities = new Map();
// quantities.set("milk", 200);
// quantities.set("tea", 300);
// quantities.set("coffee", 500);
// const quantitiesArray = Array.from(quantities); //returns an array of arrays of key and value as the first and the second element.
// console.log(quantitiesArray);

// console.log([...quantities]); //returns an array of arrays of key and value as the first and the second element.


// let map = new Map();

// map.set('1', 'One');
// map.set(2, 'Two');
// map.set(false, 'Three?');
// console.log(map.delete(false));


let john = { name: "John" };

let visitsCountMap = new Map();

visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john));