// Solution 1
// const capitalize = (str) => {
//     if (!str) {
//         return null;
//     }
//     const strArray = str.split(' ');
//     let finalStr = '';
//     for (let word of strArray) {
//         if (!finalStr) {
//             finalStr += word[0].toUpperCase() + word.split('').slice(1).join('');
//         } else {
//             finalStr += ' ' + word[0].toUpperCase() + word.split('').slice(1).join('');
//         }
//     }
//     return finalStr;
// };

// Solution 2
// const capitalize = (str) => {
//     if (!str) {
//         return null;
//     }
//     const words = [];
//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(' ');
// };

//Solution 3
const capitalize = (str) => {
    if (!str) {
        return null;
    }
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
};
export default capitalize;