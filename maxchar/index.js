// --- Directions
// Write a program that returns the character that is used most 
// --- Example
//   maxChar(abcdeccccfff);

const maxChar = (str) => {
    const charObj = {};
    let maxCount = 0;
    let maxCharacter = '';
    for (let char of str) {
        charObj[char] = charObj[char] + 1 || 1;
    }
    for (let char in charObj) {
        if (charObj[char] > maxCount) {
            maxCount = charObj[char];
            maxCharacter = char;
        }
    }
    return maxCharacter;
};

export default maxChar;