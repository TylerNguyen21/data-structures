// var Tree = function(value) {
//   var newTree = {};
//   newTree.value = value;

//   // your code here
//   newTree.children = [];  
//   _.extend(newTree, treeMethods); //this part is linear
//   return newTree;

//   //complexity = constant O(1)
// };

// var treeMethods = {};

// treeMethods.addChild = function(value) {
//   // make a new tree
//   var childTree = Tree(value);
//   //add the child to current children array
//   this.children.push(childTree);
// //complexity = constant O(1)
// };

// treeMethods.contains = function(target) {
//   //hold current tree
//   var answer = false;
//   if (this.value === target ) {
//     answer = true;
//   }
  
//   if (this.children.length > 0 ) {
  
//     for ( var i = 0; i < this.children.length; i++ ) {
      
//       if (treeMethods.contains.call( this.children[i], target)) {
//         return true;
//       }
      
//     } 
//   }
  
//   return answer;
// //complexity = exponential O(c^n)
// };



/*
 * Complexity: What is the time complexity of the above functions?
 */

 /////////////// ES6 refactoring

 

class treeMethods {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.newTree = {};
  }

addChild(value) {
  // make a new tree
  var childTree = new Tree(value);
  //add the child to current children array
  this.children.push(childTree);
//complexity = constant O(1)
}

contains(target) {
  //hold current tree
  var answer = false;
  if (this.value === target ) {
    answer = true;
  }
  
  if (this.children.length > 0 ) {
  
    for ( var i = 0; i < this.children.length; i++ ) {
      if (this.contains.call( this.children[i], target)) {
        return true;
      }
      
    } 
  }
  
  return answer;
//complexity = exponential O(c^n)
  }
}

class Tree extends treeMethods {
  constructor(value, children, newTree = {}) {
  super(value, children, newTree);
  this.newTree = {};
  this.value = value;

  // your code here
  this.children = [];  
  }

  //complexity = constant O(1)
};