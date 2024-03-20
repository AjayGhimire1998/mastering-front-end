let num: number = 5;
console.log(num);

type Person = {
  name: string;
};

class User implements Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let user = new User("ajay");
console.log(user);
