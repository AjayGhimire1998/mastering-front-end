/* The first difference between Map and WeakMap 
 is that keys must be objects, not primitive values: */

let weakMap = new WeakMap();
let obj = { test: "test obj" };
weakMap.set(obj, "ok");
// weakMap.set("test", "not ok"); //TypeError: Invalid value used as weak map key
console.log(weakMap.get(obj)); //ok

/* Now, if we use an object as the key in it,
 and there are no other references to that object –
 it will be removed from memory (and from the map) automatically. */

obj = null;
console.log(weakMap.get(obj)); //undefined

/* WeakMap does not support iteration and 
methods keys(), values(), entries(), 
so there’s no way to get all keys or values from it.

WeakMap has only the following methods:

weakMap.set(key, value)
weakMap.get(key)
weakMap.delete(key)
weakMap.has(key) */
