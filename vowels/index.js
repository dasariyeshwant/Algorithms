// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1
// const vowels = (str) => {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let totalVowels = 0;
//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       totalVowels++;
//     }
//   }
//   return totalVowels;
// };

// Solution 2
const vowels  = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};
export default vowels;