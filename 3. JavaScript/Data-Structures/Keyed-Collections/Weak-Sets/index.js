/* 
WeakSet behaves similarly:

It is analogous to Set, but we may only add objects to WeakSet (not primitives).
An object exists in the set while it is reachable from somewhere else.
Like Set, it supports add, has and delete, but not size, keys() and no iterations.
Being “weak”, it also serves as additional storage. But not for arbitrary data, rather for “yes/no” facts. A membership in WeakSet may mean something about the object.

For instance, we can add users to WeakSet to keep track of those who visited our site: */

let visitedSet = new WeakSet();

let john = {name: "John"};
let charlie = {name: "Charlie"};
let peter = {name: "Peter"};
 
visitedSet.add(john);  // John visited us
visitedSet.add(charlie);  // Charlie visited us
visitedSet.add(john);  // John visited us again

// visitedSet has 2 users now

// check if John visited?
console.log(visitedSet.has(john)); // true

// check if Peter visited? 
console.log(visitedSet.has(peter)); // false

john = null; // removing the reference to john obj
console.log(visitedSet.has(john)); // false, as it is no longer in the weakset