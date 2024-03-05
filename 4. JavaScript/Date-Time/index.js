// let date = new Date();

// console.log(date);

// let date = new Date(0);

// console.log(date);

// let Dec31_1969 = new Date(-24 * 60 * 60 * 1000);
// console.log(Dec31_1969);

// console.log(new Date().getTimezoneOffset());

// let d1 = new Date(2012, 1, 20, 3, 12);
// //new Date(datastring)
// let d2 = new Date("2012-02-20T03:12");
// console.log(d2);

// let date = new Date(2012, 0, 3);

// function getWeekDay(date){
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
//     return days[date.getDay()];
// }
// function getLocalDay(date) {

//     let day = date.getDay();

//     if (day == 0) { // weekday 0 (sunday) is 7 in european
//       day = 7;
//     }

//     return day;
//   }

// console.log(getWeekDay(date));
// console.log(getLocalDay(date));

// function getDateAgo(date, days) {
//   let copy = new Date(date);
//   // console.log(copy.getDate());
//   copy.setDate(date.getDate() - days);
//   return copy.getDate();
// }

// let date = new Date(2015, 0, 2);
// console.log(getDateAgo(date, 365));


function getLastDayOfMonth(year, month){
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 0));