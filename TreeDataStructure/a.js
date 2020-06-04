function BinarySearchTree() {
  this._root = null;
}
BinarySearchTree.prototype.insert = function (value) {
  var thisNode = {
    left: null,
    right: null,
    value: value,
  };
  if (!this._root) {
    //if there is no root value yet
    this._root = thisNode;
  } else {
    //loop traverse until
    var currentRoot = this._root;
    while (true) {
      if (currentRoot.value > value) {
        //let's increment if it's not a null and insert if it is a null
        if (currentRoot.left != null) {
          currentRoot = currentRoot.left;
        } else {
          currentRoot.left = thisNode;
          break;
        }
      } else if (currentRoot.value < value) {
        //if bigger than current, put it on the right
        //let's increment if it's not a null and insert if it is a null
        if (currentRoot.right != null) {
          currentRoot = currentRoot.right;
        } else {
          currentRoot.right = thisNode;
          break;
        }
      } else {
        //case that both are the same
        break;
      }
    }
  }
};

var bst1 = new BinarySearchTree();
bst1.insert(5);
bst1.insert(4);
bst1.insert(3);
bst1.insert(2);
bst1.insert(7);
bst1.insert(7);
bst1.insert(7);
bst1.insert(7);
