// var declaration

var fullName = "Ajay";

if (fullName === "Ajay") {
  var fullName = "Ajita";
  console.log(fullName); // "Ajita"
}
console.log(fullName); // "Ajita"


var x = 1;
function foo() {

  function bar() {
    var x = 3;
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError, `y` is scoped to `bar`
}

foo();


