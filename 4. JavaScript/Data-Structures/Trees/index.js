/* Trees are a data structures that link nodes in a
 parent/child relationship, in the sense that 
 there're nodes that depend on or come off other nodes. */

/* for searching, a certain type of binary tree is used, 
 called binary search trees (BSTs). BSTs are just like binary trees 
 but information within them is ordered in a way that
 makes them a suitable data structure for searching.
 In BST, values are ordered so that each node that 
 descends to the left side of its parent must
  have a value less than its parent, and 
  each node that descends to the right side of its parent 
  must have a value bigger than its parent. */

//An implementation of a BST might look like this:

// We create a class for each node within the tree
class BSTNode {
  // Each node has three properties, its value, a pointer that indicates the node to its left and a pointer that indicates the node to its right
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// We create a class for the BST
class BinarySearchTree {
  // The tree has only one property which is its root node
  constructor() {
    this.root = null;
  }

  // The insert method takes a value as parameter and inserts the value in its corresponding place within the tree
  insert(value) {
    const newNode = new BSTNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  // The find method takes a value as parameter and iterates through the tree looking for that value
  // If the value is found, it returns the corresponding node and if it's not, it returns undefined
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // The contains method takes a value as parameter and returns true if the value is found within the tree
  contains(value){
    if(this.root === null) return false;
    let current = this.root;
    let found = false;
    while(current && !found){
        if(value < current.value){
            current = current.left;
        } else if (value > current.value){
            current = current.right;
        } else {
            return true;
        }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(0);
tree.insert(3);
console.log(tree.contains(3));

console.log(tree);
