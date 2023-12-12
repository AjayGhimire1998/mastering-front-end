


///XHRHttpRequest

const res = require("express/lib/response");




//async operation //doesnt work in modern js


// let xhr = new XMLHttpRequest();

// xhr.open("GET", "https://yashitech-server.onrender.com/api/v1/services")
// xhr.send();

// xhr.onload = () => {
//     console.log(xhr.status, xhr.response);
// }



//fetch


// let response =  fetch("https://yashitech-server.onrender.com/api/v1/services");
// if (response.ok){
//     let data =  response.body
//     console.log(data);
// }