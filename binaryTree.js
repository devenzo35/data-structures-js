class Node {
  constructor(data, right = null, left = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  contructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
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
}

const binarySearch = new BinarySearchTree();

binarySearch.add(1);
binarySearch.add(1);
binarySearch.add(5);
binarySearch.add(3);
binarySearch.add(7);
binarySearch.add(2);
console.log(binarySearch.findMin());
