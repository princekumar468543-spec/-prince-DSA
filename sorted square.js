let nums = [-4, -3, -1, 0, 2, 3];

function square(nums) {

    let n = nums.length;

    let left = 0;
    let right = n - 1;

    let pos = n - 1;

    let result = new Array(n);

    while (left <= right) {

        let leftsquare = nums[left] * nums[left];
        let rightsquare = nums[right] * nums[right];

        if (leftsquare > rightsquare) {

            result[pos] = leftsquare;
            left++;

        } else {

            result[pos] = rightsquare;
            right--;
        }

        pos--;
    }

    return result;
}

console.log(square(nums));