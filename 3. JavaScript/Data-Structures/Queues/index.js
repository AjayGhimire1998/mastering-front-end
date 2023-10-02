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

// We create a class for the queue
class Queue {
  // The queue has three properties, the first node, the last node and the queue size
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // The enqueue method receives a value and adds it to the "end" of the queue
  enqueue(val) {
    let newQueueNode = new QueueNode(val);
    if (!this.first) {
      this.first = newQueueNode;
      this.last = newQueueNode;
    } else {
      this.last.next = newQueueNode;
      this.last = newQueueNode;
    }

    this.size++;
    return this.size;
  }

  // The dequeue method eliminates the element at the "beginning" of the queue and returns its value
  dequeue() {
    if (!this.first) return null;
    let tempQueueNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return tempQueueNode.value;
  }

  toString() {
    let result = [];

    if (this.size === 0) return null;
    if (this.size === 1) return [this.first];

    let head = this.first;

    for (let i = 0; i < this.size; i++) {
      result[i] = head;
      head = head.next;
    }
    return result;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// queue.dequeue();

console.log(queue.toString());
