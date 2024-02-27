// // dec var
// let message;
// message = "POP!"
// console.log(message);

// //typeof
// console.log(typeof new String("hello")); //obj
// console.log(typeof undefined); //undefined

// console.log(typeof null); //obj
// console.log(typeof 5861658179587126578218756596859236568n);

// console.log( null === null); //true'
// console.log( typeof console); //obj
// console.log(typeof console.log); //undefined
// console.log(typeof log); //undefined
// console.log(typeof(2 + "a")); //string

//type casting/conversions/coercions

//implicit

// let isTrue = {} // {}, [], all other with values gives true, while 0, "", null, undefined gives false
// console.log(isTrue ? "It is true" : "It is false");

//numeric implicit
// console.log("10" / 2);

// console.log( Number("Sup")); //Nan
// console.log(typeof Number("Sup")); //number

// console.log(Number(undefined)); //Nan
// console.log(Number(null)); //0
// console.log(Number(true)); //1

//Boolean implicit
// console.log(Boolean("")); //false
// console.log(Boolean(" ")); //true
// console.log(Boolean("0")); //true
// console.log(Boolean(undefined)); //fasle

//explicit
// let val = 2;
// console.log(val); // 2 (number)
// val = String(val);
// console.log(typeof val); //stirng

// console.log(String(false)); //false
// console.log(String(undefined)); //undefined

// age = 3;
// console.log(age);

// console.log(typeof(1/0)); // number : Infinity
// const func = () => {
//     return "hello";
// };
// console.log(typeof func);

// console.log(Number(null));

// console.log(9 ** (1/2));
// console.log(Math.sqrt(9));

// console.log(-(2));

// console.log('a' =='A');

// console.log(Number(null));

// console.log(null >= 0);

// let message = "100";
// let code = 99;

// console.log(message > code);
// console.log("100" > "99");
// console.log("2" > "12");

// console.log(null ?? undefined ?? null ?? undefined)

// let a = 9;

// switch (a) {
//   case 3:
//     console.log( 'Too small' );
//     break;
//   case 4:
//     console.log( 'Exactly!' );
//     break;
//   case 5:
//     console.log( 'Too big' );
//     break;
//   default:
//     console.log( "I don't know such values" );
// }

// console.log(Boolean (undefined));

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     return n % i == 0 ? false : true;
//   }
// }

// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     console.log(i); // a prime
//   }
// }

// showPrimes(19);

// function hello(name){
//     let phrase = `Hello, ${name}`;
//     say(phrase);
// }

// function say(phrase){
//     console.log(phrase)
// }

// hello("Ajay")

// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       // ...other properties
//     };
//   }

//   let user = makeUser("John", 30);
//   console.log(typeof user)
//   console.log(user.name); // John

// let names = ["Ajay", "Elup", "KP", "Gauri"]

// for(let name of names ){
//     console.log(name);
// }

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };

//   u

//   for(let key in user){
//     console.log(key + ": " + user[key]);
//   }

// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };

//   for (let code in codes) {
//     console.log(code); // 1, 41, 44, 49
//   }

// let user = {name: "Peter Griffin"};
// let admin = user
// admin.name = "Stewie Griffin";
// console.log(admin);
// console.log(user);

// let codes = {
//   49: "Germany",
//   41: "Switzerland",
//   44: "Great Britain",
//   // ..,
//   1: "USA",
// };

// let clone = Object.assign({}, codes);
// let clone2 = {...clone}
// console.log(clone);
// console.log(clone2);

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };

//   let clone = Object.assign({}, user);

//   console.log( user.sizes === clone.sizes ); // true, same object

//   // user and clone share sizes
//   user.sizes.width = 60;    // change a property from one place
//   console.log(clone.sizes.width);

//constructor func

// function Animal(type, name){
//     this.type = type;
//     this.name = name
// }

// let animal = new Animal("Cat", "Billu");

// console.log(Object.values(animal));
// console.log(animal);

// let symbol = Symbol("ajay");
// console.log(symbol.toString());
// console.log(symbol.description);

// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123
// };

// let clone = Object.assign({}, user);
// console.log(clone[id]);
// console.log(clone.valueOf());

// console.log(Object.getOwnPropertySymbols(clone))
 

// let user = {
//   name: "ajay",
//   age: 25,
//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint === "string" ? `name: "${this.name}"` : this.age;
//   },
// };

// console.log(user);
// console.log(+user);
// console.log(user + 500);

// let user = {
//     name: "John",
//     money: 1000,
  
//     // for hint="string"
//     toString() {
//       return `{name: "${this.name}"}`;
//     },
  
//     // for hint="number" or "default"
//     valueOf() {
//       return this.money;
//     }
  
//   };
  
// console.log(user);
// console.log(+user);
// console.log(user + 500);

// console.log(1e-3 === 1 / 1000);

// console.log(0b11111111)
// let num = 0b11111111
// console.log(num.toString(8));
// console.log(parseInt(0xfffffff))

// let num = 573889235876853;
// console.log(num.toString(36));
// console.log(parseInt(num.toString(36), 36));

// console.log(+(0.10 + 0.20).toFixed(2));


//strings
// let str = 'widget with id';
// console.log(str.indexOf('id'));


// let x = 1;
// console.log(x++);
// console.log(x);

// let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits.at(1));

// console.log([]);

// console.log(null == undefined);

// console.log(1 == "1");

// console.log([] == '');

// let fruits = ["Apple", "Orange", "Plum"];

/* Let’s try 5 array operations.
Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process: */

// let styles = [ "Jazz", "Blues"]
// styles.push("Rock-nRoll");
// console.log(styles);
// styles[Math.floor((styles.length - 1) / 2)] = "classics"
// console.log(styles);
// styles.shift()
// console.log(styles);
// styles.unshift("Rap","Reggae")
// console.log(styles);