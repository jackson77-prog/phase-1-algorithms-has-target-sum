function hasTargetSum(array, target) {
  // Algorithm
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
The initial solution has a time complexity of O(n^2) because of the nested loops. 
An optimization could involve using a data structure like a set to keep track of the numbers we've seen so far, reducing the time complexity to O(n). Time Complexity: O(n^2) (for the initial solution), O(n) for an optimized solution. 
Space Complexity: O(1) (for the initial solution), O(n) for an optimized solution (to store the set). 
The tradeoff involves the time complexity versus the space complexity. The optimized solution sacrifices a bit of space to achieve better time complexity. 
If memory is a critical concern, you might stick with the initial solution; otherwise, the optimized solution is generally preferred.
*/

/* 
  Pseudocode:
  Function hasTargetSum(array, target):
      For each number x in array:
          For each number y in array (excluding x):
              If x + y equals target:
                  Return true
      Return false
*/

/*
  Written Explanation:
  The function iterates through each element in the array and checks whether there exists another element in the array such that their sum is equal to the target. This is achieved using nested loops, resulting in a time complexity of O(n^2), where 'n' is the length of the array.
*/

// run `node index.js` to view these console logs
if (require.main === module) {
  // some custom tests
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

