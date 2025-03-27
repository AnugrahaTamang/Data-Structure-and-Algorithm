// What is the  Array: Array is a linear data structure. which stores multiple value in a continuous manner.

// sum or array
const arr = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(`sum of array :`, sum);

//Max value of array
const data = [10, 20, 30, 40, 77, 50, 60]; //max value is 60
// console.log(Math.max(...data));
let max = data[0];
let min = data[0];
for (let i = 0; i < data.length; i++) {
  if (max < data[i]) {
    max = data[i];
  }
  if (min > data[i]) {
    min = data[i];
  }
}
console.log("max value of data: ", max);
console.log("min value of data:", min);

////first and second max of array
const one = [10, 20, 30, 80, 80, 70, 40, 50, 60];
let max1 = Math.max(one[0], one[1]);
let smax = Math.min(one[0], one[1]);
for (let i = 2; i < one.length; i++) {
  if (max1 < one[i]) {
    smax = max1;
    max1 = one[i];
  } else if (smax < one[i] && max1 != one[i]) {
    smax = one[i];
  }
}
console.log("second max value is ", smax);

//Reverse the array element
const revdata = [10, 20, 30, 40, 50];
let temp = new Array(revdata.length);
let j = 0;
for (let i = revdata.length - 1; i >= 0; i--) {
  temp[j] = arr[i];
  j++;
}
console.log(temp);
