// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList() {
//       this.students.forEach(function(student) {
//         // Error: Cannot read property 'title' of undefined
//         console.log(this.title + ': ' + student);
//       });
//     }
//   };

//   group.showList();

// function slow(x) {
//   // there can be a heavy CPU-intensive job here
//   console.log(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func){
//     let cache = new Map();

   
//     return function(x){
//         if (cache.has(x)){
            
//             return cache.get(x);
//         }

//         let result = func(x); 
//         cache.set(x, result);
//         console.log(cache);
//         return result;
//     }
// }


// slow = cachingDecorator(slow);


// console.log(slow(1));
// console.log("Again: " + slow(1));
// console.log("Again: " + slow(2));

// let obj = {
//     name: "ajay",
//     age: 25,
//     getObj: function(){
//         return this;
//     }
// }

// console.log(obj.getObj());

// let res = obj.getObj.call(123);
// console.log(-res);



// function hello(){
//     return this;
// }

// console.log(hello());

// function Animal(name, type){
//     this.name = name;
//     this.type = type
//     console.log(this);
// }

// let animal = new Animal("billu", "cat");
// console.log(animal);

// class Animal {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }

//     static getThis(){
//         return this;
//     }
// }
// let animal = new Animal("billu", "cat");
// console.log(Animal.getThis());

// let arr1 = ["ajay", "ghimire"];
// let arr2 = [25, true]
// Array.prototype.push.apply(arr1, arr2)
// console.log(arr1);
// console.log(arr2);

// function hash() {
//     let arr1 = ["ajay", "ghimire"];
//     console.log(Array.prototype.push.apply(arr1,arguments) ); // 1,2
//     console.log(arr1);
//   }

//   hash(1, 2)
