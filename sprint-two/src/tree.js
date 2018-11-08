var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // make a new tree
  var childTree = Tree(value);
  //add the child to current children array
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  //hold current tree
  console.log(this);
  var answer = false;
  if (this.value === target ) {
    answer = true;
  }
  
  if (this.children.length > 0 ) {
  
    for ( var i = 0; i < this.children.length; i++ ) {
      
      if (treeMethods.contains.call( this.children[i], target)) {
        return true;
      }
      
    } 
  }
  
  return answer;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
