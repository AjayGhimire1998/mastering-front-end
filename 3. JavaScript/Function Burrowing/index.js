// function giveArgs(){
//     return Array.prototype.slice.apply(arguments)
// }

// console.log(giveArgs("ajay", 30, true));

class Animal {
  constructor(names, type, age) {
    this.names = names;
    this.type = type;
    this.age = age;
  }

  greet(additionalAge) {
    if (additionalAge !== undefined) {
      this.age = additionalAge;
    }
    return `${this.names} + ${this.type} + ${this.age}`;
  }
}

class Dog {
  constructor(names, type) {
    this.names = names;
    this.type = type;
  }
}

let animal = new Animal("billu", "cat", 12);
let dog = new Dog("Kutta", "dog");
console.log(animal.greet());

let dogGreet = animal.greet.bind(dog);
console.log(dogGreet(22));
