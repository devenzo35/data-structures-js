class Node {
  constructor(data, right = null, left = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
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
  }
  findMin = () => {
    let currentNode = this.root;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  };

  findMax = () => {
    let currentNode = this.root;

    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  };

  searchNode = (data) => {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode.data;
      }

      if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }

      return false;
    }
  };

  exists = (data) => {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }

      if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }

      return false;
    }
  };

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }

      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }

        if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;

        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  isBalanced() {
    return this.minHeight() >= this.maxHeight() - 1;
  }

  minHeight(node = this.root) {
    if (node === null) {
      return -1;
    }

    let left = this.minHeight(node.left);
    let right = this.minHeight(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  maxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }

    let left = this.minHeight(node.left);
    let right = this.minHeight(node.right);

    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  inOrder() {
    if (this.root === null) {
      return null;
    } else {
      const result = new Array();

      function traversalInOrder(node) {
        node.left && traversalInOrder(node.left);
        result.push(node.data);
        node.right && traversalInOrder(node.right);
      }
      traversalInOrder(this.root);
      return result;
    }
  }
  preOrder() {
    if (this.root === null) {
      return null;
    } else {
      const result = new Array();

      function traversalPreOrder(node) {
        result.push(node.data);
        node.left && traversalPreOrder(node.left);
        node.right && traversalPreOrder(node.right);
      }

      traversalPreOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (this.root === null) {
      return null;
    } else {
      const result = new Array();

      function traversalPostOrder(node) {
        node.left && traversalPostOrder(node.left);
        node.right && traversalPostOrder(node.right);
        result.push(node.data);
      }

      traversalPostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    const result = [];
    const Q = [];

    if (this.root !== null) {
      Q.push(this.root);

      while (Q.lenght > 0) {
        const node = Q.shift();
        result.push(node.data);

        if (node.left !== null) {
          Q.push(node.left);
        }

        if (node.right !== null) {
          Q.push(node.right);
        }
      }

      return result;
    } else {
      return null;
    }
  }
}

const binarySearch = new BinarySearchTree();

/* binarySearch.add(4);
binarySearch.add(2);
binarySearch.add(6);
binarySearch.add(1);
binarySearch.add(3);
binarySearch.add(5);
binarySearch.add(7);
binarySearch.remove(4);
console.log(binarySearch.findMin());
console.log(binarySearch.findMax());
binarySearch.remove(7);
console.log(binarySearch.findMax());
console.log(binarySearch.exists(4)); */

binarySearch.add(9);
binarySearch.add(4);
binarySearch.add(17);
binarySearch.add(3);
binarySearch.add(6);
binarySearch.add(22);
binarySearch.add(5);
binarySearch.add(7);
binarySearch.add(20);

console.log(binarySearch.minHeight());
console.log(binarySearch.maxHeight());
console.log(binarySearch.isBalanced());
binarySearch.add(10);
console.log(binarySearch.minHeight());
console.log(binarySearch.maxHeight());
console.log(binarySearch.isBalanced());

console.log(binarySearch.inOrder());
console.log(binarySearch.preOrder());
console.log(binarySearch.postOrder());
console.log(binarySearch.levelOrder());
