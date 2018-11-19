// var Set = function() {
//   var set = Object.create(setPrototype);
//   set.storage = {};
//   set.length = 0;
//   set.array;
//   return set;
// //complexity = constant O(1)
// };

// var setPrototype = {};

// setPrototype.add = function(item) {
//   if (this.contains(item)) {
//     return;
//   }
//   this.length++;
//   this.storage[this.length] = item;
  
// //complexity = constant O(1)
// };

// setPrototype.contains = function(item) {
//   this.array = Object.values(this.storage); //linear 
//   return this.array.includes(item);
// // complexity = linear O(n)
// };

// setPrototype.remove = function(item) {
//   if (this.contains(item)) {
//     for ( var i = 1; i <= this.length; i++) {
//       if ( this.storage[i] === item) {
//         delete this.storage[i];
//         break;
        
//       }
//       this.storage[i] = this.storage[i + 1];
//     } delete this.storage[this.length];
//     this.length --;
//   }
//   //complexity = linear O(n);
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */


 //////////////// ES6 refactor



class setPrototype{

add(item) {
  if (this.contains(item)) {
    return;
  }
  this.length++;
  this.storage[this.length] = item;
  
//complexity = constant O(1)
}

contains(item) {
  this.array = Object.values(this.storage); //linear 
  return this.array.includes(item);
// complexity = linear O(n)
}

remove(item) {
  if (this.contains(item)) {
   for ( var i = 1; i <= this.length; i++) {
    if ( this.storage[i] === item) {
      delete this.storage[i];
      break;
    }
      this.storage[i] = this.storage[i + 1];
    } delete this.storage[this.length];
      this.length --;
  }
  //complexity = linear O(n);
  }

}

class Set extends setPrototype {
  constructor (storage, length, array) {
  super (storage, length, array);  
  this.storage = {};
  this.length = 0;
  this.array;
  }

//complexity = constant O(1)
};