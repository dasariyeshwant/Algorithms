// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution
// const chunk = (arr, n) => {
//   const finalArr = [];
//   let smallArr = [];
//   arr.forEach((element) => {
//     if (smallArr.length !== n) {
//       smallArr.push(element);
//     } else if(smallArr.length === n) {
//       finalArr.push(smallArr);
//       smallArr = [element];
//     }
//   });
//   finalArr.push(smallArr);
//   return finalArr;
// };

// Solution 2
// const chunk = (arr, n) => {
//   const chunked = [];
//   let index = 0;
//   while(index < arr.length) {
//     chunked.push(arr.slice(index, index + n));
//     index += n;
//   }
//   return chunked;
// };

// Solution 3
const chunk = (arr, size) => {
  const chunked = [];
  for (let element of arr) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
};
export default chunk;