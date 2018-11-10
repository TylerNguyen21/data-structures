

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //complexity = constant O(1)
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage[index])) {
    var oldIndex = this._storage[index].findIndex(function(pair) {
      return pair[0] === k; 
    });
    if (oldIndex >= 0) {
      this._storage[index][oldIndex].splice(1, 1, v);
    } else if (oldIndex === -1) {
      this._storage[index].push([k, v]);
    }

  } else {
    this._storage[index] = [[k, v]]; 
  }
  //constant if no collision else linear
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage[index])) {
    var oldIndex = this._storage[index].findIndex(function(pair) {
      if (pair === undefined) {
        return false;
      }
      return pair[0] === k; 
    });
    if (oldIndex >= 0) {
      return this._storage[index][oldIndex][1];
    } else if (oldIndex === -1) {
      return undefined;
    }
  }
  //linear 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage[index])) {
  // there is just one tuple 
    if (this._storage[index].length === 1) {
      this._storage[index] = undefined;
    } else if ( this._storage[index].length > 1) {
      var oldIndex = this._storage[index].findIndex(function(pair) {
        return pair[0] === k; 
      });
      if (oldIndex >= 0) {
        delete this._storage[index][oldIndex];
      }  
    }
  }
  //constant unless collision then its linear
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


