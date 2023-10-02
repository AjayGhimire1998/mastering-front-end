/* Stacks are a data structure that store information in the form of a list. 
They allow only adding and removing elements under a LIFO pattern (last in, first out). 
In stacks, elements can't be added or removed out of order, 
they always have to follow the LIFO pattern.
To understand how this works, 
imagine a stack of papers on top of your desk. 
You can only add more papers to the stack by placing them on top of all the others. 
And you can remove a paper from the stack only by taking the one that is on top of all the others. 
Last in, first out. LIFO. 😉 */

//Easy and Simple: USING PUSH AND POP METHODS FOR ARRAYS

//Custom:

// We create a class for each node within the stack
class StackNode {
  // Each node has two properties, its value and a pointer that indicates the node that follows
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// We create a class for the stack
class Stack {
  // The stack has three properties, the first node, the last node and the stack size
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* The push method receives a value and adds it to the "top" of the stack,
  and returns the stack size  */
  push(val) {
    let newNode = new StackNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let tempNode = this.first;
      this.first = newNode;
      this.first.next = tempNode;
    }
    this.size++;
    return this.size;
  }

  // The pop method eliminates the element at the "top" of the stack and returns its value
  pop() {
    if (!this.first) return null;
    let tempNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return tempNode.value;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.push(4)); // size becomes 4
console.log(stack.pop()); //4 is removed
console.log(stack.pop()); //3 is removed
