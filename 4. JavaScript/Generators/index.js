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

function* generateSeq() {
  yield 1;
  yield 2;
  return 3;
}

let gen = generateSeq();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// for(let val of gen){
//     console.log(val);
// }

// let seq = [0,1, ...gen]
// console.log(seq);

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        }
        return { done: true };
      },
    };
  },
};

let itr = range[Symbol.iterator]();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log([...range, 6, 7, 8]);
