import {
  writeFileStr
} from "https://deno.land/std/fs/mod.ts";

type NodeType = null | NodeObject;

class NodeObject {
  private value: number;
  private left: NodeType = null;
  private right: NodeType = null;
  public _root: NodeType = null;
  public countAll: number = 0;
  public payload: string = "";

  constructor(val: number = 0) {
    this.value = val;
  }

  insert(newNodeValue: number): void {
    const thisNode: NodeObject = new NodeObject(newNodeValue);
    if (!this._root) {
      this._root = thisNode;
      this._root.payload = ` {"name" : "Root", "parent":"null"}`;
      writeFileStr("./target.dat", "file content");
    } else {
      let currentRoot: NodeObject = this._root;
      currentRoot.countAll++;
      while (true) {
        console.log(
          `compare current value ${currentRoot.value} with ${newNodeValue}`,
        );
        if (currentRoot.value > newNodeValue) {
          console.log(
            `${newNodeValue} lesser than current value ${currentRoot.value}`,
          );
          if (currentRoot.left != null) {
            currentRoot = currentRoot.left;
          } else {
            currentRoot.left = thisNode;
            console.log(
              `Add ${newNodeValue} to the left of ${currentRoot.value}`,
            );
            break;
          }
        } else if (currentRoot.value < newNodeValue) {
          console.log(
            `${newNodeValue} bigger than current value ${currentRoot.value}`,
          );
          if (currentRoot.right != null) {
            currentRoot = currentRoot.right;
          } else {
            currentRoot.right = thisNode;
            console.log(
              `Add ${newNodeValue} to the right of ${currentRoot.value}`,
            );
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
binarySearchTree.insert(30);
binarySearchTree.insert(20);
binarySearchTree.insert(37);
binarySearchTree.insert(80);
binarySearchTree.insert(12);
binarySearchTree.insert(67);
binarySearchTree.insert(3);
binarySearchTree.insert(47);
//const t1 = performance.now(); // <-- Performance API Snapshot
console.log(binarySearchTree._root?.countAll);
console.log(binarySearchTree._root?.countAll);
//console.log(`Took ${t1 - t0} milliseconds.`); // <-- Calculate
