// let arr = [1,2,3,4,5];

// let itr = arr[Symbol.iterator]();

// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

// let obj = {
//     name:"AJAY",
//     age: 25,
//     isAdmin: true
// }
// Object.prototype[Symbol.iterator] = function(){
//     return Object.keys(this)[Symbol.iterator]();
// }

// for(let prop of obj){
//     console.log(prop);
// }
// let itr = obj[Symbol.iterator]();

// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

//generators

// function* generateSeq() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// let gen = generateSeq();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// for(let val of gen){
//     console.log(val);
// }

// let seq = [0,1, ...gen]
// console.log(seq);

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     return {
//       current: this.from,
//       last: this.to,
//       next() {
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         }
//         return { done: true };
//       },
//     };
//   },
// };

// let itr = range[Symbol.iterator]();
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log([...range, 6, 7, 8]);

// let range = {
//   from: 1,
//   to: 5,
//   *[Symbol.iterator]() {
//     for (let value = this.from; value <= this.to; value++) {
//       yield value;
//     }
//   },
// };
// let itr = range[Symbol.iterator]();

// for(let val of itr){
//     console.log(val);
// }
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log([...range, 6, 7, 8]);

// function* generateSeq(start, end) {
//   for (let i = start; i <= end; i++) yield i;
// }

// function* generatePasswordCodes() {
//   // 0..9
//   yield* generateSeq(48, 57);

//   // A..Z
//   yield* generateSeq(65, 90);

//   // a..z
//   yield* generateSeq(97, 122);
// }

// let str = "";

// for (let code of generatePasswordCodes()) {
//   str += String.fromCharCode(code);
// }

// console.log(str);

// function* gen() {
//   let result = yield "2+2 = ?";
//   console.log(result);
// }

// let generator = gen();
// let ques = generator.next().value;
// // console.log(ques);

// generator.next(4);

// function* gen() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }

//   const g = gen();

//   console.log(g.next());
//   console.log(g.return('foo'))
//   console.log(g.next());

//async iterables and generators

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.asyncIterator]() {
//     return {
//       current: this.from,
//       last: this.to,

//       async next() {
//         await new Promise((resolve, reject) => {
//           setTimeout(resolve, 1000);
//         });

//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true, value: undefined };
//         }
//       },
//     };
//   },
// };

// (async () => {
//   for await (let value of range) {
//     console.log(value);
//   }
// })();

// async function* generateSeq(start, end) {
//   for (let i = start; i <= end; i++) {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     yield i;
//   }
// }

// (async () => {
//     let generator = generateSeq(1,5);
//     for await(let val of generator){
//         console.log(val);
//     }
// })();

async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;

  while (url) {
    const response = await fetch(url, {
      // (1)
      headers: { "User-Agent": "Our script" }, // github needs any user-agent header
    });

    const body = await response.json();

    let nextPage = response.headers.get("Link").match(/<(.*?)>; rel="next"/);
    nextPage = nextPage?.[1];

    url = nextPage;

    for (let commit of body) {
      yield commit;
    }
  }
}

(async () => {
  let count = 0;
  for await (const commit of fetchCommits(
    "AjayGhimire1998/mastering-front-end"
  )) {
    console.log(commit);

    if (++count == 100) {
      break;
    }
  }
})();
