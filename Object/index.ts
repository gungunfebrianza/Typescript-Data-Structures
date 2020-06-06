type NodeType = null | NodeObject;
type Counter = null | number;

class NodeObject {
  private value: number;
  private left: NodeType = null;
  private right: NodeType = null;
  private _root: NodeType = null;
  private count: Counter = null;

  constructor(val: number = 0) {
    this.value = val;
  }

  initializer(rootnode: number): void {
    this._root = new NodeObject(rootnode);
  }

  insert(newNodeValue: number): void {
    const thisNode: NodeObject = new NodeObject(newNodeValue);
    if (!this._root) {
      this._root = thisNode;
    } else {
      var currentRoot: NodeObject = this._root;
      while (true) {
        if (currentRoot.value > newNodeValue) {
          if (currentRoot.left != null) {
            currentRoot = currentRoot.left; //4
          } else {
            currentRoot.left = thisNode;
            break;
          }
        } else if (currentRoot.value < newNodeValue) {
          if (currentRoot.right != null) {
            currentRoot = currentRoot.right;
          } else {
            currentRoot.right = thisNode;
            break;
          }
        } else {
          break;
        }
      }
    }
  }
}

const binarySearchTree: NodeObject = new NodeObject();
//const t0 = performance.now(); // <-- Performance API Snapshot
binarySearchTree.initializer(20);
binarySearchTree.insert(30);
binarySearchTree.insert(37);
binarySearchTree.insert(80);
binarySearchTree.insert(67);
binarySearchTree.insert(47);
//const t1 = performance.now(); // <-- Performance API Snapshot
console.log(binarySearchTree);
//console.log(`Took ${t1 - t0} milliseconds.`); // <-- Calculate
