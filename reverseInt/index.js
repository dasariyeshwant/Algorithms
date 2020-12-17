// Solution 1
// const reverseInt = (number) => {
//     const sign = Math.sign(number);
//     if (sign === -1) {
//         return sign * parseInt(number
//             .toString()
//             .split('')
//             .slice(1)
//             .reverse()
//             .join(''));
//     }
//     return parseInt(number
//         .toString()
//         .split('')
//         .reverse()
//         .join(''));
// };

// Solution 2
const reverseInt = (number) => {
    const reversed = number
        .toString()
        .split('')
        .reverse()
        .join('');
    return parseInt(reversed) * Math.sign(number);
}
export default reverseInt;