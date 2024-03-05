// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`

addEventListener("message", (message) => {
    if (message.data.command === "generate"){
        generatePrimes(message.data.quota);
    }
})

function generatePrimes(quota) {

    function isPrime(n){
        for (let i = 2; i<= Math.sqrt(n); i++){
            if (n % i === 0){
                return false;
            }
        }
        return n > 1
    }


    const primes = new Set();
    const MAX = 1_000_000;

    while (primes.size < quota){
        const candidate = Math.floor(Math.random() * (MAX + 1));
        if (isPrime(candidate)) {
            primes.add(candidate)
        }
    }
    const primesArray = Array.from(primes);
    postMessage({length: primesArray.length, primes: primesArray})
}
