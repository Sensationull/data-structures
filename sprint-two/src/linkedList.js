var LinkedList = function() {
  var list = {};
  list.head = Node(null);
  list.tail = Node(null);

  list.addToTail = function(value) {
    list[value] = Node(value);
    if (list.head.value === null && list.head.next === null) {
      list.head.value = list[value].value;
      list.tail.value = list[value].value;
    } else if (list.head.next === null) {
      list.tail.value = list[value].value;
      list.head.next = list.tail.value;
    } else {
      list.tail = list[value];
    }
  };
  
  list.removeHead = function() {
    if (list.head.value === null) {
      return null;
    } else if (list.head.next === null) {
      var headCurrent = list.head.value;
      var nullNode = Node(null);
      list.head = nullNode;
      list.tail = nullNode;
      return headCurrent;
    } else {
      var headCurrent = list.head.value;
      delete list[list.head.value];
      list.head.value = list.head.next;
      return headCurrent;
    }
  };

  list.contains = function(target) {
    for (var key in list) {
      if (list[key].value === target) {
        return true;
      }
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
 * addToTail = O()
 * removeHead = O()
 * contains = O()
 */
