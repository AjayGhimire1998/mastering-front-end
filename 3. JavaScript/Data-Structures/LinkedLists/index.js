/* 
Linked lists are a type of data structure 
that store values in the form of a list. 
Within the list, each value is considered a node, 
and each node is connected with the following value 
in the list (or null in case the element is the last in the list) through a pointer.

There are two kinds of linked lists, 
singly linked lists and doubly linked lists.
 Both work very similarly, 
 but the difference is in singly linked lists 
 each node has a single pointer that indicates the next node on the list. 
 While in doubly linked lists, each node has two pointers, 
 one pointing to the next node and another pointing to the previous node.
 */

//Singly LinkedList
// We create a class for each node within the list
class SinglyLinkedListNode {
  // Each node has three properties, its value, a pointer that indicates the node that follows and a pointer that indicates the previous node
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// We create a class for the list
class SinglyLinkedList {
  // The list has three properties, the head, the tail and the list size
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // The insertLast method takes a value as parameter and assigns it as the tail of the list and returns the list
  insertLast(value) {
    const newNode = new SinglyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // The removeLast method removes the tail of the list and returns the removed tail
  removeLast() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // The insertFirst method takes a value as parameter and assigns it as the head of the list, and returns the list
  insertFirst(value) {
    const newNode = new SinglyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  // The removeFirst method removes the head of the list and returns the removed head;
  removeFirst() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  // The get method takes an index number as parameter and returns the value of the node at that index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
  set(index, value) {
    let nodeToSet = this.get(index);
    if (nodeToSet) {
      nodeToSet.value = value;
      return true;
    }
    return false;
  }
  // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.insertLast(value);
    if (index === 0) return !!this.insertFirst(value);

    let newNode = new SinglyLinkedListNode(value);
    let prev = this.get(index - 1);
    const tempNode = prev.next;
    prev.next = newNode;
    newNode.next = tempNode;
    this.length++;
    return true;
  }

  // The remove method takes an index number as parameter and removes the node at the given index in the list, and returns the removed node
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.removeFirst();
    if (index === this.length - 1) return this.removeLast();

    let prevNode = this.get(index - 1);
    const removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  //this getIndex method takes a value as a param and returns the index of the node which has the value;
  getIndex(val) {
    let current = this.head;
    let index = 0;

    while (index < this.length) {
      if (current.value === val) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // The reverse method reverses the list and all pointers so that the head becomes the tail and the tail becomes the head
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    let index = 0;
    while (index < this.length) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      index++;
    }
  }
}

const list = new SinglyLinkedList();
// list.insertLast(1);
// list.removeLast();
// list.insertLast(2);
// list.insertLast(4);
// list.insertLast(10);

// list.removeLast();
// list.insertFirst(0);
// list.insertFirst(-1);
// list.removeFirst();
// console.log(list.get(2));
// list.set(2, 100);
// console.log(list.get(2));
// console.log(list.insert(4, 200)); // false because the length is only 3
// list.remove(1);

list.insert(0, 100);
list.insert(1, 200);
list.insert(1, 300);
list.insert(1, 400);
console.log(list);
list.reverse();
console.log(list);

console.log(list.getIndex(300));

/* Singly linked lists methods have the following complexities:
Insertion - O(1)
Removal - O(n)
Search - O(n)
Access - O(n) */

/* As mentioned, the difference between doubly and singly 
linked lists is that doubly linked lists have their nodes 
connected through pointers with both the previous and the next value.
On the other hand, singly linked lists only connect their nodes with 
the next value.

This double pointer approach allows doubly linked lists 
to perform better with certain methods compared to singly linked lists, 
but at a cost of consuming more memory 
(with doubly linked lists we need to store two pointers instead of one).

A full implementation of a doubly linked list might look a bit like this: */

// We create a class for each node within the list
class DoublyLinkedListNode {
  // Each node has three properties, its value, a pointer that indicates the node that follows and a pointer that indicates the previous node
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// We create a class for the list
class DoublyLinkedList {
  // The list has three properties, the head, the tail and the list size
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // The push method takes a value as parameter and assigns it as the tail of the list
  push(val) {
    const newNode = new DoublyLinkedListNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // The pop method removes the tail of the list
  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  // The shift method removes the head of the list
  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  // The unshift method takes a value as parameter and assigns it as the head of the list
  unshift(val) {
    const newNode = new DoublyLinkedListNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // The get method takes an index number as parameter and returns the value of the node at that index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new DoublyLinkedListNode(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
}
/* The big O of doubly linked lists methods is the following:
Insertion - O(1)
Removal - O(1)
Search - O(n)
Access - O(n) */
