var BinarySearchTree = function(data) {
   
  var tree = {};
  tree.left = null;
  tree.right = null;
  tree.value = data;
  _.extend(tree, Search);
  tree.counter = data ? 1 : 0;
  return tree;
//complexity is constant O(1);
};

var Search = {};

 
Search.insert = function(data) {
  var newBubble = BinarySearchTree(data);
  if (this.value === undefined) {
    this.value = data;
    this.counter ++;  
    return; 
  } else {
    if (data > this.value) {
      if (this.right === null) {
        this.right = newBubble;
        return;
      }
      this.insert.call(this.right, data);
    } else if (data < this.value) {
      if (this.left === null) {
        this.left = newBubble;
        return;
      }
      this.insert.call(this.left, data);
    } else {
      this.counter++;   
    }
  }
//complexity = linear;
};

Search.contains = function(data) {
  if (this.value === data) {
    return true;
  }

  if (data < this.value) {
    if (this.left === null) {
      return false;
    }
    return this.contains.call(this.left, data);
  }
  if (data > this.value) {
    if (this.right === null) {
      return false;
    }
    return this.contains.call(this.right, data);
  }
//complexity = linear;
};
  
Search.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left !== null) {
    this.depthFirstLog.call(this.left, cb);
  } 
  if (this.right !== null) {
    this.depthFirstLog.call(this.right, cb);
  } 
//complexity = linear;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
