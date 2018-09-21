var LinkedList = function() {
  var list = {};
  list.head = Node(null);
  list.tail = Node(null);

  list.addToTail = function(value) {
    list[value] = Node(value);
    if (list.head.next === null && list.head.value === null) {
      list.head.value = list[value].value;
      list.tail.value = list[value].value;
    } else if (list.head.next === null) {
      list.head.next = list.tail.value;
      list.tail.value = list[value].value;
    } else {
      list.tail.value = list[value].value;
    }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
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

/*
on the first 
*/