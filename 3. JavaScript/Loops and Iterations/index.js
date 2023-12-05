//for-loop
// for (let i = 0; i < 10; i++) {
//   console.log(i + 1 + ". " + "Ajay");
// }

// let count = 0;
// for (count = 0; count < 5; count++) {
//   console.log("count inside: " + count); // 0, 1, 2, 3, 4
// }
// console.log("count outside: " + count); //5

// let child = `<button class="button">Hello</button>`
// let counter = 0;
// for(counter = 0; counter < 5; counter++){
//     document.body.innerHTML += child;
//     let button = document.querySelector("button");
// }

//do...while-loop
// let i = 0;
// do {

//   console.log(i);
//   i += 1;
// } while (i < 5);


//while-loop

// let j = 0 
// while (j < 10) {
//     console.log(j);
//     j++;
// }


// /label statement

// tenItr: for (let i = 0; i< 10; i++){
//     console.log(i);
// }

// let x = 0; 
// let z = 0;

// labeledLoop: while(true){
//     console.log(" Outer Loops: ", x);
//     x++;
//     z = 1;
//     while (true) {
//         console.log("Inner loops: ", z);
//         z++;

//         if (z === 10 && x === 10){
//             break labeledLoop;
//         } else if (z === 10) {
//             break;
//         }
//     }
// } 


//for..in 


// const person = new Object();
// person.name = "Ajay";
// person.age = 25;
// console.log(person);
// // Object.defineProperty(person, "age", {enumerable: false})

// for(const key in person){
//     console.log(key + ": ", person[key]);
// }

// console.log(person.propertyIsEnumerable("name"));

// let names = new Array();
// names[0] = "Ajay";
// names[1] = "Sia"; 
// names[2] = "Mama";

// console.log(names);

// for (let value in names) {
//     console.log(value); // logs the indices
// }

//for...of 

const arr = [3,5,7];
arr.foo = "bar"

 for (const i of arr){
    console.log(i);
 }

const arr2 = new Object(arr);
console.log(arr2);

for (const i in arr2) {
    console.log(i, arr2[i]);
}









