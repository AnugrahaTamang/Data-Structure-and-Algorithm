// manage the 1 is oneside and 0 is another side
const data = [0, 1, 0, 1, 0, 1, 1, 1, 0, 0];
let j = 0;
let i = 0;
while (i < data.length) {
  if (data[i] == 0) {
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
    j++;
  }
  i++;
}
console.log(data);

//Array element rotation challenge (left and right rotation by 1)
const arr = [1, 2, 3, 4, 5];
let copy = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = copy;
console.log(arr); //output: 5,1,2,3,4
