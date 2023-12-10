

//synchronous js 

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