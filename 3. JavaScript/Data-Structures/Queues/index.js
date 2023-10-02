/*Queues work in a very similar way to stacks, 
but elements follow a different pattern for add and removal. 
Queues allow only a FIFO pattern (first in, first out). 
In queues, elements can't be added or removed out of order, 
they always have to follow the FIFO pattern.

To understand this, picture people making a queue to buy food. 
The logic here is that if you get the the queue first, 
you'll be the first to be served. 
If you get there first, you'll be the first out. FIFO.😉  */

//Simple and Easy: push and shift methods of an array

//Custom Queue:

// We create a class for each node within the queue
class QueueNode {
  // Each node has two properties, its value and a pointer that indicates the node that follows
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {}
