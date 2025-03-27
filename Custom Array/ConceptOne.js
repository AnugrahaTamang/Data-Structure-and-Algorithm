class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    const lastitem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastitem;
  }
}
const arr = new MyArray();
arr.push("one");
arr.push("two");
arr.push(12);
arr.push("ramit");
arr.push("ram");
arr.get(3);
arr.pop();
console.log(arr);
