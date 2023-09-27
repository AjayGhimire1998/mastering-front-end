const person = {
    name: "Ajay",
    age: 25,
    getAge: function() {
        return this.age;
    }
}
console.log(person.__proto__); //[Object: null prototype] {}
console.log(Object.getPrototypeOf(person)); //[Object: null prototype] {}

console.log(person.__proto__ === Object.getPrototypeOf(person)); //true