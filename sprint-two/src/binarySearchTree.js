var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var node = BinarySearchTree(value);
  if (value > this.value) {
    if(this.right === null){
      this.right = node;
    } else if (this.right) {
      this.right.insert(value);
    }
  }
  if (value < this.value) {
    if(this.left === null){
      this.left = node;
    } else if (this.left) {
      this.left.insert(value);
    }
  }
};

binaryTreeMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else {
    if (value > this.value && this.right) {
      return this.right.contains(value);
    } else if (value < this.value && this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  }
  return false;
};

binaryTreeMethods.depthFirstLog = function(callback) {
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert = O()
 * contains = O()
 * depthFirstLog = O()
 */
