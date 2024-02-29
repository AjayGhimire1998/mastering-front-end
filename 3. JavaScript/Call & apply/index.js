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

function slow(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Called with ${x}`);
  return x;
}
