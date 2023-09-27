/* Object Prototype*/
const person = {
  name: "Ajay",
  age: 25,
  getAge: function () {
    return this.age;
  },
};
// console.log(person.__proto__); //[Object: null prototype] {}
// console.log(Object.getPrototypeOf(person)); //[Object: null prototype] {}

// console.log(person.__proto__ === Object.getPrototypeOf(person)); //true

//Dog class
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    // this.bark = function() {
    //     console.log("woof woof");
    // }
  }
}
Dog.prototype.bark = function () {
  console.log(`${this.name} says woff woof`);
};
const dog = new Dog("Tommy", "Labrador");
const dog2 = new Dog("Kutta", "Husky");
console.log(dog);
console.log(dog2);
console.log(dog.bark === dog2.bark); //false because they are two diffrenet properties in the memory
dog.bark();
dog2.bark();
// console.log(Dog.prototype);

