// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 1
// const steps = (n) => {
//   for (let row = 1; row <= n; row++) {
//     let rowStep = '';
//     for (let col = 1; col <= n; col++) {
//       if (col <= row) {
//         rowStep += '#';
//       } else {
//         rowStep += ' ';
//       }
//     }
//     console.log(rowStep);
//   }
// };

// Solution 2
const steps = (n) => {
  for (let row = 0; row < n; row++) {
    let rowStep = Array(n).fill('#', 0);
    rowStep = rowStep.fill(' ', row + 1, n);
    console.log(rowStep.join(''));
  }
};
export default steps;