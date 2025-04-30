// Array Chunk: write a function that takes an array and a chunk size as input. The function should return a new array where the original array is split into chunks of the specified size. Example: chunk([1,2,3,4,5,6,7,8],3) = [[1,2,3], [4, 5,6,], [7,8]]

//Algorithms:
//1.create an empty array to hold the chunks
//2. Set a starting index to keep track of where we are in the original array.
//3. Loop through the original array as long as the index hasn't reached the end.
//4. Extract a chunk of the desired size from the original array
//5. add the extracted chunk to the 'chunked' array.
//6. move the index forward by the chunk size to get to the next chunk
//7. Return the final array of chunks

const chunk = (arr, size) => {
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    const chunk = arr.slice(index, index + size);
    console.log("---------", chunk);
    chunked.push(chunk);
    index = index + size;
  }
  return chunked;
};
console.log(chunk([1, 2, 3, 4, 5, 6, 76, 7, 8], 3));
