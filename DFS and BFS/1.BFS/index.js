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
  bfs() {
    let current = this.root;
    let queue = [];
    let data = [];
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      data.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
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
console.log(tree.bfs());
