// let blob = new Blob(["<html><body><h1>Hello</h1></body></html>"], {type: 'text/html'});

let hello = new Uint8Array([72, 101, 108, 108, 111]);

let blob = new Blob([hello, " ", "world"], { type: "text/plain" });

console.log(blob.stream().getReader().read().then((data) => console.log(data)));

