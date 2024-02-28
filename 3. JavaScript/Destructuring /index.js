// let names = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// let [first, ,last] = names;
// console.log(last);

// let user = {};
// [user.name, user.surname] = ["ajay", 20]

// console.log(user.name); // John
// console.log(user.surname); // Smith
// console.log(user);

// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// // Map iterates as [key, value] pairs, very convenient for destructuring
// for (let [key, value] of user.entries()) {
//   console.log(`${key}:${value}`); // name:John, then age:30
// }

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(rest);

// function giveSome(name, age){
//     return `${name}: ${age}`;
// }

// console.log(giveSome(20));

// let user = { name: "John", years: 30 };

// let { name, years: age, isAdmin = false } = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Ok: 200,
//   Mary: 250,
// };

// function topSalary(salaries) {
// //   if (Object.entries(salaries).length === 0) {
// //     return null;
// //   }

//   let maxSalary = 0;
//   let maxName = null;
//   for(let [name, salary] of Object.entries(salaries)){
//     if(maxSalary < salary){
//         maxSalary = salary;
//         maxName = name;
//     }
//   }
//   return maxName
// }

// console.log(topSalary(salaries));