// Given an array A of integers, return true if and only if it is a valid mountain array.

// Recall that A is a mountain array if and only if:

// A.length >= 3
// There exists some i with 0 < i < A.length - 1 such that:
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[A.length - 1]

//https://assets.leetcode.com/uploads/2019/10/20/hint_valid_mountain_array.png

// Example 1:

// Input: [2,1]
// Output: false
// Example 2:

// Input: [3,5,5]
// Output: false
// Example 3:

// Input: [0,3,2,1]
// Output: true

// Note:

// 0 <= A.length <= 10000
// 0 <= A[i] <= 10000

/**
 * @param {number[]} A
 * @return {boolean}
 */

const validMountainArray = function (A) {
  if (A.length <= 2) return false;

  const _maxVal = Math.max(...A),
    _indexOfMax = A.indexOf(_maxVal);

  if (_indexOfMax === A.length - 1 || _indexOfMax === 0) return false;
 
  for (let i = 0; i < _indexOfMax; i++) {
    if (_indexOfMax !== 0 && A[i] !== _maxVal) {
      if (A[i] === A[i + 1] || A[i] >= A[i + 1]) return false;
    }
  }

  for (let _i = _indexOfMax; _i < A.length; _i++) {
    if (
      A.length - 1 - _indexOfMax !== 0 && A[_i + 1] !== undefined
    ) {
      if (
        A[_i] <= A[_i + 1]
      ) {
        return false;
      }
    }
  }

  return true;
};

console.time("log");
console.log(validMountainArray([0, 3, 2, 1]));
console.timeEnd("log");
