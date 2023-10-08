/* 
A Set is a collection of unique elements that can be of any type. 
Set is also an ordered collection of elements, 
which means that elements will be retrieved in the same order that they were inserted in.

A Set in JavaScript behaves the same way as a mathematical set. 

JavaScript sets resemble arrays in the sense that they are also collections of values. 
But, unlike arrays, these data collections can only include unique values. 
In other words, you can’t have duplicates in a set.

The second difference between arrays and sets is that inside sets, 
the values are stored in no particular order, 
so you can just call them by their name.
*/

//initialisation 
const set = new Set();

//adding elements
set.add("Ajay"); //adds "Ajay"
set.add(23); //adds 23
set.add(false); //adds false
console.log(set);

//checking size
console.log(set.size);

//searching and checking if the element exists
console.log(set.has(23)); //true

//removing an element
set.delete(false); //removes falses from the set
console.log(set);