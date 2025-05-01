//Doublylinklist Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
//doublylinklist class
class DoublyLinklist {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
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
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }
}
const mylinklist = new DoublyLinklist("hari");
console.log(mylinklist);
mylinklist.push("jewan");
mylinklist.push("ramit");
mylinklist.push("manish");
mylinklist.push("ramesh");
mylinklist.push("sudip");
mylinklist.push("suman");
console.log(mylinklist);
mylinklist.pop();
mylinklist.pop();
console.log(mylinklist);
mylinklist.unshift("anugraha");
console.log(mylinklist);
mylinklist.shift();
console.log(mylinklist);
