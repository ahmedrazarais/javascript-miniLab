// Write a function called maxConsecutiveOnes that takes an array of 0s and 1s as input and returns the maximum number of consecutive 1s in the array.

// For example:

// maxConsecutiveOnes([1,1,0,1,1,1]) should return 3 because the longest consecutive sequence of 1s is 1,1,1.
// maxConsecutiveOnes([1,0,1,1,0,1]) should return 2 because the longest consecutive sequence of 1s is 1,1.
// Write the maxConsecutiveOnes function to achieve this behavior.

function maxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output: 2
