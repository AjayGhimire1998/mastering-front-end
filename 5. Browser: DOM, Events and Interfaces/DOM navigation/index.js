// function sayHi() {
//   alert("Hello");
// }

// // global functions are methods of the global object:
// window.sayHi();

// alert(window.innerWidth)

// document.body.style.backgroundColor = "purple";
// setTimeout(() => document.body.style.background = "", 2000)

// // alert(navigator.userAgent)
// // alert(navigator.platform)
// alert(location.href)

// alert(location.href); // shows current URL
// if (confirm("Go to Wikipedia?")) {
//   location.href = "https://wikipedia.org"; // redirect the browser to another URL
// // }

// document.body.style.background = 'yellow'; // make the background red

// setTimeout(() => document.body.style.background = '', 3000); // return back

// // document.body.innerHTML = `<span>SUPP</span>`

// alert(document.documentElement)

// for (let i = 0; i < document.body.childNodes.length; i++) {
//   alert(document.body.childNodes[i]);
// }


// for (let node of document.body.childNodes) {
//     alert(node); // shows all nodes from the collection
//   }

// console.dir(HTMLInputElement.prototype)

// console.dir(document.body.firstChild )

alert( document.body.innerHTML ); // read the current contents
document.body.innerHTML = 'console.log("hello")'; 


eval(document.body.innerHTML)