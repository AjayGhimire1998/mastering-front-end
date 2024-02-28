// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     spouse: null
//   };

//   console.log( JSON.stringify(student)); //string

//   let json = JSON.stringify(student);
//   console.log(JSON.parse(json));

//   let user = {
//     sayHi() { // ignored
//       alert("Hello");
//     },
//     [Symbol("id")]: 123, // ignored
//     something: undefined // ignored
//   };

//   console.log(JSON.stringify(user));

// let room = {
//     number: 23
//   };

//   let meetup = {
//     title: "Conference",
//     participants: ["john", "ann"]
//   };

//   meetup.place = room;       // meetup references room
//   room.occupiedBy = meetup; // room references meetup

//   console.log(JSON.stringify(meetup));

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup references room
// };
// room.occupiedBy = meetup;

// // console.log(JSON.stringify(meetup, ['title', 'participants', 'name', 'place','number']));
// console.log(JSON.stringify(meetup, function replacer(key, value){
//     console.log(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
// }));

// let user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true,
//   },
// };

// console.log(JSON.stringify(user, null, 5));

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// console.log( meetup.date.getDate() );