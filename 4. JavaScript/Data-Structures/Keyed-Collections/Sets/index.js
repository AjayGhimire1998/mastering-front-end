// /*
// A Set is a collection of unique elements that can be of any type.
// Set is also an ordered collection of elements,
// which means that elements will be retrieved in the same order that they were inserted in.

// A Set in JavaScript behaves the same way as a mathematical set.

// JavaScript sets resemble arrays in the sense that they are also collections of values.
// But, unlike arrays, these data collections can only include unique values.
// In other words, you can’t have duplicates in a set.

// The second difference between arrays and sets is that inside sets,
// the values are stored in no particular order,
// so you can just call them by their name.
// */

// //initialisation
// const set = new Set();

// //adding elements
// set.add("Ajay"); //adds "Ajay"
// set.add(23); //adds 23
// set.add(false); //adds false
// set.add("Ghimire");
// set.add(100.1);

// let obj = { type: "Person" };
// set.add(obj);
// console.log(set);

// //checking size
// console.log(set.size);

// //searching and checking if the element exists
// console.log(set.has(23)); //true

// //removing an element
// set.delete(false); //removes falses from the set
// console.log(set);

// /* How to Iterate Over a Set in JavaScript
// Set has a method called values()
// which returns a SetIterator to get all its values: */

// console.log(set.values());

// /* We can use a forEach or for-of loop on this to retrieve the values.
// Interestingly, JavaScript tries to make Set compatible with Map.
// That's why we find two of the same methods as Map, keys() and entries().

// As Set doesn't have keys,
// the keys() method returns a SetIterator to retrieve its values: */

// console.log(set.entries()); //returns a entries iterator with values in arrays
// console.log(set.keys()); //same as set.values()

// //We can enumerate over a Set using forEach and for-of loops:
// //with forEach
// set.forEach(value => {
//     console.log(value);
// })

// //with for-of
// for(const value of set){
//     console.log(value);
// }

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// console.log(set);

// for(let user of set){
//     console.log(user);
// }

// let set = new Set(["oranges", "mangoes", "oranges", "bananas"]);

// // set.forEach((val1, val2, set) => {
// //     console.log(val1);
// // })

// console.log(set.values());

/* Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

/* alert( unique(values) ); // Hare, Krishna, :-O
P.S. Here strings are used, but can be values of any type. */

// For instance: */

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values));

/* Anagrams are words that have the same number of same letters, but in different order.

For instance:

nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
From every anagram group should remain only one word, no matter which one. */

// function aclean(arr) {
//   //   for (let i = 0; i < arr.length; i++) {
//   //     let indiArr = arr[i].split("");
//   //     indiArr.sort();
//   //     arr[i] = indiArr.join("").toLowerCase();
//   //   }
//   //   let set = new Set(arr);
//   //   return Array.from(set)

//   let map = new Map();

//   for(let word of arr){
//     let sorted = word.toLowerCase().split("").sort().join("")
//     map.set(sorted, word);
//   }
//   console.log(map);
//   return Array.from(map.values())
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(aclean(arr));

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());
// console.log(keys);