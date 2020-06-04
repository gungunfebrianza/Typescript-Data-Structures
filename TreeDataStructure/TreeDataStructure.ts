type NullableNumber = null | number;
type NodeType = null | NodeObject;

class NodeObject {
  private value: NullableNumber = null;
  private left: NodeType = null;
  private right: NodeType = null;
  private _root: NodeType = null;

  constructor(val: NullableNumber) {
    this.value = val;
  }

  insert(newNodeValue: number): void {
    const thisNode: NodeObject = new NodeObject(newNodeValue);
    if (!this._root) {
      this._root = thisNode;
    } else {
      var currentRoot: NodeObject = this._root;
      while (true) {
        if (currentRoot.value != null && currentRoot.value > newNodeValue) {
          if (currentRoot.left != null) {
            currentRoot = currentRoot.left; //4
          } else {
            currentRoot.left = thisNode;
            break;
          }
        } else if (
          currentRoot.value != null && currentRoot.value < newNodeValue
        ) {
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

const x: NodeObject = new NodeObject(null);
x.insert(30);
x.insert(27);
x.insert(26);
x.insert(23);
x.insert(10);
console.log(x);
