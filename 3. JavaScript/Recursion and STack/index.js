// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   }
//   console.log(x);
//   let res= x * pow(x, n - 1);
//   console.log(res);
//   return res
// }

// console.log(pow(3,4));

// let company = {
//   // the same object, compressed for brevity
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

// console.log( Object.values(company.development));

// function sumSalaries(depart) {
//   if (Array.isArray(depart)) {
//     return depart.reduce((prev, current) => prev + current.salary, 0);
//   }
//   let sum = 0;
//   for(let subdep of Object.values(depart)){
//     sum+= sumSalaries(subdep);
//   }

//   return sum;
// }

// console.log(sumSalaries(company));
