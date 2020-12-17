// Solution 1
// const reverse = (str) => {
//     return str.split("").reverse().join("");
// }

// Solution 2
const reverse = (str) => {
    let reversedStr = '';
    for (let char of str) {
        reversedStr = char + reversedStr;
    }
    return reversedStr;
};
export default reverse;