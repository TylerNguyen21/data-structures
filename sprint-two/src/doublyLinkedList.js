var doublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  //complexity when we instantiate a new linked list it is constant time O(1)
  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      var oldTail = list.tail;
      list.tail = newNode;
      oldTail.next = newNode;
      newNode.previous = oldTail;
    }
    //complexity constant O(1)
  };

  list.removeHead = function() {
    var removedHead = list.head;
    list.head = list.head.next;
    list.head.previous = null;
    return removedHead.value;
  //complexity = constant o(1)
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
  
  list.addToHead = function(value) {
    var newHead = Node(value);
    var oldHead = list.head;
    if (list.head === null) {
      list.head = newHead;
      list.tail = newHead;
    }
    list.head.previous = newHead;
    list.head = newHead;
    list.head.next = oldHead;
  };

  list.removeFromTail = function () {
    var removeTail = list.tail;
    list.tail = list.tail.previous;
    list.tail.next = null;
    return removeTail.value;
  };  

  return list;
  //complexity = linear O(n)
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
//complexity = constant O(n)
};

/*
 * Complexity: What is the time complexity of the above functions?
 */