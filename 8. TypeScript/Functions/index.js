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
function firstElement(arr) {
    return arr[arr.length - 1];
}
// s is of type 'string'
var s = firstElement(["a", 5, false]);
// n is of type 'number'
var n = firstElement([1, 2, 3]);
// u is of type undefined
var u = firstElement([]);
console.log(s, n, u);
