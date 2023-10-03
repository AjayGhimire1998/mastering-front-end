class CircularLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a node at the end of the circular linked list
  append(value) {
    const newNode = new CircularLinkedListNode(value);

    if (!this.head) {
      // If the list is empty, make the new node the head
      this.head = newNode;
      newNode.next = this.head;
    } else {
      // Find the last node
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }

      // Append the new node to the end
      current.next = newNode;
      newNode.next = this.head;
    }
  }

  // Insert a node at the beginning of the circular linked list
  prepend(value) {
    const newNode = new CircularLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }

      newNode.next = this.head;
      this.head = newNode;
      current.next = this.head;
    }
  }

  // Insert a node at a specific position in the circular linked list
  insert(value, position) {
    if (position === 0) {
      this.prepend(value);
    } else {
      const newNode = new CircularLinkedListNode(value);
      let current = this.head;
      let count = 0;

      while (count < position - 1) {
        current = current.next;
        count++;
      }

      newNode.next = current.next;
      current.next = newNode;
    }
  }

  // Delete a node with a specific value value from the circular linked list
  delete(value) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      if (this.head.next === this.head) {
        this.head = null;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        this.head = this.head.next;
        current.next = this.head;
      }
    } else {
      let current = this.head;
      while (current.next !== this.head && current.next.value !== value) {
        current = current.next;
      }

      if (current.next === this.head) {
        return; // Node not found
      }

      current.next = current.next.next;
    }
  }

  // Search for a node with a specific value value in the circular linked list
  search(value) {
    if (!this.head) {
      return false;
    }

    let current = this.head;
    do {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    } while (current !== this.head);

    return false;
  }

  // Display the elements of the circular linked list
  display() {
    if (!this.head) {
        console.log("Circular Linked List is empty.");
        return;
    }

    let current = this.head;

    do {
        console.log(current.value);
        current = current.next;
    } while (current !== this.head);
}
}

const circularList = new CircularLinkedList();
circularList.append(1);
circularList.append(2);
circularList.append(3);

circularList.prepend(0);
circularList.insert(2.5, 3);
circularList.delete(1);

console.log("Search for 3:", circularList.search(3)); // Should return true

console.log(circularList);
circularList.display();
