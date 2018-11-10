

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  //complexity = constant O(1)
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.contains(node)) {
    return;
  }
  this.nodes[JSON.stringify(node)] = [];
  //complexity = constant O(1) 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this.nodes).includes(JSON.stringify(node));
  //complexity = quadratic O(n^2);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { 
  for (var key in this.nodes) {
    this.nodes[key] = this.nodes[key].filter(function (value) {
      return value !== node;
    });
  }
  delete this.nodes[JSON.stringify(node)];
  //complexity quadratic O(n^2)
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
  //complexity linear O(n)
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
  //complexity constant O(1)
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes[fromNode] = this.nodes[fromNode].filter(function(value) {
    return value !== toNode;
  });
  this.nodes[toNode] = this.nodes[toNode].filter(function(value) {
    return value !== fromNode;
  });
  //complexity linear O(n)
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for ( var key in this.nodes) {
    cb(key);
  }
  //complexity linear O(n);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//need to finish removeEdge before completing removeNode

