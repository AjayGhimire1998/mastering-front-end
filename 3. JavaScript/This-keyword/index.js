//this kleyword

// console.log(this);


// function sayHello(){
//     console.log(this);
// }
// sayHello();  //global obj


// "use strict"

// function sayHello(){
//     console.log(this); 
// }
// sayHello(); //unddefined


//this in event

var button = {
    innerHTML: "Click Me", // Set button text
    id: "myButton", // Set button ID
    addEventListener: function(event, callback) {
      console.log("Event listener added for", event);
      // Simulating an event listener
      callback();
    }
  };

button.addEventListener('click', function() {
    console.log(this.innerHTML);

})

