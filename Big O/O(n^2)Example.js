function Findpairs(arr) {
  // O(n^2) :: nested loop
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]}, ${arr[j]}`);
    }
  }
  // O(n)
  for (let q = 0; q < arr.length; q++) {
    console.log(`------- ${q}`);
  }
  // If we combine all the "O" operations it becomes O(n^2 + n)
  // O(n^2) is a Dominant term
  //"n" is a Non-Dominant term
  //So we remove the non-dominant term and we are only left with O(n^2)
  //This way, we simplify our bigO
}

const number = [1, 2, 3, 4, 5];
Findpairs(number);
