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
        if(current.value === val){
            return index;
        }
        current = current.next;
        index++;
    }
    return -1;
  }

  // The reverse method reverses the list and all pointers so that the head becomes the tail and the tail becomes the head
  reverse() {
    // let current = this.head;
    // this.head = this.tail;
    // this.tail = current;
    // let next;
    // let prev = null;

    let current = this.tail;

    while (current !== this.head) {}
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
console.log(list.length);

console.log(list.getIndex(300));
