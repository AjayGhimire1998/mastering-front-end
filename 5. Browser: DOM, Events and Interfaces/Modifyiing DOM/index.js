let div = document.createElement("div");
let textNode = document.createTextNode("Here I am");

div.setAttribute("class", "alert");
div.setAttribute("id", "alerId");

div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

// document.body.append(div);
console.log(div.attributes);

ol.before("before");
ol.after("after");

let liFirst = document.createElement("li");
liFirst.innerHTML = "prepend";
ol.prepend(liFirst);

let liLast = document.createElement("li");
liLast.innerHTML = "append";
ol.append(liLast);

// // document.append('<br>')
// div.before(
//   document.createElement("br"),
//   "<p>Hello</p>",

//   document.createElement("hr")
// );

// div.insertAdjacentHTML("beforebegin", "<p>Hello</p>");
// div.insertAdjacentHTML("afterend", "<p>Bye</p>");

setTimeout(() => div.remove(), 1000);
second.after(first); 
