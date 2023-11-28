

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
// console.log(typeof alert); //undefined
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

console.log(Number(undefined)); //Nan
console.log(Number(null)); //0
console.log(Number(true)); //1



//explicit
// let val = 2;
// console.log(val); // 2 (number)
// val = String(val);
// console.log(typeof val); //stirng

// console.log(String(false)); //false
// console.log(String(undefined)); //undefined

