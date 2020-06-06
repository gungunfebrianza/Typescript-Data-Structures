"use strict";
class NodeObject {
    constructor(val = 0) {
        this.left = null;
        this.right = null;
        this._root = null;
        this.value = val;
    }
    insert(newNodeValue) {
        const thisNode = new NodeObject(newNodeValue);
        if (!this._root) {
            this._root = thisNode;
        }
        else {
            var currentRoot = this._root;
            while (true) {
                if (currentRoot.value > newNodeValue) {
                    if (currentRoot.left != null) {
                        currentRoot = currentRoot.left; //4
                    }
                    else {
                        currentRoot.left = thisNode;
                        break;
                    }
                }
                else if (currentRoot.value < newNodeValue) {
                    if (currentRoot.right != null) {
                        currentRoot = currentRoot.right;
                    }
                    else {
                        currentRoot.right = thisNode;
                        break;
                    }
                }
                else {
                    break;
                }
            }
        }
    }
}
const binarySearchTree = new NodeObject();
//const t0 = performance.now(); // <-- Performance API Snapshot
binarySearchTree.insert(30);
binarySearchTree.insert(37);
binarySearchTree.insert(80);
binarySearchTree.insert(67);
binarySearchTree.insert(47);
//const t1 = performance.now(); // <-- Performance API Snapshot
console.log(binarySearchTree);
//console.log(`Took ${t1 - t0} milliseconds.`); // <-- Calculate
//# sourceMappingURL=index.js.map