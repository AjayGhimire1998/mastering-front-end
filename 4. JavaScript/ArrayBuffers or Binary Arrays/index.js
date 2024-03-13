let buffer = new ArrayBuffer(16);
// console.log(buffer.byteLength);


let view = new Uint32Array(buffer);
// console.log(view.length);

// console.log(Uint32Array.BYTES_PER_ELEMENT);

// console.log(view.byteLength);


view[0] = 123245;

for(num of view){
    console.log(num);
}
