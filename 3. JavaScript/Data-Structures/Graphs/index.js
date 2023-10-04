/* Graphs are a data structure formed by a group of nodes
 and certain connections between those nodes. 
 Unlike trees, graphs don't have root and leaf nodes, 
 nor a "head" or a "tail". 
 Different nodes are connected to each other and 
 there's no implicit parent-child connection between them. */

/* A full implementation of a graph using an adjacency list 
 might look like this. To keep things simple,
  we'll represent an undirected unweighted graph. */

// We create a class for the graph
class Graph {
  // The graph has only one property which is the adjacency list
  constructor() {
    this.adjancencyList = {};
  }

  // The addNode method takes a node value as parameter and adds it as a key to the adjacencyList if it wasn't previously present
  addNode(node) {
    if (!this.adjancencyList[node]) this.adjancencyList[node] = [];
  }

  // The addConnection takes two nodes as parameters, and it adds each node to the other's array of connections.
  addConnection(node1, node2) {
    this.adjancencyList[node1].push(node2);
    this.adjancencyList[node2].push(node1);
  }

  // The removeConnection takes two nodes as parameters, and it removes each node from the other's array of connections.
  removeConnection(node1, node2) {
    this.adjancencyList[node1] = this.adjancencyList[node1].filter(
      (v) => v !== node2
    );
    this.adjancencyList[node2] = this.adjancencyList[node2].filter(
      (v) => v !== node1
    );
  }

  // The removeNode method takes a node value as parameter. It removes all connections to that node present in the graph and then deletes the node key from the adj list.
  removeNode(node) {
    while (this.adjancencyList[node].length) {
      const adjacentNode = this.adjancencyList[node].pop();
      this.removeConnection(node, adjacentNode);
    }
    delete this.adjancencyList[node];
  }

}

const Argentina = new Graph()
Argentina.addNode("Buenos Aires")
Argentina.addNode("Santa fe")
Argentina.addNode("Córdoba")
Argentina.addNode("Mendoza")
Argentina.addConnection("Buenos Aires", "Córdoba")
Argentina.addConnection("Buenos Aires", "Mendoza")
Argentina.addConnection("Santa fe", "Córdoba")
Argentina.removeNode("Mendoza");

console.log(Argentina)