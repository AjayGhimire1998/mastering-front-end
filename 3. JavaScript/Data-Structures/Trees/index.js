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

}
