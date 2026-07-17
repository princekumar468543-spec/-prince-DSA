let nums = [1, 12, -5, -6, 50, 3];
let k = 4;

 var findMaxAverage = function (nums, k) {

    let sum = 0;

    // First window
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxSum = sum;

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k;
};

console.log(maxAverage)