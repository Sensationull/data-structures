var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var helper = function(node) {
    if (node.value === target) {
      return true;
    }
    if (node.value !== target && node.children) {
      for (var i = 0; i < node.children.length; i++) {
        if (helper(node.children[i])) {
          return true;
        } else {
          helper(node.children[i]);
        }
      }
    }
    return false;
  };
  return helper(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1) - constant
 * contains: O(n) - linear
 */
