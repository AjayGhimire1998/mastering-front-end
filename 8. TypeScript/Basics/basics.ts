// let num: number = 5;
// console.log(num);

// type Person = {
//   name: string;
// };

// class User implements Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// let user = new User("ajay");
// console.log(user);
// const message = "Hello World!";
// message.toLowerCase();

// let isWorldSaved: Boolean = false;

// export function saveTheWorld(): String {
//   if (isWorldSaved) {
//     return `Too late, world has already been saved`;
//   } else {
//     isWorldSaved = true;
//     return `Hurray, you just saved the world`;
//   }
// }

// const message: Array<string> = ["Hello", "World"];
// message.forEach((msg: string) => console.log(msg));

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
 
greet("Brendan", new Date());
