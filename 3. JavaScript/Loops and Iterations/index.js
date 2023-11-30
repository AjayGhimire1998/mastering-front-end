//for-loop
// for (let i = 0; i < 10; i++) {
//   console.log(i + 1 + ". " + "Ajay");
// }

// let count = 0;
// for (count = 0; count < 5; count++) {
//   console.log("count inside: " + count); // 0, 1, 2, 3, 4
// }
// console.log("count outside: " + count); //5

let child = `<button class="button">Hello</button>`
let counter = 0; 
for(counter = 0; counter < 5; counter++){
    document.body.innerHTML += child;
    let button = document.body.getElementsByClassName("button");
    
}

