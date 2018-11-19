// var LinkedList = function() {
//   var list = {};
//   list.head = null;
//   list.tail = null;
//   //complexity when we instantiate a new linked list it is constant time O(1)
//   list.addToTail = function(value) {
//     var newNode = Node(value);
//     if (list.head === null) {
//       list.head = newNode;
//       list.tail = newNode;
//     } else {
//       var oldTail = list.tail;
//       list.tail = newNode;
//       oldTail.next = newNode;
//     }
//     //complexity constant O(1)
//   };

//   list.removeHead = function() {
//     var removedHead = list.head;
//     list.head = list.head.next;
//     return removedHead.value;
//   //complexity = constant o(1)
//   };

//   list.contains = function(target) {
//     //if there is a next node
//     if (list.head.value === target) {
//       return true;
//     }
//     var current = list.head;
    
//     while (current.next !== null) {
//       if (current.next.value === target) {
//         return true;
//       }
//       current = current.next;  
//     }
//     return false;
//   };

//   return list;
//   //complexity = linear O(n)
// };

// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// //complexity = constant O(n)
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
//////////////////////// ES6 refractoring////////////////


class LinkedList {
  constructor(list, head, tail) {
    this.list = {};
    this.head = null;
    this.tail = null;
  }
  //complexity when we instantiate a new linked list it is constant time O(1)
  addToTail(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      var oldTail = this.tail;
      this.tail = newNode;
      oldTail.next = newNode;
    }
    //complexity constant O(1)
  }

  removeHead() {
    var removedHead = this.head;
    this.head = this.head.next;
    return removedHead.value;
  //complexity = constant o(1)
  }

  contains(target) {
    //if there is a next node
    if (this.head.value === target) {
      return true;
    }
    var current = this.head;
    
    while (current.next !== null) {
      if (current.next.value === target) {
        return true;
      }
      current = current.next;  
    }
    return false;
  }

  //complexity = linear O(n)
};

var Node = value => {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
//complexity = constant O(n)
};
