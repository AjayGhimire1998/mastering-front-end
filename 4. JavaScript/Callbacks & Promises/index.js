// function loadScript(scr, callback) {
//   let script = document.createElement("script");
//   script.src = scr;
//   script.onload = () => callback(script);
//   script.onerror = () => callback(new Error(`Script load error for ${scr}`));

// const { promisify } = require("util");

//   document.head.append(script);
// }

// loadScript("./load.js", (script) => {
//   if (script instanceof Error) {
//     alert("ERRORRRR!!");
//   }
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

// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Script load error fro ${src}`));

//     document.head.append(script);
//   });
// }

// let promise = loadScript("./load.js");

// promise.then(
//   (script) => alert(`${script.src} is loaded`),
//   (error) => alert(`Error: ${error.message}`)
// );

// promise.finally(() => {
//   alert("Finally is run!");
// });

// async function loadJson(url) {
//   const res = await fetch(url);
//   return await res.json();
// }

// async function loadGithubUser(name) {
//   const res = await fetch(`https://api.github.com/users/${name}`);
//   return await res.json();
// }

// function showAvatar(githubUser) {
//   return new Promise((resolve, reject) => {
//     let img = document.createElement("img");
//     img.src = githubUser.avatar_url;
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 2000);
//   });
// }

// loadGithubUser("AjayGhimire1998")
//   .then(showAvatar)
//   .then((githubUser) => alert(`Finished showing ${githubUser.name}`));

// let hello = "hello world"

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("WHOPPYY DODO")), 2000)
//   ),
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
// ]).then(console.log);

// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://api.github.com/users/jeresig",
// ];

// let requests = urls.map((url) => fetch(url));

// Promise.all(requests).then((res) =>
//   res.forEach((r) => alert(`${r.url}: ${r.status}`))
// );

// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://no-such-url",
// ];

// Promise.allSettled(urls.map((u) => fetch(u))).then((results) => {
//   results.forEach((res, index) => {
//     if (res.status === "fulfilled") {
//       console.log(`${urls[index]}: ${res.value.status}`);
//     }

//     if (res.status === "rejected") {
//       console.log(`${urls[index]}: ${res.reason}`);
//     }
//   });
// });

// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then(console.log); // 1

// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then(alert);

// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Ouch!")), 1000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Error!")), 2000)
//   ),
// ]).catch((error) => {
//   console.log(error.constructor.name); // AggregateError
//   console.log(error.errors[0]); // Error: Ouch!
//   console.log(error.errors[1]); // Error: Error!
// });

//promisify

const getSumAsync = (num1, num2, callback) => {
  if (!num1 || !num2) {
    return callback(new Error("Missing components"), null);
  }
  return callback(null, num1 + num2);
};

// // getSumAsync(1, 2, (err, result) => {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(result);
// //   }
// // });

// const getSumPromise = promisify(getSumAsync);

// getSumPromise(1, 5).then((res) => console.log(res));

// const myPromisify = (fn) => {
//   return (...args) => {
//     return new Promise((resolve, reject) => {
//       function customCallback(err, ...results) {
//         if (err) {
//           return reject(err);
//         } else {
//           return resolve(results.length === 1 ? results[0] : results);
//         }
//       }

//       args.push(customCallback);
//       fn.call(this, ...args);
//     });
//   };
// };
// const getSumPromise = myPromisify(getSumAsync);
// getSumPromise(100, 200).then((res) => console.log(res));

// let promise1 = Promise.resolve();
// let promise2 = Promise.resolve();

// promise1
// .then(() => console.log(1))
// .then(() => console.log(2));

// promise2
// .then(() => console.log(3))
// .then(() => console.log(4))

//async await

// async function hello() {
//   return "HELLO";
// }

// hello().then(console.log);

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   let result = promise;

//   console.log(result.then(console.log));
//   console.log("DONE???");
// }

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   let result = await promise;

//   console.log(result);
//   console.log("DONE???");
// }

// f();

// async function showAvatar(githubName) {
//   let githubResponse = await fetch(
//     `https://api.github.com/users/${githubName}`
//   );
//   let githubUser = await githubResponse.json();

//   let img = document.createElement("img");
//   img.src = githubUser.avatar_url;
//   document.body.append(img);

//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();
//   return githubUser;
// }

// showAvatar("AjayGhimire1998")

// (async () => {
//   let githubResponse = await fetch(
//     `https://api.github.com/users/AjayGhimire1998`
//   );

//   console.log("RESPONSE:" +  githubResponse);
//   let githubUser = await githubResponse.json();
//   console.log("USER:" + githubUser);
// })();

// function promisify(fn) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       function customCallback(err, ...results) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(results.length === 1 ? results[0] : results);
//         }
//       }

//       args.push(customCallback);
//       fn.call(this, ...args);
//     });
//   };
// }

// async function f() {
//   try {
//     let response = await Promise.reject(new Error("Whoops!"));
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// async function f() {
//   await Promise.reject(new Error("SUPPP"));
// }

// f().catch(console.log);

async function f() {
  // try {
  let response = await fetch("/no-user-here");
  let user = await response.json();
  // }
  // } catch (err) {
  //   // catches errors both in fetch and response.json
  //   console.log(err);
  // }
}

f()
  .then(() => console.log("success!"))
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log("DONE@");
  });
