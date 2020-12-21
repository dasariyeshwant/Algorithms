// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution 1
// const pyramid = (n) => {
//   const numberOfCols = (2*n) - 1;
//   const midpoint = Math.floor(numberOfCols/2);
//   for (let row = 0; row < n; row++) {
//     let rowStep = '';
//     for (let col = 0; col < numberOfCols; col++) {
//       if ((midpoint - row <= col) && (midpoint + row >= col)) {
//         rowStep += '#';
//       } else {
//         rowStep += ' ';
//       }
//     }
//     console.log(rowStep);
//   }
// };

// Solution 2 - Recursive method
const pyramid = (n, row = 0, col = 0, stair = '') => {
  if (n === row) {
    return;
  }
  const stairsLength = (2 * n) - 1;
  const midpoint = Math.floor(stairsLength/2);
  if (stairsLength === stair.length) {
    console.log(stair);
    return pyramid(n, row + 1);
  }
  if (midpoint - row <= col && midpoint + row >= col) {
    stair += '#';
  } else {
    stair += ' ';
  }
  return pyramid(n, row, col + 1, stair);
};
export default pyramid;