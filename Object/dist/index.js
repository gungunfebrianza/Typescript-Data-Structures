"use strict";
var _a, _b;
class NodeObject {
    constructor(val = 0) {
        this.left = null;
        this.right = null;
        this._root = null;
        this.countAll = 0;
        this.payload = "";
        this.value = val;
    }
    insert(newNodeValue) {
        const thisNode = new NodeObject(newNodeValue);
        if (!this._root) {
            this._root = thisNode;
            this._root.payload = ` {"name" : "Root", "parent":"null"}`;
        }
        else {
            let currentRoot = this._root;
            currentRoot.countAll++;
            while (true) {
                console.log(`compare current value ${currentRoot.value} with ${newNodeValue}`);
                if (currentRoot.value > newNodeValue) {
                    if (currentRoot.left != null) {
                        currentRoot = currentRoot.left;
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
binarySearchTree.insert(20);
binarySearchTree.insert(37);
binarySearchTree.insert(80);
binarySearchTree.insert(12);
binarySearchTree.insert(67);
binarySearchTree.insert(3);
binarySearchTree.insert(47);
//const t1 = performance.now(); // <-- Performance API Snapshot
console.log((_a = binarySearchTree._root) === null || _a === void 0 ? void 0 : _a.countAll);
console.log((_b = binarySearchTree._root) === null || _b === void 0 ? void 0 : _b.countAll);
//console.log(`Took ${t1 - t0} milliseconds.`); // <-- Calculate
//# sourceMappingURL=index.js.map