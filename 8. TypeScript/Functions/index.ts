//call signatures

// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };

// function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + " returned " + fn(1));
// }

// function myFunc(someArg: number) {
//   return someArg > 3;
// }
// myFunc.description = "default desc";
// doSomething(myFunc);

//construct signature

// interface SomeObject {
//   name: string;
// }

// type SomeConst = {
//   new (s: string): any;
// };

// function fn(cont: SomeConst) {
//   return new cont("hello");
// }

// console.log(fn());

// function firstElement<T>(arr: T[]): T | undefined {
//   return arr[arr.length - 1];
// }

// // s is of type 'string'
// const s = firstElement(["a", 5, false]);
// // n is of type 'number'
// const n = firstElement([1, 2, 3]);
// // u is of type undefined
// const u = firstElement([]);

// console.log(s, n, u);

// function myMap<Input, Output>(
//   arr: Input[],
//   func: (arg: Input) => Output
// ): Output[] {
//   return arr.map(func);
// }

// const parsed = myMap(["1", "2", "3"], (n) => parseInt(n));
// console.log(parsed);

// const parsed2 = myMap([1, 2, 3], (n) => String(n));
// console.log(parsed2);

// function longest<Type extends { length: number }>(a: Type, b: Type) {
//   if (a.length >= b.length) {
//     return a;
//   } else {
//     return b;
//   }
// }

// const longerArray = longest([1, 2], [1, 2, 3]);
// // longerString is of type 'alice' | 'bob'
// const longerString = longest("alice", "bob");
// // Error! Numbers don't have a 'length' property
// // const notOK = longest(100, 10);

// console.log(longerArray);
// console.log(longerString);
// console.log(notOK);

// function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
//   return arr1.concat(arr2);
// }

// const arr = combine<string | number>([1, 2, 3], ["hello"]);

// console.log(arr);

function f(x?: number) {
  console.log(x);
}
