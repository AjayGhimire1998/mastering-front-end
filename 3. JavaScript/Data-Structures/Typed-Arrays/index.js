/* √JavaScript typed arrays are array-like objects 
that provide a mechanism for reading and writing raw binary data 
in memory buffers.

Typed arrays are not intended to replace arrays for any kind of functionality. 
Instead, they provide developers with a familiar interface for 
manipulating binary data. This is useful when interacting with platform features, 
such as audio and video manipulation, access to raw data using WebSockets, 
and so forth. Each entry in a JavaScript typed array is a 
raw binary value in one of a number of supported formats, 
from 8-bit integers to 64-bit floating-point numbers. 

To achieve maximum flexibility and efficiency, 
JavaScript typed arrays split the implementation into buffers and views. 
A buffer is an object representing a chunk of data; it has no format to speak of, 
and offers no mechanism for accessing its contents. 
In order to access the memory contained in a buffer, 
you need to use a view. A view provides a context — 
that is, a data type, starting offset, and number of elements.*/

//typed arrays by themselves
let typedArray1 = new Int8Array(8);
typedArray1[0] = 32;
console.log(typedArray1);

let typedArray2 = new Uint16Array(typedArray1);
console.log(typedArray2);

//type arrays on top of buffer
const buffer = new ArrayBuffer(16); // Creates a buffer with 16 bytes
const int32Array = new Int32Array(buffer); // Create a Typed Array (e.g., Int32Array) view on top of the buffer
// Now you can access and manipulate the data in the Typed Array
int32Array[0] = 42; //set the first elem to 42
console.log(int32Array);
console.log(int32Array[0]);

//dataview for typearrays on top of buffer
const buffer2 = new ArrayBuffer(16); //// Create an ArrayBuffer with 8 bytes
const dataView = new DataView(buffer2); // Create a DataView on top of the ArrayBuffer
dataView.setInt32(0, 45); // Write a 32-bit integer at byte offset 0
dataView.setInt32(1, 44);

console.log(dataView.getInt32(0));
console.log(dataView.getInt32(1));
console.log(dataView.getInt16(4));

