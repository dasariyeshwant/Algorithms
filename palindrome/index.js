// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// const palindrome = (str) => {
//   const reversedStr = str
//     .split('')
//     .reverse()
//     .join('');
//   return str === reversedStr;
// };

// Solution 2
// const palindrome = (str) => {
//   return str.split('')
//     .every((char, index) => char === str[str.length - index - 1]);
// };

// Solution 3
const palindrome = (str) => {
  const reversedStr = str
    .split('')
    .reduce((acc, curr) => curr + acc, '');
  return str === reversedStr;
};
export default palindrome;