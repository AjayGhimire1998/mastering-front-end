// let obj = { name: "ajay", age: 50 };
// let symbol = Symbol("id");
// obj[symbol] = "1";
// obj[Symbol.iterator] = function() {
//     let keys = Object.keys(this);
//     let index = 0;

//     return {
//         next: () => {
//             if (index < keys.length) {
//                 let key = keys[index++];
//                 return { done: false, value: this[key] };
//             } else {
//                 return { done: true };
//             }
//         }
//     };

// }


// console.log(obj);
// let obj2 = Object.assign({}, obj);
// console.log(obj2);

// console.log(obj[Symbol.iterator]().next());

// for(let item of Reflect.ownKeys(obj)){
//    console.log(item);
// }
