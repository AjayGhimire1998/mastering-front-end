

//synchronous js 

const MAX_PRIME = 1_000_000;

function isPrime(n){
   for(let i = 2; i <= Math.sqrt(n); i++ ){
    if (n % i === 0) {
        return false;
    }
   }
   return n > 1;
}

function generatePrimeInrange(start, end){
    const primes = [];

    for(let num = Math.max(2, start); num <= end; num++){
        if (isPrime(num)){
            primes.push(num)
        }
    }
    return primes;
}

console.log(isPrime(119));
console.log(generatePrimeInrange(1,100));