//This is about the linklist
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
  push(item) {
    let newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    return temp;
  }
  unshift(item) {
    let newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (this.head) {
      return null;
    }
    //poiint the first node/element
    let temp = this.head;
    //2. move the head to next node/element
    this.head = this.head.next;
    //remove the first element
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  getfirst() {
    return this.head;
  }
}
const mylinklist = new Linklist("one");
mylinklist.push("two");
mylinklist.push("three");
mylinklist.pop();
mylinklist.pop();
mylinklist.unshift("anugraha tamang");
mylinklist.unshift("ramit tamang");
mylinklist.unshift("vandai tamang");
mylinklist.unshift("ram");
mylinklist.shift();
mylinklist.shift();
mylinklist.getfirst();
console.log(mylinklist);
