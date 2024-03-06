import { admin } from "./top-level.js";
import { sayHi } from "./imports2.js";


sayHi("AJAY")

console.log(admin);
console.log(admin);

console.log(import.meta);


let {hi, bye} = await import('./top-level.js');

hi();
bye();