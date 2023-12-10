//synchronous js

const res = require("express/lib/response");

// const MAX_PRIME = 1_000_000;

// function isPrime(n){
//    for(let i = 2; i <= Math.sqrt(n); i++ ){
//     if (n % i === 0) {
//         return false;
//     }
//    }
//    return n > 1;
// }

// async function  generatePrimeInrange(start, end){
//     const primes = [];

//     for(let num = Math.max(2, start); num <= end; num++){
//         if (isPrime(num)){
//             primes.push(num)
//         }
//     }
//     return await primes;
// }

// console.log(isPrime(119));
// console.time();

// console.log(generatePrimeInrange(10,MAX_PRIME));
// console.timeEnd();

// console.log(Math.max(2,100));

//is prime practise

// function isPrime(num){
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i === 0) {
//             return false
//         }
//     }
//     return num > 1;
// }

// console.log(isPrime(65));

// function generatePrimes(start, end){
//     const primes = [];

//     for(let i = Math.max(2, start); i <= end; i++){
//         if (isPrime(i)){
//             primes.push(i);
//         }
//     }

//     return primes;
// }

// console.log(generatePrimes(1,100));

//callbacks async

//simple sync
// function doStep1(init) {
//     return init + 2;
//   }

//   function doStep2(init) {
//     return init + 3;
//   }

//   function doStep3(init) {
//     return init + 4;
//   }

//   function doOperation() {
//     let result = 0;
//     result = doStep1(result);
//     result = doStep2(result);
//     result = doStep3(result);
//     console.log(`result: ${result}`);
//   }

//   doOperation();

//callback sync

//   function doStep1(init, callback){
//     const result = init + 1;
//     callback(result);
//   }

//   function doStep2(init, callback) {
//     const result = init + 2;
//     callback(result);
//   }

//   function doStep3(init, callback) {
//     const result = init + 3;
//     callback(result);
//   }

//   function doOperation()
// {
//     doStep1(0, (result1) => {
//         doStep2(result1, (result2) => {
//             doStep3(result2, (result3) => {
//                 console.log(`result: ${result3}`);
//             })
//         })
//     })
// }

// doOperation();

//promises in JS, chainign promises

// const fetchPromise = fetch(
//   "https://yashitech-server.onrender.com/api/v1/service"
// );

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//     const jsonPromise = response.json();
//     jsonPromise.then((data) => {
//         console.log(data.services);
//     })
//     console.log(`Recievce Response: ${response.status}`);
// })

//can be written as:

// fetchPromise
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.services);
//   });

//throwing error

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.services);
//   });

// handling errors with catch()
// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.services);
//   })
//   .catch((error) => {
//     console.error(`Could not get products: ${error}`);
//   });

// console.log("Started request…");

//Promise.all()

// const fetchPromise1 = fetch(
//   "https://yashitech-server.onrender.com/api/v1/services"
// );

// const fetchPromise2 = fetch(
//   "https://yashitech-server.onrender.com/api/v1/contacts"
// );


// Promise.all([fetchPromise1, fetchPromise2])
// .then((responses) => {
//     for(const res of responses) {
//         console.log(`${res.url}: ${res.status}`);
//     }
// })
// .catch((err) => {
//     console.log(`Failed to fetch: ${err}`);
// })

//Promise.any()
// const fetchPromise1 = fetch(
//   "htt://yashitech-server.onrender.com/api/v1/services"
// );

// const fetchPromise2 = fetch(
//   "htt://yashitech-server.onrender.com/api/v1/contacts"
// );


// Promise.any([fetchPromise1, fetchPromise2])
// .then((response) => {
//     console.log(`${response.url}: ${response.status}`);
// })
// .catch((err) => {
//     console.log(`Failed to fetch: ${err}`);
// })