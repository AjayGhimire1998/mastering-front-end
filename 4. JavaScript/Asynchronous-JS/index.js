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


//async/await

// async function myFunction () {
//  const res = await generateNums(1, 100);
//  console.log("Aysnc finsided ? ");
//  return res;

// }

// function generateNums(start, end) {
//     let result = [];

//     for(let i = start; i <=end; i++){
//         result.push(i)
//     }
//     return result;
// }

// console.log(myFunction())
// console.log(generateNums(1,100));


// async function fetchServices(){
//     try {
//          // after this line, our function will wait for the `fetch()` call to be settled
//     // the `fetch()` call will either return a Response or throw an error
//         const response = await fetch("https://yashitech-server.onrender.com/api/v1/services")
//         if (!response.ok){
//             throw new Error (`HTTP error: ${response.status}`)
//         }
//          // after this line, our function will wait for the `response.json()` call to be settled
//     // the `response.json()` call will either return the parsed JSON object or throw an error
//         const data = await response.json();
//         console.log(data.services);
//     } catch (error) {
        
//     }
// }
// const fetchpromise = fetchServices()
// console.log("result: ",fetchpromise);

// async function exampleAsyncFunction() {
//     return "Hello, Async!";
//   }
  
//   const resultPromise = exampleAsyncFunction();
  
//   resultPromise.then(result => {
//     console.log(result); // Output: Hello, Async!
//   });


//how to implement promise based api

// async function exampleAsyncFunction() {
//     return Promise.resolve("Hello, Async!");
//   }
  

//   const resultPromise = exampleAsyncFunction();
//   console.log(resultPromise);
//   resultPromise.then(result => {
//     console.log(result); // Output: Hello, Async!
//   });
//   console.log(resultPromise);


// function setAlarm(name, delay){
//     return setTimeout(() => {
//         console.log(`${name} Woke up in ${delay} seconds`);
//     }, delay)
// }
// console.log(setAlarm("Ajay", 2000))


//normal func returning promise
// function normalFunction() {
//     // Creating a Promise
//     return new Promise((resolve, reject) => {
//       // Simulating an asynchronous operation
//       setTimeout(() => {
//         const randomNumber = Math.random();
  
//         if (randomNumber > 0.5) {
//           // Resolve the Promise with a successful result
//           resolve(`Success! Random number: ${randomNumber}`);
//         } else {
//           // Reject the Promise with an error
//           reject(`Error! Random number: ${randomNumber}`);
//         }
//       }, 1000); // Simulating a delay of 1 second
//     });
//   }
  
//   // Using the normal function that returns a Promise
//   normalFunction()
//     .then(result => {
//       console.log(result); // Success! Random number: ...
//     })
//     .catch(error => {
//       console.error(error); // Error! Random number: ...
//     });

//promise constructor

// function alarm(person, delay){
//     return new Promise((resolve, reject) => {
//         if(delay < 0){
//             throw new Error("Alarm delay must be positive integer");
//         }

//         setTimeout(() => {
//             resolve(`Wake up, ${person}`)
//         }, delay )
//     })
// }

// const promise = alarm("Ajay", -1000);
// promise.then((result) => console.log(result)).catch((error) => console.log(error));

//using async await with alarm 

// function alarm(person, delay){
//     return new Promise((resolve, reject) => {
//         if (delay < 1) {
//             throw new Error ("Delay must be positive");
//         }
//         setTimeout(() => {
//             resolve(`Wake up, ${person}`)
//         }, delay)
//     })
// }

// async function setAlarm() {
//     try{
//         const message = await alarm("Ajay", 2000);
//         console.log(message);
//     } catch (error) {
//         console.log(error);
//     }
// }

// setAlarm()

// const promise = alarm("Ajay", 2000);
// function setAlarm () {
//     return Promise.all([promise]).then((res) => console.log(res)).catch((err) => console.log(err))
// }

// console.log(setAlarm());


//wrokers

// main code




// Create a new worker, giving it the code in "worker.js"
// const worker = new Worker('./worker.js');

// // When the user clicks "Generate primes", send a message to the worker.
// // The message command is "generate", and the message also contains "quota",
// // which is the number of primes to generate.

// document.querySelector('#generate').addEventListener("click", () => {
//     const quota = document.querySelector('#quota').value;
//     worker.postMessage({
//         command: "generate",
//         quota,
//     })
// })

// // When the worker sends a message back to the main thread,
// // update the output box with a message for the user, including the number of
// // primes that were generated, taken from the message data.


// worker.addEventListener("message", (message) => {

//     document.querySelector('#time').textContent = `${Date.now()}`
//     document.querySelector('#output').textContent = `FInsihed geenration ${message.data.length} primes! Here it is: ${message.data.primes}`;
// })

// document.querySelector("#reload").addEventListener("click", () => {
//     document.querySelector("#user-input").value =
//       'Try typing in here immediately after pressing "Generate primes"';
//     document.location.reload();
//   });
  



//setInterval()
// let timer = 0;
// const intervalId = setInterval(() => {
//     timer += 1;
//     console.log(timer);


// if (timer === 3) {
//     console.log('Clearing the interval id after 3 executions'); 
//     clearInterval(intervalId)
// }
// }, 1000);



let count = 0; 
  
// The arguments passed after the  
// delay (in milliseconds) will 
// be received in our function  
// inside the setInterval() method 
const intervalId = setInterval( 
  (a, b) => { 
    console.log(`The sum of ${a+count} and ${b+count} is ${(a + count) + (b + count)}`); 
    count++; 
  
    if (count === 5) { 
      console.log("Clearing the interval id after 5 executions"); 
      clearInterval(intervalId); 
    } 
  }, 
  1000, 
  5, 
  10 
); 



