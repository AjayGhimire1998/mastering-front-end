/* 
Map is a collection of key-value pairs where the key can be of any type. 
Map remembers the original order in which the elements were added to it, 
which means data can be retrieved in the same order it was inserted in.

In other words, Map has characteristics of both Object and Array:
Like an object, it supports the key-value pair structure.
Like an array, it remembers the insertion order. */

//creating map
const map = new Map();
console.log(map); //Map(0){}

//initailising map
const infoMap = new Map([
  ["name", "Ajay"],
  ["age", 16],
  ["type", "Person"],
]);
console.log(infoMap);

//adding values to a map
const newMap = new Map();
newMap.set("name", "Ajay");
newMap.set("age", 16);
newMap.set("type", "Person");
newMap.set("age", 25); // duplicate key replaces the previous value
console.log(newMap);

//getting value from the map
const age = newMap.get("age");
console.log(age); //25

//keys can be of any types
newMap.set(99, "IQ Score"); //number as key
newMap.set(true, "Is Male ?"); //boolean as key
newMap.set({ hobbies: ["Writing Code, Walking, Listening to Music"] }, true); //object as key
console.log(newMap);

/* A regular JavaScript object always treats the key as a string. 
Even when you pass it a primitive or object, 
it internally converts the key into a string: */
const funObj = {};
funObj[360] = "Angle of a circle"
console.log(funObj); //{ '360': 'Angle of a circle' }
console.log(funObj[360] === funObj['360']); //true
console.log(typeof funObj[360]) //string
