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
    const newItem = new Node(item);
    if (!this.head) {
      this.head = newItem;
      this.tail = newItem;
    }
    this.tail.next = newItem;
    this.tail = newItem;
    this.length++;
  }
  pop() {
    let temp = this.head;
    let prev = this.head;
    if (!this.head) return undefined;
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
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
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  getfirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    while (temp) {
      if (!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
  }
  get(index) {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      if (counter === index) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }
    return null;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  size() {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }
  clear() {
    this.head = null;
  }
}
const mylinklist = new Linklist("james");
console.log(mylinklist);
mylinklist.push("hari");
mylinklist.push("syam");
mylinklist.push("amisha");
mylinklist.push("suman");
mylinklist.push("manish");
mylinklist.push("vandai");
console.log(mylinklist);
mylinklist.pop();
console.log(mylinklist);
mylinklist.unshift("anugraha tamang");
console.log(mylinklist);
mylinklist.shift();
console.log(mylinklist);
console.log(mylinklist.getfirst());
console.log(mylinklist.getLast());
console.log(mylinklist.get(3));
console.log(mylinklist.set(3, "amrit"));
console.log(mylinklist.get(3));
console.log(mylinklist.insert(1, "jeewan tamang"));
console.log(mylinklist);
console.log(mylinklist.size());
console.log(mylinklist.clear());
console.log(mylinklist);
