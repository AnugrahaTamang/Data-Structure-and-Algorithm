class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    return this.length++;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return `deleted ${lastItem}`;
  }
  shift() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return `deleted first item ${firstItem}`;
  }
  delete(index) {
    const item = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  update(index) {
    const item = this.data[index];
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) {
        this.data[index] = "updateone success";
      }
    }
    return item;
  }
}
const mynewArray = new MyArray();
console.log(mynewArray);
mynewArray.push("ramit");
mynewArray.push("vandai");
mynewArray.push("huxn");
mynewArray.push("suman");
mynewArray.push("anugraha");
mynewArray.push("amisha");
mynewArray.push("gomja");
mynewArray.push("hari");
console.log(mynewArray);
console.log(`I am getting index of 4 info: ${mynewArray.get(4)}`);
console.log(mynewArray);
console.log(mynewArray.pop());
console.log(mynewArray);
console.log(mynewArray.shift());
console.log(mynewArray);
console.log(mynewArray.delete(2));
console.log(mynewArray);
console.log(mynewArray.update(3));
console.log(mynewArray);
