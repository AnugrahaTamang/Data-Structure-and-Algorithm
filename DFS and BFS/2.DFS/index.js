class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) {
        return undefined;
      }
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  includes(value) {
    if (!this.root) {
      return false;
    }
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }
    return false;
  }
  dfsPreOrder(node = this.root, data = []) {
    if (node === null) return data;
    data.push(node.value);
    if (node.left) this.dfsPreOrder(node.left, data);
    if (node.right) this.dfsPreOrder(node.right, data);
    return data;
  }
  dfsPostOrder(node = this.root, data = []) {
    if (node === null) return data;
    if (node.left) this.dfsPostOrder(node.left, data);
    if (node.right) this.dfsPostOrder(node.right, data);
    data.push(node.value);
    return data;
  }
  dfsInorder(node = this.root, data = []) {
    if (node === null) return data;
    if (node.left) this.dfsInorder(node.left, data);
    data.push(node.value);

    if (node.right) this.dfsInorder(node.right, data);
    return data;
  }
}

const tree = new BST();
tree.insert(1);
tree.insert(3);
tree.insert(4);
tree.insert(6);
console.log(tree);
console.log(tree.includes(4)); //output: true
console.log(tree.dfsPostOrder()); //output: [ 6, 4, 3, 1 ]
console.log(tree.dfsInorder()); //output: [ 1, 3, 4, 6 ]
