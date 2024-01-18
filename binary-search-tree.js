// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    if(currentNode === null){
      this.root = new TreeNode(val);
      return ;
    };

    if (val < currentNode.val) {
      if (!currentNode.left) {
          currentNode.left = new TreeNode(val);
      } else {
          this.insert(val, currentNode.left);
      }
  } else {

      if (!currentNode.right) {
          currentNode.right = new TreeNode(val);
      } else {
          this.insert(val, currentNode.right);
      }
  }
  }

  search(val) {
    // Your code here
    let currentNode = this.root;

    while (currentNode) {
        if (val < currentNode.val) {
            currentNode = currentNode.left;
        } else if (val > currentNode.val) {
            currentNode = currentNode.right;
        } else {
            return true;
        }
    }
    return false
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here

    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);

  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);

  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;

        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
    const queue = [this.root];

    while (queue.length > 0) {
        let currentNode = queue.shift();

        console.log(currentNode.val);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
    const stack = [this.root];

    while (stack.length > 0) {
        let currentNode = stack.pop();

        console.log(currentNode.val);
        if (currentNode.left) stack.push(currentNode.left);
        if (currentNode.right) stack.push(currentNode.right);
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
