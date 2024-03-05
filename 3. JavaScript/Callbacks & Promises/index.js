// import { loadNow } from "./load";

// function loadScript(scr, callback) {
//   let script = document.createElement("script");
//   script.src = scr;
//   script.onload = () => callback(script);
//   script.onerror = () => callback(new Error(`Script load error for ${scr}`));

//   document.head.append(script);
// }

// loadScript("./load.js", (script) => {
//   alert(`cool, loaded, ${script.src}`);
// });

// setTimeout(() => {
//   loadNow();
// }, 3000);

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("done");
//   }, 1000);
// });

// let promise2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject(new Error("WHOPPY"));
//   }, 1000);
// });

// setTimeout(() => {
//   console.log(promise.result);
// }, 2000);

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done!"), 1000);
//   // reject(new Error("SOmethinfs wron!"));
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   }).finally(() => {
//     console.log("COMPLETED!");
//   })
// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error.message);
//   }
// );

// promise.then((res) => {
//   console.log(res);
// });

// promise.catch((err) => console.log(err.message));
