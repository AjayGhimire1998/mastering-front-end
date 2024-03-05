// function loadScript(scr, callback) {
//   let script = document.createElement("script");
//   script.src = scr;
//   script.onload = () => callback(script);
//   script.onerror = () => callback(new Error(`Script load error for ${scr}`));

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
