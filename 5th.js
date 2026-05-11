
let arr = [1, 2, 1, 2, 3, 2, 1];

let unique = [...new Set(arr)];

console.log(unique);

let nums = [1, 2, 1, 2, 3, 2, 1];

nums.sort((a,b) => a-b);

let j = 0;

for (let i = 1; i < nums.length; i++) {

    if(nums[i] !== nums[j]){
        j++;
        nums[j] = nums[i];
    }
}

console.log(nums.slice(0,j+1));