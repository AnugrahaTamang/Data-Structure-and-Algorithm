const data = ["apple", "banana", "orange", "pineapple", "mango"];
const searchForItem = (item) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === item) {
      console.log(`found the item: ${item}`);
    }
  }
  for (let j = 0; j < data.length; j++) {
    if (data[j] === item) {
      console.log(`found the ${item} 2`);
    }
  }
  // n + n = 2n ---> O(2n)
  // Drop the constant so it becomes O(n)
};
searchForItem("banana");
