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

// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i
//   }
//   return sum;
// }

// function sumTo(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n + sumTo(n - 1);
// }

// function sumTo(n) {
//   return (n * (n + 1)) / 2;
// }
// console.log(sumTo(10));

// function factorial(n){
//     if (n === 0){
//         return 1;
//     }
//     return n * factorial(n-1);
// }

// console.log(factorial(4));

// function fib(n) {
//   //   return n <= 1 ? n : fib(n - 1) + fib(n - 2); //slow
//   let a = 1;
//   let b = 1;

//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(90));

function printList(list) {
    // let temp = list;
    // while(temp){
    //     console.log(temp.value);
    //     temp = temp.next;
    // }
    console.log(list.value);
    if(list.next){
        printList(list.next);
    }

}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

console.log(printList(list));
