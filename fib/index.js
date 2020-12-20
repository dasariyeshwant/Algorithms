
// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 1
// const fib = (n) => {
//   const series = [0, 1];
//   for(let i = 1; i <= n; i++) {
//     series.push(series[series.length - 1] + series[series.length - 2]);
//   }
//   return series[n];
// };

// Solution 2
const slowFib = (n) => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib (n - 2);
};

// Memoize the fib
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
};
const fib = memoize(slowFib);


export default fib;
