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


function hello(name){
    let phrase = `Hello, ${name}`;
    say(phrase);
}

function say(phrase){
    console.log(phrase)
}

hello("Ajay")