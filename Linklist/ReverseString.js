class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}
class Linklist {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

const mylinklist = new Linklist("one");
console.log(mylinklist);
mylinklist.push("two");
mylinklist.push("three");
mylinklist.push("four");
console.log(mylinklist);
mylinklist.reverse();
console.log(mylinklist);
