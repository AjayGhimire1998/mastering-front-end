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
    this.prev = null;
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
}

const list = new SinglyLinkedList();
list.insertLast(1);
list.removeLast();
list.insertLast(2);
list.insertLast(4);
list.insertLast(10);

list.removeLast();
list.insertFirst(0);
list.insertFirst(-1);
list.removeFirst();
console.log(list);
