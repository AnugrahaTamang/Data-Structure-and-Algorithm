const data = ["eggs", "bread", "straberry", "milk", "bananas"];
// O(1)
const getElement = (arr, index) => arr[index];
console.log(getElement(data, 2)); // straberry

//Example same
const dataFoundOne = (arr, index) => {
  console.log(arr[index]);
};
dataFoundOne(data, 3);
