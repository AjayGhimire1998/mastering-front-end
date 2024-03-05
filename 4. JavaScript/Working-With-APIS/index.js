


///XHRHttpRequest





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

// let response =  fetch("https://yashitech-server.onrender.com/api/v1/services");

//     let data = response.json()
//     console.log(data);

    // let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    // let response =  fetch(url);
    
    // let commits =  response.json(); // read response body and parse as JSON
    
    // console.log(commits[0].author.login);


//     fetch("https://yashitech-server.onrender.com/api/v1/services")
//   .then(response => {
//     response.json()
//     // console.log(response.headers);
//     for (let [key, value] of response.headers) {
//         console.log(`${key} = ${value}`);
//       }
// })
//   .then(commits => console.log(commits));

/* The `alert("Hello")` statement displays a dialog box with the message "Hello". It is used to show a
message to the user. */
// alert("Hello")

// const canvasElem = document.querySelector("#canvasElem");

// canvasElem.addEventListener("mousedown", (e)  => {
//     let ctx = canvasElem.getContext('2d');
//     ctx.lineTo(e.clientX, e.clientY);
//     ctx.stroke();
//   });

// document.addEventListener('DOMContentLoaded', function () {
//     const canvasElem = document.querySelector("#canvasElem");
//     const ctx = canvasElem.getContext('2d');
  
//     // Set line properties
//     ctx.lineWidth = 2;
//     ctx.lineCap = 'round';
//     ctx.lineJoin = 'round';
  
//     ctx.strokeStyle = 'black';
//     let isDrawing = false;
  
//     canvasElem.addEventListener("mousedown", (e) => {
//       isDrawing = true;
//       ctx.beginPath();
//       ctx.moveTo(e.clientX, e.clientY);
//     });
  
//     canvasElem.addEventListener("mousemove", (e) => {
//       if (isDrawing) {
//         ctx.lineTo(e.clientX, e.clientY);
//         ctx.stroke();
//       }
//     });
  
//     canvasElem.addEventListener("mouseup", () => {
//       isDrawing = false;
//     });
//   });

  