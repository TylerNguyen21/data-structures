var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  
  _.extend(newTree, treeMethods); //this part is linear
  return newTree;

  //complexity = constant O(1)
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // make a new tree
  var childTree = Tree(value);
  //add the child to current children array
  this.children.push(childTree);
//complexity = constant O(1)
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
//complexity = exponential O(c^n)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
