class Node {
  constructor(data = null, right = null, left = null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

class BinarySearchTree {
  contructor() {
    this.root = null;
  }

  add = (data) => {
    let node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    } else if (node !== null) {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  };
}
