// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Solution 1
// const anagrams = (str1, str2) => {
//   if (!str1 || !str2) {
//     return false;
//   }
//   return cleanUpString(str1) === cleanUpString(str2);
// };
// const cleanUpString = (str) => {
//   return str
//     .replace(/[^\w]/g, "")
//     .split('')
//     .sort()
//     .join('');
// };

// Solution 2
const anagrams = (str1, str2) => {
  const charMap1 = buildCharMap(str1);
  const charMap2 = buildCharMap(str2);
  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false;
  }
  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }
  return true;
};
const buildCharMap = (str) => {
  const charObj = str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split('')
    .reduce((acc, curr) => ({
      ...acc,
      [curr]: acc[curr] + 1 || 1
  }), {});
  return charObj;
};
export default anagrams;