// let buffer = new ArrayBuffer(16);
// console.log(buffer.byteLength);

// let view = new Uint32Array(buffer);
// // console.log(view.length);

// // console.log(Uint32Array.BYTES_PER_ELEMENT);

// // console.log(view.byteLength);

// view[2] = 123245;

// for (num of view) {
//   console.log(num);
// }

//text encode and decoder

let decoder = new TextDecoder();
let uint8Arr = new Uint8Array([72, 101, 108, 108, 111]);
console.log(decoder.decode(uint8Arr)); //Hello
