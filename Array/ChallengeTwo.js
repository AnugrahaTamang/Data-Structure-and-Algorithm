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
