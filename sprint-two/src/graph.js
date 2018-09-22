// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = {edges: {}};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.graph.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
// remove the node
// iterate through the rest of the nodes and remove any edges where that node was present
Graph.prototype.removeNode = function(node) {
  delete this.graph[node];
  for (var key in this.graph) {
    if (this.graph[key].edges.hasOwnProperty(node)) {
      delete this.graph[key].edges[node];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.graph[fromNode].edges.hasOwnProperty(toNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].edges[toNode] = true;
  this.graph[toNode].edges[fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.graph[fromNode].edges[toNode];
  delete this.graph[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.graph) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1) - constant
 * contains: O(1) - constant
 * removeNode: O(n) - linear
 * hasEdge: O(1) - constant
 * addEdge: O(1) - constant
 * removeEdge: O(1) - constant
 * forEachNode: O(n) - linear
 */


