/* 
WeakSet behaves similarly:

It is analogous to Set, but we may only add objects to WeakSet (not primitives).
An object exists in the set while it is reachable from somewhere else.
Like Set, it supports add, has and delete, but not size, keys() and no iterations.
Being “weak”, it also serves as additional storage. But not for arbitrary data, rather for “yes/no” facts. A membership in WeakSet may mean something about the object.

For instance, we can add users to WeakSet to keep track of those who visited our site: */

// let visitedSet = new WeakSet();

// let john = {name: "John"};
// let charlie = {name: "Charlie"};
// let peter = {name: "Peter"};

// visitedSet.add(john);  // John visited us
// visitedSet.add(charlie);  // Charlie visited us
// visitedSet.add(john);  // John visited us again

// // visitedSet has 2 users now

// // check if John visited?
// console.log(visitedSet.has(john)); // true

// // check if Peter visited?
// console.log(visitedSet.has(peter)); // false

// john = null; // removing the reference to john obj
// console.log(visitedSet.has(john)); // false, as it is no longer in the weakset

// let visitedSet = new WeakSet();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john); // John visited us
// visitedSet.add(pete); // Then Pete
// visitedSet.add(john); // John again

// // visitedSet has 2 users now

// // check if John visited?
// console.log(visitedSet.has(john)); // true

// // check if Mary visited?
// console.log(visitedSet.has(mary)); // false

// john = null;

/* There’s an array of messages:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
Your code can access it, but the messages are managed by someone else’s code. New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens.

Now, which data structure could you use to store information about whether the message “has been read”? The structure must be well-suited to give the answer “was it read?” for the given message object.

P.S. When a message is removed from messages, it should disappear from your structure as well.

P.P.S. We shouldn’t modify message objects, add our properties to them. As they are managed by someone else’s code, that may lead to bad consequences.
 */
