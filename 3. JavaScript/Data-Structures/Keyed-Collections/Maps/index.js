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
