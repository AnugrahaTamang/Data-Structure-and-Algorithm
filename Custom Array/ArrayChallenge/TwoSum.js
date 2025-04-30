//Two sum: Imagine you have a list of numbers and a target number. Your job is to find two numbers in that list that ad up to the target number. You also need to tell which positions(or indexes) those two numbers are at in the list.
//Example: if the list is [2,7,11,15] and the target is 9, then the answer would be [0,1] because 2(at index 0) plus 7(at index 1) equals 9.

//This is not a better solution, we will make it better in the upcoming videos!
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
const res = twoSum([2, 7, 11, 15], 9);
const restwo = twoSum([2, 3, 4, 5, 6, 7, 8, 9], 15);
console.log(res); // output: [0,1]
console.log(restwo); //output: [4,7]
