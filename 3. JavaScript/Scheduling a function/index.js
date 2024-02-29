// function logHi(phrase, name){
//     console.log(phrase + ', ' + name);
// }

// let timerID = setTimeout(logHi, 0, "Hello", "Ajay");
// console.log(timerID); //timer identifier

// clearTimeout(timerID)
// console.log(timerID);

// setTimeout(() => console.log("World"),0);

// console.log("Hello");

// let i = 0;
// function fn(a) {

//   console.log(a);
// }
// let timerId = setTimeout(function run() {
//   fn(i++);
//   setTimeout(run, 1000);
// }, 1000);

// setTimeout(() => clearTimeout(timerId), 5000)

// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start); // remember delay from the previous call

//   if (start + 100 < Date.now()) console.log(times); // show the delays after 100ms
//   else setTimeout(run); // else re-schedule
// });

// function printNumbers(from,to){
//     let current = from;
//     function go(){
//         console.log(current);
//         if(current === to){
//             clearInterval(timerId)
//         }
//         current++;
//     }

//     go();
//     let timerId = setInterval(go, 1000)
// }
// function printNumbers(from, to) {
//   let current = from;
//   setTimeout(function go() {
//     if (current < to) {
//       setTimeout(go, 1000);
//     }

//     console.log(current);
//     current++;
//   }, 1000);
// }

printNumbers(1, 5);
