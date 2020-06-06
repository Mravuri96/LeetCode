// Given an array arr of integers, check if there exists two integers N and M
//such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
// Example 2:

// Input: arr = [7,1,14,11]
// Output: true
// Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
// Example 3:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: In this case does not exist N and M, such that N = 2 * M.

// Constraints:

// 2 <= arr.length <= 500
// -10^3 <= arr[i] <= 10^3
const arr = [7, 1, 14, 11];
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
  if (arr.length <= 1) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && arr.indexOf(0) !== i) return true;
    if (arr.includes(arr[i] * 2) && arr[i] !== 0) return true;
  }
  return false;
};

console.info(checkIfExist(arr));