import { admin } from "./top-level.js";

export function sayHi(user) {
  console.log(`Hello ${user}`);
}

console.log("AJAY");
console.log(admin);

admin.name = "AJAY"
console.log(admin);
