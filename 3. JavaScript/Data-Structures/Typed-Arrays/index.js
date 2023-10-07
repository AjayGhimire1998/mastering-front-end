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
