var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      var oldTail = list.tail;
      list.tail = newNode;
      oldTail.next = newNode;
    }
    
  };

  list.removeHead = function() {
    var removedHead = list.head;
    list.head = list.head.next;
    return removedHead.value;
  };

  list.contains = function(target) {
    //if there is a next node
    if (list.head.value === target) {
      return true;
    }
    var current = list.head;
    
    while (current.next !== null) {
      if (current.next.value === target) {
        return true;
      }
      current = current.next;  
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
